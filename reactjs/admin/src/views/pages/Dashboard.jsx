import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { increase, increaseDelay } from "../../redux/actions/counter";
import Posts from "../components/posts/Posts";

const Dashboard = ({ value, increaseMapped, increaseDelay }) => {
  const onBtnClick = () => {
    increaseMapped();
  };

  const onBtnClickAfter1Second = () => {
    increaseDelay();
  };

  return (
    <div>
      <p>Welcome, {} to dashboard</p>
      <hr />
      <Header />
      <br />
      <p>Value in Dashboard: {value}</p>
      <button onClick={onBtnClick}>Increse</button>
      <button onClick={onBtnClickAfter1Second}>Increse after 1 seconds</button>
      <hr />
      <Posts />
    </div>
  );
};

const HeaderTemp = ({ number }) => {
  return <label htmlFor="">Value: {number}</label>;
};

function mapStateToPropsHeader(state) {
  return {
    number: state.counter.value,
  };
}

const Header = connect(mapStateToPropsHeader)(HeaderTemp);

function mapStateToProps(state) {
  return {
    value: state.counter.value,
  };
}

export default connect(mapStateToProps, {
  increaseMapped: increase,
  increaseDelay,
})(Dashboard);
