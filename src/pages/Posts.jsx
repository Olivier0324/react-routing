import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Here is posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body.substring(0, 80)}...</p>
            <NavLink to={"postdetail/"+post.id}>Read more</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts