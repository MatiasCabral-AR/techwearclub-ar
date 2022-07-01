import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartContent = () => {
    const {cart, removeFromCart} = useContext(CartContext) // Get cart and removeFromCart function from CartContext

    return(
        cart.map(product => 
            <div key={product.id} className="cart-product">
                <span className="cart-product-img">
                    <img src={product.src1}alt="Imagen de Producto"/>
                </span>
                <div className="cart-product-info">
                    <p className="cart-product-info-name">{product.name}</p>
                    <p className="cart-product-info-unitPrize">${product.price}</p>
                </div>
                <div className="cart-product-quantity">
                    <p className="cart-product-quantity-title">Cantidad de Productos</p>
                    <p className="cart-product-quantity-title">{product.cant}</p>
                </div>
                <div className="cart-product-price">
                    <p>Total Producto</p>
                    <p className="cart-product-price-total">${(product.price*product.cant)}</p>
                </div>
                <div className="cart-product-buttons">
                    <button className="cart-button cart-button-black shrink-border shrink-border-black" onClick={() => {removeFromCart(product.id)}}>Borrar Producto</button>
                </div>
            </div>
            )
    )
}

export default CartContent