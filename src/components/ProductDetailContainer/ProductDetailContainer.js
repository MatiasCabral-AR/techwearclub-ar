import Loader from "../Loader/Loader";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProduct, getProducts } from "../../firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";
import Footer from "../Footer/Footer";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
// Importing useParams to get Browser URL
import {useParams} from 'react-router-dom';
import ErrorRender from "../ErrorRender/ErrorRender";


const ProductDetailContainer = () => {
    const {id} = useParams() // Getting id from URL
    const {load, data : product} = useFirestore(() => getProduct(id), [id], 2000) // Getting load state and fetching product

    // Conditional render Loader or ProductDetail based on load
    if(load){
        return(
            <section className="d-flex justify-content-center align-items-center">
                <Loader/>
            </section>
        )
    }
    return(
        <>
            <section className='d-flex flex-column align-items-center'>
                <div className="d-flex justify-content-center mb-3">{product ? <ProductDetail product={product}/> : <ErrorRender error='Error al cargar el producto. Por favor recarga la pagina.'></ErrorRender>}</div>
                <RelatedProducts product={product}/>
                <Footer className='mt-3'/>
            </section>
            
        </>
    )
}

export default ProductDetailContainer