import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="" onClick={props.hideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="">
      <div className="">{props.children}</div>
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
