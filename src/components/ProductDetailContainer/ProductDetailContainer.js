import Loader from "../Loader/Loader";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProduct } from "../../firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";
// Importing useParams to get Browser URL
import {useParams} from 'react-router-dom';
import ErrorRender from "../ErrorRender/ErrorRender";


const ProductDetailContainer = () => {
    const {id} = useParams() // Getting id from URL
    const {load, data} = useFirestore(() => getProduct(id), id, 2000) // Getting load state and fetching product

    // Conditional render Loader or ProductDetail based on load
    if(load){
        return(
            <section className="d-flex justify-content-center align-items-center">
                <Loader/>
            </section>
        )
    }
    return(
        <section className='d-flex flex-column'>
            <div className="d-flex justify-content-center">{data ? <ProductDetail product={data}/> : <ErrorRender error='Error al cargar el producto. Por favor recarga la pagina.'></ErrorRender>}</div>
        </section>
    )
}

export default ProductDetailContainer