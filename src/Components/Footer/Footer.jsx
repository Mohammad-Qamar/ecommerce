import React from "react";
import logo from "../../Components/Logo/short_Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p className="about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            magni modi consequatur eveniet optio ipsam earum velit asperiores
            obcaecati. Voluptate praesentium non quod quia recusandae error ab
            corrupti corporis vitae.
          </p>
        </div>


          <div className="footer-links">
            <h1>CLOTHKING'S</h1>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/">Delivery</a>
            <a href="/">Privacy Policy</a>
          </div>

          <div className="footer-contact">
            <h1>GET IN TOUCH</h1>
            <a href="/">+1-212-456-7890</a>
            <a href="/">controlroom@gmail.com</a>
          </div>
        </div>


      <div className="footer-copy">
        <hr />
        <small>All Copyright @2025 - Clothking's</small>
      </div>
    </div>
  );
};

export default Footer;
