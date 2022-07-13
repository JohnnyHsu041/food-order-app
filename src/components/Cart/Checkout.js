import React from "react";

import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isThreeChars = (value) => value.trim().length === 3;

function Checkout(props) {
  const {
    enteredValue: enteredName,
    valueBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    valueInputHasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredStreet,
    valueBlurHandler: streetBlurHandler,
    valueIsValid: streetIsValid,
    valueInputHasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredPostal,
    valueBlurHandler: postalBlurHandler,
    valueIsValid: postalIsValid,
    valueInputHasError: postalInputHasError,
    valueChangeHandler: postalChangeHandler,
  } = useInput(isThreeChars);

  const {
    enteredValue: enteredCity,
    valueBlurHandler: cityBlurHandler,
    valueIsValid: cityIsValid,
    valueInputHasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
  } = useInput(isNotEmpty);

  let formIsValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const userData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    };

    props.onConfirm(userData);
  };

  const nameInputClasses = nameInputHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const streetInputClasses = streetInputHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const postalInputClasses = postalInputHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const cityInputClasses = cityInputHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onBlur={streetBlurHandler}
          onChange={streetChangeHandler}
        ></input>
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal code</label>
        <input
          type="text"
          id="postal"
          onBlur={postalBlurHandler}
          onChange={postalChangeHandler}
        ></input>
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onBlur={cityBlurHandler}
          onChange={cityChangeHandler}
        ></input>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          disabled={!formIsValid}
          type="submit"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
