import React from "react";

import { useHistory, useLocation } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  let location = useLocation();
  console.log("history: ", history);
  console.log("location: ", location);
  return (
    <div>
      <h3>HomePage</h3>
      <button onClick={() => history.goBack()}> Go Back </button>
    </div>
  );
};

export default HomePage;
