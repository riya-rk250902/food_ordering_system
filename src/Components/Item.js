import React, { useContext } from "react";
import { CartContext } from "./cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="image" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}>
          <img src="./images/minus.png" alt="add" className="sign-minus" />
          </i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}>
          <img src="./images/add.png" alt="minus" className="sign-plus"/>
          </i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}>
              <img src="./images/delete.png" alt="trash" className="trash-can"/>
            </i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;