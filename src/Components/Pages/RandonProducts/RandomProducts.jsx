import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./RandomProducts.css";
import productData from "../../../Components/Images/data/products";

const RandomProducts = () => {
  const [latestCollection, setLatestCollection] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLatestCollection(productData.latest.slice(0, 10));
    setBestSeller(productData.bestSeller.slice(0, 5));
  }, []);

  return (
    <div className="random-products">
      <div className="latest-collection">
        <h2>LATEST COLLECTION</h2>
        <div className="products-grid latest">
          {latestCollection.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="product-img"
              onClick={() => navigate(`/product/${product.id}`)} // Navigate to ProductPage
            />
          ))}
        </div>
      </div>

      <div className="best-seller">
        <h2>BEST SELLER</h2>
        <div className="products-grid best">
          {bestSeller.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="product-img"
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomProducts;
