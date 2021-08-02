import './itemdetailcontainer.css';
import { ItemDetail } from '../../components/itemdetail/itemdetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'firebase/firestore';
import {db} from '../../firebase/firebase'


// const PRODUCTS = [
//   {
//     "id": 1,
//     "title": "remeraN",
//     "price": 1000,
//     "pictureUrl": <img height='300' src={remera} alt="remera" />,
//     //"pictureUrl": remera,
//     "CategoryId": "Remeras",
//     "description" :  "Este es un chaleco especial que soporta las mas altas variaciones...."
//   },
//   {
//     "id": 2,
//     "title": "campera",
//     "price": 2000,
//     //"pictureUrl": campera,
//     "pictureUrl": <img height='300' src={campera} alt="campera" />,
//     "CategoryId": "camperas",
//     "description" :  "Este es un chaleco especial que soporta las mas altas variaciones...."
//   }, 
//   {
//     "id": 3,
//     "title": "chaleco",
//     "price": 3000,
//     //"pictureUrl": chaleco,
//     "pictureUrl": <img height='300' src={chaleco} alt="chaleco" />,
//     "CategoryId": "Chalecos",
//     "description" :  "Este es un chaleco especial que soporta las mas altas variaciones...."
//    }]

   export const ItemDetailContainer = () => {
      const {id} = useParams()
      const [item, setItem] = useState ({})
      const [loading, setLoading] = useState ({})
   
      useEffect ( () => {
        const itemCollection = db.collection("fireproducts")
        const item = itemCollection.doc(id)

        item.get().then((doc)=>{
          if(!doc.exists) {
            console.log('El item no existe!')
            return
          }
          setItem({id: doc.id, ...doc.data() })
        }).catch((error) => {
          console.log("error searching items", error)
        }).finally (() => {
          setLoading(false)
        })
      
      }, [id])

      // useEffect (()=>{
        
      //     const getItem = ()=> {
      //           return id ? 
      //           PRODUCTS.find ((productoIndividual) => parseInt(productoIndividual.id) === parseInt(id))
      //           : PRODUCTS
      //     }
      //     const itemsfilter = getItem()
      //     setItem(itemsfilter)
      //   },[id])
  
        return (
          <div>
                <ItemDetail  detalleItem={item}/> 
          </div>
        ) 
}