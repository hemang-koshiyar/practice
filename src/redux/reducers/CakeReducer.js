import { BUY_CAKE } from "../constants";
const initialState = {
  numOfCakes: 10,
};
export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes:
          state.numOfCakes === 0 ? 0 : state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
