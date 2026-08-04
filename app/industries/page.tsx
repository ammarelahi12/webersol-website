'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    name: 'E-commerce',
    description: 'Shopify, WooCommerce, and custom e-commerce solutions',
    icon: '🛍️',
  },
  {
    name: 'SaaS',
    description: 'Cloud-based applications and subscription platforms',
    icon: '☁️',
  },
  {
    name: 'FinTech',
    description: 'Financial technology, payments, and banking solutions',
    icon: '💳',
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant health tech and telemedicine platforms',
    icon: '🏥',
  },
  {
    name: 'Real Estate',
    description: 'Property management, CRM, and listing platforms',
    icon: '🏢',
  },
  {
    name: 'Manufacturing',
    description: 'ERP systems, supply chain, and factory management',
    icon: '🏭',
  },
  {
    name: 'Education',
    description: 'Learning management systems and e-learning platforms',
    icon: '📚',
  },
  {
    name: 'Logistics',
    description: 'Fleet management, tracking, and delivery optimization',
    icon: '🚚',
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With expertise across multiple industries, we deliver tailored solutions that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-dark-800 rounded-lg border border-primary-500/20 hover:border-primary-500/50 hover:shadow-glow transition-all"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Industry Expertise Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Understanding',
                description: 'We understand the unique challenges and requirements of your industry.',
              },
              {
                title: 'Best Practices',
                description: 'Proven methodologies and industry standards for optimal results.',
              },
              {
                title: 'Compliance Ready',
                description: 'Built with regulatory requirements and compliance in mind.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-dark-800 rounded-xl border border-primary-500/20"
              >
                <h3 className="text-2xl font-semibold text-primary-400 mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
