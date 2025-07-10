import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { translations } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00A5E3] via-[#8DD7BF] to-[#FF96C5] py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-green-600" size={32} />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              Check Your Email
            </h1>
            
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Open Sauce' }}>
              We've sent a password reset link to {email}. Please check your inbox and follow the instructions.
            </p>
            
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: 'Open Sauce' }}
            >
              <ArrowLeft size={20} />
              <span>Back to Login</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00A5E3] via-[#8DD7BF] to-[#FF96C5] py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Avantime' }}>
              Forgot Password?
            </h1>
            <p className="text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3] focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Open Sauce' }}
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
              }`}
              style={{ fontFamily: 'Open Sauce' }}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 text-[#00A5E3] hover:text-[#8DD7BF] transition-colors"
              style={{ fontFamily: 'Open Sauce' }}
            >
              <ArrowLeft size={16} />
              <span>Back to Login</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;