import React from 'react';
import { motion } from 'motion/react';
import WellnessNav from '../components/WellnessNav';

export default function Store() {
  return (
    <>
      <WellnessNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Apothecary</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Online <span className="italic font-medium text-clinic-teal-900/80">Store</span>
        </h1>
        <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
          Authentic medicated oils, herbal supplements, and self-care tools derived from classical Ayurvedic texts. Coming soon.
        </p>
      </motion.div>
    </div>
    </>
  );
}
