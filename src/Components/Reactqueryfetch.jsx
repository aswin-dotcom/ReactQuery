import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Reactqueryfetch = () => {
  const fetchPosts = async () => {
    return axios.get("http://localhost:3000/posts");
  };
  const { data, isLoading, isError } = useQuery({
    //this useQuery should be called whenever the component mounts and the querykey changed
    queryKey: ["posts"], //this should array ant value should be unique
    queryFn: () => fetchPosts(),
    // staleTime:5000,
    refetchInterval:1000,//runs every one second when we in the currect tab when we move to another tab no background fetching
    // refetchIntervalInBackground:true,
  });
  if (isLoading) {
    return <p>Loading please wait</p>;
  }
  if (isError) {
    return <p>there is error in your api call</p>;
  }

  return (
    <div className="container">
      <h3>Use React Query</h3>
      <ul className="posts">
        {data?.data.map((post) => (
          <li className="post" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reactqueryfetch;
