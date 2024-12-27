import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-full flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products"
        className="px-4 py-2 rounded-md w-full text-black"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
