
import './App.css'
import Botonera from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Promos from './components/Promociones/Promociones';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Datos from './components/Contacto/Contacto';
import Inicio from "./components/Inicio/Inicio"


function App() {


  return (

   <BrowserRouter>
    <CartProvider>
    <Botonera/>

    <Routes>

  <Route path='/productos' element = { <ItemListContainer/> }/>
   <Route path='/productos/:categoryId' element = { <ItemListContainer/> }/>
   <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
   <Route path='*' element = { <Navigate to={"/inicio"}/> }/>
   <Route path='/promociones' element = { <Promos/> }/>
   <Route path='/contacto' element = { <Datos/> }/>
   <Route path='/inicio' element = {<Inicio/>}/>
   <Route path='/cart' element={ <Cart/> }/>
   
   </Routes>

  </CartProvider>

     </BrowserRouter>
  )
}

export default App
