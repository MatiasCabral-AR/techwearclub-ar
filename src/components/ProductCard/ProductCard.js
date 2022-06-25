import './ProductCard.css'
import {Link} from 'react-router-dom'
import ProductCount from '../ProductCount/ProductCount'

const ProductCard = ({props}) => {
    let {id, name, price, src1, discount, stock, cant} = props
    return(
        <div className="product-card">
            <img className="product-img" src={src1} alt=""/>
            <div className="product-detail">
                <p className="name">{name}</p>
                {discount > 0 
                ? <div><p className="price text-decoration-line-through">${price}</p><p className="price">${(price - (price*discount)/100)}</p></div>
                : <p className="price">${price}</p>}
                <div class="product-buttons">
                    <Link className="cart-link" to={`/product/${id}`}><Button className="cart-button">Ver producto</Button></Link>
                    <ProductCount props={props}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard