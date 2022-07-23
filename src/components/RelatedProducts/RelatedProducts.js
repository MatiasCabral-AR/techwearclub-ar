import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { Carousel, Row, Col } from "react-bootstrap";
import './RelatedProducts.css'


const RelatedProducts = ({product}) => {
    const {id} = useParams()
    const [related, setRelated] = useState([]) // Array of related products (same category as product shown)
    const [sale, setSale] = useState([]) // Array of products on sale
    
    // Function to get a new array of n length and shuffled
    function getMultipleRandom(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
    }
    // useEffect to fetch related and sale products arrays (cannot use useFirestore Custom Hook)
    useEffect(() => {
        getDocs(query(collection(database, 'products'), where('discount' , '>', 0)))
        .then(result => {
            let sale = result.docs.map(doc => {
                return {id : doc.id, ...doc.data()}
            })
            setSale(sale)
        }).finally(
            getDocs(query(collection(database, 'products'), where('category' , '==', product.category)))
            .then(result => {
                let related = result.docs.map(doc => {
                    return {id : doc.id, ...doc.data()}
                })
                setRelated(related)
            })
        )  
    }, [id])
    const randomSale = getMultipleRandom(sale, 2)
    const randomProducts = getMultipleRandom(related, 2)

    return(
        <>
        <p className="display-3 f-futurism text-center">Productos relacionados</p>
        <Row lg={12} className='bg-dark mb-3 pb-3'>
            <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
                <p className="h3 f-futurismL text-center text-light pt-2">Ofertas</p>
                <Carousel className='productCarousel'>
                    {randomSale.map(prod => 
                        <Carousel.Item key={prod.id}>
                            <img
                            className="d-block w-100"
                            src={prod.src1}
                            alt={prod.name}
                            />
                            <Carousel.Caption className="bg-dark">
                                <h5 >{prod.name}</h5>
                                <p >{prod.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Col>
            <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
                <p className="h3 f-futurismL text-center text-light pt-2">Mas {product.category}</p>
                <Carousel className='productCarousel'>
                    {randomProducts.map(prod => 
                        <Carousel.Item key={prod.id}>
                            <img
                            className="d-block w-100"
                            src={prod.src1}
                            alt={prod.name}
                            />
                            <Carousel.Caption className="bg-dark">
                                <h5 >{prod.name}</h5>
                                <p >{prod.price}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Col>
        </Row>
        </>
    )

}

export default RelatedProducts