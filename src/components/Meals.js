import React, { useState, useRef } from "react";

const Meals = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = () => {
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };

  const dummy_meals = [
    {
      id: "m1",
      name: "Sea Fish",
      description: "Fresh sea fishes and others",
      price: 10.99,
    },
    {
      id: "m2",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 20.99,
    },
    {
      id: "m3",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.59,
    },
    {
      id: "m4",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
  ];
  return (
    <ul>
      {dummy_meals.map((meal) => (
        <li className="mt-5 ml-4" key={meal.id}>
          <div>Name: {meal.name}</div>
          <div>Description: {meal.description}</div>
          <div>Price: {meal.price}</div>
          <input
            ref={amountInputRef}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
            className="border mr-2"
          />
          <button
            onClick={submitHandler}
            className="bg-slate-200 rounded-md border p-2"
          >
            + Add
          </button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </li>
      ))}
    </ul>
  );
};

export default Meals;
