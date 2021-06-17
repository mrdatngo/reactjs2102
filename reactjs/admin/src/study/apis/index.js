import axios from "axios";
const login = (data) => {
  return axios.post("http://localhost:8080/api/login", data);
  // fake by promise
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (data.username == "admin") {
  //       resolve({
  //         success: "true",
  //         username: "admin",
  //         token: "ya...........",
  //       });
  //     } else {
  //       reject({ success: false });
  //     }
  //   }, 1000);
  // });
};

const getPosts = () => {
  let token = localStorage.getItem("token");
  return axios
    .get(`http://localhost:8080/api/posts?token=${token}`)
    .then((data) => {
      // console.log(data);
      return data.data;
    });
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       {
  //         id: 1,
  //         title: "Post 1",
  //         description: "This is description of post 1",
  //         author: "MrDat",
  //       },
  //       {
  //         id: 2,
  //         title: "Post 2",
  //         description: "This is description of post 2",
  //         author: "MrDat",
  //       },
  //     ]);
  //   }, 1000);
  // });
};

export { login, getPosts };
