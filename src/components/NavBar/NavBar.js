import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import CartLogo from '../CartLogo/CartLogo'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <Navbar className="d-flex flex-column mb-3 fullnav" key='lg' expand='lg'>
        <Container fluid className='d-flex justify-content-center'>
          {/* Link a Home */}
          <Link to='/' className='text-decoration-none'><Navbar.Brand as={'div'} className='f-futurism d-none d-lg-inline'>TechWearClub AR</Navbar.Brand></Link>
        </Container>
        <Container fluid >
          <Link to='/' className='text-decoration-none'><Navbar.Brand as={'div'} className='f-futurism d-lg-none d-inline '>TechWearClub AR</Navbar.Brand></Link>
          {/* Link a Cart (Contiene CartLogo)*/}
          <Link to='/cart' className='ms-auto d-lg-none text-dark text-decoration-none'><CartLogo/></Link>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg '/>
          <Navbar.Offcanvas id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="top" >
            {/* Offcanvas desplegable, utilizado en pantallas moviles para mostrar los links del NavBar */}
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='f-futurism mx-auto' id='offcanvasNavbarLabel-expand-lg'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offCanvasBody'>
              {/* Links de NavBar y de Offcanvas */}
              <Nav className="justify-content-center flex-grow-1 pb-1">
                <NavLink to='/' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none text-dark f-futurismL px-3 underline'}>Home</NavLink>
                {}
                <NavLink to='/category/Sale' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center navLink'}>🔥Sale🔥</NavLink>
                <NavLink to='/category/Buzo' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center navLink'}>Buzos</NavLink>
                <NavLink to='/category/Remera' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center navLink'}>Remeras</NavLink>
                <NavLink to='/category/Pantalon' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center navLink'}>Pantalones</NavLink>
                <NavLink to='/category/Campera' className={({isActive}) => isActive ? 'd-none' : 'text-decoration-none f-futurismL text-dark px-3 underline text-center navLink'}>Camperas</NavLink>
                <Link to='/cart' className='position-absolute end-0 align-items-center justify-content-center d-none d-lg-flex text-dark text-decoration-none'><CartLogo/></Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;