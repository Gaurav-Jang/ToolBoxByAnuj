import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              techy_anuj ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website techy_anujb.com (the "Service"). Please read this privacy
              policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily
                  provide when you contact us through our contact form,
                  including your name, email address, and any message content
                  you choose to send.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect
                  certain information about your device, including information
                  about your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track
                activity on our Service and hold certain information. Cookies
                are files with small amounts of data which may include an
                anonymous unique identifier.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Types of Cookies We Use:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for the
                    website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors interact with our website
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to deliver
                    relevant advertisements to you
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Enable enhanced
                    functionality and personalization
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Third-Party Services and Advertising
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Google AdSense
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use Google AdSense to display advertisements on our
                  website. Google AdSense uses cookies to serve ads based on
                  your prior visits to our website or other websites. Google's
                  use of advertising cookies enables it and its partners to
                  serve ads to our users based on their visit to our site and/or
                  other sites on the Internet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Google Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We may use Google Analytics to monitor and analyze the use of
                  our Service. Google Analytics is a web analytics service
                  offered by Google that tracks and reports website traffic.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Opt-Out Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You may opt out of personalized advertising by visiting
                  Google's Ads Settings at
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    www.google.com/settings/ads
                  </a>
                  . You can also opt out of some third-party vendor's use of
                  cookies by visiting
                  <a
                    href="http://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    www.aboutads.info/choices/
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may use the information we collect from you in the following
              ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>
                To display relevant advertisements through our advertising
                partners
              </li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Data Protection and Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, please
              note that no method of transmission over the Internet or
              electronic storage is 100% secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service is not intended for children under the age of 13. We
              do not knowingly collect personally identifiable information from
              children under 13. If you become aware that a child has provided
              us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Your Rights and Choices
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to delete your personal information</li>
                <li>
                  The right to restrict or object to our processing of your
                  personal information
                </li>
                <li>The right to data portability</li>
              </ul>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. These countries may have different data
              protection laws than your country. When we transfer your
              information, we ensure appropriate safeguards are in place to
              protect your privacy and rights.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: privacy@techy_anuj.com</p>
              <p>
                Website:{" "}
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Contact Form
                </a>
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Your Consent
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By using our website, you consent to our Privacy Policy and agree
              to its terms. If you do not agree to this policy, please do not
              use our website. Your continued use of the website following the
              posting of changes to this policy will be deemed your acceptance
              of those changes.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
