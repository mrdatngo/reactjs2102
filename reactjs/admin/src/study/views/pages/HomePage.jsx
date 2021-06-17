import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import { getPosts } from "../../apis";

const HomePage = () => {
  let history = useHistory();
  let location = useLocation();
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    posts.push({
      id: 3,
      title: "Post 3",
      description: "This is description of post 3",
      author: "MrDat",
    });
    setPosts([...posts]);
    // setPosts(posts);
  };

  useEffect(() => {
    // call api
    getPosts().then((data) => {
      console.log("Data: ", data);
      setPosts(data);
    });
  }, []);

  const postsElem = () => {
    let elems = [];
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      elems.push(
        <div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      );
    }
    return elems;
  };

  return (
    <div>
      <h3>HomePage</h3>
      {postsElem()}
      <button onClick={() => history.goBack()}> Go Back </button>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default HomePage;
