import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about toolboxbyanuj and our mission to make app discovery
            simple and safe for everyone.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              At toolboxbyanuj, we believe that discovering great applications
              should be simple, safe, and enjoyable. Our platform serves as a
              curated gateway to the best apps available, helping users find
              exactly what they need without the hassle of searching through
              countless options or worrying about security.
            </p>
          </motion.section>

          {/* What We Do Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
                What We Do
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  App Curation
                </h3>
                <p className="text-gray-600">
                  We carefully review and test every application in our
                  collection to ensure they meet our high standards for quality,
                  security, and user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Safe Links
                </h3>
                <p className="text-gray-600">
                  All download and visit links are verified to ensure they lead
                  to legitimate, secure sources. Your safety is our top
                  priority.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simple Interface
                </h3>
                <p className="text-gray-600">
                  Our clean, intuitive design makes it easy to browse, discover,
                  and learn about apps without any unnecessary complexity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Regular Updates
                </h3>
                <p className="text-gray-600">
                  We continuously update our collection with new apps and keep
                  existing information current to provide the best experience.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
                Our Values
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Quality First
                  </h3>
                  <p className="text-gray-600">
                    We prioritize quality over quantity, ensuring every app in
                    our collection meets high standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    User Safety
                  </h3>
                  <p className="text-gray-600">
                    Security and privacy are paramount. We verify all apps and
                    links to protect our users.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Accessibility
                  </h3>
                  <p className="text-gray-600">
                    Our platform is designed to be accessible and easy to use
                    for people of all technical backgrounds.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Ready to Discover Amazing Apps?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust toolboxbyanuj for their app
              discovery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apps"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                Browse Apps
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
