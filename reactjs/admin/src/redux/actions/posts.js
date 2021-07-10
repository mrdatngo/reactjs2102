import api from "../../apis";
import {
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
} from "../contants";

export const getPosts = () => (dispatch) => {
  // call api
  dispatch({
    type: FETCH_POSTS,
  });
  return api.fetchPosts().then((data) => {
    console.log("data", data);
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        list: data.list,
      },
    });
    return data;
  });
};

export const addPost = () => (dispatch) => {
  dispatch({
    type: ADD_POST,
  });
  api
    .addPost()
    .then((data) => {
      dispatch({
        type: ADD_POST_SUCCESS,
        payload: {
          message: data.message,
        },
      });
    })
    .catch((err) => {
      // console.log(err.response);
      let message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Something went wrong!";
      dispatch({
        type: ADD_POST_FAILED,
        payload: {
          message,
        },
      });
    });
};
