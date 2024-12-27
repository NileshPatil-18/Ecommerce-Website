import React from "react";

const CategoryFilter = ({ categories, onCategorySelect, selectedCategory }) => {
  const CategoryFilter = ({ categories, onCategorySelect, selectedCategory }) => {
    return (
      <div className="container mx-auto px-4 mt-24"> {/* Increase margin-top to create space */}
        <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => onCategorySelect(category)} // Notify parent on category change
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  };
}  

export default CategoryFilter;
