import { useEffect, useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartModal from "../CartModal/CartModal";

const CartPayment = () => {
    const {cart, clearCart, totalCart} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        setTotal(totalCart()) // Update total cart when modified
    }, [cart]);

    return(
        <aside className="cart-payment">
            <div className="d-flex justify-content-center">
                <CartModal/>
                <button className="ms-2 cart-button cart-button-black shrink-border shrink-border-black" onClick={() => clearCart()}>Borrar Carrito</button>
            </div>
            <hr/>
            <div className="cart-payment-subTotal">
                <p className="cart-payment-title">Sub Total</p>
                <p className="cart-payment-text">{total}</p>
            </div>
            <div className="cart-payment-shipment">
                <div className="cart-payment-shipment-select">
                    <label htmlFor="shipment">Seleccione metodo de Envio : </label>
                    <select defaultValue={'none'} name="shipment" id="shipment">
                        <option value='none' disabled>Tipos de Envio</option>
                        <option value="pick-up">Retiro en Domicilio</option>
                        <option value="oca">Oca</option>
                        <option value="correo-argentino">Correo Argentino</option>
                        <option value="andreani">Andreani</option>
                    </select>
                </div>
                <div className="cart-payment-shipment-cost">
                    <p className="cart-payment-title">Costo de Envio</p>
                    <p className="cart-payment-text">$ XXX</p>
                </div>
            </div>
            <hr/>
            <div className="cart-payment-total">
                <p className="cart-payment-text">Total a pagar : </p>
                <p className="cart-payment-text">{total}</p>
            </div>
            <hr/>
            <div className="cart-payment-links">
                <p className="cart-payment-text">Metodos de Devolucion</p>
                <p className="cart-payment-text">Informacion Sobre Envios</p>
            </div>
        </aside>
    )
}

export default CartPayment