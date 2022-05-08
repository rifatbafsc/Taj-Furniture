import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';



const ItemDetails = () => {
    const {id} = useParams();
    const [items,setItems]= useState({});
    
    const [quantity, setQuantity] = useState(10);
    // console.log(quantity);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/items/${id}`)
        .then(res=>res.json())
        .then(data =>setItems(data));

  },[])
    const handleDelivered = (event)=>{
        event.preventDefault();
        
        const deliveredQuantity= (quantity-1);
            setQuantity(deliveredQuantity);

        //     fetch(`http://localhost:5000/items/${id}`,{
        //         method: "PUT",
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(deliveredQuantity)
        //     })
        // .then(res=>res.json())
        // .then(data =>{console.log(data);
        // event.target.reset();
            
        //     })
        }

    const handleRestock = (event)=>{
        event.preventDefault();
        const restock = parseFloat(event.target.number.value);
        const newQuantity= restock+quantity;
            setQuantity(newQuantity);
            
            }
  
    return (
        <div>
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
                                    {
                                        (quantity===0)?
                                    <Button className='m-3' variant="primary">Sold Out</Button>:
                                    <Button onClick={handleDelivered}  className='m-3' variant="primary">Dlivered</Button>
                                    }
                                </Card.Body>
                              </Card>
              </div>
              <div>
              <h4>Restock the items</h4>
                  <form onSubmit={handleRestock} >
                  <input type="number" placeholder='input number' name="number" />
                  <button type="submit">Restock</button>
                  </form>
              </div>
              
            
        </div>
    );

};
export default ItemDetails;