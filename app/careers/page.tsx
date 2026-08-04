'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Users } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced full stack developer to join our team.',
    requirements: ['5+ years experience', 'React & Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI/ML',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Help us build AI solutions for enterprise clients.',
    requirements: ['Python expertise', 'TensorFlow/PyTorch', 'ML models', 'GPT integration'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user experiences.',
    requirements: ['Figma expertise', 'UI/UX design', 'Prototyping', 'User research'],
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Build and maintain our cloud infrastructure.',
    requirements: ['AWS/Azure', 'Docker & Kubernetes', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    id: 5,
    title: 'Mobile Developer (React Native)',
    department: 'Mobile',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop cross-platform mobile applications.',
    requirements: ['React Native', '3+ years experience', 'iOS/Android', 'Performance optimization'],
  },
  {
    id: 6,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Lead our digital marketing initiatives.',
    requirements: ['SEO expertise', 'Google Ads', 'Social Media', 'Content strategy'],
  },
];

export default function CareersPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Work with passionate professionals and help transform businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Grow Your Skills', desc: 'Learn from industry experts and stay cutting-edge' },
              { title: 'Remote First', desc: 'Work from anywhere with flexible schedules' },
              { title: 'Great Benefits', desc: 'Competitive salary, health insurance, and more' },
              { title: 'Innovation', desc: 'Work on cutting-edge projects and technologies' },
              { title: 'Team Culture', desc: 'Collaborative environment with passionate people' },
              { title: 'Career Growth', desc: 'Clear career paths and professional development' },
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
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-dark-800 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`#`}
                    className="px-6 py-2 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm text-gray-300">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our careers newsletter and be the first to know about new opportunities.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none text-white"
              />
              <button className="px-6 py-3 bg-primary-500 text-dark-950 font-semibold rounded-lg hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
