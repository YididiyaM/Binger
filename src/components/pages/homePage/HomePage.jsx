import React, { useState, useEffect } from "react";
function HomePage() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:4000/usernames";
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    getData();
    console.log(getData);
  }, []);

  return (
    <div className="classname">
      <h1>Home Page </h1>
      <input placeholder="search username" />
      <button>Submit</button>
    </div>
  );
}

export default HomePage;
