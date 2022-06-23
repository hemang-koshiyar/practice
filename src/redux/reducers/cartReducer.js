import { DEPOSIT_AMT, WITHDRAW_AMT } from "../constants";

const initialState = {
  count: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAW_AMT:
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - action.payload,
      };
    case DEPOSIT_AMT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default: {
      return state;
    }
  }
};
