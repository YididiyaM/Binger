import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/pages/loginPage/LoginPage";
import "./App.css";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
