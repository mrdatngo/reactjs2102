import React from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";

const Blog = () => {
  let { id } = useParams();
  let history = useHistory();
  let location = useLocation();
  console.log("history: ", history);
  console.log("location: ", location);
  return (
    <div>
      Blogs: {id}
      <button onClick={() => history.push("/home")}>Go home</button>
      <Link to="/home">Go home</Link>
    </div>
  );
};

export default Blog;
