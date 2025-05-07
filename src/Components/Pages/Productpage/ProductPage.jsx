import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import productData from "../../Images/data/products";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    if (!productId) return; // Avoid errors if productId is undefined

    const foundProduct =
      productData?.latest?.find((p) => p.id === parseInt(productId)) ||
      productData?.bestSeller?.find((p) => p.id === parseInt(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct({ name: "Product Not Found" }); // Placeholder for invalid product ID
    }
  }, [productId]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-container">
      {/* Left: Product Images */}
      <div className="image-section">
        <div className="thumbnails">
          {product?.thumbnails?.map((thumb, index) => (
            <img key={index} src={thumb} alt={`Thumbnail ${index}`} className="thumbnail-img" />
          )) || <p>No Images Available</p>}
        </div>
        <img src={product?.image || "/placeholder.jpg"} alt={product?.name} className="main-image" />
      </div>

      {/* Right: Product Details */}
      <div className="details-section">
        <h2 className="product-title">{product?.name || "Unknown Product"}</h2>
        <div className="rating">
          ⭐⭐⭐⭐☆ <span>({product?.reviews || 0} reviews)</span>
        </div>
        <p className="price">
          ${product?.price || "N/A"} <span className="original-price">${product?.originalPrice || "N/A"}</span>
        </p>
        <p className="product-description">{product?.description || "No description available"}</p>

        {/* Size Selection */}
        <div className="size-selector">
          <label>Select Size:</label>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart" onClick={() => addToCart({ ...product, selectedSize })}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
