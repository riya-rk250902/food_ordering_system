// agar mujhe item component mein pass karna hai globally then we will be using contextapi

import React ,{ createContext, useEffect, useReducer } from "react";
import './cart.css';
import { productii } from "./productii";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

// create a context
 export const CartContext = createContext();

const initialState = {
  item: productii,
  totalAmount: 0,
  totalItems: 0,
   
};
const Cart=() =>{
  //const [item, setItem]= useState(productii);
   const [state,dispatch] = useReducer(reducer, initialState);
  
   // to delete the individ.. element from an Item cart
   
  const removeItem =(id) => {
   return dispatch({
    type:"REMOVE_ITEM",
    payload:id,
   });
   };

   // increment the item 
   const increment =(id) => {
    return dispatch({
      type:"INCREMENT",
      payload: id,
    });
   };

   // decrement the item
   const decrement =(id) => {
    return dispatch({
      type:"DECREMENT",
      payload:id,
    });
   };

   // we will use the useEffect to update the data 
   useEffect(() => {
    dispatch({ type:"GET_TOTAL" });
    //console.log( "items added/removed in cart" );
   },[state.item]);

  return (
    // we have passed productii as globally means data in any component i can easily access data.// 
  <CartContext.Provider 
  value={{ ...state, removeItem, increment, decrement }}>
  <ContextCart />
  </CartContext.Provider>
  );
};

export default Cart;
