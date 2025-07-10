import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Palette as PayPal, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mock payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setOrderComplete(true);
    clearCart();
    setIsProcessing(false);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Open Sauce' }}>
              Thank you for your purchase. Your order has been successfully processed and you'll receive a confirmation email shortly.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: 'Open Sauce' }}
            >
              Continue Shopping
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Avantime' }}>
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
                  Contact Information
                </h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                  style={{ fontFamily: 'Open Sauce' }}
                  required
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3] mt-4"
                  style={{ fontFamily: 'Open Sauce' }}
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="ZIP code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                    required
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                    required
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="NP">Nepal</option>
                    <option value="IN">India</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
                  Payment Method
                </h2>
                
                <div className="space-y-3 mb-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-[#00A5E3]"
                    />
                    <CreditCard size={20} className="text-gray-600" />
                    <span style={{ fontFamily: 'Open Sauce' }}>Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-[#00A5E3]"
                    />
                    <PayPal size={20} className="text-gray-600" />
                    <span style={{ fontFamily: 'Open Sauce' }}>PayPal</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                      style={{ fontFamily: 'Open Sauce' }}
                      required
                    />
                    <input
                      type="text"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                      style={{ fontFamily: 'Open Sauce' }}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVV"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isProcessing ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
                }`}
                style={{ fontFamily: 'Open Sauce' }}
              >
                <Lock size={20} />
                <span>{isProcessing ? 'Processing...' : `Complete Order - $${getTotal().toFixed(2)}`}</span>
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
                      by {item.artistName}
                    </p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
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
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Open Sauce' }}>Tax:</span>
                <span className="font-semibold" style={{ fontFamily: 'Open Sauce' }}>
                  ${(getTotal() * 0.08).toFixed(2)}
                </span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold" style={{ fontFamily: 'Open Sauce' }}>
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                    ${(getTotal() * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;