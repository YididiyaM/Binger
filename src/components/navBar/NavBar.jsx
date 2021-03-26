import React from "react";
import { Link } from "react-router-dom";
import navBar from "./navBar.css";
export default function NavBar() {
  return (
    <div className="nav-container">
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile </Link>
      <Link to="/logout"> Logout </Link>
    </div>
  );
}
