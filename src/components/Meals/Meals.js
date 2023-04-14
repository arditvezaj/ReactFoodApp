import React, { useState, useEffect } from "react";

import MealItem from "./MealItem";

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-d6fb6-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const content = isLoading ? (
    <section className="bg-white mx-auto mt-4 w-[15%] py-4 rounded-md">
      <p className="text-orange-900 text-center text-lg font-semibold">
        Loading...
      </p>
    </section>
  ) : httpError ? (
    <section className="bg-white mx-auto mt-4 w-[20%] py-4 rounded-md">
      <p className="text-red-600 text-center text-lg font-semibold">
        {httpError}!
      </p>
    </section>
  ) : (
    <ul className="flex flex-col justify-center items-center my-10 bg-white rounded-xl w-[60%] m-auto">
      {meals.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );

  return content;
};

export default Meals;
