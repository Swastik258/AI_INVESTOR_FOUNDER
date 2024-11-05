import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-br from-gray-800 to-gray-900 opacity-40 blur-[150px] rounded-full animate-pulse" style={{ top: '-15%', left: '-20%' }}></div>
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-gray-700 to-gray-800 opacity-30 blur-[150px] rounded-full animate-pulse delay-1000" style={{ bottom: '-25%', right: '-25%' }}></div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-screen-md mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight transform hover:scale-105 transition-transform duration-500">
            Investor Match
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with investors perfectly aligned with your vision. Our platform leverages cutting-edge AI to find the ideal partners to fuel your business growth.
        </p>
        <Link to="/login">
          <button className="bg-white text-black px-6 py-2 lg:px-8 lg:py-3 rounded-lg text-base lg:text-lg font-semibold shadow-lg transform hover:scale-110 transition-transform duration-500">
            Get Started
          </button>
        </Link>
      </div>

      {/* Additional Decorative Elements for 3D Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600 to-blue-900 opacity-50 blur-lg rounded-full shadow-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-600 to-purple-900 opacity-50 blur-lg rounded-full shadow-2xl animate-pulse-slow"></div>
    </div>
  );
}

export default Home;
