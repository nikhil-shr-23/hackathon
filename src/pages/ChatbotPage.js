import React, { useState } from 'react';
import axios from 'axios';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your medical tourism and healthcare assistant. I can help you with questions about medical conditions, treatments, healthcare facilities, medical tourism, and related topics. Please note that my responses are for informational purposes only and should not replace professional medical advice.", 
      isBot: true 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5002/api/chat', {
        message: inputMessage
      });

      const botResponse = {
        text: response.data.message,
        isBot: true
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        isBot: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-6 min-h-[80vh] flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Medical Assistant</h1>
          <p className="text-gray-600">Your Healthcare Query Partner</p>
        </div>
        
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 bg-white p-6 rounded-xl shadow-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                  message.isBot
                    ? 'bg-blue-50 text-gray-800 rounded-tl-none'
                    : 'bg-blue-600 text-white rounded-tr-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-2xl bg-blue-50 text-gray-800 rounded-tl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-3 bg-white p-4 rounded-xl shadow-lg">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your medical question..."
            className="flex-1 p-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 transition-colors bg-blue-50"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            Send
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-500">
          For medical emergencies, please contact your healthcare provider directly.
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;