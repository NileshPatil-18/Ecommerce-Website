import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return <div className="text-center py-10">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow hover:shadow-lg transition-all"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)} x {item.quantity} ={" "}
                  ${item.totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <p className="text-lg">
          Total Items: <span className="font-bold">{totalQuantity}</span>
        </p>
        <p className="text-lg">
          Total Price: <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </p>
      </div>

      {/* Proceed to Checkout Button */}
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
