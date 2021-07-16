import {createContext, useState, useContext} from 'react'

export const CartContext = createContext()

// export const useCartContext = useContext(CartContext)

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
    const removeItem = (idtoremove) => {
        setCart(cart.filter(obj => obj.item.id !== idtoremove))
    }
    const clear = () => {
        setCart([])
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

// let cart = [
//     {item : { id, title, price, pictureUrl},
//     qnty: 2
// },
// {item : { id, title, price, pictureUrl},
// qnty: 2
// },
// {item : { id, title, price, pictureUrl},
// qnty: 2
// }
// ]