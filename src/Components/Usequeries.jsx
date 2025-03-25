import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

// usequeriesused to call more than one number of api endpoint
const apicall = async(id)=>{
    const response =  await axios.get(`http://localhost:3000/posts/${id}`)
    return  response.data;

}
// useQueries is a React Query hook used when you need to fetch multiple API calls in parallel.
// Instead of calling a single API (like useQuery), useQueries runs multiple queries at once and returns an array of query results.
//useQueries returns an array, not an object. We store it in queryResults
const Innercomaponent = ({ postid }) => {
     const queryResults =  useQueries({
        queries : postid.map((item)=>({//queries is an array of objects, where each object represents a single API request.
            queryKey:["posts",item],
            queryFn: ()=>apicall(item)
        }))
     })
     console.log(queryResults);
  return (
    <div className="container">
      <h3>inner Components</h3>
      <ul className="posts">
        {queryResults.map((data)=>(
            <li key={data.id}>{data.data.title}-{data.data.content}</li>

        ))}
      </ul>
    </div>
  );
};

const Usequeries = () => {
  const postid = [1, 2, 3];
  return (
    <div className="container">
      <h3>UseQueries</h3>
      <Innercomaponent postid={postid} />
    </div>
  );
};

export default Usequeries;
