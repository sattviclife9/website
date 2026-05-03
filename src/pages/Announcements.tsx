import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Share2, Copy } from 'lucide-react';
import SEO from '../components/SEO';
import InsightsNav from '../components/InsightsNav';

export default function Announcements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentModalId = searchParams.get('id');
  const [copied, setCopied] = useState<string | null>(null);

  const openModal = (id: string) => setSearchParams({ id });
  const closeModal = () => setSearchParams({});

  const handleShare = async (e: React.MouseEvent, id: string, title: string) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/announcements?id=${id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: 'Check out this update from Sattvic Life!',
          url: shareUrl
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const announcements = [
    {
      id: 'takra-dhara',
      badge: 'Limited Time Offer',
      category: 'Cooling Therapy',
      date: 'Announced Today',
      title: 'Medicated Takra Dhara - Special Offer',
      description: 'Tired of internal heat, acidity or burning sensation? Relief from acidity, burning & body heat naturally with our clinically proven deep cooling therapy.',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
      imageAlt: 'Chakra Dhara Therapy on Forehead',
      oldPrice: '₹4,000',
      price: '₹2,799',
      duration: '90-110 mins',
      recommended: '5 days recommended',
    },
    {
      id: 'womens-day-camp',
      badge: 'Free Camp',
      category: 'Special Event',
      date: '8th & 9th March',
      title: 'Celebrating International Women\'s Day',
      description: '"Honoring Her Strength, Healing Her Soul" - A Luxurious Wellness Experience for Her. Join us for a free Ayurvedic consultation, therapies, and exclusive discounts.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
      imageAlt: 'Ayurvedic Wellness Spa for Women',
      oldPrice: '',
      price: 'Free',
      duration: '10am - 7pm',
      recommended: 'Advance Booking Required',
    }
  ];

  const activeAnnouncement = announcements.find(a => a.id === currentModalId);

  return (
    <>
      <InsightsNav />
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
          {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="group block overflow-hidden rounded-2xl bg-white border border-clinic-border/60 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-64 overflow-hidden bg-clinic-teal-50">
              <img 
                src={announcement.image} 
                alt={announcement.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {announcement.badge && (
                <div className="absolute top-4 right-4 bg-clinic-gold text-clinic-teal-900 font-medium px-3 py-1 rounded-full text-sm">
                  {announcement.badge}
                </div>
              )}
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-clinic-teal-600 bg-clinic-teal-50 px-3 py-1 rounded-full">{announcement.category}</span>
                <span className="text-sm text-clinic-charcoal/70">{announcement.date}</span>
              </div>
              
              <h3 className="text-2xl font-serif text-clinic-teal-900 mb-3 group-hover:text-clinic-bronze transition-colors">
                {announcement.title}
              </h3>
              
              <p className="text-clinic-charcoal mb-6 line-clamp-3">
                {announcement.description}
              </p>
              
              {(announcement.price || announcement.duration) && (
                <div className="flex items-center justify-between mb-6 pt-6 border-t border-clinic-border/50">
                  <div>
                    {announcement.oldPrice && <div className="text-sm text-clinic-charcoal/70 line-through">{announcement.oldPrice}</div>}
                    {announcement.price && <div className="text-2xl font-serif text-clinic-teal-900">{announcement.price}</div>}
                  </div>
                  <div className="text-right">
                    {announcement.duration && <div className="text-sm font-medium text-clinic-teal-900">{announcement.duration}</div>}
                    {announcement.recommended && <div className="text-sm text-clinic-charcoal/70">{announcement.recommended}</div>}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button 
                  onClick={() => openModal(announcement.id)}
                  className="flex-1 py-3 bg-clinic-teal-50 text-clinic-teal-900 text-center rounded-xl font-medium hover:bg-clinic-teal-100 hover:shadow-md transition-all duration-300"
                >
                  View Details
                </button>
                <button
                  onClick={(e) => handleShare(e, announcement.id, announcement.title)}
                  title="Share this offer"
                  className="p-3 bg-clinic-teal-50 text-clinic-teal-900 rounded-xl hover:bg-clinic-teal-100 transition-all duration-300 flex items-center justify-center"
                >
                  {copied === announcement.id ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeAnnouncement && (
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
                    onClick={(e) => handleShare(e, activeAnnouncement.id, activeAnnouncement.title)}
                    className="p-2 bg-white/80 backdrop-blur-md rounded-full text-clinic-charcoal hover:bg-white hover:text-clinic-teal-900 transition-colors shadow-sm"
                    title="Share"
                  >
                    {copied === activeAnnouncement.id ? <Check className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
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
                      src={activeAnnouncement.image} 
                      alt={activeAnnouncement.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal-900/80 via-clinic-teal-900/30 to-transparent flex items-end p-6 md:p-10">
                      <div className="text-white">
                        {activeAnnouncement.badge && (
                          <div className="inline-block bg-clinic-gold text-clinic-teal-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                            {activeAnnouncement.badge}
                          </div>
                        )}
                        <h2 className="text-3xl md:text-4xl font-serif mb-2">{activeAnnouncement.title}</h2>
                        <p className="text-white/90 text-lg">{activeAnnouncement.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    {activeAnnouncement.id === 'takra-dhara' ? (
                      <>
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
                      </>
                    ) : activeAnnouncement.id === 'womens-day-camp' ? (
                      <>
                        <p className="text-lg text-clinic-teal-900 font-medium mb-8 leading-relaxed">
                          "Honoring Her Strength, Healing Her Soul" - A Luxurious Wellness Experience for Her. Join us for a special camp with complimentary therapies and exclusive discounts.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                          <div>
                            <h3 className="text-xl font-serif text-clinic-teal-900 mb-6 flex items-center gap-3">
                              <span className="w-8 h-[1px] bg-clinic-bronze"></span>
                              Complimentary Services
                            </h3>
                            <div className="space-y-4">
                              {[
                                'Consultation For Women',
                                'Full Body Steam Bath (For Relaxation)',
                                'Viddhakarma (For Instant Pain Management)',
                                'Agnikarma (For Stiffness & Pain Relief)',
                                'Hijama (Natural Blood Detox)',
                                'Padabhyanga (Foot Therapy)',
                                'Customized Diet Plan',
                                'Ayurvedic Lifestyle Guidance',
                                'Body Constitution Examination (Prakriti Parikshan)'
                              ].map((feature, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-clinic-gold/20 flex items-center justify-center border border-clinic-gold/50">
                                    <Check className="w-3.5 h-3.5 text-clinic-teal-900" />
                                  </div>
                                  <span className="text-clinic-charcoal/90">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-serif text-clinic-teal-900 mb-6 flex items-center gap-3">
                              <span className="w-8 h-[1px] bg-clinic-bronze"></span>
                              Exclusive Discounts
                            </h3>
                            <div className="space-y-4 mb-8">
                              {[
                                'Sponsored* 60% Off On Full Body Relaxation (Massage + Steam)',
                                '50% Off On Medicines',
                                '20% Off On Abhyanga (Full Body Massage)'
                              ].map((discount, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-clinic-teal-50 flex items-center justify-center border border-clinic-teal-100">
                                    <span className="text-clinic-teal-600 font-bold text-xs">%</span>
                                  </div>
                                  <span className="text-clinic-charcoal/90">{discount}</span>
                                </div>
                              ))}
                            </div>

                            <div className="bg-clinic-teal-50 rounded-xl p-5 border border-clinic-teal-100">
                              <h4 className="font-medium text-clinic-teal-900 mb-3">Camp Details</h4>
                              <ul className="text-sm text-clinic-charcoal/80 space-y-2">
                                <li><strong>Date:</strong> 8th & 9th March</li>
                                <li><strong>Timing:</strong> 10:00 AM - 7:00 PM</li>
                                <li><strong>Location:</strong> C Building, 1st Floor, Girme Heights, Salunke Vihar, Pune - 411040</li>
                                <li className="pt-2 mt-2 border-t border-clinic-teal-200 text-clinic-teal-900 font-medium">🎁 An Exclusive Complimentary Herbal Mehendi Pack Free for Every Lady</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-clinic-gold/10 rounded-2xl p-6 border border-clinic-gold/30 mb-8 text-center md:text-left">
                          <p className="font-serif text-clinic-teal-900 text-lg leading-relaxed">
                            ✨ Advance booking is compulsory to avoid hassle. Secure your slot early!
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-lg text-clinic-teal-900 font-medium mb-8 leading-relaxed">
                          {activeAnnouncement.description}
                        </p>
                      </>
                    )}

                    {(activeAnnouncement.price || activeAnnouncement.duration) && (
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-clinic-border/50">
                        <div className="text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                            {activeAnnouncement.oldPrice && <span className="text-lg text-clinic-charcoal/70 line-through">{activeAnnouncement.oldPrice}</span>}
                            {activeAnnouncement.price && <span className="text-3xl font-serif text-clinic-teal-900">{activeAnnouncement.price}</span>}
                          </div>
                          {(activeAnnouncement.duration || activeAnnouncement.recommended) && (
                            <div className="text-sm font-medium text-clinic-teal-600">
                              {[activeAnnouncement.duration && `${activeAnnouncement.duration} session`, activeAnnouncement.recommended].filter(Boolean).join(' • ')}
                            </div>
                          )}
                        </div>
                        <a 
                          href={`https://wa.me/919404417145?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(activeAnnouncement.title)}.`} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full md:w-auto px-8 py-4 bg-clinic-teal-900 text-white text-center rounded-xl font-medium hover:bg-clinic-teal-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                          Contact Us
                        </a>
                      </div>
                    )}
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
