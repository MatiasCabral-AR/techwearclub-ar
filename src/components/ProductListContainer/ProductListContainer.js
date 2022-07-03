import {useParams} from 'react-router-dom'
import Loader from "../Loader/Loader";
import ErrorRender from "../ErrorRender/ErrorRender";
import Header from '../Header/Header'
import ProductList from "../ProductList/ProductList";
import { getProducts } from "../../firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";

// ProductListContainer receives as props a default title to show on its Header
const ProductListContainer = ({title}) => {

    const {category} = useParams() // Getting category from URL
    const {load, data} = useFirestore(() => getProducts(category), [category], 2000) // Getting load state and fetching products

    let header = title ? title : `${category}` // Setting title to render

    // Conditional render Loader or ProductList based on load state
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
                {data  
                    ? <ProductList products={data}/> 
                    :   <>
                        <ErrorRender error='Error al cargar los productos. Por favor recarga la pagina.'></ErrorRender>
                        </>
                }
            </section>
        </>
    )
}

export default ProductListContainer

