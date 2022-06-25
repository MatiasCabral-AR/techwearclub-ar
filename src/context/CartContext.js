import { createContext, useState } from "react";
// Importing Toastify to alert if product was added to cart
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext()

export function CartContextProvider({children}){
    const [cart, setCart] = useState([])
    
    // Function to check if a product is in the cart
    const productCheck = (product) => {
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === product.id){
                return true
            }
        }
        return false
    }

    // Function add to cart
    const addToCart = (product, cant) =>{
        if(!productCheck(cart, product)){ // If product is not in cart ...
            toast('Producto Agregado al Carrito')
            product.cant = cant // Setting the quantity selected in product.cant attribute
            if(product.discount > 0){
                product.price = product.price - (product.price * product.discount) / 100 // Setting product final price before sending to cart
            }
            setCart([...cart, product])
        }else{
            let totalQuantity = cart.find(element => element.id === product.id).cant + cant // Store the quantity of a product already on cart and the quantity selected to add 
            if(totalQuantity > stock){
                toast(`Error!, El stock es de : ${product.stock}. Chequea el Carrito y vuelve a intentar`) // If quantity selected is more than actual stock. Return an alert
            }else{
                toast('Contenido del Carrito Actualizado')
                let productIndex = cart.findIndex((element) => element.id === checkProduct.id)
                cart[productIndex].cant = totalQuantity // Product quantity updated
            }
        }
    }

    // Function to get the total price of the cart
    const totalCart = () => {
        let total = 0
        cart.forEach(product => {
            total = total + (product.cant * product.price)
        })
        return total
    }

    // Function clear cart
    const clearCart = () => {
        setCart([])
    }

    // Function remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }


    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext