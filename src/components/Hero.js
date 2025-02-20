import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container relative w-full bg-white text-black py-16 overflow-hidden">
      {/* Blurred Blue Gradient at Top Left */}
      <div className="absolute top-0 left-0">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-300 opacity-30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transforming Healthcare with AI
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Access affordable, high-quality medical care worldwide. Our AI-powered platform offers seamless health insights, cost comparisons, and global treatment access—all in one place.
          </p>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out shadow-lg inline-flex items-center"
            aria-label="Start your journey with AI-powered healthcare"
          >
            Start Your Journey
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {/* Optional Hero Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/path/to/your/hero-image.png"
            alt="AI-powered healthcare illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
