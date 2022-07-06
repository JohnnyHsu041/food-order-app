import React from "react";

import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

function CartButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
