// agar mujhe item component mein pass karna hai globally then we will be using contextapi

import React ,{ createContext, useReducer } from 'react';
import './cart.css';
import { productii } from "./productii";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
 export const CartContext = createContext();

const initialState = {
  item:productii,
  totalAmount: 0,
  totalItems: 0,

};

const Cart=() =>{
  //const [item, setItem]= useState(productii);
   const [state,dispatch] = useReducer(reducer, initialState);
  return (
    // we have passed productii as globally means data in any component i can easily access data.// 
  <CartContext.Provider value={{...state}}>
  <ContextCart />
  </CartContext.Provider>
  );
};

export default Cart;
