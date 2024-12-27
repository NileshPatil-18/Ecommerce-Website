import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/api"; // Create this API service
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Handle search filtering
  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Loading state display
  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-16 w-16 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  // Error state display
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <Header onSearch={handleSearch} />

      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center">Our Products</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No products found.
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Dashboard;
