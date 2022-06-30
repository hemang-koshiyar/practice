import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake } from "./redux/actions";
const MyComponent = ({ numOfCakes, buy_Cake }) => {
  //   const cakes = useSelector((state) => state.cake.numOfCakes);
  //   const dispatch = useDispatch();
  //   const buy_cake = bindActionCreators(buyCake, dispatch);

  return (
    <div>
      <h2>Cake Shop</h2>
      <h3>Num of cakes available: {numOfCakes}</h3>
      <button onClick={buy_Cake}>Buy Cake</button>
    </div>
  );
};

const mapStateWithProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchWithProps = (dispatch) => {
  return {
    buy_Cake: () => dispatch(buyCake(1)),
  };
};

export default connect(mapStateWithProps, mapDispatchWithProps)(MyComponent);
