import React from "react";
import { FaShippingFast, FaUndoAlt, FaHeadset } from "react-icons/fa";

const WhatWeSell = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Returns */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaUndoAlt className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Returns</h3>
            <p className="text-gray-600">
              Not satisfied with your purchase? Return it for free within 30
              days.
            </p>
          </div>
          {/* Free Shipping */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaShippingFast className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">
              Enjoy free shipping on orders over $50 across the globe.
            </p>
          </div>
          {/* 24/7 Support */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaHeadset className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer service team is here to assist you anytime, day or
              night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSell;
