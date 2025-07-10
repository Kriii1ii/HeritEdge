import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: { [key: string]: Translations } = {
  en: {
    home: 'Home',
    categories: 'Categories',
    heritageFair: 'Heritage Fair',
    kudos: 'Kudos',
    training: 'Training',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    profile: 'Profile',
    cart: 'Cart',
    checkout: 'Checkout',
    slogan: 'Art with Purpose. Stories with Soul.',
    heroDescription: 'Empowering women artists to showcase their talent, share their stories, and build meaningful connections through art and culture.',
    exploreArt: 'Explore Art',
    joinAsArtist: 'Join as Artist',
    joinCommunity: 'Join Our Community',
    empoweringWomen: 'Empowering Women Through Art',
    platformDescription: 'A platform dedicated to giving women artists the recognition, opportunities, and platform they deserve.',
    showcaseArt: 'Showcase Your Art',
    showcaseDescription: 'Display your artwork to a global audience and gain the recognition you deserve.',
    buildConnections: 'Build Connections',
    connectionsDescription: 'Connect with other artists, mentors, and art enthusiasts from around the world.',
    earnIncome: 'Earn Income',
    incomeDescription: 'Sell your artwork and build a sustainable income from your passion.',
    readyToStart: 'Ready to Start Your Journey?',
    exploreMarketplace: 'Explore Marketplace',
    highlights: 'Highlights',
    collections: 'Collections',
    allRightsReserved: 'All rights reserved.',
    // Add more translations as needed
  },
  ne: {
    home: 'घर',
    categories: 'श्रेणीहरू',
    heritageFair: 'सम्पदा मेला',
    kudos: 'प्रशंसा',
    training: 'प्रशिक्षण',
    login: 'लगिन',
    signup: 'साइन अप',
    logout: 'लगआउट',
    profile: 'प्रोफाइल',
    cart: 'कार्ट',
    checkout: 'चेकआउट',
    slogan: 'उद्देश्यको साथ कला। आत्माको साथ कहानी।',
    heroDescription: 'महिला कलाकारहरूलाई उनीहरूको प्रतिभा प्रदर्शन गर्न, उनीहरूका कथाहरू साझा गर्न र कला र संस्कृति मार्फत अर्थपूर्ण सम्बन्ध निर्माण गर्न सशक्त बनाउने।',
    exploreArt: 'कला अन्वेषण गर्नुहोस्',
    joinAsArtist: 'कलाकारको रूपमा सामेल हुनुहोस्',
    joinCommunity: 'हाम्रो समुदायमा सामेल हुनुहोस्',
    empoweringWomen: 'कला मार्फत महिलाहरूलाई सशक्त बनाउने',
    platformDescription: 'महिला कलाकारहरूलाई उनीहरूको योग्यता अनुसार पहिचान, अवसर र प्लेटफर्म प्रदान गर्न समर्पित प्लेटफर्म।',
    showcaseArt: 'आफ्नो कला प्रदर्शन गर्नुहोस्',
    showcaseDescription: 'आफ्नो कलाकृतिलाई विश्वव्यापी दर्शकहरूमा प्रदर्शन गर्नुहोस् र तपाईंको योग्यता अनुसार पहिचान पाउनुहोस्।',
    buildConnections: 'सम्बन्ध निर्माण गर्नुहोस्',
    connectionsDescription: 'संसारभरका अन्य कलाकारहरू, गुरुहरू र कला उत्साहीहरूसँग जोड्नुहोस्।',
    earnIncome: 'आय कमाउनुहोस्',
    incomeDescription: 'आफ्नो कलाकृति बेच्नुहोस् र आफ्नो जुनूनबाट दिगो आम्दानी निर्माण गर्नुहोस्।',
    readyToStart: 'आफ्नो यात्रा सुरु गर्न तयार हुनुहुन्छ?',
    exploreMarketplace: 'बजार अन्वेषण गर्नुहोस्',
    highlights: 'हाइलाइटहरू',
    collections: 'संग्रहहरू',
    allRightsReserved: 'सबै अधिकार सुरक्षित।',
  },
  // Add more language translations as needed
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('heritedge_language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('heritedge_language', lang);
  };

  const currentTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};