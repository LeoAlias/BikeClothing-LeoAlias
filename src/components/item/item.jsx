import './item.css'
import { Link } from 'react-router-dom';


export const Item = ({Item}) => {
    console.log(Item)
    return ( 
            <Link to ='/item/:id'>
                <div className='productbox'>
                    <p>Id: <span>{Item.id}</span></p>
                    <p>titulo: <span>{Item.title}</span></p>
                    <p>Precio: <span>{Item.price}</span></p>
                    <p>Foto: <span>{Item.pictureUrl}</span></p>
                </div>
            </Link>

    )

}