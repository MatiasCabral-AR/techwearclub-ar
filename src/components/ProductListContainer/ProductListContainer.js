import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Loader from "../Loader/Loader";
import ErrorRender from "../ErrorRender/ErrorRender";
import Header from '../Header/Header'
import ProductList from "../ProductList/ProductList";
import { getProducts } from "../../firebase/firestore";

// ProductListContainer receives as props a default title to show on its Header
const ProductListContainer = ({title}) => {
    const [productsArray, setProducts] = useState([])
    const {category} = useParams()
    // Setting the Loader state on true until all products are fetched
    const [load, setLoad] = useState(true)
    
    // This useEffect change the products Array items depending the value of 'category' and re-render ProductList
    useEffect(() =>{
        setLoad(true)
        setTimeout(() => {
            getProducts(category)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                setProducts(error)
            })
            .finally(() => {
                setLoad(false)
            })
        }, 2500)
    }, [category])

    let header = title ? title : `${category}` // Setting title to render

    // Rendering Loader or ProductList based on load state
    if(load){
        return(
            <>
                <Header title={header}/>
                <section className='d-flex justify-content-center align-items-center'>
                    <Loader/>
                </section>
            </>
        )
    }
    return(
        <>
            <Header title={header}/>
            <section className='d-flex justify-content-center align-items-center'>
                {productsArray.length > 0 
                    ? <ProductList products={productsArray}/> 
                    :   <>
                        <ErrorRender error='Error al cargar los productos. Por favor recarga la pagina.'></ErrorRender>
                        </>
                }
            </section>
        </>
    )
}

export default ProductListContainer

