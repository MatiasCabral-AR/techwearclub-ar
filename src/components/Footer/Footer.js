import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap"
import './Footer.css'

const Footer = () => {
    return(
    <footer className="w-100 py-4 flex-shrink-0 bg-dark">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6 ">
                    <h5 className="f-futurism text-white h1">TWC AR</h5>
                    <p className="small text-muted">Bienvenido a Techwearclub, tu mejor selección de ropa técnica y estilo streetwear. 
                    Estamos dedicados a brindarte lo mejor de la ropa técnica y de calle, con un enfoque en el estilo de ropa Tech, el estilo Cyberpunk y la utilidad urbana.</p>
                    <p className="small text-muted mb-0">&copy; Raul Matias Cabral. All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white f-futurismL mb-3 mt-2">Navegar</h5>
                    <div className="d-flex justify-content-between">
                        <ul className="list-unstyled text-muted">
                            <li><Link to='/' className='text-white text-decoration-none'><u>Home</u></Link></li>
                            <li><Link to='/category/Sale' className='text-white text-decoration-none'><u>Sale</u></Link></li>
                            <li><Link to='/category/Buzo' className='text-white text-decoration-none'><u>Buzos</u></Link></li>
                            <li><Link to='/category/Remera' className='text-white text-decoration-none'><u>Remeras</u></Link></li>
                        </ul>
                        <ul className="list-unstyled text-muted ">
                            <li><Link to='/category/Pantalon' className='text-white text-decoration-none'><u>Pantalones</u></Link></li>
                            <li><Link to='/category/Camperas' className='text-white text-decoration-none'><u>Camperas</u></Link></li>
                            <li><Link to='/cart' className='text-white text-decoration-none'><u>Carrito</u></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex flex-column mx-auto">
                    <h5 className="text-white">Newsletter</h5>
                    <p className="small text-muted">Suscribite a nuestro Newsletter para recibir nuestras noticias y ofertas en todos lados.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Ingresa tu mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                    <div className="d-flex align-items-center">
                        <h5 className="text-light me-2">Seguinos : </h5>
                        <i className="fa-brands fa-whatsapp fa-xl text-light mx-1"></i>
                        <i className="fa-brands fa-facebook fa-xl text-light mx-1"></i>
                        <i className="fa-brands fa-instagram fa-xl text-light mx-1"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer