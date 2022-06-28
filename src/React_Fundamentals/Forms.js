import React, { useEffect, useState } from "react";

const Forms = () => {
  // const getInitialValueName = () => {
  //   return localStorage.getItem("name") || "";
  // };
  console.log("rendering...");
  const [username, setUsername] = useState(
    () => localStorage.getItem("name") || ""
  );
  const [count, setCount] = useState(0);
  const onSubmitAction = (value) => {
    return alert(`Username is : ${value}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitAction(event.target.elements.usernameInput.value);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value.toLowerCase());
  };
  useEffect(() => {
    console.log("rendering useEffect...");
    localStorage.setItem("name", username);
  },[username]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          id="usernameInput"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </React.Fragment>
  );
};

export default Forms;
