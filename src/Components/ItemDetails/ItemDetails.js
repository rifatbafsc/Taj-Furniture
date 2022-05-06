import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ItemDetails = () => {
    const {id} = useParams();
    const [items,setItems]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/items/${id}`)
        .then(res=>res.json())
        .then(data =>setItems(data));

  },[])
    const handleDelete = id=>{
        const sureDelete =window.confirm('you want to delete this item?')
        if(sureDelete){
            fetch(`http://localhost:5000/items/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                const remaining = items.filter(item=> item._id !== id);
            setItems(remaining);
            });
            
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
                                    <Card.Text className='text-bold'>Quantity: {items.quantity}</Card.Text>
                                    <Card.Text>
                                    Price: {items.price} BDT
                                    </Card.Text>
                                    <Button variant="primary">Sold</Button>
                                    <Button onClick={()=>handleDelete(items._id)} className='m-3' variant="primary">Dlivered</Button>
                                </Card.Body>
                                </Card>
            
        </div>
    );
};

export default ItemDetails;