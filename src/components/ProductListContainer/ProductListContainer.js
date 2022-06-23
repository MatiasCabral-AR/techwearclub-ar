import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// Importing Firebase database and methods to process it
import {database} from '../../firebase' // Database
import {getDocs, collection, query, where} from 'firebase/firestore' // Methods
// Importing other Components 
import Loader from "../Loader/Loader";
import ErrorRender from "../ErrorRender/ErrorRender";
import Header from '../Header/Header'
import ProductList from "../ProductList/ProductList";

// ProductListContainer receives as props a default title to show on its Header
const ProductListContainer = ({title}) => {
    const [productsArray, setProducts] = useState([])
    const {category} = useParams()
    // Setting the Loader state on true until all products are fetched
    const [load, setLoad] = useState(true)
    
    // This useEffect change the products Array items depending the value of 'category' and re-render ProductList
    useEffect(() =>{
        setLoad(true)
        // Obtain the collection reference filtered based on 'category'. if category is not defined do not filter anything
        const collectionReference = (category ? 
            (category === 'Sale' ? query(collection(database, 'products'), where('discount' , '>', 0)) 
            : query(collection(database, 'products'), where('category' , '==', category))) 
            : collection(database, 'products'))
        // Getting all products based on collectionReference
        getDocs( collectionReference ).then( result => {
            const products = result.docs.map( doc => {
                return {id : doc.id, ...doc.data()}
            })
            setProducts(products) // Setting products on productsArray state
        }).catch(error => {
            const products = []
        }).finally(() => {setLoad(false)}) // Setting loader state to false
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
                {products.length > 0 
                    ? <ProductList products={productsArray}/> 
                    :   <>
                        <ErrorRender error='Error al cargar los productos. Por favor recarga la pagina.'></ErrorRender>
                        <p className="display-3 text-center w-100">{error}</p>
                        </>
                }
            </section>
        </>
    )
}

export default ProductListContainer

