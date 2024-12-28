import React from "react";
import banner from "../assets/banner.png"; // Ensure this is your actual banner image path

const Banner = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 mt-16 md:mt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${banner}), linear-gradient(to right, rgba(59, 130, 246, 0.7), rgba(37, 99, 235, 0.7))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={banner} // Ensure this points to your actual image
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
          Welcome to <span className="text-yellow-400">ShopEase</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-500 drop-shadow-md">
          Discover amazing deals and shop your favorite products today.
        </p>
        <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-xl hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300 ease-in-out">
          Shop Now
        </button>
      </div>

      {/* Decorative Elements (Floating Circles) */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>

      {/* Interactive Hover Element */}
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-50 hover:opacity-100 transition-all duration-300"></div>
    </div>
  );
};

export default Banner;
