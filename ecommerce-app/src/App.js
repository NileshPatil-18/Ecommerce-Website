import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import { fetchProducts } from "./services/api"; // Create this API service

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await fetchProducts();
        const categoryRes = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoryData = await categoryRes.json();

        setProducts(productsRes);
        setCategories(["All", ...categoryData]);
        setFilteredProducts(productsRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
      <Header
        setSearchQuery={setSearchQuery}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <main className="flex-grow">
        <Banner />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <WhatWeSell />
      </main>
      <Footer />
    </div>
  );
};

export default App;
