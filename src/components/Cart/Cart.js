import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    console.log("Ordering...");
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-d6fb6-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const modalActions = (
    <div className="text-right">
      <button
        onClick={props.hideCart}
        className="cursor-pointer bg-transparent border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 text-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
      >
        Close
      </button>
      {hasItems && (
        <button
          onClick={orderHandler}
          className="cursor-pointer border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] bg-[#8a2b06] text-white"
        >
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-lg mb-6 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.hideCart} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <div className="flex justify-between items-center">
      <p>Successfully sent your order!</p>
      <button
        onClick={props.hideCart}
        className="cursor-pointer bg-[#8a2b06] py-2 px-8 rounded-3xl ml-4 text-white hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
      >
        Close
      </button>
    </div>
  );

  return (
    <Modal hideCart={props.hideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
