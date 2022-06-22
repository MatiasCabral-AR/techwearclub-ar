import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer title='Nuestros Productos'/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>} />
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h1 className='text-center text-warning'>Pagina no encontrada</h1>}/>
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
