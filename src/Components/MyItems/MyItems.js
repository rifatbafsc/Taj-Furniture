import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useFurniture from '../../useFurniture/useFurniture';

const MyItems = () => {
    const [items, setItems]= useFurniture({});
    const handleDelete=(id)=>{
        
        const deleteItem = window.confirm('Delete this item?');
        if(deleteItem){
            fetch(`http://localhost:5000/items/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                const remainingItems= items.filter( resItem=> resItem._id !== id);
                setItems(remainingItems);
            })
            
            }
    }

    return (
        <div>
            {
                items.map(item=>
                    <div>
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Supplier</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.supplier}</td>
                            <Button onClick={()=>handleDelete(item._id)} className='text-danger fw-bold'><td>Delete</td></Button>
                            </tr>
                            
                        </tbody>
                        </Table>
                    </div>
                
                    

           
    )};
    </div>
)};

export default MyItems;