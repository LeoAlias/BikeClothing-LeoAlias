import { useEffect, useState } from 'react';
import { ItemDetail } from '../itemdetail/itemdetail';
import chaleco from '../../assets/images/productos/chalecos/chaleco.jpeg'


export const ItemDetailContainer = () => {
    const product = 
        {
          "id": 3,
          "title": "short",
          "price": 3000,
          "pictureUrl": <img height='100' src={chaleco} alt="chaleco" />

        }
  
      useEffect (()=>{
        
        const getItem = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve (product)
          }, 2000)
  
        })  
        getItem.then((resolve) => {
              console.log(resolve)
         })
      } ,[] )
      
       return (
        <div>
              <ItemDetail  product={product}/> 
              {/* <h1 className='titulo'>
                {children}
              </h1> */}
          </div>
      )
  }      