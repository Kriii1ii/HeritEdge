import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const HeritageFair: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const { translations } = useLanguage();

  const artworks = [
    {
      id: '1',
      title: 'Himalayan Sunrise',
      artist: 'Sunita Thapa',
      price: 350,
      originalPrice: 420,
      category: 'paintings',
      rating: 4.9,
      reviews: 28,
      image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A breathtaking view of the Himalayas at sunrise',
      isFeatured: true,
      isOnSale: true
    },
    {
      id: '2',
      title: 'Traditional Mandala',
      artist: 'Kamala Shrestha',
      price: 180,
      category: 'paintings',
      rating: 4.8,
      reviews: 42,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intricate mandala artwork with traditional patterns',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Modern Abstract',
      artist: 'Asha Maharjan',
      price: 280,
      category: 'paintings',
      rating: 4.7,
      reviews: 15,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Contemporary abstract piece with vibrant colors'
    },
    {
      id: '4',
      title: 'Handcrafted Pottery',
      artist: 'Mina Tamang',
      price: 95,
      category: 'pottery',
      rating: 4.6,
      reviews: 22,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beautiful handcrafted pottery with ethnic designs'
    },
    {
      id: '5',
      title: 'Silver Jewelry Set',
      artist: 'Sita Gurung',
      price: 220,
      category: 'jewelry',
      rating: 4.9,
      reviews: 35,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant silver jewelry with traditional motifs'
    },
    {
      id: '6',
      title: 'Woven Textile Art',
      artist: 'Maya Rai',
      price: 450,
      category: 'textiles',
      rating: 4.8,
      reviews: 18,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Handwoven textile art with cultural significance'
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    return artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#ffffff] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#000000] mb-4" style={{ fontFamily: 'Avantime' }}>
            Heritage Fair
          </h1>
          <p className="text-xl text-[#000000]" style={{ fontFamily: 'Open Sauce One' }}>
            Discover and purchase authentic artwork from talented women artists
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="w-full relative">
            <Search className="absolute left-3 top-3 text-[#C06414]" size={20} />
            <input
              type="text"
              placeholder="Search artwork or artist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#C06414] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C06414]"
              style={{ fontFamily: 'Open Sauce One' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map(artwork => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300">
                    <Heart size={20} className="text-[#7B1010]" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {artwork.isFeatured && (
                  <div className="mb-2 inline-block px-3 py-1 bg-[#4E2C0E] text-[#FEFAE0] rounded-full text-xs font-semibold" style={{ fontFamily: 'Open Sauce One' }}>
                    Featured
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#283618] mb-2" style={{ fontFamily: 'Avantime' }}>
                  {artwork.title}
                </h3>
                <p className="text-[#4E2C0E] mb-2" style={{ fontFamily: 'Open Sauce One' }}>
                  by {artwork.artist}
                </p>
                <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Open Sauce One' }}>
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C06414]" style={{ fontFamily: 'Avantime' }}>
                    ${artwork.price}
                  </span>
                  <button
                    onClick={() => addToCart({
                      id: artwork.id,
                      name: artwork.title,
                      price: artwork.price,
                      image: artwork.image,
                      artistName: artwork.artist,
                    })}
                    className="bg-gradient-to-r from-[#4E2C0E] to-[#C06414] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    style={{ fontFamily: 'Open Sauce One' }}
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#606C38]" style={{ fontFamily: 'Open Sauce One' }}>
              No artwork found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeritageFair;
