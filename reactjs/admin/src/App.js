import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./views/pages/LoginPage";
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
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
