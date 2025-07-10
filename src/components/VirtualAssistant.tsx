import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user' | 'bot'}>>([
    { id: '1', text: 'Hello! I\'m your HeritEdge assistant. How can I help you find the perfect art today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user' as const
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      // Mock AI response
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputText),
          sender: 'bot' as const
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
      
      setInputText('');
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('art') || input.includes('painting')) {
      return 'I can help you find beautiful artwork! Are you looking for traditional paintings, modern art, or perhaps something specific like portraits or landscapes?';
    }
    
    if (input.includes('music')) {
      return 'We have amazing musical artists on our platform! Would you like to explore instrumental music, vocal performances, or perhaps traditional cultural music?';
    }
    
    if (input.includes('price') || input.includes('cost')) {
      return 'Our artwork ranges from affordable pieces starting at $25 to premium collections. What\'s your budget range?';
    }
    
    if (input.includes('artist') || input.includes('women')) {
      return 'All our artists are talented women from diverse backgrounds. You can browse by artist, style, or even book mentorship sessions!';
    }
    
    if (input.includes('help')) {
      return 'I can help you: 1) Find artwork by style or artist 2) Learn about our artists 3) Navigate the platform 4) Book training sessions. What interests you most?';
    }
    
    return 'That\'s interesting! I can help you explore our art collections, connect with artists, or find training opportunities. What would you like to know more about?';
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00A5E3] to-[#8DD7BF] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="font-semibold" style={{ fontFamily: 'Open Sauce' }}>
                HeritEdge Assistant
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-[#00A5E3] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                    style={{ fontFamily: 'Open Sauce' }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5E3] text-sm"
                style={{ fontFamily: 'Open Sauce' }}
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#00A5E3] text-white p-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualAssistant;