import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "./redux/actions";

const App = () => {
  const amount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const { withDrawAmount, depositAmount } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <button onClick={() => withDrawAmount(100)}>-</button>
      <span>{amount}</span>
      <button onClick={() => depositAmount(100)}>+</button>
    </div>
  );
};

export default App;
