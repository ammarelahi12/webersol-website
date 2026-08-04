'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: January 2024</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  Webersol IT Solutions ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Device Information:</strong> Browser type, IP address, device type, operating system</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on site, clicks, referring URL</li>
                  <li><strong>Cookies:</strong> Technical cookies for site functionality and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Your Information</h2>
                <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
                  <li>Increase the efficiency and operation of the Site</li>
                  <li>Monitor and analyze usage and trends to improve your experience</li>
                  <li>Notify you of updates to the Site</li>
                  <li>Offer new products, services, and/or recommendations to you</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Disclosure of Your Information</h2>
                <p className="mb-4">We may share information we have collected about you in certain situations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>By Law or to Protect Rights:</strong> If required by law</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your data with vendors who assist us</li>
                  <li><strong>Business Transfers:</strong> If the Company is involved in a merger, acquisition, or asset sale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark-800 rounded-lg">
                  <p><strong>Email:</strong> privacy@webersol.com</p>
                  <p><strong>Address:</strong> Global Headquarters, Web Solutions Building</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
