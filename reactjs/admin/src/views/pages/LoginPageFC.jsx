import React, { useState } from "react";
import { login } from "../../apis/index";

const LoginPageFC = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const onChangeUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  const onInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    const { username, password } = data;
    // validate before request login to server
    let errors = {};
    if (username == "") {
      errors.username = "Username cann't be blank!";
    }
    if (password == "") {
      errors.password = "Password cann't be blank!";
    }
    if (errors.username || errors.password) {
      // validate failed
      console.log("TEST");
    } else {
      // validate success
      // call api to verify user
      // this.setState({ isLoading: true });
      setIsLoading(true);
      login({
        username,
        password,
      })
        .then((data) => {
          console.log("Data: ", data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error", err);
          setIsLoading(false);
        });
    }
    setErrors(errors);
  };

  return (
    <form className="login-container">
      <h3>Login</h3>
      <h3>{data.username}</h3>
      <h3>{data.password}</h3>
      <label htmlFor="">User name</label>
      <input
        onChange={onInputChange}
        name="username"
        type="text"
        placeholder="Enter Username"
      />
      <span style={{ color: "red" }}>{errors && errors.username}</span>
      <br />
      <label htmlFor="">Password</label>
      <input
        onChange={onInputChange}
        name="password"
        type="password"
        placeholder="Enter password"
      />
      <span style={{ color: "red" }}>{errors.password}</span>
      <br />
      <button disabled={isLoading} onClick={submit}>
        Submit
      </button>
    </form>
  );
};

export default LoginPageFC;
