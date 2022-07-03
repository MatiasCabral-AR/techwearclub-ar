import { createContext, useState } from "react";
// Importing Toastify to alert if product was added to cart
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    // Function to check if a product is in the cart
    const productCheck = (product) => {
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === product.id){
                return false
            }
        }
        return true
    }

    // Function add to cart
    const addToCart = (product, cant, cart) =>{
        if(productCheck(product)){ // If product is not in cart ...

            product.cant = cant // Setting the quantity selected in product.cant attribute
            if(product.discount > 0){
                product.price = product.price - (product.price * product.discount) / 100 // Setting product final price before sending to cart
            }
            setCart([...cart, product]) 
            // Fire toast to notify
            toast.success('Producto Agregado al carrito', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }else{
            let totalQuantity = cart.find(element => element.id === product.id).cant + cant // Store the quantity of a product already on cart and the quantity selected to add 
            if(totalQuantity > product.stock){
                // If quantity selected is more than actual stock. Return an alert
                toast.error(`Error!, El stock es de : ${product.stock}. Chequea el Carrito y vuelve a intentar`, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    });
            }else{
                let productIndex = cart.findIndex((element) => element.id === product.id) // Search for product inside cart
                cart[productIndex].cant = totalQuantity // Update product.cant
                // Fire toast to notify
                toast.success(`${product.name} actualizado !`, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    });
                
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

    // Function remove certain items from cart
    const clearOutOfStock = (outOfStock) => {
        outOfStock.forEach( productOutOfStock => {
            cart.filter( product => product.id !== productOutOfStock.id)
        })
        return cart
    }



    return(
        <CartContext.Provider value={{cart, setCart, addToCart, clearCart, removeFromCart, totalCart, clearOutOfStock}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext