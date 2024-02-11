import React, { useState } from 'react'
import { useAddProductMutation } from '../app/services/productApi'

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: ''
    })
    const [createProducts, { data, error , isLoading}] = useAddProductMutation();
    
if (isLoading) {

    return <div>loading... </div>
};

if(error) {
    return <div>Error : {error} </div>
}

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProducts(product);
        } catch (error) {
            console.log(error.message)
        }
    };

    // console.log(data && data)
        return (
            <div className='bg-slate-400 px-8 lg:px-36 py-24'>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name="title"  value={product.title} onChange={handleChange} className='my-2 py-2 px-2 block w-full lg:w-1/2'/>
            <label>Description</label>
            <input type="text" name="description" value={product.description} onChange={handleChange} className='my-2 py-2 px-2 block w-full lg:w-1/2'/>
            <label>Price</label>
            <input type="text" name="price" value={product.price} onChange={handleChange} className='my-2 py-2 px-2 block w-full lg:w-1/2'/>
            <label>Category</label>
            <input type="text" name="category" value={product.category} onChange={handleChange} className='my-2 py-2 px-2 block w-full lg:w-1/2'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProduct