import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, ShoppingCart, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const { language, changeLanguage, translations } = useLanguage();
  const location = useLocation();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#000000] to-[#000003] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Aquafina Script' }}>H</span>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-[#00A5E3] px-3 py-2 font-medium transition-colors ${
                isActive('/') ? 'text-[#00A5E3] border-b-2 border-[#00A5E3]' : ''
              }`}
              style={{ fontFamily: 'Open Sauce' }}
            >
              {translations.home}
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                className={`text-gray-700 hover:text-[#00A5E3] px-3 py-2 font-medium flex items-center space-x-1 transition-colors ${
                  isActive('/categories') ? 'text-[#00A5E3] border-b-2 border-[#00A5E3]' : ''
                }`}
                style={{ fontFamily: 'Open Sauce' }}
              >
                <span>{translations.categories}</span>
                <ChevronDown size={16} />
              </button>
              
              {showCategoriesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <Link
                    to="/categories?filter=highlights"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                    style={{ fontFamily: 'Open Sauce' }}
                    onClick={() => setShowCategoriesDropdown(false)}
                  >
                    {translations.highlights}
                  </Link>
                  <Link
                    to="/categories?filter=collections"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                    style={{ fontFamily: 'Open Sauce' }}
                    onClick={() => setShowCategoriesDropdown(false)}
                  >
                    {translations.collections}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/heritage-fair" 
              className={`text-gray-700 hover:text-[#00A5E3] px-3 py-2 font-medium transition-colors ${
                isActive('/heritage-fair') ? 'text-[#00A5E3] border-b-2 border-[#00A5E3]' : ''
              }`}
              style={{ fontFamily: 'Open Sauce' }}
            >
              {translations.heritageFair}
            </Link>

            <Link 
              to="/kudos" 
              className={`text-gray-700 hover:text-[#00A5E3] px-3 py-2 font-medium transition-colors ${
                isActive('/kudos') ? 'text-[#00A5E3] border-b-2 border-[#00A5E3]' : ''
              }`}
              style={{ fontFamily: 'Open Sauce' }}
            >
              {translations.kudos}
            </Link>

            <Link 
              to="/training" 
              className={`text-gray-700 hover:text-[#00A5E3] px-3 py-2 font-medium transition-colors ${
                isActive('/training') ? 'text-[#00A5E3] border-b-2 border-[#00A5E3]' : ''
              }`}
              style={{ fontFamily: 'Open Sauce' }}
            >
              {translations.training}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="text-gray-700 hover:text-[#00A5E3] p-2 transition-colors"
                title="Change Language"
              >
                <Globe size={20} />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 max-h-64 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors ${
                        language === lang.code ? 'bg-[#8DD7BF] bg-opacity-20 text-[#00A5E3]' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'Open Sauce' }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-[#00A5E3] p-2 relative transition-colors">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5768] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="text-gray-700 hover:text-[#00A5E3] p-2 border border-gray-300 rounded-lg flex items-center space-x-1 transition-colors"
              >
                <User size={16} />
                <ChevronDown size={12} />
              </button>
              
              {showUserDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                        style={{ fontFamily: 'Open Sauce' }}
                        onClick={() => setShowUserDropdown(false)}
                      >
                        {translations.profile}
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                        style={{ fontFamily: 'Open Sauce' }}
                      >
                        {translations.logout}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                        style={{ fontFamily: 'Open Sauce' }}
                        onClick={() => setShowUserDropdown(false)}
                      >
                        {translations.login}
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#8DD7BF] hover:bg-opacity-20 transition-colors"
                        style={{ fontFamily: 'Open Sauce' }}
                        onClick={() => setShowUserDropdown(false)}
                      >
                        {translations.signup}
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
