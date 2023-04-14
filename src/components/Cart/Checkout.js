import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form
      className="mt-4 mx-0 h-full overflow-auto flex flex-col"
      onSubmit={confirmHandler}
    >
      <div className="mb-2">
        <label className="font-bold mb-1 block" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          className="border-2 border-slate-200 rounded w-[20rem] max-w-full"
        />
        {!formInputsValidity.name && (
          <p className="text-red-500 text-sm">Please enter a valid name.</p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-bold mb-1 block" htmlFor="street">
          Street
        </label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          className="border-2 border-slate-200 rounded w-[20rem] max-w-full"
        />
        {!formInputsValidity.street && (
          <p className="text-red-500 text-sm">Please enter a valid street.</p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-bold mb-1 block" htmlFor="postal">
          Postal Code
        </label>
        <input
          type="text"
          id="postal"
          ref={postalCodeInputRef}
          className="border-2 border-slate-200 rounded w-[20rem] max-w-full"
        />
        {!formInputsValidity.postalCode && (
          <p className="text-red-500 text-sm">
            Please enter a valid postal code.
          </p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-bold mb-1 block" htmlFor="city">
          City
        </label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          className="border-2 border-slate-200 rounded w-[20rem] max-w-full"
        />
        {!formInputsValidity.city && (
          <p className="text-red-500 text-sm">Please enter a valid city.</p>
        )}
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={props.onCancel}
          type="button"
          className="text-[#5a1a01] cursor-pointer hover:bg-[#ffe6dc] bg-transparent border-none rounded-3xl py-2 px-8"
        >
          Cancel
        </button>
        <button className="border-[#5a1a01] bg-[#5a1a01] text-white rounded-3xl hover:bg-[#7a2706] py-2 px-8">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
