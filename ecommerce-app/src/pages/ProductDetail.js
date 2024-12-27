import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-lg">
            <span className="font-bold">Category:</span> {product.category}
          </p>

          {/* Price Formatting */}
          <p className="text-lg">
            <span className="font-bold">Price:</span>{" "}
            <span className="text-green-600">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>
          </p>

          <p className="flex items-center">
            <span className="font-bold">Rating:</span>{" "}
            <span className="ml-2">{product.rating.rate} / 5</span>
          </p>
          <p>
            <span className="font-bold">Stock Units:</span> {product.rating.count}
          </p>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Offers:</strong> Get an additional 10% off with code{" "}
              <span className="font-bold text-blue-600">SAVE10</span>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Delivery:</strong> Free delivery by{" "}
              <span className="font-bold">
                {new Date(
                  Date.now() + 5 * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </span>
            </p>
          </div>

          {/* Add to Cart / Wishlist buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
