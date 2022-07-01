import './ProductCard.css'
import {Link} from 'react-router-dom'
import ProductCount from '../ProductCount/ProductCount'

const ProductCard = ({props}) => {
    let {id, name, price, src1, discount} = props
    return(
        <div className="product-card mx-auto">
            <img className="product-img" src={src1} alt=""/>
            <div className="product-detail">
                <p className="name mt-1 text-center">{name}</p>
                {discount > 0 
                ? <div><p className="price text-decoration-line-through">${price}</p><p className="price">${(price - (price*discount)/100)}</p></div>
                : <p className="price">${price}</p>}
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <ProductCount product={props}/>
                    <Link className="cart-link mb-1" to={`/product/${id}`}><button className="shrink-border">Ver producto</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard