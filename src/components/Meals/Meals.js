import React, { useState, useRef, useEffect, useContext } from "react";

import CartContext from "../../store/cart-context";

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

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

    addToCartHandler(enteredAmountNumber);
  };

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
        <li className="my-5 w-[90%]" key={meal.id}>
          <div className="flex justify-between">
            <div>
              <div className="font-bold">{meal.name}</div>
              <div className="italic">{meal.description}</div>
              <div className="text-orange-500 font-bold">
                ${meal.price.toFixed(2)}
              </div>
            </div>
            <div>
              <form onSubmit={submitHandler}>
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

                <button className="bg-orange-800 hover:bg-orange-700 text-white rounded-xl border px-6 py-1">
                  + Add
                </button>
              </form>
            </div>
          </div>
          <hr className="mt-3" />
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </li>
      ))}
    </ul>
  );

  return content;
};

export default Meals;
