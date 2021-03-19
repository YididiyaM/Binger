import React, { useState, useEffect } from "react";

export default function UserSearch({ users }) {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState;
  const names = users.map((name) => {
    return name.username;
  });
  return (
    <div>
      <input placeholder="search username here"></input>
    </div>
  );
}
