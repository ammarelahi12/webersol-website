'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 mb-8">Last updated: January 2024</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Webersol's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations related to access to or use of the website</li>
                  <li>Remove or obscure any proprietary notice or labels on the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                <p>
                  The materials on Webersol's website are provided on an 'as is' basis. Webersol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
                <p>
                  In no event shall Webersol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Webersol's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Webersol's website could include technical, typographical, or photographic errors. Webersol does not warrant that any of the materials on its website are accurate, complete, or current. Webersol may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
                <p>
                  Webersol has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Webersol of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications</h2>
                <p>
                  Webersol may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Webersol operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark-800 rounded-lg">
                  <p><strong>Email:</strong> legal@webersol.com</p>
                  <p><strong>Address:</strong> Global Headquarters, Web Solutions Building</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
