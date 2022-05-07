import React from "react";
import { useForm } from "react-hook-form";

 const AddItems= ()=> {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
      console.log(data);
    const url= `http://localhost:5000/items`;
  fetch(url,{
      method: 'POST',
      headers:{
          'content-type': 'application/json'
      },
      body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result => {
      console.log(result);
  })

};
   
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder="details" type='text' {...register("details")} />
        <input placeholder="Img" type="text" {...register("img")} />
      <input placeholder="Price" type="number" {...register("price")} />
      <input placeholder="Quantity" type="number" {...register("quantity")} />
      <input placeholder="Supplier" type="text" {...register("supplier")} />
      <input type="submit" value='Add Items' />
    </form>
    </div>
  );
}

export default AddItems;