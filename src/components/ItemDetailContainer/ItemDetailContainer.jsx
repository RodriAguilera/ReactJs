import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../Firebase/config'
import "../MainScss/MainScss.css"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true)

        // 1.- armo la referencia (sync)
        const docRef = doc(db, "Productos", itemId)
        // 2.- llamo a la ref (async)
        getDoc(docRef)
            .then((doc) => {
                const _item = {
                    id: doc.id,
                    ...doc.data()
                }

                setItem(_item)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return (
        <div className="body2">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}
export default ItemDetailContainer