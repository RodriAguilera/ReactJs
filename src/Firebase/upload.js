import MOCK_DATA from '../../Data/MOCK_DATA' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config'

MOCK_DATA.forEach((el) => delete el.id)

const productosRef = collection(db, 'Productos')

MOCK_DATA.forEach((el) => {
    addDoc(productosRef, el)
})