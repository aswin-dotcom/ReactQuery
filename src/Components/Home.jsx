// import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const API_URL = "http://localhost:3000/posts";
const read = async () => {
  const { data } = await axios.get(`${API_URL}`);
  return data;
};

const create = async (post) => {
  const { data } = await axios.post(API_URL, post);
  return data;
};

const deletepost = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const updatepost = async (post) => {
  const { data } = await axios.put(`${API_URL}/${post.id}`, post);
  return data;
};

export const Home = () => {
  const client = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [editid, setEditid] = useState(null);
  const [editpost, setEditpost] = useState({
    id:'',
    name: "",
    category: "",
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: read,
  });

  const createmutation = useMutation({
    mutationFn: create,

    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const delemutation = useMutation({
    mutationFn: deletepost,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const updatemutation = useMutation({
    mutationFn: updatepost,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["posts"] });
      // setEditid(null);
      setEditpost({
        id:'',
        name:'',
        category:''

      })
      
    },
  });

  const handlesubmit = () => {
    createmutation.mutate({ name: title, category: body });
  };

  const handledelete = (id) => {
    delemutation.mutate(id);
  };

  const handleupdate = (post,editpost) => {
    updatemutation.mutate(post,editpost);
  };

  if (isLoading) {
    return <h1>Please wait loading....</h1>;
  }

  if (isError) {
    return <h2>Error occured....</h2>;
  }

  return (
    <div className="container">
      <h3>create read update & delete</h3>
      <div>
        <input
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handlesubmit}>Post</button>
      </div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            {editpost.id == post.id ? (
              <div>
                <input
                  placeholder="update name"
                  value={editpost.name}
                  onChange={(e) =>
                    setEditpost({ ...editpost, name: e.target.value})
                  }
                />
                <input
                  placeholder="update price"
                  value={editpost.category}
                  onChange={(e) =>
                    setEditpost({  ...editpost, category: e.target.value })
                  }
                />
                <button onClick={()=>handleupdate(editpost)}>Update</button>
              </div>
            ) : ( 
            // }  
              <div>
                {post.name}-{post.category}
                <button onClick={() => setEditpost(post)}>Update</button>
                <button onClick={() => handledelete(post.id)}>Delate</button>
              </div>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
};
