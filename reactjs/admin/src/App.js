import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./views/pages/LoginPage";
import DefaultLayout from "./views/layout/DefaultLayout";
import Page404 from "./views/pages/Page404";

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
        <Route path="/">
          <DefaultLayout routes={routes} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
