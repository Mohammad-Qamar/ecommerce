import React from "react";
import { useLocation } from "react-router-dom"; // Import hook for route checking
import iconeep from "../icons/exchange_icon.png";
import iconrp from "../icons/quality_icon.png";
import iconcs from "../icons/support_img.png";
import "./Bottom.css";



const Bottom = () => {
  const location = useLocation(); // Get current path

  if (location.pathname !== "/") return null; // Hide component if not on home page

  return (
    <div className="Bottommain">
      <div className="bottom">
        <div className="block1">
          <img src={iconeep} alt="Exchange Policy Icon" />
          <h3>Easy Exchange Policy</h3>
          <p>We Offer hassle-free exchange policy</p>
        </div>

        <div className="block2">
          <img src={iconrp} alt="Return Policy Icon" />
          <h3>7 Days Return Policy</h3>
          <p>We Provide 7 Free Return Policy</p>
        </div>

        <div className="block3">
          <img src={iconcs} alt="Customer Support Icon" />
          <h3>Best Customer Support</h3>
          <p>We Provide 24/7 Customer Support</p>
        </div>
      </div>

      <div className="SUBSCRIBEbutton">
        <h2>Do SUBSCRIBE Now & get up to 20% off</h2>
        <div className="subscribe-input">
          <input type="text" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <small>Stay updated with our latest offers & updates</small>
      </div>
    </div>
  );
};

export default Bottom;
