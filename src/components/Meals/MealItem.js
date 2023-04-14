import React, { useContext, useState, useRef } from "react";

import CartContext from "../../store/cart-context";

const MealItem = (props) => {
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

  return (
    <li className="my-4 w-[90%]" key={props.id}>
      <div className="flex justify-between">
        <div>
          <div className="font-bold">{props.name}</div>
          <div className="italic">{props.description}</div>
          <div className="text-orange-500 font-bold">
            ${props.price.toFixed(2)}
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
  );
};

export default MealItem;
