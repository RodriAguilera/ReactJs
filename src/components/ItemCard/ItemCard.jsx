import { Link } from "react-router-dom"
import "../itemListContainer/ItemListContainer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Height } from "@mui/icons-material";

const ItemCard = ({item}) => {

        return (
         
            <Card className="m-4 p-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img}  style={{ width: '270px' }}/>
              <Card.Body>
                <Card.Title> <h1> {item.nombre} </h1></Card.Title>
                <Card.Text>
                {item.description}
                <p><strong>Precio: ${item.precio}</strong></p>
                <p>Stock: {item.stock}</p>
                </Card.Text>
                <Link to={`/detail/${item.id}`} className='btn btn-outline-primary'>Ver más</Link>
              </Card.Body>
            </Card>
          
          );
        

}

export default ItemCard