// import axios from "axios";
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: { ...item, quantity: 1 },
  };
};
export const increment = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};
export const decrement = (id, quantity) => {
  if (quantity === 1) {
    return {
      type: "REMOVE_FROM_CART",
      payload: id,
    };
  }
  return {
    type: "DECREMENT",
    payload: id,
  };
};
export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
