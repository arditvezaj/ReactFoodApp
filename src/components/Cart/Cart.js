import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="m-0 p-0 max-h-[20rem] overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderMeal = () => {
    console.log("Ordering...");
    props.hideCart();
  };

  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-base my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.hideCart}
          className="cursor-pointer bg-transparent border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 text-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
        >
          Close
        </button>
        {hasItems && (
          <button
            onClick={orderMeal}
            className="cursor-pointer bg-transparent border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 text-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] text-white"
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
