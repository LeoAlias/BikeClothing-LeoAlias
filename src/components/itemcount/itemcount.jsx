import { useState } from "react"
import './itemcount.css'



export const ItemCount = ({ initial, stock, onAdd }) => {
    const [ contador , SetContador] = useState (initial)
    const [ nuevoStock , SetStock] = useState (stock)
    

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
    
    
    return (

        <div>
            <button className='operbutton' onClick={restar}>-</button>
            <span>{contador}</span>
            <button className='operbutton' onClick={sumar}>+</button>
            <button disabled={!contador} className='cartbutton' onClick={ () =>onAdd(contador)} >Agregar al carrito</button>
        </div>


    )

}