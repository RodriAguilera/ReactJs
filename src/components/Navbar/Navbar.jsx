import './Navbar.css'
import logo from '/src/assets/logo.png'
import * as React from 'react';
import { CartWidget } from '/src/components/CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';



export const Navbar =  () =>  {
    return(  
        <header>
            <div className="botonera">
                <nav className="navbar">

                   <Link to="/">
                        <img src={logo} alt="logo MJ rosado" width="100px"/>
                    </Link>
               
                    <ul>
                    <li>
                   <Link to="/"className='links '>Inicio</Link>
                   </li>
                   <li class="nav-item dropdown">
            <Link  to="/productos" class="nav-link dropdown-toggle links" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
            </Link>
            <ul class="dropdown-menu">
            <li><Link  to="/productos/Maquillaje" class="dropdown-item">Maquillaje</Link></li>
            <li><Link  to="/productos/Pestañas" class="dropdown-item" >Pestañas</Link></li>
            <li><Link  to="/productos/Uñas" class="dropdown-item" >Uñas</Link></li>
            <li><Link  to="/productos/Accesorios" class="dropdown-item" >Accesorios</Link></li>
          </ul>
                   
                   </li> 
                   <li>
                   <Link to="/promociones"className='links'>Promociones</Link>
                   </li> 
                   <li>
                   <Link  to="/contacto"className='links'>Contacto</Link>
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
