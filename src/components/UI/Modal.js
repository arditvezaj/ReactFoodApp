import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0,0,0,0.75)]"
      onClick={props.hideCart}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[8vh] left-[45vh] w-[40%] z-30 bg-white p-4 rounded-xl shadow-lg">
      <div className="mx-4">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
