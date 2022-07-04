import { database } from ".";
import { getDocs, getDoc, doc, collection, query, where } from "firebase/firestore";

export const getProducts = (category) => {
    return new Promise((resolve, reject) =>{
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
            resolve(products) // Setting products on productsArray state
        }).catch(() => {
            reject([])
        })
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(database, 'products', id)) // Fetching product from database using id from useParams
            .then( result => {
                const product = { id : result.id , ...result.data()}
                resolve(product)
            })
            .catch(() => reject(false))
    })
}