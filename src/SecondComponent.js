import React from "react";
import useCustomHook from "./useCustomHook";

const SecondComponent = () => {
  const clickedButton = useCustomHook(0, "Second Component");
  return (
    <div>
      <h3>Hello I'm Second Component</h3>
      <button onClick={clickedButton}>Inspect Count</button>
    </div>
  );
};

export default SecondComponent;
