import React from "react";

import logo from "../assets/img/logo.jpg";
import cartIcon from "../assets/img/headericon.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center text-lg bg-slate-200">
      <div className="flex items-center">
        <a href="/">
          <img className="w-20 h-20" src={logo} alt="logo" />
        </a>
        <div className="text-2xl font-bold">Restaurant Diti</div>
      </div>
      <div className="flex items-center justify-between w-[18rem] mr-10">
        <a href="/menu">Menu</a>
        <a href="/your-cart" className="flex">
          <img className="w-8 h-8 mr-1" src={cartIcon} />
          <span>Your Cart</span>
          <span className="p-2 rounded-md  font-bold">1</span>
        </a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
