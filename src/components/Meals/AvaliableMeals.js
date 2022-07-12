import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvaliableMeals.module.css";

function AvaliableMeals() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-request-4403a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) throw new Error();

      const data = await response.json();

      const loadedData = [];
      for (let key in data) {
        loadedData.push({ id: key, ...data[key] });
      }

      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>Loading...</p>
        </Card>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>{httpError}</p>
        </Card>
      </section>
    );
  }

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
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default AvaliableMeals;
