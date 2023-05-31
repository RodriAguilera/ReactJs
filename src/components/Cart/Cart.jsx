import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    return (
        <div className="my-5 text-center">
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
                        <p>Subotal: {item.cantidad * item.precio}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt/></button></Col>
        <Col  className="text-center justify-content-md-center my-5" >
          <div>
                <h3>TOTAL: ${totalCompra()}</h3>
                <hr/>
                <button onClick={emptyCart} className="btn btn-outline-danger">Vaciar carrito</button>
            </div>
        </Col>
      </Row>

                    </div>
                ))
            }

           
        </div>
    )
}

export default Cart