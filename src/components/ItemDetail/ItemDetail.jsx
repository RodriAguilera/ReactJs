import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"





const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad,
            
        })
    }


    return (
        <div className="text-center">
            <h1>{item.nombre}</h1>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria: {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <p><strong>Subtotal: ${item.precio * cantidad}</strong></p>

        
            <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                stock={item.stock}
                agregar={handleAgregar}
            />
        </div>
    )
}
export default ItemDetail