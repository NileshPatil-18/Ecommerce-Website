import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-md text-white ${
            isInCart ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {isInCart ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          onClick={handleWishlistToggle}
          className={`px-4 py-2 rounded-md ${
            isInWishlist ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
