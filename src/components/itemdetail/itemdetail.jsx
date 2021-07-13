import './itemdetail.css'
import { ItemCount } from '../itemcount/itemcount'

export const ItemDetail = ({detalle}) => {
    console.log(detalle)
    const {id, title, price, pictureUrl,  description } = detalle 
    return ( 
                <div className='productbox'>
                    <p>Id: <span>{id}</span></p>
                    <p>Foto: <span>{pictureUrl}</span></p>
                    <p>titulo: <span>{title}</span></p>
                    <p>Precio: <span>{price}</span></p>
                    <p>Descripcion: <span>{description}</span></p>
                     <ItemCount initial='1' stock='5' onAdd='0' />
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