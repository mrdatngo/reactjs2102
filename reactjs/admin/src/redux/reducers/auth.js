import { LOGGIN, LOGGIN_FAILED, LOGGIN_SUCCESS } from "../contants";

const initialState = {
  token: "",
  username: "",
  email: "",
  roles: ["read", "write"],
};

const authReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case LOGGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        email: action.payload.email,
      };
    default:
      return state;
  }
  // return state;
};

export default authReducer;
