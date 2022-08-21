import React, {useContext} from 'react'
import Navbar from './Navbar';
import Item from "./Item";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './cart';
const ContextCart = () => {
    const { item }= useContext(CartContext);
  return (
    <>
   <div>
    <Navbar/>
   <section className="main-cart-section">
    <h1>Shopping Cart</h1>
    <p className="total-items">your have<span className="total-items-count"> 3 </span> items in shopping cart</p>
    <div className="cart-items">
      <div className="cart-items-container">
        <Scrollbars>
          {
            item.map((curItem)  => {
           return <Item  key={ curItem.id } {...curItem} />
            })
          }
        
        </Scrollbars>
      </div>
    </div>
    <div className="card-total">
      <h3>card Total:<span>--dollars</span></h3>
      <button>Checkout</button>
    </div>
   </section>
   </div>
    </>
  );
};

export default ContextCart;