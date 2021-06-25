import './itemlist.css'
import { Item } from '../item/item'
import { ItemListContainer } from '../Itemlistcontainer/ItemListContainer'

export const ItemList = () =>{
 const buscaProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('Buscando Productos')
    }, 2000)
    
   buscaProd.then((products) => {
        const shownProducts = products.map((item ) => {
            return (item.id)    
    })
    console.log(shownProducts)

})
    return (
        console.log('algo')
    )
})}