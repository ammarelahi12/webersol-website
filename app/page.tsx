'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-primary-500/20 rounded-full">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-primary-400">AI-Powered Solutions</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-cyan-400 to-purple-400">
                Transform Your Business With AI
              </h1>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Premium software development, AI automation, and digital marketing services for enterprises worldwide. We build the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Book Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <div className="absolute inset-4 border border-primary-500/30 rounded-2xl glass-effect backdrop-blur-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-400 mb-2">500+</div>
                  <p className="text-gray-400">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '150+', label: 'Team Members' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '12+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and applications built with modern technologies',
                icon: '🌐',
              },
              {
                title: 'AI Solutions',
                description: 'AI agents, automation, and intelligent systems',
                icon: '🤖',
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications',
                icon: '📱',
              },
              {
                title: 'Digital Marketing',
                description: 'SEO, paid ads, and social media marketing',
                icon: '📊',
              },
              {
                title: 'ERP & CRM',
                description: 'Enterprise resource planning and customer management',
                icon: '⚙️',
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful and intuitive user experiences',
                icon: '✨',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl glass-effect hover:border-primary-500/50 transition-all hover:shadow-glow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
