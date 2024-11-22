import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bike } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">Honda Showroom</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link to="/models" className="text-gray-700 hover:text-red-600 transition-colors">
              Models
            </Link>
            <Link to="/showrooms" className="text-gray-700 hover:text-red-600 transition-colors">
              Showrooms
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/models"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Models
            </Link>
            <Link
              to="/showrooms"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Showrooms
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;