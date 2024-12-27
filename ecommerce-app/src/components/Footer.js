import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        {/* Footer content wrapped in a grid for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
          </div>
          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-black"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: <span className="hover:text-gray-400">support@example.com</span></p>
            <p>Phone: <span className="hover:text-gray-400">+123456789</span></p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 mt-8">
        <p className="text-sm">© 2024 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
