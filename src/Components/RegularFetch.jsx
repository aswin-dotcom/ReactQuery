import axios from "axios";
import React, { useEffect, useState } from "react";

const RegularFetch = () => {
  const [post, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      if (res.data) {
        setloading(false);
      }
      setPosts(res.data);
    } catch (err) {
      setError(err);
    } finally {
      console.log("fetch function completed");
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <p> loading please wait </p>;
  }

  if (error) {
    return <p>Error in api call</p>;
  }
  return (
    <div className="container">
      <h3>Home</h3>
      <ul className="posts">
        {post.length > 0 &&
          post.map((post) => (
            <li className="post" key={post.id}>
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RegularFetch;
