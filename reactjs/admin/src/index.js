import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import "antd/dist/antd.css";
import "./index.css";
// import AppStudy from "./study/App";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/store";
import { getToken } from "./utils/tokenHandler";
import { LOGGIN } from "./redux/contants";

let token = getToken();
if (token) {
  let decoded = jwt.decode(token);
  if (decoded) {
    console.log("decoded: ", decoded);
    console.log("token: ", token);
    let exp = decoded.exp;
    // check token still valid (current timestamp < expired timestamp)
    if (exp > new Date().getTime() / 1000) {
      let username = decoded.username;
      let email = decoded.email;
      store.dispatch({ type: LOGGIN, payload: { token, username, email } });
    }
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
