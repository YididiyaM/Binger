import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/logout"> Logout </Link>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile </Link>
    </div>
  );
}
