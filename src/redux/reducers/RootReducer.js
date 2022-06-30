import { combineReducers } from "redux";
import { CakeReducer } from "./CakeReducer";

export const RootReducer = combineReducers({
  cake: CakeReducer,
});
