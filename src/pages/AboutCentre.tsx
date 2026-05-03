import React from 'react';
import { motion } from 'motion/react';
import AboutNav from '../components/AboutNav';
import OptimizedImage from '../components/OptimizedImage';

const PHOTOS = [
  {
    url: "https://lh3.googleusercontent.com/d/1_6jBkEY4w7AKeAnG44TcTwZqKW44eqcj",
    alt: "Gateway to Healing"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1sQfdHjEYqEfirr7WhTRCfHVa156ce_Wh",
    alt: "Welcoming Reception Area"
  },
  {
    url: "https://lh3.googleusercontent.com/d/10nUKii06kxcKqVy75GQUUmh0Kx8Ldyuq",
    alt: "Serene Relaxation Lounge"
  },
  {
    url: "https://lh3.googleusercontent.com/d/13ugpW0wBmJWAtrPqvFZqpxhfRZb_kmwM",
    alt: "Patient Comfort Area"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1hx5gdwnMD8Ycue17yVNv1xJPKN4bTvsz",
    alt: "Consultation Sanctuary"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1VSyacovnUzczMTsS3I1RCAAZVhXoE33V",
    alt: "Panchakarma Care Room"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1nRbmx_gTdnG89r_wQYoTlqA6CRf8OPXO",
    alt: "Therapeutic Healing Space"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1NGAuss9v2xj4Oim5tiklmndcHo2LR_yM",
    alt: "Holistic Therapies Room"
  },
  {
    url: "https://lh3.googleusercontent.com/d/18NvLbtOZ7PuAX9ONAOm_meqi7TAcVGE_",
    alt: "Authentic Herbal Apothecary"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1vq_oynK_ixoE9O2qcVkMfsi7cOrfL2pK",
    alt: "Recognized Expertise"
  }
];

export default function AboutCentre() {
  return (
    <>
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Our Sanctuary</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] font-light mb-8 md:mb-12">
          The <span className="italic font-medium text-clinic-teal-900/80">Centre</span>
        </h1>
        <p className="text-clinic-charcoal font-light leading-relaxed text-xl md:text-2xl max-w-3xl mx-auto">
          Step into a place of peace and authentic healing. Our facility in Pune is designed to provide you with a serene, hygienic, and deeply traditional environment for your Ayurvedic journey.
        </p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {PHOTOS.map((photo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-clinic-teal-50 border border-clinic-border break-inside-avoid"
          >
            <div className="w-full relative shadow-sm">
              <OptimizedImage 
                src={photo.url} 
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
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
