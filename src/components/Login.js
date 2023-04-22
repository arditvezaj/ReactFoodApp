import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailHandler = (event) => {
    if (event.target.value.trim().length > 1) {
      setEmailIsValid(true);
    }
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    if (event.target.value.trim().length > 1) {
      setPasswordIsValid(true);
    }
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().length < 5 || !enteredEmail.includes("@")) {
      setEmailIsValid(false);
      return;
    } else if (enteredPassword.trim().length < 6) {
      setPasswordIsValid(false);
      return;
    }
    props.login();
  };

  return (
    <>
      <div className="text-center text-white font-bold text-2xl">Login</div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-white pb-14 pt-10 rounded-xl mt-[25vh] bg-orange-800 w-[30%] mx-auto text-base"
      >
        <div className="text-center text-white font-bold text-2xl">Login</div>
        <div className="flex flex-col w-[20rem] mt-6">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="px-2 border mt-2 h-10 rounded-md text-black"
            onChange={emailHandler}
            value={enteredEmail}
          />
          {!emailIsValid && (
            <p className="text-yellow-300">Please enter a valid email!</p>
          )}
        </div>
        <div className="flex flex-col mt-6 w-[20rem] ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="px-2 border mt-2 h-10 rounded-md text-black"
            onChange={passwordHandler}
            value={enteredPassword}
          />
          {!passwordIsValid && (
            <p className="text-yellow-300">Please enter a valid email!</p>
          )}
        </div>
        <button className="mt-6 w-[20rem] h-10 rounded-md text-black bg-orange-400 hover:bg-gray-200">
          Login
        </button>
        <NavLink
          to="/"
          className="flex items-center justify-center mt-6 border w-[20rem] h-10 rounded-md  hover:border-gray-500"
        >
          Register
        </NavLink>
      </form>
    </>
  );
};

export default Login;
