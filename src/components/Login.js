import React from "react";

const Login = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl mt-6">Login</div>
      <form className="flex flex-col justify-between items-center m-4 mt-10 text-base">
        <div className="flex flex-col w-[17rem]">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="px-2 border mt-2 h-8 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4 w-[17rem]">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="px-2 border mt-2 h-8 rounded-md"
          />
        </div>
        <button
          className="mt-4 border w-[17rem] h-10 rounded-md bg-gray-300 hover:bg-gray-200"
          type="submit"
        >
          Login
        </button>
        <a
          href="/register"
          className="flex items-center justify-center mt-4 border w-[17rem] h-10 rounded-md  hover:border-gray-500"
        >
          Register
        </a>
      </form>
    </>
  );
};

export default Login;
