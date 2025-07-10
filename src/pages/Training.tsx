import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Star, BookOpen, Video, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Training: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const { translations } = useLanguage();

  const courses = [
    {
      id: '1',
      title: 'Digital Art Fundamentals',
      instructor: 'Maya Patel',
      duration: '8 weeks',
      level: 'Beginner',
      price: 199,
      rating: 4.8,
      students: 234,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn the basics of digital art creation using industry-standard tools and techniques.',
      features: ['Live sessions', 'Recorded lessons', 'Personal feedback', 'Certificate']
    },
    {
      id: '2',
      title: 'Traditional Painting Techniques',
      instructor: 'Sarah Chen',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 249,
      rating: 4.9,
      students: 186,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master traditional painting techniques from watercolor to oil painting.',
      features: ['Materials included', 'Studio access', 'Group critiques', 'Exhibition opportunity']
    },
    {
      id: '3',
      title: 'Art Business & Marketing',
      instructor: 'Elena Rodriguez',
      duration: '4 weeks',
      level: 'All levels',
      price: 149,
      rating: 4.7,
      students: 312,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn how to market your art and build a sustainable creative business.',
      features: ['Business templates', 'Marketing strategies', 'Portfolio review', 'Networking opportunities']
    }
  ];

  const mentorships = [
    {
      id: '1',
      mentor: 'Priya Sharma',
      speciality: 'Contemporary Art',
      experience: '15 years',
      sessions: 45,
      rating: 4.9,
      price: 75,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Renowned contemporary artist with exhibitions in major galleries worldwide.',
      availability: 'Mon, Wed, Fri'
    },
    {
      id: '2',
      mentor: 'Maria Santos',
      speciality: 'Traditional Crafts',
      experience: '20 years',
      sessions: 62,
      rating: 4.8,
      price: 65,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master craftsperson specializing in traditional textile and pottery techniques.',
      availability: 'Tue, Thu, Sat'
    },
    {
      id: '3',
      mentor: 'Aisha Johnson',
      speciality: 'Digital Media',
      experience: '12 years',
      sessions: 38,
      rating: 4.9,
      price: 80,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading digital artist and creative director with major brand collaborations.',
      availability: 'Mon, Tue, Thu'
    }
  ];

  const workshops = [
    {
      id: '1',
      title: 'Watercolor Landscape Workshop',
      date: '2025-01-15',
      time: '2:00 PM - 5:00 PM',
      instructor: 'Sunita Thapa',
      price: 85,
      spots: 12,
      spotsLeft: 4,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn watercolor techniques while painting beautiful landscapes.',
      materials: 'All materials provided'
    },
    {
      id: '2',
      title: 'Pottery Making Basics',
      date: '2025-01-20',
      time: '10:00 AM - 1:00 PM',
      instructor: 'Kamala Shrestha',
      price: 95,
      spots: 8,
      spotsLeft: 2,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Hands-on pottery making workshop for beginners.',
      materials: 'Clay and tools included'
    },
    {
      id: '3',
      title: 'Digital Art Masterclass',
      date: '2025-01-25',
      time: '6:00 PM - 9:00 PM',
      instructor: 'Asha Maharjan',
      price: 120,
      spots: 15,
      spotsLeft: 7,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced digital art techniques and professional workflows.',
      materials: 'Software access provided'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
            Training & Mentorship
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sauce' }}>
            Learn from master artists and grow your creative skills
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {[
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'mentorship', label: 'Mentorship', icon: Users },
              { id: 'workshops', label: 'Workshops', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#00A5E3] text-white'
                    : 'text-gray-600 hover:text-[#00A5E3]'
                }`}
                style={{ fontFamily: 'Open Sauce' }}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#8DD7BF] bg-opacity-20 text-[#00A5E3] px-2 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(course.rating)}
                      <span className="text-sm text-gray-600 ml-1">({course.students})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Avantime' }}>
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                    with {course.instructor}
                  </p>
                  
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                      ${course.price}
                    </span>
                    <button className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === 'mentorship' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorships.map((mentor) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={mentor.image}
                  alt={mentor.mentor}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Avantime' }}>
                    {mentor.mentor}
                  </h3>
                  
                  <p className="text-[#00A5E3] font-semibold mb-2" style={{ fontFamily: 'Open Sauce' }}>
                    {mentor.speciality}
                  </p>
                  
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                    {mentor.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold">{mentor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Sessions:</span>
                      <span className="font-semibold">{mentor.sessions} completed</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Available:</span>
                      <span className="font-semibold">{mentor.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                        ${mentor.price}
                      </span>
                      <span className="text-sm text-gray-600">/session</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#FF96C5] to-[#FF5768] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Book Session
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Workshops Tab */}
        {activeTab === 'workshops' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Avantime' }}>
                    {workshop.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                    with {workshop.instructor}
                  </p>
                  
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Open Sauce' }}>
                    {workshop.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{new Date(workshop.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users size={16} />
                      <span>{workshop.spotsLeft} spots left</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#FFBF65] bg-opacity-20 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-800" style={{ fontFamily: 'Open Sauce' }}>
                      {workshop.materials}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#00A5E3]" style={{ fontFamily: 'Avantime' }}>
                      ${workshop.price}
                    </span>
                    <button className="bg-gradient-to-r from-[#FFBF65] to-[#FF5768] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;