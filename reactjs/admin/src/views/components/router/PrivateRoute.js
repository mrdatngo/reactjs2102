import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

const PrivateRoute = ({ isLoggedIn, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log("location: ", location);
        return isLoggedIn ? (
          children
        ) : (
          <Redirect to={`/login?to=${location.pathname}`} />
        );
      }}
    ></Route>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth && state.auth.token,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
