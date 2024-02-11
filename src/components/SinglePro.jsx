import React from 'react'
import { useGetSingleProductByIdQuery } from '../app/services/productApi';
import { useParams } from 'react-router-dom';

const SinglePro = () => {
    const {id} = useParams();
    const {data, isError, isLoading} = useGetSingleProductByIdQuery(id);

    if(isError) {
        console.log(isError)
        return <div>Error </div>
    }
    if(isLoading) {
        return <div>loading.... </div>
    }
  

  return (
    <div>
        <p>{data.title}</p>
        <img src={data.images[0]} alt={data.title}/>
        <p>{data.description}</p>
    </div>
  )
}

export default SinglePro