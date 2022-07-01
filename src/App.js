import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ErrorRender from './components/ErrorRender/ErrorRender'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import Cart from './components/Cart/Cart';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <ToastContainer/>
            <Routes>
              <Route path='/' element={<ProductListContainer title='Nuestros Productos'/>}/>
              <Route path='/category/:category' element={<ProductListContainer/>} />
              <Route path='/product/:id' element={<ProductDetailContainer/>}/>
              <Route path='*' element={<ErrorRender error='Pagina no encontrada'/>}/>
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
