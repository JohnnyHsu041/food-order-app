import { useState } from "react";

export default function useInput(validateFn) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const valueInputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    enteredValue,
    valueIsValid,
    valueInputHasError,
    valueChangeHandler,
    valueBlurHandler,
  };
}
