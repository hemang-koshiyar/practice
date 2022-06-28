import React, { useState } from "react";

const Forms = () => {
  const [error, setError] = useState(null);
  const onSubmitAction = (value) => {
    return alert(`Username is : ${value}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitAction(event.target.elements.usernameInput.value);
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : "Username must be in lowercase");
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          id="usernameInput"
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error}</div>
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Forms;
