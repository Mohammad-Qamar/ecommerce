import React from "react";
import showcasing from "../../Images/header_img.png";
import "./Homepage.css";
import RandomProducts from "../RandonProducts/RandomProducts";
import WelcomeBanner from "../../WelcomeBanner/WelcomeBanner";



const Homepage = () => {
  return (
    <>
    <WelcomeBanner />
    <div className="Homepage">
      <div className="left-Quote">
        <div className="banner">
          <p className="bestseller-text">  OUR BESTSELLER</p>
          <h1 className="latest-arrivals">Latest Arrivals</h1>
          <p className="shop-now-text">--- SHOP NOW ----</p>
        </div>
      </div>

      <div className="Modelimg">
        <img src={showcasing} alt="Model showcasing fashion" />
       
      </div>
    </div>
    <RandomProducts/>
    </>
  );
};

export default Homepage;
