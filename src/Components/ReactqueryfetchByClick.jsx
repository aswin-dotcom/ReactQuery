import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactqueryfetchByClick = () => {
    const fetchPosts = async() =>{
        return await  axios.get("http://localhost:3000/posts")
    }
    const { data ,refetch }  =  useQuery({
        queryKey:["posts"],
        queryFn:()=>fetchPosts(),
        enabled:false
    })
return (
    <div className='container'>
      <h3>Fetch By Click</h3>
      <ul className='posts'>
        {data?.data.map((post)=>(
            <li className='post' key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Load data</button>
    </div>

  )
}

export default ReactqueryfetchByClick   