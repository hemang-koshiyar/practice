import { WITHDRAW_AMT, DEPOSIT_AMT } from "../constants";
export const withDrawAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: WITHDRAW_AMT,
      payload: amount,
    });
  };
};
export const depositAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: DEPOSIT_AMT,
      payload: amount,
    });
  };
};
export default {withDrawAmount, depositAmount} 