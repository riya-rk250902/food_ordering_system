// here we have applied our logic of incr, decr, clear,update the data.

import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { productii } from "./productii";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: productii,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;