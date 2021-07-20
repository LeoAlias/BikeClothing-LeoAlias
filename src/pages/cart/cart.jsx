import './cart.css'
import { CartContext,  } from '../../context/cartcontext'

export const Cart = () =>{
    const  {id, title, price} = cart
    const {removeItem, clear, cart} = CartContext

    return (
        <div>
            <h1>Mi Carrito</h1>
            {Cart.map ((prod) => (
                <div>
                    <p>Id: <span>{id}</span></p>
                    <p>titulo: <span>{title}</span></p>
                    <p>Precio: <span>{price}</span></p>
                    <button onClick={()=> removeItem(prod.item.id)}>Borrar Item</button>
                </div>
              ))}
            <button onClick={() => clear()}>Limpiar Carrito</button>
        </div>
    )
}   


