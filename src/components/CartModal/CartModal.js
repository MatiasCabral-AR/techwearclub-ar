import { useState } from "react";
// Import bootstrap resources for Modal
import { Modal, Button } from "react-bootstrap";
// Import Formik Form component ClientForm
import ClientForm from "../ClientForm/ClientForm";


const CartModal = () =>{
    const [show , setShow] = useState(false) // useState to show Modal
    const handleShow = () => setShow(true) // Open Modal function
    const handleClose = () => (setShow(false)) // Close Modal function
    
    return (
        <>
            <button className='cart-button cart-button-black shrink-border shrink-border-black' onClick={handleShow}>Comprar</button>
            {/* Bootstrap Modal */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-dark' closeButton>
                    <Modal.Title className='text-light'>Por favor complete los siguientes datos.</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <ClientForm close={handleClose}/> {/* Formik Form */}
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CartModal
