import React from 'react';
import { motion } from 'motion/react';
import AboutNav from '../components/AboutNav';
import OptimizedImage from '../components/OptimizedImage';

const PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    alt: "Welcoming Reception Area"
  },
  {
    url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    alt: "Panchakarma Treatment Room"
  },
  {
    url: "https://images.unsplash.com/photo-1611077544835-2dcd8e6db87a?auto=format&fit=crop&q=80&w=800",
    alt: "Traditional Ayurvedic Medicines"
  },
  {
    url: "https://images.unsplash.com/photo-1593811167554-754a619cd0bc?auto=format&fit=crop&q=80&w=800",
    alt: "Relaxation and Consultation Space"
  },
  {
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    alt: "Calming Ambiance"
  },
  {
    url: "https://images.unsplash.com/photo-1520085607414-f060731f8b65?auto=format&fit=crop&q=80&w=800",
    alt: "Serene Environment"
  }
];

export default function AboutCentre() {
  return (
    <>
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg">Our Sanctuary</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] font-light mb-6">
          The <span className="italic font-medium text-clinic-teal-900/80">Centre</span>
        </h1>
        <p className="text-clinic-charcoal font-light leading-relaxed text-lg max-w-2xl mx-auto">
          Step into a place of peace and authentic healing. Our facility in Pune is designed to provide you with a serene, hygienic, and deeply traditional environment for your Ayurvedic journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHOTOS.map((photo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-clinic-teal-50 border border-clinic-border"
          >
            <OptimizedImage 
              src={photo.url} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white font-medium p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {photo.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
