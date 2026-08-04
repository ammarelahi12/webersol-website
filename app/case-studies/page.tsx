'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Increase by 300%',
    client: 'Fashion Retail Brand',
    challenge: 'Slow website, poor user experience, high cart abandonment',
    solution: 'Complete website redesign with Next.js and optimization',
    results: {
      revenue: '+300%',
      users: '+150%',
      time: '6 months',
    },
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'AI Automation Saved 500 Hours/Month',
    client: 'B2B Software Company',
    challenge: 'Manual data entry and repetitive tasks',
    solution: 'Custom AI automation system with GPT integration',
    results: {
      efficiency: '+500h',
      cost: '-40%',
      time: '3 months',
    },
    icon: Users,
  },
  {
    id: 3,
    title: 'Reduced Time-to-Market by 50%',
    client: 'FinTech Startup',
    challenge: 'Need for rapid app development and deployment',
    solution: 'Agile development with React Native cross-platform app',
    results: {
      time: '-50%',
      markets: '+5',
      time_period: '4 months',
    },
    icon: Clock,
  },
  {
    id: 4,
    title: 'Increased Lead Generation by 250%',
    client: 'B2B Marketing Agency',
    challenge: 'Low organic traffic and lead conversion',
    solution: 'SEO optimization and content marketing strategy',
    results: {
      leads: '+250%',
      traffic: '+400%',
      time: '5 months',
    },
    icon: Target,
  },
];

export default function CaseStudiesPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses transform and scale through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 bg-dark-800 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary-500/10 rounded-lg">
                          <Icon className="text-primary-400" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-primary-400">Client</p>
                          <p className="font-semibold">{study.client}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-400 transition-colors">
                        {study.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Challenge</p>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Solution</p>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-4 font-semibold">Key Results</p>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="p-4 bg-dark-700 rounded-lg border border-primary-500/20">
                            <p className="text-2xl font-bold text-primary-400 mb-1">{value}</p>
                            <p className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold mb-6">Ready for Your Success Story?</h2>
            <p className="text-gray-300 mb-8">Let's discuss how we can help your business achieve similar results.</p>
            <button className="px-8 py-4 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
