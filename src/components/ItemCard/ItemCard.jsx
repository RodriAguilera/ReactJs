import { Link } from "react-router-dom"
import "../itemListContainer/ItemListContainer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({item}) => {

        return (
         
            <Card className="m-4 p-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title> <h2> {item.nombre} </h2></Card.Title>
                <Card.Text>
                {item.description}
                <p><strong>Precio: ${item.precio}</strong></p>
                <p>Stock: {item.stock}</p>
                </Card.Text>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
              </Card.Body>
            </Card>
          
          );
        

}

export default ItemCard