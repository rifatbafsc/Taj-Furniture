import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h1>item: {id}</h1>
            
        </div>
    );
};

export default ItemDetails;