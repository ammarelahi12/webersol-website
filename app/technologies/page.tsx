'use client';

import { motion } from 'framer-motion';

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'DynamoDB'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'CI/CD'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'GPT Models', 'Hugging Face', 'Scikit-learn'] },
  { category: 'CMS', items: ['WordPress', 'Webflow', 'Contentful', 'Strapi', 'Headless CMS', 'Ghost'] },
  { category: 'E-commerce', items: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'Custom Platforms', 'Payment Gateways'] },
];

export default function TechnologiesPage() {
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
              Technology Stack
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, performant, and secure solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-dark-800 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-primary-400 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm text-gray-300 hover:bg-primary-500/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why We Choose These Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance',
                description: 'Every tool is selected for speed, efficiency, and optimal performance.',
              },
              {
                title: 'Scalability',
                description: 'Built to grow with your business without compromising quality.',
              },
              {
                title: 'Security',
                description: 'Industry-leading security practices and frameworks.',
              },
              {
                title: 'Community',
                description: 'Strong communities ensure long-term support and updates.',
              },
              {
                title: 'Integration',
                description: 'Easy integration with existing systems and third-party services.',
              },
              {
                title: 'Future-Proof',
                description: 'Technologies that will remain relevant for years to come.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-dark-800 rounded-lg border border-primary-500/20"
              >
                <h3 className="text-lg font-semibold text-primary-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
