import React, { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
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
    </React.Fragment>
  );
};

export default Forms;
