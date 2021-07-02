import './ItemListContainer.css';
import { ItemList } from '../itemlist/itemlist';
import { useEffect, useState } from 'react';
import remeraN from '../../assets/images/productos/remeras/remera_naranja.jpeg'
import remeraV from '../../assets/images/productos/remeras/remera_verde.jpeg'
import chaleco from '../../assets/images/productos/chalecos/chaleco.jpeg'




export const ItemListContainer = () => {
  const [shownproducts, setShownproducts] = useState ([])
  const products = [
    {
      "id": 1,
      "title": "remeraN",
      "price": 1000,
      "CategoryId": "Remeras",
      "pictureUrl": <img height='100' src={remeraN} alt="remeraN" />
    },
    {
      "id": 2,
      "title": "remeraV",
      "price": 2000,
      "CategoryId": "Remeras2",
      "pictureUrl": <img height='100' src={remeraV} alt="remeraV" />

    },
    {
      "id": 3,
      "title": "chaleco",
      "price": 3000,
      "CategoryId": "Chalecos",
      "pictureUrl": <img height='100' src={chaleco} alt="chaleco" />
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
      </div>
    )
}      