import './itemdetailcontainer.css';
import { ItemDetail } from '../../components/itemdetail/itemdetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import chaleco from '../../assets/images/productos/chalecos/chaleco.jpeg'
import remeraN from '../../assets/images/productos/remeras/remera_naranja.jpeg'
import remeraV from '../../assets/images/productos/remeras/remera_verde.jpeg'


export const ItemDetailContainer = () => {
    const {id} = useParams()
    const products = [
    {
      "id": 1,
      "pictureUrl": <img height='300' src={remeraN} alt="remeraN" />,
      "title": "remeraN",
      "price": 1000,
      "CategoryId": "Remeras",
      "descripcion" :  "Este es un chaleco especial que soporta las mas altas variaciones...."
    
    },
    {
      "id": 2,
      "pictureUrl": <img height='300' src={remeraV} alt="remeraV" />,
      "title": "remeraV",
      "price": 2000,
      "CategoryId": "Remeras2",
      "descripcion" :  "Este es un chaleco especial que soporta las mas altas variaciones...."

    }, 
    {
          "id": 3,
          "pictureUrl": <img height='300' src={chaleco} alt="chaleco" />,
          "title": "chaleco",
          "price": 3000,
          "CategoryId": "Chalecos",
          "descripcion" :  "Este es un chaleco especial que soporta las mas altas variaciones...."
     }]
  
      useEffect (()=>{
        
        const getItem = new Promise((resolve, reject) => {
          setTimeout(() => {
            // id? products.filter((item) => item.CategoryId === id) : resolve(products)
          resolve (products)
        }, 2000)
        })  
        getItem.then((resolve) => {
              console.log(resolve)
         })
      } ,[] )
      
       return (
        <div>
              <ItemDetail  products={products}/> 
        </div>
      )
  }      