import React from "react";

import logo from "../assets/img/logo.jpg";
import cartIcon from "../assets/img/headericon.svg";
const Header = () => {
  return (
    <div className="py-3 flex justify-between items-center font-bold text-white text-lg bg-orange-800">
      <div className="flex items-center">
        <a href="/">
          <img className="w-20 h-20 ml-3 rounded-full" src={logo} alt="logo" />
        </a>
        <div className="text-2xl ml-4">Restaurant Diti</div>
      </div>
      <div className="flex items-center justify-between w-[28rem] mr-16">
        <a href="/menu">Menu</a>
        <a
          href="/your-cart"
          className="py-2 px-5 flex items-center rounded-3xl bg-[#4e4e4e]"
        >
          <img className="w-5 h-5 mr-1 " src={cartIcon} alt="cartIcon" />
          <span>Your Cart</span>
          <span className="px-4 my-1 ml-2 bg-orange-700 rounded-2xl  font-bold">
            1
          </span>
        </a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
