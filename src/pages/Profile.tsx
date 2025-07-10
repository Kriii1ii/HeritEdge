import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Edit, Save, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    location: '',
    website: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Avantime' }}>
                    {user?.name}
                  </h1>
                  <p className="text-white opacity-80" style={{ fontFamily: 'Open Sauce' }}>
                    {user?.type?.charAt(0).toUpperCase() + user?.type?.slice(1)} Account
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-300 flex items-center space-x-2"
                style={{ fontFamily: 'Open Sauce' }}
              >
                {isEditing ? <X size={20} /> : <Edit size={20} />}
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
                  Personal Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                      />
                    ) : (
                      <p className="text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                        {formData.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                      />
                    ) : (
                      <p className="text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                        {formData.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter your location"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                      />
                    ) : (
                      <p className="text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                        {formData.location || 'Not specified'}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Open Sauce' }}>
                      Website
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                        style={{ fontFamily: 'Open Sauce' }}
                      />
                    ) : (
                      <p className="text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                        {formData.website || 'Not specified'}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Avantime' }}>
                  About Me
                </h2>
                
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3]"
                    style={{ fontFamily: 'Open Sauce' }}
                  />
                ) : (
                  <p className="text-gray-900" style={{ fontFamily: 'Open Sauce' }}>
                    {formData.bio || 'No bio available yet.'}
                  </p>
                )}
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  style={{ fontFamily: 'Open Sauce' }}
                >
                  <Save size={20} />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;