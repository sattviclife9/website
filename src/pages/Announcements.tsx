import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Share2, Copy } from 'lucide-react';
import SEO from '../components/SEO';
import ShopNav from '../components/ShopNav';

export default function Announcements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get('id') === 'takra-dhara';
  const [copied, setCopied] = useState(false);

  const openModal = () => setSearchParams({ id: 'takra-dhara' });
  const closeModal = () => setSearchParams({});

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/announcements?id=takra-dhara`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Medicated Takra Dhara - Special Offer',
          text: 'Check out this luxury Ayurvedic cooling package at Sattvic Life!',
          url: shareUrl
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <ShopNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <SEO 
          title="Announcements | Sattvic Life"
          description="Stay updated with the latest announcements and happenings from Sattvic Life."
          keywords="Ayurvedic announcements, Sattvic Life updates"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-4">
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-lg">Hospital Updates</span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-6">Clinic <span className="italic">Announcements</span></h1>
          <p className="text-clinic-charcoal max-w-2xl mx-auto text-lg leading-relaxed">
            The latest important notices and announcements from our clinic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group block overflow-hidden rounded-2xl bg-white border border-clinic-border/60 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-64 overflow-hidden bg-clinic-teal-50">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" 
                alt="Chakra Dhara Therapy on Forehead" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-clinic-gold text-clinic-teal-900 font-medium px-3 py-1 rounded-full text-sm">
                Limited Time Offer
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-clinic-teal-600 bg-clinic-teal-50 px-3 py-1 rounded-full">Cooling Therapy</span>
                <span className="text-sm text-clinic-charcoal/70">Announced Today</span>
              </div>
              
              <h3 className="text-2xl font-serif text-clinic-teal-900 mb-3 group-hover:text-clinic-bronze transition-colors">
                Medicated Takra Dhara - Special Offer
              </h3>
              
              <p className="text-clinic-charcoal mb-6 line-clamp-3">
                Tired of internal heat, acidity or burning sensation? Relief from acidity, burning & body heat naturally with our clinically proven deep cooling therapy.
              </p>
              
              <div className="flex items-center justify-between mb-6 pt-6 border-t border-clinic-border/50">
                <div>
                  <div className="text-sm text-clinic-charcoal/70 line-through">₹4,000</div>
                  <div className="text-2xl font-serif text-clinic-teal-900">₹2,799</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-clinic-teal-900">90-110 mins</div>
                  <div className="text-sm text-clinic-charcoal/70">5 days recommended</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={openModal}
                  className="flex-1 py-3 bg-clinic-teal-50 text-clinic-teal-900 text-center rounded-xl font-medium hover:bg-clinic-teal-100 hover:shadow-md transition-all duration-300"
                >
                  View Details
                </button>
                <button
                  onClick={handleShare}
                  title="Share this offer"
                  className="p-3 bg-clinic-teal-50 text-clinic-teal-900 rounded-xl hover:bg-clinic-teal-100 transition-all duration-300 flex items-center justify-center"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-clinic-charcoal/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
              >
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button 
                    onClick={handleShare}
                    className="p-2 bg-white/80 backdrop-blur-md rounded-full text-clinic-charcoal hover:bg-white hover:text-clinic-teal-900 transition-colors shadow-sm"
                    title="Share"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={closeModal}
                    className="p-2 bg-white/80 backdrop-blur-md rounded-full text-clinic-charcoal hover:bg-white hover:text-clinic-teal-900 transition-colors shadow-sm"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-y-auto flex-1">
                  <div className="relative h-64 md:h-80 w-full bg-clinic-teal-50">
                    <img 
                      src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" 
                      alt="Chakra Dhara Therapy on Forehead" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal-900/80 via-clinic-teal-900/30 to-transparent flex items-end p-6 md:p-10">
                      <div className="text-white">
                        <div className="inline-block bg-clinic-gold text-clinic-teal-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                          Limited Time Offer
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-2">Medicated Takra Dhara</h2>
                        <p className="text-white/90 text-lg">Doctor-Guided Luxury Ayurvedic Cooling Package</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    <p className="text-lg text-clinic-teal-900 font-medium mb-8 leading-relaxed">
                      This is a premium, doctor-guided luxury Ayurvedic package designed to treat the root cause of heat-related issues like acidity, burning sensation, skin problems, anxiety, poor sleep, and stress-related headaches.
                    </p>

                    <h3 className="text-xl font-serif text-clinic-teal-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-clinic-bronze"></span>
                      Here’s how the treatment works
                    </h3>

                    <div className="space-y-6 mb-10">
                      {[
                        { title: 'Takra Dhara', desc: 'The main therapy where medicated buttermilk is poured in a gentle, rhythmic flow over the forehead (Aadnya Chakra). This deeply calms the nervous system, reduces internal heat, and helps with acidity, anxiety, and hormonal headaches.' },
                        { title: 'Abhyanga (Cooling Herbal Massage)', desc: 'A full-body massage using medicated oils that help release trapped heat, improve circulation, and relax the body.' },
                        { title: 'Gentle Steam (Swedan)', desc: 'Mild herbal steam that supports detoxification without increasing heat, allowing the body to eliminate toxins safely.' },
                        { title: 'Padabhyanga with Kansya Thali', desc: 'A specialized foot therapy that neutralizes excess heat in the body, improves sleep quality, and helps in acidity, stress, and even body pain like sciatica.' },
                        { title: 'Bidalak (Eye Cooling Therapy)', desc: 'Application of a medicated paste around the eyes to reduce burning, strain, and calm the mind.' },
                        { title: 'Skin Soothing Pack', desc: 'Customized Ayurvedic face pack to reduce tanning, heat-related skin issues, and promote natural glow.' },
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-clinic-teal-50 flex items-center justify-center border border-clinic-teal-100">
                            <Check className="w-3.5 h-3.5 text-clinic-teal-600" />
                          </div>
                          <div>
                            <strong className="text-clinic-teal-900 block mb-1">{feature.title}</strong>
                            <span className="text-clinic-charcoal/80 text-sm leading-relaxed block">{feature.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-clinic-gold/10 rounded-2xl p-6 border border-clinic-gold/30 mb-8 text-center md:text-left">
                      <p className="font-serif text-clinic-teal-900 text-lg leading-relaxed">
                        ✨ This is not just a relaxation therapy—it’s a targeted medical treatment for people who are not getting lasting relief with regular medicines.
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-clinic-border/50">
                      <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                          <span className="text-lg text-clinic-charcoal/70 line-through">₹4,000</span>
                          <span className="text-3xl font-serif text-clinic-teal-900">₹2,799</span>
                        </div>
                        <div className="text-sm font-medium text-clinic-teal-600">90-110 mins session • 5 days recommended</div>
                      </div>
                      <a 
                        href="https://wa.me/919404417145?text=Hello,%20I%20would%20like%20to%20book%20the%20Takra%20Dhara%20cooling%20therapy%20offer." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-8 py-4 bg-clinic-teal-900 text-white text-center rounded-xl font-medium hover:bg-clinic-teal-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Book Your Therapy
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
