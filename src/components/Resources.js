import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  const items = [
    {
      name: 'AI-Powered Report Analysis',
      para: 'Upload medical reports and get AI-driven insights on potential health risks and key findings.',
      path: '/analysis'
    },
    {
      name: 'Personalized Treatment',
      para: 'Discover the best hospitals and doctors based on your diagnosis, location, and budget.',
      href: '#'
    },
    {
      name: 'Cost & Hospital Comparison',
      para: 'Compare treatment costs across different hospitals and countries to find the most affordable options.',
      href: '#'
    },
    {
      name: 'Medical Travel Assistance',
      para: 'Get detailed guidance on visas, flights, and accommodations for your treatment abroad.',
      href: '#'
    },
    {
      name: 'Virtual Doctor Consultation',
      para: 'Connect with medical experts for second opinions and personalized health advice.',
      href: '#'
    },
  ];

  const handleNavigation = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-blue-50">
      {/* Floating blurred gradient in the background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-r from-blue-50 to-blue-200 rounded-full blur-3xl opacity-40" />
      </div>

      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        Find the Right Resources with MedBridge
      </h1>

      {/* 2×2 grid for the first 4 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item)}
            className="bg-white rounded-xl shadow-xl p-6 cursor-pointer
                       transition-transform transform hover:-translate-y-1 
                       hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-6">
              {item.para}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(item);
              }}
              className="inline-block py-2 px-4 bg-blue-600 text-white 
                         font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
