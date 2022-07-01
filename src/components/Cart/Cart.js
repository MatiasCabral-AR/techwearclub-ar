import './Cart.css'
import {Container} from 'react-bootstrap'
import CartPayment from '../CartPayment/CartPayment';
import CartContent from '../CartContent/CartContent';
// Imports to use all cart data and features
import { useContext } from "react";
import CartContext from "../../context/CartContext";
// Import Link from router to go Back or go to Home
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart} = useContext(CartContext)
    return(
        <Container>
            <p className='cart-title f-futurismL text-center'>Carrito</p>
            <section className='cart mx-auto'>
                {cart.length === 0  // If there is nothing on cart. Show an alert and a Go-Back Button
                ? <div className='d-flex w-100 justify-content-center flex-column bg-dark p-3'>
                    <p className='text-center text-light'>No hay productos en el Carrito</p>
                    <Link to='/' className='text-center'><button className='card-button shrink-border mx-auto'>Volver al inicio</button></Link>
                  </div>
                : <>
                    <div className='cart-details d-flex flex-column'>
                        <hr/>
                        <CartContent/> 
                    </div>
                    <CartPayment/>
                  </>}
            </section>
        </Container>
    )
}

export default Cart
