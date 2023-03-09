import { combineReducers } from "redux";
import cartItems from "./Reducer";
// this is the root reducer componet which takes all the reducers inside one function
export default combineReducers({
  cartItems
});
