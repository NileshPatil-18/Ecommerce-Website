import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);  // Correctly calling onSearch with the current search term
  };

  return (
    
    <div className="relative text-black">
      {!showSearchBar ? (
        <FiSearch
          className="text-2xl text-black cursor-pointer"
          onClick={() => setShowSearchBar(true)}
        />
      ) : (
        <div className="flex items-center space-x-2">
          <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-l-md focus:outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-500">
            Search
          </button>
        </form>
        </div>
       )}
      </div>
  );
};

export default SearchBar;
