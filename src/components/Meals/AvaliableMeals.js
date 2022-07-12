import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvaliableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 40,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 100,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 180,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 90,
//   },
// ];

function AvaliableMeals() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-request-4403a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();

      const loadedData = [];
      for (let key in data) {
        loadedData.push({ id: key, ...data[key] });
      }

      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{isLoading ? <p>Loading...</p> : <ul>{mealList}</ul>}</Card>
    </section>
  );
}

export default AvaliableMeals;
