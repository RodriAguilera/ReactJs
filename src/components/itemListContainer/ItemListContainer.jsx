import { useEffect } from 'react'
import "../MainScss/MainScss.css"
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/config'

export const ItemListContainer = () => {
    const [Productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- Armar una referencia (sync)
        const productosRef = collection(db, "Productos")
        const q = categoryId
                    ? query(productosRef, where("categoria", "==", categoryId))
                    : productosRef
        // 2.- Consumir esa referencia (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <div className='body'>
        
            {loading 
                ? <h2>Cargando..</h2>
                : <ItemList items={Productos}/>
            }
       </div>
    )}