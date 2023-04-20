
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';



function App() {


  return (
    <div>
    <Navbar/>
   <ItemListContainer Item={"Primer Item"}/>
    </div>
  )
}

export default App
