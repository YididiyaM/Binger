import React, { useState, useEffect } from "react";
import UserSearch from "./homePage.components/UserSearch.component";
import NavBar from "..//../components/navBar/NavBar";
import LoginPage from "../loginPage/LoginPage";
function HomePage() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:4000/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="classname">
      <NavBar />
      <h1>Home Page </h1>
      <UserSearch users={users} />
    </div>
  );
}

export default HomePage;
