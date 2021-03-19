import React from "react";

export default function UserSearch({ users }) {
  console.log(users.filter((x) => x.username === "Hey"));
  return (
    <div>
      <input placeholder="username here"></input>
      <button> Submit </button>
      <h2></h2>
    </div>
  );
}
