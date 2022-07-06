import React from "react";

import classes from "./Meals.module.css";
import MealSummary from "./MealSummary";
import AvaliableMeals from "./AvaliableMeals";

function Meals() {
  return (
    <>
      <MealSummary />
      <AvaliableMeals />
    </>
  );
}

export default Meals;
