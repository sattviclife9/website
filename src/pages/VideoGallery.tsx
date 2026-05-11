import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import InsightsNav from '../components/InsightsNav';

export default function VideoGallery() {
  return (
    <>
      <InsightsNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-16 md:pb-32">
        <SEO 
          title="Video Gallery | Sattvic Life"
          description="Watch our latest videos on Ayurvedic health, treatments, and wellness tips."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-28"
        >
          <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Watch & Learn</span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
            Video <span className="italic font-medium text-clinic-teal-900/80">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
            Coming soon. Stay tuned for our latest videos on Ayurvedic health, treatments, and wellness tips.
          </p>
        </motion.div>
      </div>
    </>
  );
}
