import './cartwidget.css';
import { FiShoppingCart } from 'react-icons/fi';


export const CartWidget = (qty) => {
    qty = 10
    return (
        <p className='carrito'>
          <FiShoppingCart /> <sup className='widget'>{qty}</sup>
        </p>
    )
}      

