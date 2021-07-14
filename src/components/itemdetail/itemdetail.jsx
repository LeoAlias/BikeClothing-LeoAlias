import './itemdetail.css'
import { ItemCount } from '../itemcount/itemcount'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'

export const ItemDetail = ({detalleItem}) => {
    const [contador, setContador] = useState(0)
    
    const onAdd = (q) => {
        setContador(q)
    }
console.log(contador)
   
    const {id, title, price, pictureUrl,  description } = detalleItem 
    return ( 
                <div className='productbox'>
                    <p>Id: <span>{id}</span></p>
                    <p>Foto: <span>{pictureUrl}</span></p>
                    <p>titulo: <span>{title}</span></p>
                    <p>Precio: <span>{price}</span></p>
                    <p>Descripcion: <span>{description}</span></p>
                     <ItemCount  initial={1}  stock={10} onAdd={onAdd} />
                     <Link to= '/cart'>
                     <button disabled={!contador} >Termina tu compra</button>
                     </Link>
            
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