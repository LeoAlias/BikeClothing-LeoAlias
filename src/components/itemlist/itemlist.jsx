import './itemlist.css'
import { Item } from '../item/item'

export const ItemList = ({products}) =>{
 
    return (
        <>
            {products.map(item=> <Item Item={item}/>)  }

        </>
    )
}