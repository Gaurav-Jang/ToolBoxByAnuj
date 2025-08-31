import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Send, Youtube } from "lucide-react"; // <-- Instagram Icon
import logo from "../../public/images/image.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo Image */}
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={logo}
              alt="Logo"
              className="h-8 w-8 object-contain rounded-full"
            />
            {/* Logo Text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              techy_anuj
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Instagram Icon */}
            <motion.a
              href="https://instagram.com/techy_anuj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-pink-500 hover:text-pink-600"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>

            {/* Telegram Icon */}
            <motion.a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-500 hover:text-blue-600"
            >
              <Send className="w-6 h-6" />
            </motion.a>

            {/* YouTube Icon */}
            <motion.a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-red-500 hover:text-red-600"
            >
              <Youtube className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Instagram Icon (Mobile) */}
          <a
            href="https://instagram.com/techy_anuj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-pink-500 hover:text-pink-600"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>

          {/* Telegram Icon (Mobile) */}
          <a
            href="https://t.me/+9VLLc-uIqUw2MWE1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-600"
          >
            <Send className="w-6 h-6" /> {/* Telegram-like paper plane */}
            <span>Telegram</span>
          </a>

          {/* YouTube Icon (Mobile) */}
          <a
            href="https://www.youtube.com/@TecoTech_30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-600"
          >
            <Youtube className="w-6 h-6" />
            <span>YouTube</span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
