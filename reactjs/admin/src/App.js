import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./views/pages/LoginPage";
import DefaultLayout from "./views/layout/DefaultLayout";
import Page404 from "./views/pages/Page404";
import PrivateRoute from "./views/components/router/PrivateRoute";

import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/page404">
          <Page404 />
        </Route>
        <PrivateRoute path="/">
          <DefaultLayout routes={routes} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
