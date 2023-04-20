import './Navbar.css'
import logo from '../Navbar/img/logo.png'
import * as React from 'react';
import Button from '@mui/material/Button';
import { CartWidget } from './CartWidget'



export const Navbar =  () =>  {
    return(  
        <header>
            <div className="botonera">
                <nav className="navbar">

                   <a href="#">
                        <img src={logo} alt="logo MJ rosado" width="100px"/>
                    </a>
               
                    <ul>
                    <li>
                   <a className='links ' href="#">Inicio</a>
                   </li>
                   <li>
                   <a className='links' href="#">Productos</a>
                   </li> 
                   <li>
                   <a className='links' href="#">Promociones</a>
                   </li> 
                   <li>
                   <a className='links' href="#">Contacto</a>
                   </li>
                   <li className='links'>
                   <CartWidget/>
                   </li>
                   
    
              
                   </ul>
                </nav>
            </div>
        </header>
    )
}
