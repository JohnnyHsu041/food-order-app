import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Web Title</h2>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
