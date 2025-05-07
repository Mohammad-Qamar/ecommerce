import React, { useState, useContext } from "react";
import LOGO from "../Logo/logo.png";
import "./Navbar.css";

import { CartContext } from "../../../src/context/CartContext"; // Ensure correct path
import searchlogo from "../icons/search_icon.png";
import userlogo from "../icons/profile-icon.png";
import cartlogo from "../icons/cart_icon.png";
import hambutton from "../icons/menu_icon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <a href="/">
          <img src={LOGO} alt="Logo" />
        </a>
      </div>

      

      {/* Desktop Center: Navigation Links */}
      <div className="navbar-center">
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/collection" className="nav-link">
          COLLECTION
        </a>
        <a href="/about" className="nav-link">
          ABOUT
        </a>
        <a href="/contact" className="nav-link">
          CONTACT
        </a>
      </div>

      {/* Right: Icons */}
      <div className="navbar-right">
        <a href="/search">
          <img src={searchlogo} alt="Search" className="icon" />
        </a>
        <a href="/user">
          <img src={userlogo} alt="User" className="icon" />
        </a>
        <a href="/cart" className="cart-container">
          <img src={cartlogo} alt="Cart" className="icon" />
          {cartItems.length > 0 && (
            <span className="cart-notification">{cartItems.length}</span>
          )}
        </a>
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        aria-label="Toggle menu"
      >
        <img src={hambutton} alt="Menu" />
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" className="mobile-link">
          HOME
        </a>
        <a href="/collection" className="mobile-link">
          COLLECTION
        </a>
        <a href="/about" className="mobile-link">
          ABOUT
        </a>
        <a href="/contact" className="mobile-link">
          CONTACT
        </a>
      </div>
    </nav>
  );
};
