import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import CartContext from "../../store/cart-context";

import logo from "../../assets/img/logo.jpg";
import cartIcon from "../../assets/img/headericon.svg";

const Header = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  let numberOfCartItems = 0;

  if (props.isAuth === false) {
    numberOfCartItems = 0;
  } else {
    numberOfCartItems = items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
    }, 0);
  }

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, cartCtx]);

  const btnClasses = "px-4 my-1 ml-2 bg-orange-700 rounded-2xl font-bold";

  return (
    <div className="fixed top-0 left-0 w-full py-3 flex justify-between items-center font-bold text-white text-lg bg-orange-800">
      <div className="flex items-center justify-center">
        <NavLink to="/">
          <img
            className="w-24 h-24 object-cover ml-3 rounded-full"
            src={logo}
            alt="logo"
          />
        </NavLink>
        <div className="text-2xl ml-4">
          <NavLink to="/">Restaurant</NavLink>
        </div>
      </div>
      <div className="flex items-center justify-between w-[28rem] mr-16">
        <NavLink to="/menu">Menu</NavLink>
        <div
          onClick={props.showCart}
          className="py-2 px-5 cursor-pointer flex items-center rounded-3xl bg-[#4e4e4e]"
        >
          <img className="w-5 h-5 mr-1 " src={cartIcon} alt="cartIcon" />
          <span>Your Cart</span>
          <span
            className={`${btnClasses} ${
              btnIsHighlighted ? "animate-[bump_300ms_ease-out]" : ""
            }`}
          >
            {numberOfCartItems}
          </span>
        </div>
        {props.isAuth ? (
          <button onClick={() => props.logout()}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
