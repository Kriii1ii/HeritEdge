import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const { addToCart } = useCart();
  const { translations } = useLanguage();

  const categories = [
    'all', 'paintings', 'sculptures', 'digital art', 'photography', 'textiles', 'pottery', 'jewelry'
  ];

  const artworks = [
    {
      id: '1',
      title: 'Sunset Dreams',
      artist: 'Maya Patel',
      price: 250,
      category: 'paintings',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'A vibrant sunset painting with warm colors'
    },
    {
      id: '2',
      title: 'Ocean Waves',
      artist: 'Sarah Chen',
      price: 180,
      category: 'paintings',
      image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Abstract representation of ocean waves'
    },
    {
      id: '3',
      title: 'Modern Sculpture',
      artist: 'Elena Rodriguez',
      price: 450,
      category: 'sculptures',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Contemporary metal sculpture'
    },
    {
      id: '4',
      title: 'Digital Harmony',
      artist: 'Aisha Johnson',
      price: 120,
      category: 'digital art',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Digital art with geometric patterns'
    },
    {
      id: '5',
      title: 'Mountain Landscape',
      artist: 'Priya Sharma',
      price: 320,
      category: 'photography',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Breathtaking mountain landscape photography'
    },
    {
      id: '6',
      title: 'Handwoven Tapestry',
      artist: 'Maria Santos',
      price: 280,
      category: 'textiles',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Traditional handwoven textile art'
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = artwork.price >= priceRange.min && artwork.price <= priceRange.max;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#ffffff] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#000000] mb-4" style={{ fontFamily: 'Avantime' }}>
            Art Categories
          </h1>
          <p className="text-xl text-[#000000]" style={{ fontFamily: 'Open Sauce One' }}>
            Discover amazing artwork from talented women artists
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
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

            {/* Category Buttons */}
            <div className="col-span-2 flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#4E2C0E] text-[#FEFAE0] border-[#4E2C0E]'
                      : 'bg-white text-[#4E2C0E] border-[#4E2C0E] hover:bg-[#DDA15E]/20'
                  }`}
                  style={{ fontFamily: 'Open Sauce One' }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-[#283618] mb-2" style={{ fontFamily: 'Open Sauce One' }}>
                Price Range: ${priceRange.min} - ${priceRange.max}
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
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
                      artistName: artwork.artist
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

export default Categories;
