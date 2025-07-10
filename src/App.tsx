import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import HeritageFair from './pages/HeritageFair';
import Kudos from './pages/Kudos';
import Training from './pages/Training';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import VirtualAssistant from './components/VirtualAssistant';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="heritage-fair" element={<HeritageFair />} />
                  <Route path="kudos" element={<Kudos />} />
                  <Route path="training" element={<Training />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Routes>
              <VirtualAssistant />
            </div>
          </Router>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;