import {createContext, useState} from 'react'

export const CarContext = createContext();

export const CartProvider = ({children})=> {
    const [product, setProduct] = useState(0);
    return (
        <CartContext.Provider value={setProduct}>
            {children}
        </CartContext.Provider>
    )
}