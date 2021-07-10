import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
} from "../contants";

const initialState = {
  list: [],
  addPost: {
    message: "",
    loading: false,
  },
};

function postsReducer(state = initialState, action) {
  // console.log("action: ", action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        list: [],
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
      };

    case ADD_POST:
      return {
        ...state,
        addPost: {
          message: "",
          loading: true,
        },
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPost: {
          message: action.payload.message,
          loading: false,
        },
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        addPost: {
          message: action.payload.message,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export default postsReducer;
