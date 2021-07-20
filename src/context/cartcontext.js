import {createContext, useState, useContext} from 'react'

export const CartContext = createContext()

//export const useCartContext = useContext(CartContext)

export const CartProvider = ({children})=> {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (cart.length > 0) {
            if (isInCart(item.id)){
                let pos = cart.findIndex (item => Object.item.id ===item.id)
                let newCart = cart
                newCart[pos].quantity += quantity
                setCart(newCart)
            } else setCart([...cart, {item, quantity}])
        }
         else setCart([{item, quantity}])
    }
    const removeItem = (idToremove) => {
        setCart(cart.filter(obj => obj.item.id !== idToremove))
    }
    const clear = () => {
        setCart([])
        //  serCartqty(0)
    }
    const isInCart = id => {
        return cart.some ((item) => item.id === id)
     }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
let cart = [
    {
      "id": 1,
      "title": "remeraN",
      "price": 1000,
      "CategoryId": "Remeras",
      'qnty' : 2
    },
    {
      "id": 2,
      "title": "campera",
      "price": 2000,
      "CategoryId": "camperas",
      'qnty' : 2,

    }, 
    {
      "id": 3,
      "title": "chaleco",
      "price": 3000,
      "CategoryId": "Chalecos",
      'qnty' : 2,
     }]
  
