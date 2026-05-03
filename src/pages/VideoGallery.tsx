import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import InsightsNav from '../components/InsightsNav';

export default function VideoGallery() {
  return (
    <>
      <InsightsNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <SEO 
          title="Video Gallery | Sattvic Life"
          description="Watch our latest videos on Ayurvedic health, treatments, and wellness tips."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-6">
            Video Gallery
          </h1>
          <p className="text-lg text-clinic-charcoal/80 leading-relaxed">
            Coming soon. Stay tuned for our latest videos on Ayurvedic health, treatments, and wellness tips.
          </p>
        </motion.div>
      </div>
    </>
  );
}
