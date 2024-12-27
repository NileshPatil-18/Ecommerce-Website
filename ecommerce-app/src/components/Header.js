import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Header = ({ setSearchQuery, categories, setSelectedCategory ,selectedCategory}) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 px-6 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-all duration-300">
            <img
              src="/logo.png" // Replace with your actual logo file path
              alt="E-Shop Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold tracking-wide ml-2 hover:text-yellow-400 transition-colors duration-300">
              E-Shop
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 px-6">
          <SearchBar onSearch={(setSearchQuery)} />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex items-center text-base font-medium hover:text-gray-200 transition-all duration-300 relative"
          >
            <FaHeart className="mr-2 text-lg" />
            <span className="hidden sm:inline">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center text-base font-medium hover:text-gray-200 transition-all duration-300"
          >
            <FaShoppingCart className="mr-2 text-lg" />
            <span className="hidden sm:inline">Cart</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="text-base font-medium hover:text-gray-200 transition-all duration-300"
          >
            Login
          </Link>
        </nav>
      </div>

      {/* Category Navigation */}
      {categories?.length > 0 && (
        <div className="bg-blue-800 text-white py-6 px-4 align-middle">
          <div className="container mx-auto flex overflow-x-auto space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm font-medium px-4 py-2 rounded transition duration-300 
                  ${category === 'All' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-800 hover:bg-blue-700'}
                  ${category === selectedCategory ? 'bg-blue-600' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
