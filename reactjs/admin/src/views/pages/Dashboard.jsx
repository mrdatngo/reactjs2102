import React, { useState, useEffect } from "react";
import store from "../../store";

const Dashboard = () => {
  const [value, setValue] = useState(store.getState().counter.value);

  const onBtnClick = () => {
    console.log(store.getState().counter.value);
    // store.increase();
    store.dispatch({ type: "INCREASE" });
    setValue(store.getState().counter.value);
  };

  const onBtnClickAfter1Second = () => {
    // actions
    setTimeout(() => {
      store.dispatch({ type: "INCREASE" });
    }, 1000);

    // udpate state
    setValue(store.getState().counter.value);
  };

  return (
    <div>
      <p>Welcome, {store.getState().auth.name} to dashboard</p>
      <hr />
      <Header />
      <br />
      <p>Value in Dashboard: {value}</p>
      <button onClick={onBtnClick}>Increse</button>
      <button onClick={onBtnClickAfter1Second}>Increse after 1 seconds</button>
    </div>
  );
};

const Header = () => {
  const [value, setValue] = useState(store.getState().counter.value);

  useEffect(() => {
    store.subscribe(() => {
      // console.log("Data trong header: ", state);
      setValue(store.getState().counter.value);
    });
  }, []);

  return <label htmlFor="">Value: {value}</label>;
};

export default Dashboard;
