import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#00A5E3] via-[#8DD7BF] to-[#FF96C5] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Vibrant Art Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5768] via-[#FF96C5] to-[#FFBF65] opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Aquafina Script' }}>
              HeritEdge
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8" style={{ fontFamily: 'Avantime' }}>
              {translations.slogan}
            </p>
            <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sauce' }}>
              {translations.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/categories"
                className="bg-white text-[#00A5E3] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                style={{ fontFamily: 'Open Sauce' }}
              >
                <Palette size={20} />
                <span>{translations.exploreArt}</span>
              </Link>
              
              <Link
                to="/signup?type=artist"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00A5E3] transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                style={{ fontFamily: 'Open Sauce' }}
              >
                <Users size={20} />
                <span>{translations.joinAsArtist}</span>
              </Link>
              
              <Link
                to="/signup"
                className="bg-[#FF5768] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                style={{ fontFamily: 'Open Sauce' }}
              >
                <Award size={20} />
                <span>{translations.joinCommunity}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
              {translations.empoweringWomen}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sauce' }}>
              {translations.platformDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 bg-gradient-to-br from-[#606C38] to-[#283618] rounded-2xl text-white shadow-lg"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold mb-2">Showcase Your Art</h3>
              <p>Digitally display your creativity to a wider audience who values your cultural roots.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 bg-gradient-to-br from-[#DDA15E] to-[#C06414] rounded-2xl text-white shadow-lg"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-2">Build Connections</h3>
              <p>Connect with fellow artists, historians, and cultural enthusiasts across the globe.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 bg-gradient-to-br from-[#7B1010] to-[#4E2C0E] rounded-2xl text-white shadow-lg"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-2">Earn Income</h3>
              <p>Monetize your skills through digital products, workshops, and exclusive commissions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Avantime' }}>
            {translations.readyToStart}
          </h2>
          <Link
            to="/heritage-fair"
            className="bg-white text-[#00A5E3] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105"
            style={{ fontFamily: 'Open Sauce' }}
          >
            <span>{translations.exploreMarketplace}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;