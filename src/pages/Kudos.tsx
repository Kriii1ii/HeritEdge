import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Kudos: React.FC = () => {
  const { translations } = useLanguage();

  const featuredArtists = [
    {
      id: '1',
      name: 'Frida Kahlo',
      period: '1907-1954',
      achievement: 'Revolutionary Mexican artist who explored identity, postcolonialism, gender, class, and race',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: 'Her self-portraits and works inspired by Mexican culture made her an icon of feminism and Mexican pride'
    },
    {
      id: '2',
      name: 'Georgia O\'Keeffe',
      period: '1887-1986',
      achievement: 'American modernist artist known for her paintings of enlarged flowers and New Mexico landscapes',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: 'Often called the "Mother of American modernism," she paved the way for women in the art world'
    },
    {
      id: '3',
      name: 'Yayoi Kusama',
      period: '1929-Present',
      achievement: 'Japanese contemporary artist known for her polka dot infinity rooms and pumpkin sculptures',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: 'Her work has influenced contemporary art globally and brought awareness to mental health through art'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: 'Women Artists Supported',
      color: 'from-[#00A5E3] to-[#8DD7BF]'
    },
    {
      icon: Award,
      number: '150+',
      label: 'Awards & Recognition',
      color: 'from-[#FF96C5] to-[#FF5768]'
    },
    {
      icon: Calendar,
      number: '500+',
      label: 'Cultural Events',
      color: 'from-[#FFBF65] to-[#FF5768]'
    },
    {
      icon: Heart,
      number: '10,000+',
      label: 'Lives Impacted',
      color: 'from-[#8DD7BF] to-[#FF96C5]'
    }
  ];

  const initiatives = [
    {
      title: 'Breaking Barriers',
      description: 'Supporting women artists who have overcome significant challenges to showcase their talent',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: '300+ artists supported'
    },
    {
      title: 'Cultural Preservation',
      description: 'Preserving traditional art forms and techniques passed down through generations of women',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: '50+ traditions documented'
    },
    {
      title: 'Mentorship Program',
      description: 'Connecting established artists with emerging talent for guidance and support',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      impact: '1,000+ mentorship hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
            Kudos - Celebrating Women in Art
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sauce' }}>
            Honoring the incredible contributions of women artists throughout history and today, 
            recognizing their talent, resilience, and impact on culture and society.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${stat.color} text-white rounded-xl p-6 text-center`}
            >
              <stat.icon size={32} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Avantime' }}>
                {stat.number}
              </h3>
              <p style={{ fontFamily: 'Open Sauce' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Artists */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Avantime' }}>
            Legendary Women Artists
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Avantime' }}>
                    {artist.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Open Sauce' }}>
                    {artist.period}
                  </p>
                  
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                    {artist.achievement}
                  </p>
                  
                  <div className="bg-[#8DD7BF] bg-opacity-20 rounded-lg p-3">
                    <p className="text-sm text-gray-800" style={{ fontFamily: 'Open Sauce' }}>
                      <strong>Impact:</strong> {artist.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Initiatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Avantime' }}>
            Our Initiatives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Avantime' }}>
                    {initiative.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                    {initiative.description}
                  </p>
                  
                  <div className="bg-[#FF96C5] bg-opacity-20 rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Open Sauce' }}>
                      {initiative.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Avantime' }}>
            Why This Platform Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Avantime' }}>
                Historical Recognition
              </h3>
              <p style={{ fontFamily: 'Open Sauce' }}>
                Throughout history, women artists have faced significant barriers to recognition. 
                Many masterpieces were attributed to male contemporaries, and women were often 
                excluded from art institutions and exhibitions.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Avantime' }}>
                Creating Opportunities
              </h3>
              <p style={{ fontFamily: 'Open Sauce' }}>
                We're creating a platform where women artists can showcase their work, 
                connect with buyers, and build sustainable careers. Every purchase directly 
                supports these talented individuals and their artistic journey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kudos;