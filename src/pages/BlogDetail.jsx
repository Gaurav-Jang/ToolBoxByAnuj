import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // ✅ reset image error when navigating to new blog
    setImageError(false);

    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id.toString() === id);
        if (found) {
          setBlog(found);
          setRelated(data.filter((b) => b.id !== found.id).slice(0, 3));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/blogs")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Browse Blogs
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{blog.title}</span>
        </div>
      </motion.nav>

      {/* Blog Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="relative w-full h-72">
          {!imageError && blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            // ✅ Fallback if no image
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
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
          )}
        </div>

        <div className="p-8">
          {/* Blog Meta Info */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-2 gap-y-1 mb-4">
            <span className="truncate max-w-[120px] sm:max-w-none">
              {blog.author}
            </span>
            <span>•</span>
            <span className="truncate max-w-[120px] sm:max-w-none">
              {blog.date}
            </span>
            {blog.category && (
              <>
                <span>•</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
              </>
            )}
          </div>

          {/* Blog Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug break-words">
            {blog.title}
          </h1>

          {/* Blog Content */}
          <div
            className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4"
            dangerouslySetInnerHTML={{
              __html: blog.longDescription || blog.description,
            }}
          />

          {/* ✅ Instagram Reel Button */}
          {blog.reel && (
            <div className="mt-8 text-center">
              <a
                href={blog.reel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🎥 Watch Reel
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative w-full h-40">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                        e.target.insertAdjacentHTML(
                          "afterend",
                          `<div class='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500'>
                            <svg class='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' 
                                d='M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                          </div>`
                        );
                      }}
                    />
                  ) : (
                    // ✅ Fallback for related blogs too
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
                      <svg
                        className="w-8 h-8 text-white"
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
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
