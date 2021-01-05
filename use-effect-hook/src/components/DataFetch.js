import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1);
  const [idFromButton,setIdFromButton]=useState(1)

  useEffect(() => {
    const URI = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios
      .get(URI)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButton]);


  let handleClick=()=>
  {
    setIdFromButton(id)
  }

  return (
    <div>
      <h3>All Posts</h3>
      <hr />
      <input value={id} onChange={e=>setId(e.target.value)}/>
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
     

    </div>
  );
}

export default DataFetch;
