import React from 'react'
import { useGetAllProductsQuery } from '../app/services/productApi';
import { Link } from 'react-router-dom';

const Products = () => {
    const {data, isError, error,isLoading} = useGetAllProductsQuery();

    if(isError) {
        console.log(isError)
        return <div>Error : {error} </div>
    }
    if(isLoading) {
        return <div>loading.... </div>
    }
  return (
    <div className='flex items-center justify-center flex-col w-full px-32'>
        <h1>Products</h1>
        <div className='flex flex-wrap'>
            {data?.products.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className='w-96 h-96 bg-slate-5200 shadow-lg m-2 rounded-md' >
                    <img src={item.images[0] } alt={item.title}  className='w-full h-56 object-cover object-center bg-no-repeat rounded-md'/>
                    <div className="dis px-8">
                        <h2 className='text-2xl font-bold'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description.substr(0,40)}</p>
                        <p className='text-gray-500'>price: ${item.price}</p>
                        <p className='text-gray-500 text-sm'> category: {item.category}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Products