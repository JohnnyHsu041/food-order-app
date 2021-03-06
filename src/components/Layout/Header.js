import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/feast.jpeg";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Foodie</h2>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
