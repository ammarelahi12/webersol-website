'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
            404
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">Page Not Found</h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Back to Home
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-colors"
            >
              Contact Support
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-12 border-t border-gray-800"
          >
            <p className="text-gray-400 mb-6">Perhaps you're looking for one of these?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 bg-dark-800 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all group"
                >
                  <span className="text-primary-400 group-hover:text-primary-300 transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
