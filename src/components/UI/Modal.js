import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("modaloverlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modaloverlay-root")
      )}
    </>
  );
}

export default Modal;
