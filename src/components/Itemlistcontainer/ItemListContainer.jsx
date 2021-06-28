import './ItemListContainer.css';
import { ItemList } from '../itemlist/itemlist';
import { useEffect, useState } from 'react';
import remeraN from '../../assets/images/productos/remeras/remera_naranja.jpeg'
import remeraV from '../../assets/images/productos/remeras/remera_verde.jpeg'



export const ItemListContainer = () => {
  const [shownproducts, setShownproducts] = useState ([])
  const products = [
    {
      "id": 1,
      "title": "remeraN",
      "price": 1000,
      "pictureUrl": <img height='100' src={remeraN} alt="remeraN" />
    },
    {
      "id": 2,
      "title": "remeraV",
      "price": 2000,
      "pictureUrl": <img height='100' src={remeraV} alt="remeraV" />

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