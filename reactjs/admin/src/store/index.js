import { createStore } from "redux";

const InitialState = {
  auth: {
    name: "",
  },
  counter: {
    value: 0,
  },
};

const reducer = (state = InitialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };
  }
  return state;
};

const store = createStore(reducer, InitialState);

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

export default store;
