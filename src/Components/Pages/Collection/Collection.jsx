import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Collection.css";
import productData from "../../Images/data/products";

const Collection = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("new");
  const [loadCount, setLoadCount] = useState(20);

  const navigate = useNavigate();

  const applyFilter = (filter) => {
    let filtered = productData.latest.filter(
      (product) =>
        filter === "men"
          ? product.category === "Men"
          : filter === "women"
          ? product.category === "Women"
          : filter === "kids"
          ? product.category === "Kids"
          : filter === "brand"
          ? product.brand // Assuming you have a 'brand' property
          : filter === "Ratings"
          ? product.ratings >= 4 // Example rating filter
          : true // Default to no filter
    );

    setFilteredProducts(filtered);
    setDisplayedProducts(filtered.slice(0, loadCount)); // Update displayed products after filter
  };

  const sortProducts = (option) => {
    let sorted = [...filteredProducts];
    if (option === "price-low") {
      sorted.sort((a, b) => a.rate - b.rate);
    } else if (option === "price-high") {
      sorted.sort((a, b) => b.rate - a.rate);
    } else if (option === "new") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming you have a date property
    }

    setFilteredProducts(sorted);
    setDisplayedProducts(sorted.slice(0, loadCount)); // Update displayed products after sorting
  };

  const handleLoadMore = () => {
    setLoadCount(loadCount + 6); // Load more products
  };

  useEffect(() => {
    const initialProducts = productData.latest.slice(0, loadCount);
    setDisplayedProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, [loadCount]);

  return (
    <div className="collection-container">
      {/* Sidebar: Filter Box */}
      <div className="filter-box">
        <h3>Filters</h3>
        <div className="filter-item">
          <label>Category</label>
          <select onChange={(e) => applyFilter(e.target.value)}>
            <option value="">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="brand">Brand</option>
            <option value="Ratings">Ratings</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Sorting Dropdown */}
        <div className="sort-box">
          <label>Sort By: </label>
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              sortProducts(e.target.value);
            }}
          >
            <option value="new">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="product-img"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>${product.rate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedProducts.length < filteredProducts.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Collection;
