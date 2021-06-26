import './ItemListContainer.css';
import { ItemList } from '../itemlist/itemlist';
import { useEffect, useState } from 'react';



export const ItemListContainer = () => {
  const [shownproducts, setShownproducts] = useState ([])
  const products = [
    {
      "id": 1,
      "title": "remera",
      "price": 1000,
      "pictureUrl": "url1"
    },
    {
      "id": 2,
      "title": "campera",
      "price": 2000,
      "pictureUrl": "url2"
    }]

    useEffect (()=>{
      
      const buscaProd = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (products)
        }, 2000)

      })  
      buscaProd.then((resolve) => {
            console.log(resolve)
            setShownproducts(resolve)
       })
    } ,[] )
    
     return (
      <div>
            <ItemList  products={products}/> 
            {/* <h1 className='titulo'>
              {children}
            </h1> */}
        </div>
    )
}      