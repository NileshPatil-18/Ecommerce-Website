import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Dashboard = ({ filteredProducts, handleSearch }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Products</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
