import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {
    const {id} = useParams();
    const [items,setItems]= useState({});

    useEffect(()=>{
          fetch(`http://localhost:5000/items/${id}`)
          .then(res=>res.json())
          .then(data =>setItems(data));

    },[])

    return (
        <div>
            <h1>item: {items?.name}</h1>

            
        </div>
    );
};

export default ItemDetails;