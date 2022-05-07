import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ItemDetails = () => {
    const {id} = useParams();
    const [items,setItems]= useState({});
    const [quantity, setQuantity] = useState();
    console.log(items);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/items/${id}`)
        .then(res=>res.json())
        .then(data =>setItems(data));

  },[])
    const handleDelivered = id=>{
        const sureDelivered =window.confirm('you want to delivered this item?')
        if(sureDelivered){
            setQuantity(quantity-1);
            
            }
     }
    
    

    return (
        <div>
              <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={items.img} />
                                <Card.Body>
                                    <Card.Title>{items.name}</Card.Title>
                                    
                                    <Card.Text>{items.details}</Card.Text>
                                    <Card.Text>Supplier: {items.supplier}</Card.Text>
                                    <Card.Text className='text-bold'>Quantity: {quantity}</Card.Text>
                                    <Card.Text>
                                    Price: {items.price} BDT
                                    </Card.Text>
                                    {/* <Button variant="primary">Sold</Button> */}
                                    <Button variant="primary">Restock</Button>
                                    <Button onClick={()=>handleDelivered(id)} className='m-3' variant="primary">Dlivered</Button>
                                </Card.Body>
                                 <Link to={"/restockitems"}><Card.Text>Restock the Items</Card.Text>
</Link>
                                </Card>
            
        </div>
    );
};

export default ItemDetails;