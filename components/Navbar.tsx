import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, X } from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          <div className="w-8 h-8 rounded-full bg-greenway-500 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-greenway-800">Greenway</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-greenway-600 transition-colors"
          >
            Map
          </Link>
          <Link
            to="/community"
            className="text-gray-700 hover:text-greenway-600 transition-colors"
          >
            Community
          </Link>
          <Link
            to="/feedback"
            className="text-gray-700 hover:text-greenway-600 transition-colors"
          >
            Feedback
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-greenway-600 transition-colors"
          >
            About
          </Link>
          <a
            href="https://www.instagram.com/explore/tags/londongreenway/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-greenway-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="flex flex-col py-2">
            <Link
              to="/"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-greenway-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Map
            </Link>
            <Link
              to="/community"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-greenway-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Community
            </Link>
            <Link
              to="/feedback"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-greenway-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Feedback
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-greenway-600 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <a
              href="https://www.instagram.com/explore/tags/londongreenway/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-greenway-600 transition-colors flex items-center space-x-2"
              onClick={closeMobileMenu}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
