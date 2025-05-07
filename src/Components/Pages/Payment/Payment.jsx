import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cartItems, totalAmount }) => {
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Proceeding to payment...");
    // Implement payment gateway logic here
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-center text-gray-900">Payment Details</h1>

      {/* Cart Summary */}
      <div className="mt-6 border rounded-lg p-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <ul className="mt-2 space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>£{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr className="my-3" />
        <div className="flex justify-between font-semibold">
          <span>Total Amount:</span>
          <span>£{totalAmount}</span>
        </div>
      </div>

      {/* Customer Details Form */}
      <form onSubmit={handlePayment} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={customerDetails.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={customerDetails.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={customerDetails.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={customerDetails.city}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={customerDetails.state}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={customerDetails.zipCode}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Back to Cart
          </button>
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
            Proceed to Payment
          </button>
        </div>
      </form>
    </section>
  );
};

export default Payment;
