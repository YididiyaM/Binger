import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserSearch({ users }) {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const names = users.map((name) => {
    return name.username;
  });

  useEffect(() => {
    const results = names.filter((val) => {
      if (searchName === "") {
        return false;
      } else if (val.toLowerCase().includes(searchName.toLowerCase())) {
        return val;
      }
    });
    setSearchResult(results);
  }, [searchName]);
  return (
    <div>
      <input
        type="text"
        value={searchName}
        placeholder="search username here"
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <div className="results">
        <Link to="/{:username}">
          <p className="search">{searchResult}</p>
        </Link>
      </div>
    </div>
  );
}
