import './Navbar.css'
import logo from '/src/assets/logo.png'
import * as React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Botonera() {
  return (
    <Navbar className='botonera' expand="lg" sticky="top">
      
      
     
        <Navbar.Brand> <Link to="/"><img src={logo} alt="logo MJ rosado" width="100px"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/"className='links '>Inicio</Link></Nav.Link>
            <NavDropdown title="Categorías" id="NavDropdown">
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