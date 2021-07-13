import api from "../../apis";
import {
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
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

export const addPost = (data) => (dispatch) => {
  dispatch({
    type: ADD_POST,
  });
  api
    .addPost(data)
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

// handle update post

export const getPostAction = (id) => (dispatch) => {
  // call api
  dispatch({
    type: FETCH_POST,
  });
  return api
    .fetchPost(id)
    .then((data) => {
      console.log("data", data);
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: {
          data: data.data,
          message: "Get post success!",
        },
      });
      return data;
    })
    .catch(() => {
      dispatch({
        type: FETCH_POST_FAILED,
        payload: {
          message: "Something went wrong!",
        },
      });
    });
};

export const updatePostAction = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_POST,
  });
  api
    .updatePost(data)
    .then((data) => {
      dispatch({
        type: UPDATE_POST_SUCCESS,
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
        type: UPDATE_POST_FAILED,
        payload: {
          message,
        },
      });
    });
};
