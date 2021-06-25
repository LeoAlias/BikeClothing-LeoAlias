import './ItemListContainer.css';
import { ItemList } from '../itemlist/itemlist';



export const ItemListContainer = () => {
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
  return (
      <div>
            <ItemList>
              {products}
              </ItemList> 
            {/* <h1 className='titulo'>
              {children}
            </h1> */}
        </div>
    )
}      