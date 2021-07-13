import './ItemListContainer.css';
import { ItemList } from '../../components/itemlist/itemlist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import chaleco from '../../assets/images/productos/chalecos/chaleco_negro.jpeg'
import remera from '../../assets/images/productos/remeras/remera_naranja.jpeg'
import campera from '../../assets/images/productos/camperas/campera_rosa.jpeg'

const PRODUCTS = [
  {
    "id": 1,
    "pictureUrl": <img height='100' src={remera} alt="remera" />,
    "title": "Remera",
    "price": 1000,
    "CategoryId": "remeras",
  },
  {
    "id": 2,
    "pictureUrl": <img height='100' src={campera} alt="campera" />,
    "title": "Campera",
    "price": 4000,
    "CategoryId": "camperas",
  }, 
  {
        "id": 3,
        "pictureUrl": <img height='100' src={chaleco} alt="chaleco" />,
        "title": "Chaleco",
        "price": 3000,
        "CategoryId": "chalecos",
   }]

export const ItemListContainer = () => {
  const {id} = useParams()
  const [items, setItems] = useState ([])
 
  
    useEffect (()=>{
      
      const getItems = ()=> {
            return id ? PRODUCTS.filter ((item) => item.CategoryId === id) : PRODUCTS
      }
      let items = getItems()
      setItems(items)
    },[id])

     return (
      <div>
            <ItemList  PRODUCTS={items}/> 
      </div>
    )
     }