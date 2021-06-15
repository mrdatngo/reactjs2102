import LoginPage from "./views/pages/LoginPage";
import LoginPageFC from "./views/pages/LoginPageFC";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./views/components/Blog";
import HomePage from "./views/pages/HomePage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/loginfc">LoginFC</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/blog/:id">
          <Blog />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/home/helloworld">Hello world</Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/loginfc">
          <LoginPageFC />
        </Route>
        <Route path="/home">Not found in home</Route>
        <Route exact path="/">
          Not found page
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
