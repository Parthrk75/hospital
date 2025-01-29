// UserList.js
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users"
        className="p-2 border rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <li key={user.id} className="p-2 border-b">{user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
