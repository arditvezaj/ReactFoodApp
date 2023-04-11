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
    <ul className="">
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
      <div className="">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="">
        <button onClick={props.hideCart} className="">
          Close
        </button>
        {hasItems && (
          <button onClick={orderMeal} className="">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
