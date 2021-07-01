import { LOGGIN } from "../contants";
import api from "../../apis";
import { saveToken } from "../../utils/tokenHandler";

const login = (data) => (dispatch) => {
  // call api
  return api.login(data).then((data) => {
    console.log("data: ", data);
    // login successed
    // => store token localstorage
    saveToken(data.token);
    let token = data.token;
    let username = data.username;
    let email = data.email;
    dispatch({ type: LOGGIN, payload: { token, username, email } });
    // history.push("/home"); can't use in outside component
    // window.location = "/home";
  });
};

export { login };
