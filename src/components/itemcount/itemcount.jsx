import { useState } from "react"
import './itemcount.css'



export const ItemCount = ({ initial, stock, onAdd }) => {
    const [ contador , SetContador] = useState (initial)
    const [ nuevoStock , SetStock] = useState (stock)
    let [ cart , SetCart ] = useState ( onAdd)

    const restar =  () => {
        if (contador > 0 ){
            SetContador (contador - 1)
            SetStock (nuevoStock + 1)
        }
    }
    const sumar =  () => {
        if (nuevoStock !== 1) {
            SetContador (contador + 1)
            SetStock (nuevoStock - 1)
        }
    }
    const envioCart = () => {
        if (contador === 0) {
            alert ('Cart is empty')
        }else {    
            SetCart (cart = contador)
            alert (cart)
        }
    }
    
    return (

        <div>
            <button className='operbutton' onClick={restar}>-</button>
            <span>{contador}</span>
            <button className='operbutton' onClick={sumar}>+</button>
            <button className='cartbutton' onClick={envioCart} >Agregar al carrito</button>
        </div>


    )

}