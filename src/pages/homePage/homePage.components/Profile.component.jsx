import React, { useState, useEffect } from "react";

export default function Profile() {
  const [description, setDescription] = useState([]);
  const url = "http://localhost:4000/profiles";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
}
