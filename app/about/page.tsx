'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building the Future of Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Since 2012, Webersol has been delivering premium software solutions and digital services to enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Webersol was founded with a mission to transform businesses through innovative technology solutions. What started as a small team of passionate developers has grown into a global agency serving enterprise clients across multiple continents.
                </p>
                <p>
                  We believe in delivering excellence, not just code. Every project is an opportunity to create lasting impact for our clients and their customers.
                </p>
                <p>
                  Today, we're recognized as a leading provider of custom software, AI solutions, and digital marketing services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '500+', label: 'Projects' },
                { number: '150+', label: 'Team Members' },
                { number: '50+', label: 'Enterprise Clients' },
                { number: '12+', label: 'Countries' },
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-dark-800 rounded-lg border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in everything we do, from code to design to customer service.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, always exploring new technologies and methodologies.',
              },
              {
                title: 'Integrity',
                description: 'We believe in transparent communication and honest relationships with our clients.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-dark-800 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
              >
                <h3 className="text-2xl font-semibold text-primary-400 mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              '✓ 12+ years of industry experience',
              '✓ 500+ successful projects delivered',
              '✓ 50+ enterprise clients globally',
              '✓ Award-winning team of experts',
              '✓ 24/7 support and maintenance',
              '✓ Transparent pricing and communication',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4"
              >
                <span className="text-2xl text-primary-400">{item.split(' ')[0]}</span>
                <span className="text-lg text-gray-300">{item.substring(2)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
