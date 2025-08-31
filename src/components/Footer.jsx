import { Link } from "react-router-dom";
import { Instagram, Send, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              techy_anuj
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Discover amazing apps with our curated collection. Find the
              perfect applications for your needs with our simple and safe
              interface.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Stay updated with the latest apps and features.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                {/* Instagram */}
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

                {/* Telegram */}
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

                {/* YouTube */}
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} techy_anuj. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-400 text-sm">
              Made with ❤️ for app discovery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
