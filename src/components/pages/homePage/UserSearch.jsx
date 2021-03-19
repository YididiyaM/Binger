import React from "react";

export default function UserSearch({ users }) {
  const names = users.map((name) => {
    return name.username;
  });
  return (
    <div>
      <input placeholder="username here"></input>
      <button> Submit </button>
      <h2></h2>
    </div>
  );
}
