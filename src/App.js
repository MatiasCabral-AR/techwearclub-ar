import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ErrorRender from './components/ErrorRender/ErrorRender'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'


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
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<ErrorRender error='Pagina no encontrada'/>}/>
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
