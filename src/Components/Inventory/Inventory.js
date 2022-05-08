import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useFurniture from '../../useFurniture/useFurniture';

const Inventory = () => {
    const [items] = useFurniture();
    const navigate =useNavigate();
    return (
        <div>
            <div className='m-4 text-center'>
                <Link to={'/additems'}><Button variant="primary">Add items</Button></Link>

            </div>
            <div className='card-allign p-4'>
            {
                        items.map(item=>
                            
                            <div key={item._id}>
                                <Card  className='shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    
                                    <Card.Text>{item.details}</Card.Text>
                                    <Card.Text>Supplier: {item.supplier}</Card.Text>
                                    <Card.Text className='text-bold'>Quantity: {item.quantity}</Card.Text>
                                    <Card.Text>
                                    Price: {item.price} BDT
                                    </Card.Text>
                                    <Button onClick={()=>navigate(`/items/${item._id}`)} variant="primary">stock update</Button>
                                </Card.Body>
                                </Card>
                            </div>
                        )
                    }
        </div>
        </div>
    );
};

export default Inventory;