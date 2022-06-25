import { useState, useContext } from "react";
// Cart Import
import CartContext from "../../context/CartContext";
// Bootstrap Import
import Container from "react-bootstrap/esm/Container";

const ProductCount = (product) => {
    const [cant, setCant] = useState(1)
    const {addToCart} = useContext(CartContext)

    function addCant(){
        if(cant < product.stock){
            setCant(prevCant => prevCant + 1)
        }
    }

    function decCant(){
        if(cant > 1){
            setCant(prevCant => prevCant - 1)
        }
    }

    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            {product.stock > 0
            ?   <>
                    <div className="d-flex justify-content-center align-items-center">
                        <button onClick={decCant}>-</button>
                        <span>{cant}</span>
                        <button onClick={addCant}>+</button>
                    </div>
                    <button onClick={() => addToCart(product, cant)}>Agregar al Carrito</button>
                </>
            : <p>No hay stock de este producto</p>
        }
        </Container>
    )
}

export default ProductCount