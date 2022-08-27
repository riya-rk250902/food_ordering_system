import React, { useContext } from 'react'
import Navbar from './Navbar';
import Item from "./Item";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './cart';
const ContextCart = () => {
    const { item, totalAmount,totalItems }= useContext(CartContext);
    
    if(item.length === 0) {
  return (
    <> 
    <Navbar/>
   <section className="main-cart-section">
    <h1>Shopping Cart</h1>
    <p className="total-items">
      you have <span className="total-items-count"> {totalItems} </span>{" "} 
      items in shopping cart
      </p>
      </section>
      </>
      );
  }

  return (
    <>
    <Navbar/>
    <section className="main-cart-section">
      <h1>shopping Cart</h1>
      <p className="total-items">
        you have <span className="total-items-count">{ totalItems } </span> items
       in shopping cart
      </p>
    <div className="cart-items">
      <div className="cart-items-container">
        <Scrollbars>
          {
            item.map((curItem)  => {
           return <Item  key={ curItem.id } {...curItem} />;
            })}
        </Scrollbars>
      </div>
    </div>
    <div className="card-total">
      <h3>
        cart Total: <span>{totalAmount}$</span>
        </h3>
      <button>Checkout</button>
    </div>
   </section>
  </>
  );
};

export default ContextCart;