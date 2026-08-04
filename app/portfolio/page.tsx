'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with Shopify integration',
    category: 'E-commerce',
    image: '🛍️',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard with AI-powered insights',
    category: 'AI/Analytics',
    image: '📊',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Secure banking application for iOS and Android',
    category: 'Mobile',
    image: '💰',
    technologies: ['React Native', 'Node.js', 'AWS', 'Firebase'],
  },
  {
    id: 4,
    title: 'SaaS Management Platform',
    description: 'Multi-tenant SaaS platform for team collaboration',
    category: 'SaaS',
    image: '🚀',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient management system',
    category: 'Healthcare',
    image: '🏥',
    technologies: ['React', 'Java', 'PostgreSQL', 'Azure'],
  },
  {
    id: 6,
    title: 'Supply Chain Management',
    description: 'Real-time supply chain tracking and optimization',
    category: 'Enterprise',
    image: '📦',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Google Cloud'],
  },
];

export default function PortfolioPage() {
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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects and see what we've built for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-dark-800 rounded-xl border border-primary-500/20 overflow-hidden hover:border-primary-500/50 hover:shadow-glow transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-primary-400 text-primary-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-dark-700 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '12+', label: 'Years Active' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
