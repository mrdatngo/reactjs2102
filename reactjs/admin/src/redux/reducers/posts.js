import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
} from "../contants";

const initialState = {
  list: [],
  addPost: {
    success: true,
    message: "",
    loading: false,
  },
  getPost: {
    success: true,
    data: {},
    message: "",
    loading: false,
  },
  updatePost: {
    success: true,
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
          success: true,
          message: "",
          loading: true,
        },
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPost: {
          success: true,
          message: action.payload.message,
          loading: false,
        },
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        addPost: {
          success: false,
          message: action.payload.message,
          loading: false,
        },
      };

    case FETCH_POST:
      return {
        ...state,
        getPost: {
          success: true,
          data: {},
          message: "",
          loading: true,
        },
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        getPost: {
          success: true,
          data: action.payload.data,
          message: action.payload.message,
          loading: false,
        },
      };
    case FETCH_POST_FAILED:
      return {
        ...state,
        getPost: {
          success: false,
          data: {},
          message: action.payload.message,
          loading: false,
        },
      };

    case UPDATE_POST:
      return {
        ...state,
        updatePost: {
          success: true,
          message: "",
          loading: true,
        },
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        updatePost: {
          success: true,
          message: action.payload.message,
          loading: false,
        },
      };
    case UPDATE_POST_FAILED:
      return {
        ...state,
        updatePost: {
          success: false,
          message: action.payload.message,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export default postsReducer;
