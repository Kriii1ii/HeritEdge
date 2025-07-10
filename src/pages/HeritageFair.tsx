import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const HeritageFair: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  const { translations } = useLanguage();

  const categories = ['all', 'paintings', 'sculptures', 'textiles', 'jewelry', 'pottery', 'photography'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' }
  ];

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
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
            Heritage Fair
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
            Discover and purchase authentic artwork from talented women artists
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search artwork..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50C878]"
                style={{ fontFamily: 'Open Sauce' }}
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              style={{ fontFamily: 'Open Sauce' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              style={{ fontFamily: 'Open Sauce' }}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Filter Button */}
            <button className="flex items-center justify-center space-x-2 bg-[#50C878] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              <Filter size={20} />
              <span style={{ fontFamily: 'Open Sauce' }}>More Filters</span>
            </button>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                  {artwork.isFeatured && (
                    <span className="bg-[#50C878] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  {artwork.isOnSale && (
                    <span className="bg-[#50C878] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Sale
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300">
                  <Heart size={16} className="text-[#FF5768]" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Avantime' }}>
                  {artwork.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                  by {artwork.artist}
                </p>

                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
                      {artwork.rating} ({artwork.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                  {artwork.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#50C878]" style={{ fontFamily: 'Avantime' }}>
                      ${artwork.price}
                    </span>
                    {artwork.originalPrice && (
                      <span className="text-sm text-gray-500 line-through" style={{ fontFamily: 'Open Sauce' }}>
                        ${artwork.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart({
                      id: artwork.id,
                      name: artwork.title,
                      price: artwork.price,
                      image: artwork.image,
                      artistName: artwork.artist
                    })}
                    className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500" style={{ fontFamily: 'Open Sauce' }}>
              No artwork found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeritageFair;