import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css.css";

const Notifications = () => {
  const notifySuccess = () => {
    toast.success("Item added to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  };

  const notifyError = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div>
      <button onClick={notifySuccess}>Success</button>
      <button onClick={notifyError}>Error</button>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
