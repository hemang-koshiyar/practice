import React from "react";
import { Link, Outlet } from "react-router-dom";
const Users = () => {
  let users = [
    {
      id: 1,
      name: "Hemang",
    },
    {
      id: 2,
      name: "Abhishek",
    },
    {
      id: 3,
      name: "Mihir",
    },
    {
      id: 4,
      name: "Pranav",
    },
  ];
  const random = Math.floor(Math.random() * users.length + 1);
  return (
    <React.Fragment>
      <Link to={`${random}`}>User</Link>
      {users.map((user) => {
        return (
          <ul>
            <li key={user.id}>{user.name}</li>
          </ul>
        );
      })}
      <Outlet />
    </React.Fragment>
  );
};
export default Users;
