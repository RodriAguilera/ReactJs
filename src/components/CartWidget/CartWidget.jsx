
import { MdOutlineAddShoppingCart } from 'react-icons/Md'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import "./CartWidget.scss"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
       
        <Link to="/cart" id='cart'>
            <MdOutlineAddShoppingCart />
            <span className='p-1 numero'>{totalCantidad()}</span>
        </Link>
    )
}
export default CartWidget