import { useContext } from "react";
import CartContext from "../../context/CartContext";

// Component that renders a Shopping Cart logo and a Product quantity number based on the length of the cart array
const CartLogo = () => {
    let quantity = useContext(CartContext).cart.length
    return  (
                <div>
                    <p className="pe-2">{quantity}</p>
                    <i className='fas fa-shopping-cart fa-2xl me-3'></i> 
                </div>
            )
}
export default CartLogo