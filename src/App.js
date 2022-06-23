import React, { useRef, useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import useRandomJoke from "./useRandomJoke";

const App = () => {
  const [firstName, setFirstName] = useState("Hemang");
  const [lastName, setLastName] = useState("Koshiyar");
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const joke = useRandomJoke(firstName, lastName);
  const getJoke = () => {
    setFirstName(firstRef.current.value);
    setLastName(lastRef.current.value);
  };
  return (
    <React.Fragment>
      <h1> useRandomJoke</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <input type="text" placeholder="Enter your first name" ref={firstRef} />
        <input type="text" placeholder="Enter your last name" ref={lastRef} />
        <button onClick={getJoke}>Generate Joke</button>
      </div>
      <center>
        <h3>{joke}</h3>
      </center>
      <br />
      <h1> useCustomHook</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FirstComponent />
        <SecondComponent />
      </div>
    </React.Fragment>
  );
};

export default App;
