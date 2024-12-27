import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 mt-16 md:mt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="https://via.placeholder.com/1500x500" // Replace with your actual background image URL
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-400">E-Shop</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
          Discover amazing deals and shop your favorite products today.
        </p>
        <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300">
          Shop Now
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Banner;
