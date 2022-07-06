import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 300 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>NTD 300</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
