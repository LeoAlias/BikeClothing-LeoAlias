import './item.css'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const Item = ({Item}) => {
    const {id, title, price, pictureUrl } = Item
    return ( 
            <Link to = {`/item/${id}`}>
                <div className='productbox'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {/* <p>Id: <span>{id}</span></p> */}
                                <p>Precio: <span>{price}</span></p>
                                <p>Foto: <span>{pictureUrl}</span></p>
                            </Card.Text>
                            <Button variant="primary">Ver</Button>
                        </Card.Body>
                    </Card>
               </div>     
            </Link>

    )

}