import { INCREASE } from "../contants";

const increase = () => (dispatch) => {
  dispatch({ type: INCREASE });
};

const increaseDelay = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: INCREASE });
  }, 1000);
};

export { increase, increaseDelay };
