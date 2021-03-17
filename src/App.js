import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/pages/loginPage/LoginPage";
import HomePage from "./components/pages/homePage/HomePage";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
