import { useState } from "react"
import { useEffect } from "react"
import "./ItemListContainer.css"
import {pedirDatos} from "../../../helpers/pedirDatos"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {
    // const { loading, productos } = useProductos()


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
    <div className="text-center m-2">
    {    loading
         ? <h2>Cargando...</h2>
        : <ItemList items={ productos }/>
    }
</div>
)
}