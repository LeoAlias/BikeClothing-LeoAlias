import './item.css'

export const Item = () => {
    // class Item  {
    //     constructor (id, title, price, pictureUrl) {
    //         this.id = id;
    //         this.title = title;
    //         this.price = price;
    //         this.pictureUrl = pictureUrl
    //     }
    // } 
    // new Item ( 1, 'remera', 1000, 'foto')
    return ( 
        <div className='productbox'>
            {Item.id}
            {Item.title}
            {Item.price}
            {Item.pictureUrl}
        </div>

    )

}