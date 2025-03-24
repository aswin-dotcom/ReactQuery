import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
const fetchpost = async(post) =>{
   return axios.get(`http://localhost:3000/posts/${post}`)
}
const ReactQuerybypassingId = () => {
    const { post } =  useParams();

    const{data, isLoading, error, isError} = useQuery({
        queryKey:["posts",post],
        queryFn:()=>fetchpost(post)
    })

    if(isLoading){
        return <p>Please wait loading .....</p>
    }

    if(isError){
        return <p>Error occured... {error.message}</p>
    }
    // console.log(data);
    const {content,title} =  data?.data || {}
  return (
    <div className='container'>
        <h3>ReactQuerybypassingId</h3>
        <h4>{content}</h4>
        <h5>{title}</h5>

    </div>
  )
}

export default ReactQuerybypassingId