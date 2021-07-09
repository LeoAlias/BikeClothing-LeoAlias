import './itemlist.css'
import { Item } from '../item/item'

export const ItemList = ({PRODUCTS}) =>{
 
    return (
        <div className='setde3'>
            {PRODUCTS.map(item=> <Item Item={item}/>)  }

        </div>
    )
}