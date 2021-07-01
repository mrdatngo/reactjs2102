import { INCREASE } from "../contants";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
  // return state;
};

export default counterReducer;
