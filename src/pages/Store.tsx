import React from 'react';
import { motion } from 'motion/react';
import ShopNav from '../components/ShopNav';

export default function Store() {
  return (
    <>
      <ShopNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg">Apothecary</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Online <span className="italic font-medium text-clinic-teal-900/80">Store</span>
        </h1>
        <p className="text-lg text-clinic-muted leading-relaxed">
          Authentic medicated oils, herbal supplements, and self-care tools derived from classical Ayurvedic texts. Coming soon.
        </p>
      </motion.div>
    </div>
    </>
  );
}
