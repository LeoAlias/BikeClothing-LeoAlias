import './ItemListContainer.css';
import { ItemList } from '../../components/itemlist/itemlist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import chaleco from '../../assets/images/productos/chalecos/chaleco.jpeg'
import remeraN from '../../assets/images/productos/remeras/remera_naranja.jpeg'
import remeraV from '../../assets/images/productos/remeras/remera_verde.jpeg'

const PRODUCTS = [
  {
    "id": 1,
    "pictureUrl": <img height='100' src={remeraN} alt="remeraN" />,
    "title": "remeraN",
    "price": 1000,
    "CategoryId": "remeras",
  
  },
  {
    "id": 2,
    "pictureUrl": <img height='100' src={remeraV} alt="remeraV" />,
    "title": "remeraV",
    "price": 2000,
    "CategoryId": "remeras2",

  }, 
  {
        "id": 3,
        "pictureUrl": <img height='100' src={chaleco} alt="chaleco" />,
        "title": "chaleco",
        "price": 3000,
        "CategoryId": "chalecos",
   }]

export const ItemListContainer = () => {
  const {id} = useParams()
  const [items, setItems] = useState ([])
  
  
    useEffect (()=>{
      
      const getItems = ()=> {
            return id? PRODUCTS.filter ((item) => item.CategoryId === id) : <ItemList  PRODUCTS={PRODUCTS}/>
      }
      let itemsToShow = getItems()
      setItems(itemsToShow)
    },[id])

     return (
      <div>
            <ItemList  PRODUCTS={items}/> 
      </div>
    )
     }