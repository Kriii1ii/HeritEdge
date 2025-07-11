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
    'all', 'Art', 'Dance', 'Music', 'Cities', 'Textile', 'Pottery', 'Jewelry'
  ];

  const artworks = [
    {
      id: '1',
      title: 'National Museum of Women in the Arts',
      location: 'Washington, D.C., USA',
      price: 550,
      category: 'Art',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/National_Museum_of_Women_in_the_Arts.JPG',
      description: 'This is the only major museum in the world solely dedicated to championing women through the arts. It features women artists who have historically been underrepresented in galleries and provides global visibility to their work.'
    },
    {
      id: '2',
      title: 'Museum of Tribal Arts & Artifacts',
      location: 'Bhubaneswar, India',
      price: 300,
      category: 'Art',
      image: 'https://www.optimatravels.com/images/bhuwaneshwar-images/museum-of-tribal-arts-artifacts.jpg',
      description: 'Indigenous and tribal women in India have long contributed to folk and tribal arts like Saura, Gond, Warli, and Pattachitra. This museum represents those art forms and highlights the deep cultural and feminine roots behind them.'
    },
    {
      id: '3',
      title: 'Jemaa el-Fnaa',
      location: 'Marrakech, Morocco',
      price: 150,
      category: 'Cities',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/fc/39/82/caption.jpg?w=800&h=400&s=1',
      description: 'This vibrant marketplace is a living gallery of Moroccan culture, where women artisans sell hand-woven textiles, natural cosmetics, ceramics, and jewelry. It is a dynamic space of female entrepreneurship, tradition, and art.'
    },
    {
      id: '4',
      title: 'Otavalo Market',
      location: 'Otavalo, Ecuador',
      price: 120,
      category: 'Cities',
      image: 'https://www.metropolitan-touring.com/wp-content/uploads/2023/04/day-1-Otavalo-marketplace-culture-1.webp',
      description: 'Otavalo Market is one of the most famous indigenous markets in South America, run largely by the Otavalo people, an indigenous group renowned for their handwoven textiles, beadwork, tapestries, and traditional music. This market is not just a commerce hub but a cultural platform where ancient artistic techniques meet modern storytelling.'
    },
    {
      id: '5',
      title: 'Persian Carpet weavers',
      location: 'Iran',
      price: 320,
      category: 'Textile',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf7NJ6fzO-TRjtLcAewFzpctdPsoXC69fxAA&s',
      description: 'Persian carpet weavers are skilled artisans who hand-knot intricate rugs using traditional techniques passed down through generations. Each design reflects cultural stories, symbols, and regional heritage. Their craftsmanship is globally admired for its beauty, precision, and durability.'
    },
    {
      id: '6',
      title: 'Handwoven Tapestry',
      location: 'Nepal',
      price: 280,
      category: 'Textile',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Traditional handwoven textile art'
    },
    {
      id: '7',
      title: 'Hula’s Female Revivalists',
      location: 'Hawaii',
      price: 70,
      category: 'Dance',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hula_Ad_on_the_U.S._Mainland.jpg/500px-Hula_Ad_on_the_U.S._Mainland.jpg',
      description: 'Hula, the traditional Hawaiian dance, is more than performance. 20th century, powerful female figures like "Iolani Luahine and Maiki Aiu Lake led the Hula Renaissance" reviving the ancient form.'
    },
    {
      id: '8',
      title: 'Bishnu Maya Rana',
      location: 'Nepal',
      price: 90,
      category: 'Music',
      image: 'https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Madal%20News%20photo.jpg',
      description: 'In Lalang village, 72-year-old Bishnu Maya Rana and other women are reviving traditional folk music by learning to play the Madal, a drum once played only by men. Due to male migration and fading traditions, women are stepping up to preserve cultural heritage.'
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artwork.location.toLowerCase().includes(searchTerm.toLowerCase());
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
                  Location: {artwork.location}
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
                      location: artwork.location
                    })}
                    className="bg-gradient-to-r from-[#4E2C0E] to-[#C06414] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    style={{ fontFamily: 'Open Sauce One' }}
                  >
                    <ShoppingCart size={16} />
                    <span>Ticket Price</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
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
