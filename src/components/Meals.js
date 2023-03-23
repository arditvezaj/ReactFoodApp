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
    <ul className="flex flex-col justify-center items-center my-10 bg-white rounded-xl w-[60%] m-auto">
      {dummy_meals.map((meal) => (
        <li className="my-5 w-[90%]" key={meal.id}>
          <div className="flex justify-between">
            <div>
              <div className="font-bold">{meal.name}</div>
              <div className="italic">{meal.description}</div>
              <div className="text-orange-500 font-bold">${meal.price}</div>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="font-bold mr-2">Amount</div>
                <input
                  ref={amountInputRef}
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  defaultValue="1"
                  className="border text-right"
                />
              </div>

              <button
                onClick={submitHandler}
                className="bg-orange-800 text-white rounded-xl border px-6 py-1"
              >
                + Add
              </button>
            </div>
          </div>
          <hr className="mt-3" />
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </li>
      ))}
    </ul>
  );
};

export default Meals;
