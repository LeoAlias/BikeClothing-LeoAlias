import './itemdetail.css'
import { ItemCount } from '../itemcount/itemcount'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../context/cartcontext'
// import { useCartContext } from '../../context/cartcontext'

export const ItemDetail = ({detalleItem}) => {
    const [isClicked, setisClicked] = useState(false)
    
    const useCartContext = useContext(CartContext)
    const {addItem} = useCartContext
    
    const handleOnAdd = (quantity) => {
        setisClicked(true)
        addItem(detalleItem, quantity)
            }

   
    const {id, title, price, pictureUrl,  description } = detalleItem 
    return ( 
                <div className='productbox'>
                    <p>Id: <span>{id}</span></p>
                    <p>Foto: <span>{pictureUrl}</span></p>
                    <p>titulo: <span>{title}</span></p>
                    <p>Precio: <span>{price}</span></p>
                    <p>Descripcion: <span>{description}</span></p>
                     {isClicked ? (
                     <Link to= '/cart'> Terminar mi compra</Link>)
                      :
                       (<ItemCount  initial={1}  stock={10} onAdd={handleOnAdd} />) 
                       }
                     {/* -----Otra opcion sin renderizar condicional-----
                     <Link to= '/cart'>
                     <button disabled={!contador} >Termina tu compra</button>
                     </Link> */}
            
                </div>

    )

}







// export const ItemDetail = ({item}) => {
//     const  { id , pictureUrl, title, price, description, } = item
//     const setProduct = useContext(CartContext) 
    
//     return ( 
//             <div className='productbox'>
//                 <p>Id: <span>{id}</span></p>
//                 <p>Foto: <span>{pictureUrl}</span></p>
//                 <p>titulo: <span>{title}</span></p>
//                 <p>Precio: <span>{price}</span></p>
//                 <p>Descripcion: <span>{description}</span></p>
//                 <ItemCount/>
//         </div>

//     )

// }