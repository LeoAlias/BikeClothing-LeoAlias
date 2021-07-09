import './itemdetail.css'
import { Link } from 'react-router-dom';
import { ItemCount } from '../itemcount/itemcount'
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';


export const ItemDetail = ({Item}) => {
    const  { id , pictureUrl, title, price, description, categoryId} = Item
    const setProduct = useContext(CartContext) 
    
    return ( 
        <Link to = {` /item/${id}`}>
            <div className='productbox'>
                <p>Id: <span>{id}</span></p>
                <p>Foto: <span>{pictureUrl}</span></p>
                <p>titulo: <span>{title}</span></p>
                <p>Precio: <span>{price}</span></p>
                <p>Descripcion: <span>{description}</span></p>
                <ItemCount/>
        </div>
        </Link>


    )

}