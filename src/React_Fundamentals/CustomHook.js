import React, { useEffect, useState } from "react";
const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      return await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.slice(0, 40)))
        .catch((err) => console.log(err));
    })();
  }, []);
  return [users];
};
const CustomHook = () => {
  const [users] = useFetchUsers();
  return (
    <div>
      {users.map((user) => {
        return (
          <ul>
            <li key={user.id}>{user.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CustomHook;
