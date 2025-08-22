import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Blog Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback if no image */}
        <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Category Badge */}
        {blog.category && (
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {blog.category}
            </span>
          </div>
        )}
      </div>

      {/* Blog Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 font-poppins line-clamp-1 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        {/* View Button */}
        <Link to={`/blogs/${blog.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Blog
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
