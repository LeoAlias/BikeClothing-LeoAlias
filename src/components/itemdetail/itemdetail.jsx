import './itemdetail.css'

export const ItemDetail = ({product}) => {
    console.log(product)
    return ( 
        <div className='productbox'>
            <p>Id: <span>{product.id}</span></p>
            <p>titulo: <span>{product.title}</span></p>
            <p>Precio: <span>{product.price}</span></p>
            <p>Foto: <span>{product.pictureUrl}</span></p>
           
        </div>

    )

}