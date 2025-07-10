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
      title: 'Titaura',
      artist: 'Prapti Baral',
      price: 2,
      originalPrice: 420,
      rating: 4.9,
      reviews: 28,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tK9g3fN9-qQ1SzkrCohIgWRITuS4yGa4EA&s',
      description: 'Unleash your taste buds with our Aap Titaura—a bold fusion of juicy mango, fiery spices, and a zesty Nepali kick.',
      isFeatured: true,
      isOnSale: true
    },
    {
      id: '2',
      title: 'Mato ko Bhada',
      artist: 'Kamala Ghimire',
      price: 10,
      rating: 4.8,
      reviews: 42,
      image: 'https://www.lokpath.com/wp-content/uploads/2023/05/mato-ko-bhada.webp',
      description: 'Bring home the charm of tradition with our Maato Ko Bhada—handcrafted clay pots that keep your food naturally cool, flavorful, and full of nostalgia.',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Mithila Art',
      artist: 'Kabita Khanal',
      price: 280,
      rating: 4.7,
      reviews: 15,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/HX/IV/YD/114236912/9a3c651d3a79f1a9ba4528d39a5a4995-jpg-500x500.jpg',
      description: 'Dive into the vibrant world of Mithila Art, where every stroke tells a tale of culture, womanhood, and celebration.'
    },
    {
      id: '4',
      title: 'Boju ko Juju Dhau',
      artist: 'Mina Thebe',
      price: 95,
      rating: 4.6,
      reviews: 22,
      image: 'https://cdn.blanxer.com/uploads/647efbd251c1df3943258a4f/product_image-img_9818-1266.png',
      description: 'A Cultural Blend in Every Bite, Gurung artisan with Newari tradition, this creamy delight unites heritage and heart.'
    },
    {
      id: '5',
      title: 'Lila',
      artist: 'Aakriti Guragain',
      price: 130,
      rating: 4.9,
      reviews: 35,
      image: 'https://i.pinimg.com/1200x/d0/28/67/d028670a245083c51e262cede1ce7510.jpg',
      description: 'Handmade macramé piece crafted with care and creativity. A perfect touch of elegance and warmth for any space.'
    },
    {
      id: '6',
      title: 'Woven Textile Art',
      artist: 'Maya Rai',
      price: 450,
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
