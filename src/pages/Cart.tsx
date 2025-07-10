import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  const { translations } = useLanguage();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Open Sauce' }}>
              Start exploring our amazing artwork collection
            </p>
            <Link
              to="/categories"
              className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: 'Open Sauce' }}
            >
              Browse Artwork
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Avantime' }}>
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Avantime' }}>
                        {item.name}
                      </h3>
                      <p className="text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
                        by {item.artistName}
                      </p>
                      <p className="text-xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold" style={{ fontFamily: 'Open Sauce' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#FF5768] hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Open Sauce' }}>Subtotal:</span>
                <span className="font-semibold" style={{ fontFamily: 'Open Sauce' }}>
                  ${getTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Open Sauce' }}>Shipping:</span>
                <span className="font-semibold" style={{ fontFamily: 'Open Sauce' }}>
                  Free
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold" style={{ fontFamily: 'Open Sauce' }}>
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center block"
              style={{ fontFamily: 'Open Sauce' }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;