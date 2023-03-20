import React from "react";

const Login = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl mt-6">Login</div>
      <form className="flex flex-col justify-between items-center m-4 mt-10 text-base">
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className="border mt-2" />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="border mt-2" />
        </div>
        <button className="mt-4 border w-44 h-10 rounded-md bg-gray-300 hover:bg-gray-200" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
