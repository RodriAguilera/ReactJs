
import { useContext } from "react"
 import { CartContext } from "../Context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import "../MainScss/MainScss.css"

const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className="body2 text-center">
                <h1>Tu carrito está vacío</h1>
                <hr/>
                <p>Volver a inicio</p>
                <Link to="/" className="btn btn-outline-primary">Ver productos</Link>
            </div>
        )
    }
    return (
        <div className="body2 text-center">
            <h1>Tu compra</h1>
            <hr/>
            {
                cart.map((item) => (
        <div key={item.id}>
        <Row>
        <Col>
        <img src={item.img} width={'300px'}/>
        </Col>
        <Col  className="text-center justify-content-md-center my-5" ><h1>{item.nombre}</h1>
                        
                        <h2>Cantidad: {item.cantidad}</h2>
                        <p>Subotal: ${item.cantidad * item.precio}</p>
                        <Button variant="outlined" color="error" onClick={() => removeItem(item.id)} size="large"><FaTrashAlt/></Button></Col>
                        <hr/>
                        
      </Row>

                    </div>
                ))
            }

            
        <div>
<h3> <strong> TOTAL: ${totalCompra()}</strong></h3>
<hr/>
<button onClick={emptyCart} className="btn btn-outline-danger mx-2">Vaciar carrito</button>
<Link to="/checkout" className="btn btn-outline-success">Terminar mi compra</Link>
</div>

           
        </div>


    )
}

export default Cart
