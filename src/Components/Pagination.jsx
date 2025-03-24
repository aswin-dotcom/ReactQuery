import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
const fetch = async(page)=>{
    return await axios.get(`http://localhost:3000/items?_limit=1&_page=${page}`)
}

const Pagination = () => {
    const [page, setPage] = useState(1);
  const{data} =  useQuery({
    queryKey:["items",page],
    queryFn:()=>fetch(page),
    placeholderData:keepPreviousData//keeps the previous data untill the data update so the pagination should be smooth


  })

  return (
    <div className="container">
      <h3>Pagination</h3>
      <ul>
      {data?.data.map((item)=>(
        <li key={item.id}>{item.name}</li>
      ))}
      
      <button disabled={page==1?true:false} onClick={()=>setPage((pre)=>pre-1)}>Back</button>
      {Array.from({length:3},(_,i)=>i+1).map((data)=>(<button key={data} onClick={()=>setPage(data)}>{data}</button>))}
      <button disabled={page==3?true:false} onClick={()=>setPage((pre)=>pre+1)}>Next</button>

      </ul>
 
    </div>
  );
};

export default Pagination;
