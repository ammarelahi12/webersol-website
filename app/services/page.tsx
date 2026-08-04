'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom websites and web applications using modern technologies like React, Next.js, and Node.js',
    features: ['Responsive Design', 'SEO Optimized', 'Fast & Secure', 'Scalable Architecture'],
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    description: 'AI agents, machine learning models, automation workflows, and intelligent systems',
    features: ['AI Agents', 'GPT Integration', 'Automation', 'Custom Models'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native iOS/Android and cross-platform mobile applications',
    features: ['iOS & Android', 'Cross-Platform', 'User-Friendly', 'High Performance'],
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    description: 'SEO, Google Ads, Meta Ads, Social Media Marketing, and Content Strategy',
    features: ['SEO Services', 'PPC Ads', 'Social Media', 'Content Marketing'],
  },
  {
    icon: '⚙️',
    title: 'Enterprise Solutions',
    description: 'ERP, CRM, POS Systems, and Custom Software Development',
    features: ['ERP Systems', 'CRM Solutions', 'POS Systems', 'Custom Software'],
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user experiences with modern design principles',
    features: ['User Research', 'UI Design', 'Prototyping', 'Interaction Design'],
  },
];

export default function ServicesPage() {
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
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From web development to AI automation, we deliver premium services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-dark-800 rounded-xl border border-primary-500/20 hover:border-primary-500/50 hover:shadow-glow transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors group"
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Strategy', desc: 'Planning the perfect solution' },
              { step: '03', title: 'Execution', desc: 'Building with precision and care' },
              { step: '04', title: 'Delivery', desc: 'Launch and ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-5xl font-bold text-primary-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-primary-500/50">→</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">Let's discuss your project and create something amazing together.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
