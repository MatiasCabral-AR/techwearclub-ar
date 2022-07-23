import './ProductList.css'
import { Container } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import Footer from '../Footer/Footer';

/* This component render all items inside 'products' mapping it and passing its object properties to a ProductCard component
   then displaying them in a grid layout*/
const ProductList = ({products}) => {
    return(
        <>
            <Container className='productList'>
                {products.map(product => (
                    <ProductCard key={product.id} props={product}/>
                ))}
            </Container>
        </>
    )
}

export default ProductList