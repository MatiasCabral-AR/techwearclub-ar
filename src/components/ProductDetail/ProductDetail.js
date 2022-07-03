import {Row, Container, Col} from "react-bootstrap";
import ProductCount from "../ProductCount/ProductCount";
import './ProductDetail.css'
import { useState } from "react";


const ProductDetail = ({product}) => {
    const {id, name, price, discount, src1, src2, src3, src4, description, stock} = product // Destructuring product
    const [image, setImage] = useState(src1) // Initial state for main image
    const newPrice = price - (price * discount) / 100 // New price with discount
    
    return(
        <Container>
            <Col lg={8} md={8} sm={10} xs={12} className='p-5 main-section'>
                <Row className="m-0">
                    <Col lg={4} className='left-side-product-box pb-3'>
                        <img src={image} alt="Foto de producto" />
                        <div className="sub-img">
                            <img src={src1} onClick={()=>setImage(src1)} style={{cursor:'pointer'}} alt="" />
                            <img src={src2} onClick={()=>setImage(src2)} style={{cursor:'pointer'}} alt="" />
                            <img src={src3} onClick={()=>setImage(src3)} style={{cursor:'pointer'}} alt="" />
                            <img src={src4} onClick={()=>setImage(src4)} style={{cursor:'pointer'}} alt="" />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="right-side-pro-detail p-3 m-0">
                            <Row>
                                <Col lg={12}>
                                    <p className="p-0 m-0 fw-bold">{name}</p>
                                    {discount > 0 ? <p className="pb-1 price-pro fw-bold">${newPrice}   <s className="pb-1 d-inline fw-light">${price}</s></p> : <p className="pb-1 price-pro fw-bold">${price}</p>}
                                </Col>
                                <Col lg={12}>
                                    <p className="display-5 fs-5"><i className="fa-solid fa-credit-card"></i> 6 cuotas sin interes de ${Math.floor((price/6)*10)/10}</p>
                                    <p className="display-5 fs-5"><i className="fa-solid fa-money-bill"></i> 10% descuento con Transferencia</p>
                                    <hr className="p-0 m-0"/>
                                </Col>
                                <Col lg={12}>
                                    <h5 className="text-center mt-1">Detalles del Producto</h5>
                                    <div className="d-flex flex-column">
                                        {description.map( desc => <span>- {desc}</span> )} 
                                      </div>
                                    <hr/>
                                </Col>
                                <Col lg={12} className="d-flex justify-content-center">
                                    {stock > 0 ? <ProductCount product={{id, name, price, discount, src1, stock}}/> : <div><hr/><h5>No hay stock de este producto</h5></div>}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Container>
        )
}

export default ProductDetail