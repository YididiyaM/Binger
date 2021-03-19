import React, { useState, useEffect } from "react";

export default function UserSearch({ users }) {
  const [searchName, setSearchName] = useState("");
  const names = users.map((name) => {
    return name.username;
  });
  console.log(names);
  return (
    <div>
      <input
        type="text"
        placeholder="search username here"
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      {names.filter((val) => {
        if (searchName == "") {
          return "No user by that name";
        } else if (val.toLowerCase().includes(searchName.toLowerCase())) {
          return val;
        }
      })}
    </div>
  );
}
