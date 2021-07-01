import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const InitialState = {
  auth: {
    name: "",
  },
  counter: {
    value: 0,
  },
  posts: {},
  feedback: {},
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
// const store = {
//   state: state,
//   cbs: [],
//   increase: () => {
//     state.counter.value++;
//     store.dispatch();
//   },
//   dispatch: () => {
//     // call all subscribe
//     store.cbs.forEach((cb) => {
//       cb(state);
//     });
//   },
//   subscribe: (cb) => {
//     store.cbs.push(cb);
//   },
//   getState: () => {
//     return store.state;
//   },
// };

// export default store;
