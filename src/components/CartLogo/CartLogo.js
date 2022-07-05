import { useContext } from "react";
import CartContext from "../../context/CartContext";
import './CartLogo.css'

// Component that renders a Shopping Cart logo and a Product quantity number based on the length of the cart array
const CartLogo = () => {
    let quantity = useContext(CartContext).cart.length
    return  (
                <div className="d-flex pe-2 cart-logo">
                    <p className="pe-2 h5">{quantity}</p>
                    <i className='fas fa-shopping-cart fa-2xl me-3 d-flex align-items-center'></i> 
                </div>
            )
}
export default CartLogo