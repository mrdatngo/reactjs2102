import React, { Component } from "react";

import "../styles/Login.css";
import { login } from "../../apis/index";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      address: "",
      errors: {},
      isLoading: false,
    };
  }

  onInputChange = (event) => {
    // this.state.username
    // this.state["username"]
    // if (name == "username") {
    //   this.setState({ username: value });
    // } else if (name === "password") {
    //   this.setState({ password: value });
    // } =>
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log("username: ", username);
    console.log("password: ", password);
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
      this.setState({ isLoading: true });
      login({
        username,
        password,
      })
        .then((data) => {
          console.log("Data: ", data);
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log("error", err);
          this.setState({ isLoading: false });
        });
      // this.setState({ isLoading: false });
    }
    this.setState({ errors });
  };

  render() {
    const { errors, isLoading } = this.state;
    return (
      <form className="login-container">
        <h3>Login</h3>
        <label htmlFor="">User name</label>
        <input
          onChange={this.onInputChange}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <span style={{ color: "red" }}>{errors && errors.username}</span>
        <br />
        <label htmlFor="">Password</label>
        <input
          onChange={this.onInputChange}
          name="password"
          type="password"
          placeholder="Enter password"
        />
        <span style={{ color: "red" }}>{errors.password}</span>
        <br />
        <button disabled={isLoading} onClick={this.submit}>
          Submit
        </button>
      </form>
    );
  }
}

export default LoginPage;
// export { LoginPage };
