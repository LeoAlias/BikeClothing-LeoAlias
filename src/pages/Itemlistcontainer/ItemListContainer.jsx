import './ItemListContainer.css';
import { ItemList } from '../../components/itemlist/itemlist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'firebase/firestore';
import {db} from '../../firebase/firebase'


export const ItemListContainer = () => {
  const {id} = useParams()
  const [items, setItems] = useState ([])
  const [loading, setLoading] = useState(false)
     
    useEffect ( () => {
      console.log('cargando ....')
      setLoading(true)
      // const db = dataBase
      const itemCollection = db.collection("fireproducts")
      itemCollection.get().then((querySnapshot)=>{
        if(querySnapshot.size === 0) {
          console.log('No results!')
        }
        setItems(querySnapshot.docs.map(doc => doc.data()))
      }).catch((error) => {
        console.log("error searching items", error)
      }).finally (() => {
        setLoading(false)
      })
    
    }, [id])

     return (
      <div>
            <ItemList  PRODUCTS={items}/> 
      </div>
    )
     }