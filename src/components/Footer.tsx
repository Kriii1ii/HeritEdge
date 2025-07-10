import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm" style={{ fontFamily: 'Open Sauce' }}>
            © 2025 HeritEdge. {translations.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;