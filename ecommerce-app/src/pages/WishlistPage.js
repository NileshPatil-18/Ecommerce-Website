import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { Link } from "react-router-dom"; // Import Link for navigation

const WishlistPage = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  if (items.length === 0) {
    return <div className="text-center py-10">Your wishlist is empty.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain"
              />
            </Link>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => handleRemove(item.id)}
              >
                Remove from Wishlist
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
