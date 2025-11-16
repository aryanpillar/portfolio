import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const CreatorJourney: React.FC = () => {
  return (
    <Section title="Building in Public">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-gray-700 dark:text-[--text-secondary]"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Over the past few years, I've been experimenting with content and community on Instagram. What started as curiosity turned into{' '}
              <a 
                href="https://instagram.com/ironpi11ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-[--glow-cyan] hover:underline transition-all"
              >
                @ironpi11ar
              </a>
              {' '}— a space where I share ideas, stories, and lessons learned along the way.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Through consistent storytelling, thoughtful visuals, and genuine engagement, I've grown the account to over{' '}
              <span className="font-bold text-gray-900 dark:text-white">17,000 followers</span>, generating{' '}
              <span className="font-bold text-gray-900 dark:text-white">hundreds of thousands of views</span> each month.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              It's taught me a lot about what resonates with people — the importance of authenticity, the power of iteration, and how feedback shapes better work. I approach it like building a product: test, learn, refine, repeat.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[--border-color]/30">
              <p className="text-base md:text-lg text-gray-600 dark:text-[--text-secondary] italic">
                For me, it's not about being an influencer — it's about understanding people, experimenting with ideas, and building something that connects.
              </p>
            </div>
          </motion.div>

          {/* Instagram Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative print:hidden"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--glow-cyan]/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-4 rounded-2xl border-2 border-[--glow-cyan] shadow-2xl shadow-[--glow-cyan]/20">
                <img
                  src="/instagram-screenshot.png"
                  alt="Instagram @ironpi11ar"
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex items-center justify-center h-96 bg-gradient-to-br from-purple-500/10 to-[--glow-cyan]/10 rounded-lg">
                        <div class="text-center p-8">
                          <svg class="w-20 h-20 mx-auto mb-4 text-[--glow-cyan]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <p class="text-gray-600 dark:text-gray-400 font-medium">@ironpi11ar</p>
                          <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">17K+ Followers</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CreatorJourney;
