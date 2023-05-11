

import "../itemListContainer/ItemListContainer.css"

const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-4 ms-5 text-center'>
            <h3>{item.nombre}</h3>
            <h3>{item.category}</h3>
            <h4>{item.description}</h4>
            <img src={item.img} alt={item.description} style={{ width: '250px', height: '250px' }}/>
            <p><strong>Precio: ${item.precio}</strong></p>
        </div>
    )
}

export default ItemCard