'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = params.id;

  // Mock blog post data - in a real app, this would come from a database
  const post = {
    id: postId,
    title: 'The Future of AI in Web Development',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI',
    image: '🤖',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing how we build web applications. From predictive analytics to natural language processing, AI is becoming an integral part of modern web development.</p>

      <h2>Key Trends</h2>
      <p>Several key trends are shaping the AI landscape in web development:</p>
      <ul>
        <li>Machine Learning Models: Increasingly powerful models that can run in the browser</li>
        <li>AI-Powered Code Generation: Tools that can write code automatically</li>
        <li>Enhanced User Experience: Personalization through AI algorithms</li>
        <li>Predictive Analytics: Data-driven insights for better decision making</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>Here are some practical applications of AI in web development today:</p>
      <ol>
        <li>Chatbots and Virtual Assistants</li>
        <li>Recommendation Systems</li>
        <li>Image Recognition and Processing</li>
        <li>Natural Language Processing</li>
        <li>Anomaly Detection</li>
      </ol>

      <h2>Challenges</h2>
      <p>While AI offers tremendous opportunities, there are also challenges we need to address:</p>
      <ul>
        <li>Privacy concerns with data collection</li>
        <li>Model interpretability and transparency</li>
        <li>Computational requirements</li>
        <li>Ethical considerations</li>
      </ul>

      <h2>The Future</h2>
      <p>Looking ahead, we can expect AI to become even more integrated into web development workflows. We'll likely see more accessible AI tools, better performance optimization, and a stronger focus on ethical AI development.</p>

      <h2>Conclusion</h2>
      <p>The integration of AI into web development is not a distant future—it's happening now. Developers who understand and embrace these technologies will be well-positioned for success in the evolving digital landscape.</p>
    `,
  };

  return (
    <div className="pt-20">
      {/* Back Link */}
      <section className="py-8 border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>

            <div className="h-64 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-8xl mb-8">
              {post.image}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-6 text-gray-300">
              <p>
                Artificial Intelligence is revolutionizing how we build web applications. From predictive analytics to natural language processing, AI is becoming an integral part of modern web development.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8">Key Trends</h2>
              <p>Several key trends are shaping the AI landscape in web development:</p>
              <ul className="space-y-2 ml-6">
                <li>✓ Machine Learning Models: Increasingly powerful models that can run in the browser</li>
                <li>✓ AI-Powered Code Generation: Tools that can write code automatically</li>
                <li>✓ Enhanced User Experience: Personalization through AI algorithms</li>
                <li>✓ Predictive Analytics: Data-driven insights for better decision making</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8">Practical Applications</h2>
              <p>Here are some practical applications of AI in web development today:</p>
              <ol className="space-y-2 ml-6 list-decimal">
                <li>Chatbots and Virtual Assistants</li>
                <li>Recommendation Systems</li>
                <li>Image Recognition and Processing</li>
                <li>Natural Language Processing</li>
                <li>Anomaly Detection</li>
              </ol>

              <h2 className="text-3xl font-bold text-white mt-8">Challenges</h2>
              <p>While AI offers tremendous opportunities, there are also challenges we need to address:</p>
              <ul className="space-y-2 ml-6">
                <li>• Privacy concerns with data collection</li>
                <li>• Model interpretability and transparency</li>
                <li>• Computational requirements</li>
                <li>• Ethical considerations</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8">The Future</h2>
              <p>
                Looking ahead, we can expect AI to become even more integrated into web development workflows. We'll likely see more accessible AI tools, better performance optimization, and a stronger focus on ethical AI development.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8">Conclusion</h2>
              <p>
                The integration of AI into web development is not a distant future—it's happening now. Developers who understand and embrace these technologies will be well-positioned for success in the evolving digital landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Share this article:</span>
            <button className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
              <Share2 size={18} className="text-primary-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                href={`/blog/${item}`}
                className="p-6 bg-dark-800 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all group"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold group-hover:text-primary-400 transition-colors">
                  Article Title {item}
                </h3>
                <p className="text-sm text-gray-400 mt-2">Read more about this topic</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
