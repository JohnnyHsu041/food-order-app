import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce(
    (curNum, item) => curNum + item.amount,
    0
  );

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
