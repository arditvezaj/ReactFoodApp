import React from "react";

import logo from "./assets/img/logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-lg bg-slate-200">
      <div className="flex items-center">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <div className="text-2xl font-bold">Restaurant Diti</div>
      </div>
      <div className="flex items-center justify-between w-[20rem] mr-4">
        <div>Menu</div>
        <div>Your Cart</div>
        <div>Login/Register</div>
      </div>
    </div>
  );
};

export default Header;
