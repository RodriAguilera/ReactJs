
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Promos from './components/Promociones/Promociones';
import Contacto from './components/Contacto/Contacto';




function App() {


  return (

   <BrowserRouter>
    
    <Navbar/>

    <Routes>

  <Route path='/productos' element = { <ItemListContainer/> }/>
   <Route path='/productos/:categoryId' element = { <ItemListContainer/> }/>
   <Route path='*' element = { <Navigate to={"/inicio"}/> }/>
   <Route path='/promociones' element = { <Promos/> }/>
   <Route path='/contacto' element = { <Contacto/> }/>
   <Route path='/inicio' />
   
   </Routes>
     </BrowserRouter>
  )
}

export default App
