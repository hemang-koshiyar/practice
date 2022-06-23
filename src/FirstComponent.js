import React from "react";
import useCustomHook from "./useCustomHook";
const FirstComponent = () => {
  const clickedButton = useCustomHook(0, "First Component");
  return (
    <div>
      <h3>Hello I'm First Component</h3>
      <button onClick={clickedButton}>Inspect Count</button>
    </div>
  );
};

export default FirstComponent;
