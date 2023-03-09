import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
/** all the actions are
 *  defined
 *  in constants components */
export const addToCart = (data) => {
  // console.warn("action", data);
  return {
    type: ADD_TO_CART,
    data: data
  };
};

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART
  };
};
