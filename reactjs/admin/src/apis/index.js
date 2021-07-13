import axios from "axios";
const login = (data) => {
  return axios
    .post("http://localhost:8080/api/login", data)
    .then((rsp) => rsp.data);
};

const fetchPosts = () => {
  return axios.get("http://localhost:8080/api/posts").then((rsp) => rsp.data);
};

const addPost = (data) => {
  return axios
    .post("http://localhost:8080/api/posts", data)
    .then((rsp) => rsp.data);
};

const fetchPost = (id) => {
  return axios
    .get(`http://localhost:8080/api/post?id=${id}`)
    .then((rsp) => rsp.data);
};

const updatePost = () => {
  return axios.put("http://localhost:8080/api/post").then((rsp) => rsp.data);
};

export default { login, fetchPosts, addPost, fetchPost, updatePost };
