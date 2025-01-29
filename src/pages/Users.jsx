// Users.js
import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Users = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <UserForm />
      <UserList />
    </div>
  );
};

export default Users;
