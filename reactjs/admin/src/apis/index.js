import axios from "axios";
const login = (data) => {
  return axios
    .post("http://localhost:8080/api/login", data)
    .then((rsp) => rsp.data);
};

export default { login };
