import { useEffect, useState } from "react";

const useCustomHook = (initializer, component) => {
  const [counter, setCounter] = useState(initializer);
  const resetCounter = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    console.log(`${component} rendered ${counter} times!`);
  }, [counter, component]);
  return resetCounter;
};

export default useCustomHook;
