import './Navbar.css'
import logo from '/src/assets/logo.png'
import * as React from 'react';
import { CartWidget } from '/src/components/CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';


//  const Navbar =  () =>  {
//     return(  
//         <header>
//             <div className="botonera">
//                 <nav className="navbar">

//                    <Link to="/">
//                         <img src={logo} alt="logo MJ rosado" width="100px"/>
//                     </Link>
               
//                     <ul>
//                     <li>
//                    <Link to="/"className='links '>Inicio</Link>
//                    </li>
//                    <li class="nav-item dropdown">
//             <Link  to="/productos" className='links'>
//           Productos
//             </Link>
//             <ul class="dropdown-menu">
//             <li><Link  to="/productos/Maquillaje" class="dropdown-item">Maquillaje</Link></li>
//             <li><Link  to="/productos/Pestañas" class="dropdown-item" >Pestañas</Link></li>
//             <li><Link  to="/productos/Uñas" class="dropdown-item" >Uñas</Link></li>
//             <li><Link  to="/productos/Accesorios" class="dropdown-item" >Accesorios</Link></li>
//           </ul>
                   
//                    </li> 
//                    <li>
//                    <Link to="/promociones"className='links'>Promociones</Link>
//                    </li> 
//                    <li>
//                    <Link  to="/contacto"className='links'>Contacto</Link>
//                    </li>
//                    <li className='links'>
//                    <CartWidget/>
//                    </li>
                   
    
              
//                    </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }

// export default Navbar;

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Botonera() {
  return (
    <Navbar className='botonera' expand="lg">
     
        <Navbar.Brand> <Link to="/"><img src={logo} alt="logo MJ rosado" width="100px"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/"className='links '>Inicio</Link></Nav.Link>
            <NavDropdown title="Productos" id="NavDropdown">
              <NavDropdown.Item><Link  to="/productos" className='linksDrop'>
//           Todos los productos
//             </Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link  to="/productos/Maquillaje" className='linksDrop'>Maquillaje</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link  to="/productos/Pestañas" className="linksDrop" >Pestañas</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link  to="/productos/Uñas" className="linksDrop"  >Uñas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link  to="/productos/Accesorios" className="linksDrop"  >Accesorios</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/promociones"className='links'>Promociones</Link></Nav.Link>
            <Nav.Link> <Link  to="/contacto"className='links'>Contacto</Link></Nav.Link>
            <Nav.Link> <li className='links'>
                    <CartWidget/>
                    </li>
            </Nav.Link>
           
           </Nav>
           
        </Navbar.Collapse>
   
    </Navbar>
  );
}

export default Botonera;