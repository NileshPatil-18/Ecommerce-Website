import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import WhatWeSell from "./components/WhatWeSell";
import Banner from "./components/Banner";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // State hooks for products, categories, filters
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetching products and categories from API
  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productRes = await fetch("https://fakestoreapi.com/products");
        const productData = await productRes.json();

        const categoryRes = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoryData = await categoryRes.json();

        setProducts(productData);
        setCategories(["All", ...categoryData]);
        setFilteredProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductsAndCategories();
  }, []);

  // Handling filtering of products based on category and search query
  useEffect(() => {
    let updatedProducts = products;

    // Filter by category
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header
         setSearchQuery={setSearchQuery} // passing the setter function here
         categories={categories}
         setSelectedCategory={setSelectedCategory}
         selectedCategory={selectedCategory}
      />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Banner /> {/* Displaying the Banner */}
        
        <Routes>
          {/* Set Dashboard as the Landing Page */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <WhatWeSell /> {/* What We Sell Section */}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
