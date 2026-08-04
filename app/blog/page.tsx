'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build web applications.',
    author: 'John Doe',
    date: '2024-01-15',
    category: 'AI',
    image: '🤖',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Why Your Business Needs a Custom Web Solution',
    excerpt: 'Off-the-shelf solutions might not be enough. Discover the benefits of custom development.',
    author: 'Jane Smith',
    date: '2024-01-12',
    category: 'Business',
    image: '💼',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Mobile-First Design: Best Practices in 2024',
    excerpt: 'Learn how to design mobile applications that users love.',
    author: 'Mike Johnson',
    date: '2024-01-10',
    category: 'Design',
    image: '📱',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Cloud Security: What Every CTO Should Know',
    excerpt: 'Essential security practices for cloud-based applications.',
    author: 'Sarah Wilson',
    date: '2024-01-08',
    category: 'Security',
    image: '🔒',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Scaling Your SaaS: Database Optimization Tips',
    excerpt: 'How to optimize database performance as your platform grows.',
    author: 'Alex Brown',
    date: '2024-01-05',
    category: 'Technology',
    image: '⚡',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'SEO Strategies for 2024: What Changed?',
    excerpt: 'The latest SEO trends and how to stay ahead of the competition.',
    author: 'Emma Davis',
    date: '2024-01-02',
    category: 'Marketing',
    image: '📊',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest insights on technology, digital marketing, and business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-dark-800 rounded-xl border border-primary-500/20 overflow-hidden hover:border-primary-500/50 hover:shadow-glow transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center text-5xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mt-4 group"
                  >
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
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
            className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-6">
              Get the latest insights on technology and digital transformation delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
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
