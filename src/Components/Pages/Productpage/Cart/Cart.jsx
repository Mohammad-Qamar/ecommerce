// src/components/Cart/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const vat = subtotal * 0.1;
  const discount = subtotal > 100 ? 20 : 0;
  const total = subtotal + vat - discount;

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.selectedSize || 'M'}</p>
                      <p className="text-md font-semibold">£{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-12 text-center border border-gray-300 rounded"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-white p-6 rounded shadow-sm">
              <h4 className="text-xl font-bold mb-4">Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (10%):</span>
                  <span>£{vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>-£{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total:</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="mt-6 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
