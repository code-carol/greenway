import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-greenway-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">The Greenway</h3>
            <p className="text-greenway-100 mb-4">
              Explore London's green corridor, a 4.3-mile route offering a
              unique perspective of East London.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/explore/tags/londongreenway/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-greenway-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-greenway-100 hover:text-white transition-colors"
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-greenway-100 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-greenway-100 hover:text-white transition-colors"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-greenway-100 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-greenway-100 mb-4">
              Stay updated with the latest Greenway news and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-greenway-500 hover:bg-greenway-600 rounded-r-md px-4 py-2 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-greenway-800 text-center text-greenway-300">
          <p>
            &copy; {new Date().getFullYear()} London Greenway. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
