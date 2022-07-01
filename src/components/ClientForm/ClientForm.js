import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext'
import {addDoc, collection, documentId, getDocs, query, where, writeBatch} from 'firebase/firestore'
import {database} from '../../firebase'
import Swal from "sweetalert2";

const ClientForm = ({close}) => {
    const navigate = useNavigate(); // Using useNavigate hook to redirect
    const {cart, setCart, clearOutOfStock, clearCart, totalCart} = useContext(CartContext) // Import Cart and functions in CartContext
    const productIds = cart.map(prod => prod.id) // Gather all product id inside cart
    const batch = writeBatch(database) // Setting batch to update multiple values on database
    const outOfStock = [] // Out of Stock products array 
    // Default values inside input tags
    const initialValues = { 
        name: '',
        email: '',
        number: ''
    }
    // Handling validation of input fields
    const validate = values => { 
        let errors = {} // Empty object of errors to display

        if(!values.name){
            errors.name = '*Requerido'
        }
        if(!values.email){
            errors.email = '*Requerido'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){ // Regular Expression to check if a mail is well written
            errors.email = 'Formato de e-mail invalido'
        }
        if(!values.number){
            errors.number = '*Requerido'
        }else if(!/^[0-9]{1,}$/i.test(values.number)){ // Regular Expression to check if 'number' <input> ARE numbers
            errors.number = 'Por favor solo ingrese numeros'
        }
        return errors
    }

    // Method to execute when Aceptar button is clicked

    // Formik Form
    const form = useFormik({ 
        initialValues,
        onSubmit : values => {
            const productsReference = collection(database, 'products') // Products array reference
            const ordersReference = collection(database, 'orders') // Orders array reference
            getDocs(query(productsReference, where(documentId(), 'in', productIds))) // Get all products from database that matches with cart products using Id's
                .then(response => {
                    // For every product fetched before ...
                    response.docs.forEach( doc => {
                        const dataDoc = doc.data() // Parsing element to use it as an object
                        const productQuantity = cart.find(prod => prod.id === doc.id)?.cant // Get cart product quantity
                        if(dataDoc.stock >= productQuantity){ // If stock is available. Update batch 
                            batch.update(doc.ref, {stock : dataDoc.stock - productQuantity})
                        }
                        else{ // If stock is not available, update OutofStock array
                            outOfStock.push({id : doc.id, ...dataDoc})
                        }
                    })
                })
                .then(() => {
                    if(outOfStock.length === 0){ // If all products are available. Return //? See video to explain
                        const order = { data : values, products : cart, total : totalCart()}
                        return addDoc(ordersReference, order)
                    }
                    else{ // If at least 1 product is not avilable, return a Promise rejected
                        return Promise.reject({type : 'out_of_stock' , products : outOfStock})
                    }
                })
                .then(({id}) => { // If promise is fulfilled ...
                    batch.commit() // Commit all changes stored in batch.update
                    Swal.fire({ // Fire SweetAlert 
                        icon: 'success',
                        title: 'Orden Enviada',
                        text: `Su orden con id : ${id}, ha sido generada. Pronto uno de nuestros asesores comerciales se comunicara con usted`
                    })
                    navigate('/', {replace : true}) // Go back to home
                    clearCart()
                })
                .catch( error => { // If Promise is rejected ...
                    if(error.type === 'out_of_stock'){
                        Swal.fire({ // Fire SweetAlert
                            icon: 'error',
                            title: 'Oops ...',
                            text: `Algunos de nuestros productos se quedaron sin stock mientras usted realizaba la compra, hemos actualizado el carrito con los productos que aun tenemos en stock.`
                          })
                        setCart(clearOutOfStock(cart, outOfStock)) // Remove from cart all products out of stock
                        close() // Close Form
                    }
                })
        }
        ,validate
         
    })


    return (
        <form onSubmit={form.handleSubmit}>
                <div className='d-flex flex-column'>
                    <label className='text-light' htmlFor='name'>Nombre : </label>
                    <input className='bg-dark text-light' type="text" id='name' name='name' onChange={form.handleChange} value={form.values.name}/>
                    {form.errors.name 
                        ? (<div><p className='text-center text-danger'>{form.errors.name}</p></div>) 
                        : null
                    }
                </div>
                <hr/>
                <div className='d-flex flex-column'>
                    <label className='text-light' htmlFor='email'>Email</label>
                    <input className='bg-dark text-light' type="email" id='email' name='email' onChange={form.handleChange} value={form.values.email} />
                    {form.errors.email 
                        ? (<div><p className='text-center text-danger'>{form.errors.email}</p></div>)
                        : null
                    }
                </div>
                <hr/>
                <div className='d-flex flex-column'>
                    <label className='text-light' htmlFor='number'>Numero de Telefono : </label>
                    <input className='bg-dark text-light' type="numer" id='number' name='number' onChange={form.handleChange} value={form.values.number}/>
                    {form.errors.number 
                        ? (<div><p className='text-center text-danger'>{form.errors.number}</p></div>) 
                        : null
                    }
                </div>
                <hr/>
                <button className='cart-button w-100' type='submit'>Aceptar</button>
            </form>
    )
}

export default ClientForm;