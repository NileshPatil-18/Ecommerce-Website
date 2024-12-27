import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-xl text-gray-500 mb-4">
            No products found. Try adjusting your filters or search criteria.
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            Refresh Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
