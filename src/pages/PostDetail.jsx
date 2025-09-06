import React from 'react'
import { useState,useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
function PostDetail() {
    const {id}=useParams()
     const [post, setPost] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              setPost(data);
              setLoading(false);
            })
            .catch((err) => {
              setError(err.message);
              setLoading(false);
            });
        }, []);
      if (loading) return <p>Loading post...</p>;
      if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <NavLink to='/'>Go back to Posts</NavLink>
      <ul>
     
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            
          </li>
     
      </ul>
    </div>
  );
}

export default PostDetail