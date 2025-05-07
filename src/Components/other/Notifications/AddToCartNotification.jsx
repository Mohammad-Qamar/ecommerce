import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Howl } from "howler";
import "react-toastify/dist/ReactToastify.css";
import "./css.css";

const AddToCartNotification = () => {
  const successSound = new Howl({
    src: ["success.mp3"], // Add the success sound file here
    volume: 0.5,
  });

  const handleAddToCart = () => {
    toast.success("Item added to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
    successSound.play();
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ToastContainer />
    </div>
  );
};

export default AddToCartNotification;
