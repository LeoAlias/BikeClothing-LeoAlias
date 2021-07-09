import './item.css'
import { Link } from 'react-router-dom';


export const Item = ({Item}) => {
    const {id, title, price, pictureUrl, categoryId} = Item
    return ( 
            <Link to = {` /item/${id}`}>
                <div className='productbox'>
                    <p>Id: <span>{id}</span></p>
                    <p>titulo: <span>{title}</span></p>
                    <p>Precio: <span>{price}</span></p>
                    <p>Foto: <span>{pictureUrl}</span></p>
                </div>
            </Link>

    )

}