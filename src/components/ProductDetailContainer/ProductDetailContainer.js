import { useState, useEffect, React } from "react";
import Loader from "../Loader/Loader";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProduct } from "../../firebase/firestore";
// Importing useParams to get Browser URL
import {useParams} from 'react-router-dom';
import ErrorRender from "../ErrorRender/ErrorRender";


const ProductDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        setTimeout(() =>{
            getProduct(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                setProduct(error)
            })
            .finally(() => {
                setLoad(false)
            }) // Setting loader in false to initialize render 
            }, 2500)
    }, [id])

    if(load){
        return(
            <section className="d-flex justify-content-center align-items-center">
                <Loader/>
            </section>
        )
    }
    return(
        <section className='d-flex flex-column'>
            <div className="d-flex justify-content-center">{product ? <ProductDetail product={product}/> : <ErrorRender error='Error al cargar el producto. Por favor recarga la pagina.'></ErrorRender>}</div>
        </section>
    )
}

export default ProductDetailContainer