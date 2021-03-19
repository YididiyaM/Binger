import React, { useState, useEffect } from "react";
import UserSearch from "./components/UserSearch.component";
function HomePage() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:4000/usernames";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="classname">
      <h1>Home Page </h1>
      <UserSearch users={users} />
    </div>
  );
}

export default HomePage;
