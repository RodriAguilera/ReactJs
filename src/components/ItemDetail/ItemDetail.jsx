import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)


    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    
    return (


        <Container>
      <Row>
        <Col xs={{ order: 'first' }}> <img src={item.img} alt={item.nombre} width={"300px"}/></Col>
        <Col xs className="text-center justify-content-md-center my-5" > <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <h2>Categoria {item.category}</h2>
            <p><strong>Precio: ${item.precio}</strong></p>
            <p> Subtotal: ${item.precio * cantidad}</p></Col>
        <Col xs={{ order: 'last' }}  className="text-center justify-content-md-center my-5" > {
                isInCart(item.id)
                    ? <Link className="btn btn-outline-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        stock={item.stock}
                        agregar={handleAgregar}
                    />
            }</Col>
      </Row>
    </Container>
  );

}
export default ItemDetail