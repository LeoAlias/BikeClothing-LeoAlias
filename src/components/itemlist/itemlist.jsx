import './itemlist.css'
import { Item } from '../item/item'

export const ItemList = ({products}) =>{
 
    return (
        <div className='setde3'>
            {products.map(item=> <Item Item={item}/>)  }

        </div>
    )
}