import React, { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";

function Cart(props) {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsOrdered(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-http-request-4403a-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userData,
          orderItems: ctx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} // to make sure the correct id is passed
          onAdd={cartItemAddHandler.bind(null, item)} // to make sure the correct item is passed
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClick} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      {isOrdered && (
        <Checkout onCancel={props.onClick} onConfirm={submitOrderHandler} />
      )}
      {!isOrdered && modalActions}
    </>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes.button}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={props.onClick}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
