import React, { useState, useEffect, useCallback } from 'react';
import { Leaf, ChevronRight, ChevronLeft, ArrowRight, Sun, Droplets, Wind, Activity, Stethoscope, Star, MessageCircle, Utensils, Heart, Brain, Quote, Check, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { ANNOUNCEMENTS } from '../data/announcementsData';

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    testimonial: "I was suffering from chronic lower back pain for years. Dr Aqsa's Agnikarma treatment provided immediate relief that I couldn't find elsewhere. Truly life-changing experience.",
    rating: 5,
    condition: "Lower Back Pain"
  },
  {
    name: "Priya Sharma",
    testimonial: "The Panchakarma detox recommended by Dr Aqsa Ma'am helped me clear my skin and improved my digestion tremendously. She is very knowledgeable and compassionate.",
    rating: 5,
    condition: "Digestive Issues"
  },
  {
    name: "Sunita Reddy",
    testimonial: "Shirodhara under the doctor's guidance was the most relaxing experience of my life. It helped me manage my stress and insomnia naturally. I highly recommend Sattvic for authentic Ayurvedic care.",
    rating: 5,
    condition: "Insomnia & Stress"
  },
  {
    name: "Vikram Singh",
    testimonial: "Agnikarma effectively fixed my frozen shoulder when other therapies failed. I regained full mobility within a few sessions. Very grateful to Dr Aqsa and the team.",
    rating: 5,
    condition: "Frozen Shoulder"
  },
  {
    name: "Anjali Gupta",
    testimonial: "The Janu Basti treatment for my knee osteoarthritis was incredible. It relieved my pain and allowed me to walk comfortably again without relying on painkillers. Dr Aqsa Ma'am's expertise is highly recommended.",
    rating: 5,
    condition: "Knee Pain (OA)"
  }
];

const THERAPIES = [
  {
    id: 1,
    title: 'Musculoskeletal & Joint Care',
    description: 'Advanced treatments like Viddhakarma and Agnikarma to provide instant and lasting relief from arthritis, sciatica, and muscular stiffness.',
    image: 'https://drive.google.com/thumbnail?id=1FhWwAavrUV07zP-votO8uSljAp0f0WSn&sz=w600',
    icon: <Sun className="w-5 h-5 text-clinic-gold" />,
    duration: 'Rapid Relief',
    path: '/treatments#musculoskeletal-joint-care'
  },
  {
    id: 3,
    title: 'Digestive & Metabolic Health',
    description: 'Restoring digestive balance gently and naturally through personalized detox regimens to improve metabolism and overcome discomfort.',
    image: 'https://drive.google.com/thumbnail?id=1IersAK5TZ2WKQuASTaKw8y0zvQ6nQJXl&sz=w600',
    icon: <Leaf className="w-5 h-5 text-clinic-gold" />,
    duration: 'Internal Balance',
    path: '/treatments#digestive-metabolic-health'
  },
  {
    id: 4,
    title: 'Mental Health & Neurology',
    description: 'Deeply relaxing therapies including Shirodhara and Nasya to remove deeply-rooted toxins, nourish the mind, and restore emotional stability.',
    image: 'https://drive.google.com/thumbnail?id=1jSQ-E6gnKoMksygLjoGggogu3VsXszHa&sz=w600',
    icon: <Wind className="w-5 h-5 text-clinic-gold" />,
    duration: 'Calming',
    path: '/treatments#mental-health-neurology'
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(0);
  const [currentTherapy, setCurrentTherapy] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const nextTestimonial = () => {
    setTestimonialDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToTestimonial = (idx: number) => {
    setTestimonialDirection(idx > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(idx);
  };

  const nextTherapy = () => {
    setCurrentTherapy((prev) => (prev + 1) % THERAPIES.length);
  };

  const prevTherapy = () => {
    setCurrentTherapy((prev) => (prev - 1 + THERAPIES.length) % THERAPIES.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Sattvic Advanced Ayurveda & Panchakarma Centre",
      "alternateName": ["Sattvic Ayurveda", "Sattvic Life", "Sattvic Ayurvedic Clinic"],
      "description": "Consult Dr. Khan Aqsa Zarin, widely regarded as the best Ayurvedic doctor in Pune. Expert Kerala Panchakarma, Nadi Parikshan, Agnikarma, and Viddhakarma therapies for chronic pain relief & holistic wellness.",
      "url": "https://sattvic.life",
      "logo": "https://sattvic.life/logo-full.svg",
      "telephone": "+919404417145",
      "medicalSpecialty": ["AyurvedicMedicine", "PainManagement", "DigestiveHealth", "Panchakarma"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C Building, 1st Floor, Girme Heights, Salunke Vihar Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.4851",
        "longitude": "73.8953"
      },
      "hasMap": "https://www.google.com/maps/search/Sattvic+Advanced+Ayurveda+and+Panchakarma+Centre",
      "openingHours": "Mo-Sa 10:00-14:00, 17:00-20:30; Su 10:00-14:00",
      "image": [
        "https://sattvic.life/logo-full.svg",
        "https://lh3.googleusercontent.com/d/1Z5sQpQRsH-JUUuxKU2kYdS4MOflfEFTU"
      ],
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61585341523248",
        "https://www.instagram.com/sattvic_advanced_ayurveda/",
        "https://www.linkedin.com/in/drkhanaqsazarin/",
        "https://www.youtube.com/@SattvicAdvancedAyurveda"
      ],
      "review": TESTIMONIALS.map(t => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.name },
        "reviewBody": t.testimonial,
        "reviewRating": { "@type": "Rating", "ratingValue": t.rating }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://sattvic.life/#dr-khan-aqsa-zarin",
      "name": "Dr. Khan Aqsa Zarin",
      "image": "https://lh3.googleusercontent.com/d/1g206DwQZZlSr3ddAFXvdATkJU77qFk1K",
      "description": "Dr. Khan Aqsa Zarin is recognized as the best Ayurvedic doctor in Pune. She holds an M.D. in Kayachikitsa with extensive experience in Agnikarma, Viddhakarma, and classical Panchakarma.",
      "telephone": "+919404417145",
      "medicalSpecialty": "AyurvedicMedicine",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C Building, 1st Floor, Girme Heights, Salunke Vihar Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Dr. D. Y. Patil College of Ayurveda, Pune"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Government Ayurvedic College and Hospital, Nanded"
        }
      ],
      "knowsAbout": ["Ayurveda", "Panchakarma", "Agnikarma", "Viddhakarma", "Nadi Parikshan", "Kayachikitsa"],
      "memberOf": {
        "@type": "Organization",
        "name": "International Academy of Ayurved (IAA)"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best Ayurvedic Doctor in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Khan Aqsa Zarin (M.D. Kayachikitsa) is widely regarded as one of the best Ayurvedic doctors in Pune. She specializes in classical Panchakarma, Nadi Parikshan, and advanced pain therapies like her specialty Agnikarma and Viddhakarma, boasting a strong track record of non-surgical pain remedies."
          }
        },
        {
          "@type": "Question",
          "name": "Which clinic is the best for authentic Panchakarma in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sattvic Advanced Ayurveda & Panchakarma Centre, headed by Dr. Khan Aqsa Zarin in Pune (Salunke Vihar/NIBM road), is renowned for highly authentic, customized Kerala Panchakarma therapies like Shirodhara, Basti, Janu Basti, and classical body detoxification."
          }
        },
        {
          "@type": "Question",
          "name": "What is Nadi Parikshan (Ayurvedic Pulse Diagnosis) in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nadi Parikshan is the traditional pulse-based diagnosis method to identify internal doshic imbalances. Dr. Khan Aqsa Zarin offers expert Nadi Parikshan consultations at her Pune clinic to draft highly customized wellness and recovery schedules."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Best Ayurvedic Doctor in Pune | Dr. Khan Aqsa Zarin"
        description="Consult Dr. Khan Aqsa Zarin, the best Ayurvedic doctor in Pune. Expert root-cause treatment & traditional Kerala Panchakarma for chronic pain, skin & digestive disorders."
        keywords="best ayurvedic doctor in Pune, top ayurvedic physician Pune, Ayurveda clinic Pune, Agnikarma Pune, Panchakarma treatment Salunke Vihar, Dr. Khan Aqsa Zarin, chronic pain Ayurvedic relief Pune, Nadi Pariksha Pune"
        schema={schema}
      />

      {/* Modern Scrolling Updates Marquee */}
      <div className="w-full bg-clinic-teal-900 text-white py-3 border-y border-clinic-gold/30 flex items-center overflow-hidden relative select-none font-sans z-30">
        {/* Left pinned badge */}
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-clinic-teal-900 via-clinic-teal-900 to-transparent pr-10 pl-4 md:pl-6 flex items-center z-20">
          <div className="bg-clinic-gold text-clinic-teal-900 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-sm tracking-wider uppercase flex items-center gap-1.5 shadow-md">
            <Megaphone className="w-3.5 h-3.5 animate-bounce" />
            <span>Updates</span>
          </div>
        </div>

        {/* Rolling items container */}
        <div className="flex-1 overflow-hidden flex items-center ml-24 md:ml-32 pr-28 md:pr-36">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-16 whitespace-nowrap text-xs md:text-sm text-clinic-white-off font-medium tracking-wide py-0.5"
          >
            {Array(2).fill(null).map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-16 shrink-0 items-center">
                {ANNOUNCEMENTS.filter(ann => !ann.expired).map((ann) => (
                  <Link
                    key={`${ann.id}-${groupIdx}`}
                    to="/announcements"
                    className="hover:text-clinic-gold flex items-center gap-3 transition-colors duration-200 cursor-pointer shrink-0"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-clinic-gold animate-pulse shrink-0"></span>
                    <span className="font-serif font-semibold text-clinic-white-off tracking-normal">{ann.title}</span>
                    <span className="text-clinic-gold/90 font-bold shrink-0">({ann.date})</span>
                    {ann.price && (
                      <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded-sm border border-emerald-800/30 text-[11px] shrink-0">
                        OFFER: {ann.price} <span className="line-through text-slate-400 text-[10px] ml-1">{ann.oldPrice}</span>
                      </span>
                    )}
                    {ann.duration && <span className="text-slate-300 shrink-0">[{ann.duration}]</span>}
                    {ann.recommended && <span className="text-clinic-gold/80 italic shrink-0">{ann.recommended}</span>}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right pinned navigation action */}
        <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-clinic-teal-900 via-clinic-teal-900 to-transparent pl-10 pr-4 md:pr-6 flex items-center z-20">
          <Link
            to="/announcements"
            className="text-[10px] md:text-xs text-clinic-gold hover:text-white font-bold tracking-wider uppercase flex items-center gap-1 bg-clinic-teal-950/60 px-2.5 py-1 rounded-sm border border-clinic-gold/20 hover:border-clinic-gold transition-all shadow-sm"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center md:text-left relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
              }
            }}
            className="max-w-2xl mx-auto md:mx-0 lg:col-span-5"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              className="mb-6 md:mb-8 inline-flex items-center gap-4"
            >
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">
                Expert Ayurvedic Care
              </span>
            </motion.div>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              className="text-4xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] mb-6 md:mb-8 font-light"
            >
              Relief from Chronic Illness with <br className="hidden md:block" />
              <span className="italic font-medium text-clinic-teal-900/80">Authentic Ayurveda</span>
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              className="text-lg md:text-xl text-clinic-muted leading-relaxed max-w-xl mx-auto md:mx-0 mb-10"
            >
              We specialize in personalized Panchakarma and natural Ayurvedic treatments to address the root cause of your pain. Start your healing journey today.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
                <button className="group w-full justify-center flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest hover:bg-clinic-bronze hover:text-white transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5 border border-transparent">
                  Book Consultation
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual showing Clinic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative lg:col-span-7"
          >
            <div className="w-full aspect-video md:aspect-[4/3] bg-clinic-teal-50 rounded-2xl md:rounded-[2.5rem] border border-clinic-border shadow-xl relative overflow-hidden">
              <OptimizedImage
                src="https://lh3.googleusercontent.com/d/1Z5sQpQRsH-JUUuxKU2kYdS4MOflfEFTU"
                alt="Clinic Interior"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-clinic-teal-900/60 to-transparent p-6 md:p-8 pt-20 text-white">
                 <p className="font-serif text-xl md:text-2xl mb-1">Authentic Care Space</p>
                 <p className="text-white/80 text-[10px] md:text-xs tracking-widest uppercase font-bold">Your Sanctuary for Healing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Experience / Qualitative Trust Signal */}
      <section className="bg-white py-16 md:py-24 border-y border-clinic-border mb-16 md:mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.8 }}
             transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
             className="text-center mb-12 md:mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-4">The Sattvic Experience</h2>
             <p className="text-clinic-muted font-light text-lg">What to expect when you choose us for your healing journey.</p>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
             {[
               { icon: <Activity className="w-6 h-6" />, title: "Thorough Consultations", desc: "We spend time understanding your complete health history, lifestyle, and diet, not just treating your immediate symptoms." },
               { icon: <Leaf className="w-6 h-6" />, title: "Authentic Treatments", desc: "All our therapies use traditional Kerala Panchakarma methods and pure, unadulterated herbal formulations." },
               { icon: <Stethoscope className="w-6 h-6" />, title: "Root-Cause Focus", desc: "We aim to carefully treat the underlying imbalance in your doshas to provide sustainable, long-term health benefits." }
             ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, rotateX: 45, rotateY: -10, y: 40, z: -50 }}
                  whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0, z: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ 
                    rotateX: 6, 
                    rotateY: -4, 
                    y: -12, 
                    scale: 1.02,
                    z: 20, 
                    boxShadow: "20px 30px 40px -15px rgba(15, 118, 110, 0.2), -10px -10px 20px -5px rgba(255,255,255,0.9)" 
                  }}
                  className="group bg-gradient-to-br from-white to-clinic-ivory p-8 rounded-[2rem] border border-clinic-border relative shadow-sm flex flex-col items-start preserve-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-clinic-gold border border-clinic-border mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-clinic-teal-900 shadow-sm" style={{ transform: "translateZ(40px)" }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl border-b border-transparent pb-1 text-clinic-teal-900 mb-3 group-hover:text-clinic-teal-800 transition-colors duration-300" style={{ transform: "translateZ(30px)" }}>{feature.title}</h3>
                  <p className="text-clinic-charcoal font-light leading-relaxed text-sm lg:text-base selection:bg-clinic-teal-900/10" style={{ transform: "translateZ(20px)" }}>{feature.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="bg-clinic-teal-900 text-clinic-white-off py-16 md:py-28 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full md:w-1/3 text-center md:text-left"
          >
            <div className="mb-6 md:mb-8 inline-flex items-center justify-center md:justify-start gap-4">
               <span className="h-[1px] w-8 bg-clinic-gold"></span>
               <span className="text-clinic-gold font-serif italic text-lg md:text-xl">Philosophy of Care</span>
             </div>
             <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 text-white leading-[0.9]">
               Why Patients <br/><span className="italic font-medium text-clinic-gold">Trust Us</span>
             </h2>
             <p className="text-white/70 text-lg font-light leading-relaxed">Experience safe, effective, and trusted Ayurvedic care that prioritizes natural root-cause healing and personalized attention.</p>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8, staggerChildren: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
             className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6"
           >
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.2 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Instant pain management</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.3 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Integrated mind-body approach</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.4 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Personalized treatment plans</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.5 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Expertise in chronic disorders</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.6 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Natural healing methods</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.7 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.7 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Long-term preventive care</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-start gap-4 sm:col-span-2">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: false }} transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}>
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.8 }}>
                     <Check className="w-4 h-4 text-clinic-gold" strokeWidth={3} />
                   </motion.div>
                 </motion.div>
               </div>
               <span className="text-white/90 text-lg font-light">Doctor-guided therapies based on proven protocols</span>
             </motion.div>
           </motion.div>
         </div>
       </section>
 
       {/* What We Treat */}
      <section className="py-16 md:py-24 bg-white border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
             className="text-center mb-16 md:mb-20"
           >
             <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
               <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Our Expertise</span>
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
             </div>
             <h2 className="text-3xl md:text-5xl font-serif text-clinic-teal-900 mb-6 font-light leading-[0.9]">
               Conditions We <span className="italic font-medium text-clinic-teal-900/80">Treat</span>
             </h2>
             <p className="text-clinic-muted font-light text-lg max-w-2xl mx-auto">Discover the root-cause Ayurvedic solutions we provide for various chronic lifestyle disorders.</p>
           </motion.div>
           
           {/* Desktop Grid */}
           <div className="hidden md:grid md:grid-cols-3 gap-8">
             {THERAPIES.map((therapy, idx) => (
               <motion.div 
                 key={therapy.id}
                 initial={{ opacity: 0, y: 30, scale: 0.98 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                 className="group flex flex-col bg-clinic-ivory rounded-[2rem] overflow-hidden border border-clinic-border h-full"
               >
                 <div className="relative h-48 overflow-hidden">
                   <div className="absolute inset-0 bg-clinic-teal-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                   <OptimizedImage src={therapy.image} alt={therapy.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-clinic-teal-900">
                     {therapy.icon}
                     {therapy.duration}
                   </div>
                 </div>
                 <div className="p-6 sm:p-8 flex flex-col flex-1">
                   <h3 className="text-xl font-serif text-clinic-teal-900 mb-3 group-hover:text-clinic-gold transition-colors">{therapy.title}</h3>
                   <p className="text-clinic-charcoal font-light leading-relaxed mb-6 flex-1 text-sm sm:text-base">{therapy.description}</p>
                   <Link to={therapy.path || "/treatments"} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-clinic-teal-900 hover:text-clinic-gold transition-colors mt-auto group/link">
                     Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                   </Link>
                 </div>
               </motion.div>
             ))}
           </div>

           {/* Mobile Slider */}
           <div className="md:hidden relative pb-10 w-full">
             <div className="relative overflow-hidden w-full h-[450px]">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={currentTherapy}
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   transition={{ duration: 0.3 }}
                   drag="x"
                   dragConstraints={{ left: 0, right: 0 }}
                   onDragEnd={(e, { offset, velocity }) => {
                     const swipe = swipePower(offset.x, velocity.x);
                     if (swipe < -swipeConfidenceThreshold) {
                       nextTherapy();
                     } else if (swipe > swipeConfidenceThreshold) {
                       prevTherapy();
                     }
                   }}
                   className="absolute inset-0 w-full group flex flex-col bg-clinic-ivory rounded-[2rem] overflow-hidden border border-clinic-border h-[430px]"
                 >
                   <div className="relative h-48 overflow-hidden shrink-0">
                     <div className="absolute inset-0 bg-clinic-teal-900/10 pointer-events-none z-10" />
                     <OptimizedImage src={THERAPIES[currentTherapy].image} alt={THERAPIES[currentTherapy].title} className="w-full h-full object-cover pointer-events-none" />
                     <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-clinic-teal-900">
                       {THERAPIES[currentTherapy].icon}
                       {THERAPIES[currentTherapy].duration}
                     </div>
                   </div>
                   <div className="p-6 flex flex-col flex-1">
                     <h3 className="text-xl font-serif text-clinic-teal-900 mb-2">{THERAPIES[currentTherapy].title}</h3>
                     <p className="text-clinic-charcoal font-light leading-relaxed mb-6 flex-1 text-sm">{THERAPIES[currentTherapy].description}</p>
                     <Link to={THERAPIES[currentTherapy].path || "/treatments"} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-clinic-teal-900 mt-auto">
                       Learn More <ArrowRight className="w-4 h-4 ml-1" />
                     </Link>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
             <div className="flex justify-center gap-2 absolute bottom-0 inset-x-0">
               {THERAPIES.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentTherapy(idx)}
                   className={`w-2 h-2 rounded-full transition-all ${currentTherapy === idx ? 'bg-clinic-teal-900 w-6' : 'bg-clinic-teal-900/30'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
             className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Link to="/treatments/journey">
               <button className="bg-clinic-teal-900 border border-clinic-teal-900 text-white hover:bg-clinic-teal-800 px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest transition-all uppercase flex items-center gap-2 group shadow-lg">
                 Explore Treatment Journey
                 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
               </button>
             </Link>
             <Link to="/treatments">
               <button className="bg-transparent border border-clinic-teal-900 text-clinic-teal-900 hover:bg-clinic-teal-50 px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest transition-all uppercase">
                 View All Treatments
               </button>
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Dosha Quiz Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-clinic-teal-50 rounded-2xl md:rounded-[2.5rem] p-10 md:p-16 border border-clinic-border flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-sm overflow-hidden relative"
        >
          {/* Decorative background elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-clinic-gold/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-clinic-teal-900/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="text-center md:text-left max-w-2xl relative z-10">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-4 md:mb-6 leading-tight"
            >
              What's Your Ayurvedic Body Type?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-clinic-muted font-light text-lg"
            >
              Take our quick dosha quiz to uncover your unique mind-body constitution and receive personalized insight into your health.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
            className="w-full md:w-auto relative z-10"
          >
            <Link to="/dosha-quiz" className="block w-full md:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto whitespace-nowrap bg-clinic-gold text-clinic-charcoal px-8 py-4 rounded-xl text-[13px] font-bold tracking-widest shadow-sm hover:bg-clinic-bronze transition-colors uppercase relative overflow-hidden group"
              >
                <span className="relative z-10">Take the Quiz</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Lifestyle Tips Teaser */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-clinic-teal-900 rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-clinic-gold font-serif italic text-lg md:text-xl mb-6 md:mb-8 block">Ayurvedic Living</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-[0.9]">
                  Nourish Your Body,<br />
                  <span className="italic font-light">Calm Your Mind</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-light mb-8 md:mb-10 leading-relaxed">
                  Discover practical wisdom for daily rituals, mindful eating, and mental clarity through the Sattvic lifestyle. Small changes, profound impact.
                </p>
                <Link to="/lifestyle-tips" className="inline-block">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-clinic-gold hover:bg-clinic-gold/90 text-clinic-teal-900 px-8 py-4 rounded-full transition-all font-bold flex items-center gap-2 group shadow-lg"
                  >
                    Explore Lifestyle Tips
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <Link to="/lifestyle-tips" className="block">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10 shadow-lg cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <Utensils className="w-8 h-8 text-clinic-gold mb-3" />
                      <span className="text-sm font-medium">Sattvic Diet</span>
                    </motion.div>
                  </Link>
                  <Link to="/lifestyle-tips" className="block">
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-[4/5] bg-clinic-gold/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-clinic-gold/20 shadow-lg cursor-pointer hover:bg-clinic-gold/30 transition-colors"
                    >
                      <Brain className="w-8 h-8 text-clinic-gold mb-3" />
                      <span className="text-sm font-medium">Mindfulness</span>
                    </motion.div>
                  </Link>
                </div>
                <div className="space-y-4 pt-8">
                  <Link to="/lifestyle-tips" className="block">
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-[4/5] bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10 shadow-lg cursor-pointer hover:bg-white/15 transition-colors"
                    >
                      <Sun className="w-8 h-8 text-clinic-gold mb-3" />
                      <span className="text-sm font-medium">Daily Rhythms</span>
                    </motion.div>
                  </Link>
                  <Link to="/lifestyle-tips" className="block">
                    <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10 shadow-lg cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <Heart className="w-8 h-8 text-clinic-gold mb-3" />
                      <span className="text-sm font-medium">Holistic Joy</span>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Doctor Section - Key Local SEO target */}
      <section className="py-20 md:py-28 bg-white border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Col - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="col-span-1 lg:col-span-5 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-clinic-gold/20 via-transparent to-clinic-teal-900/10 rounded-3xl blur-xl" />
              <div className="relative bg-clinic-teal-50 rounded-3xl overflow-hidden shadow-2xl border border-clinic-border">
                <OptimizedImage
                  src="https://lh3.googleusercontent.com/d/1g206DwQZZlSr3ddAFXvdATkJU77qFk1K"
                  alt="Dr. Khan Aqsa Zarin - Best Ayurvedic Doctor in Pune"
                  className="w-full h-auto block transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
              {/* Overlapping stat pill */}
              <div className="absolute bottom-6 -right-4 md:-right-8 bg-clinic-teal-900 text-white p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs">
                <p className="text-2xl font-serif text-clinic-gold font-semibold">M.D. Kayachikitsa</p>
                <p className="text-xs text-white/70 font-mono mt-1">Dr. D. Y. Patil College of Ayurveda, Pune</p>
              </div>
            </motion.div>

            {/* Right Col - Story & Credentials */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-1 lg:col-span-7 space-y-6 md:space-y-8 text-left"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3">
                  <span className="h-[1px] w-6 bg-clinic-bronze"></span>
                  <span className="text-clinic-bronze font-serif italic text-base md:text-lg">Pune's Trusted Physician</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 font-light leading-tight">
                  Meet the <span className="italic font-medium text-clinic-teal-900/80">Best Ayurvedic Doctor</span> in Pune
                </h2>
              </div>

              <div className="space-y-4 text-clinic-muted font-light text-base md:text-lg leading-relaxed">
                <p className="text-clinic-charcoal font-normal text-lg md:text-xl">
                  Led by <strong className="text-clinic-teal-900 font-medium">Dr. Khan Aqsa Zarin</strong>, Sattvic Advanced Ayurveda is Pune's premium destination for authentic, evidence-based Ayurvedic diagnosis and root-cause healing.
                </p>
                <p>
                  As an accomplished specialist carrying an <strong className="text-clinic-teal-900 font-medium">M.D. in Kayachikitsa (Internal Medicine)</strong>, Dr. Khan Aqsa Zarin is designated as Pune's most dedicated expert for chronic joint disorders, cervical/lumbar spine care, skincare, and metabolic rejuvenation. Her lineage combines extensive clinical achievements, having successfully managed over 500+ complex chronic cases with specialized therapies including <strong className="text-clinic-teal-900 font-medium">Agnikarma</strong>, <strong className="text-clinic-teal-900 font-medium">Viddhakarma</strong>, and traditional <strong className="text-clinic-teal-900 font-medium">Kerala Panchakarma</strong>.
                </p>
                <p>
                  Dr. Aqsa is an active member of the <strong className="text-clinic-teal-900 font-medium">International Academy of Ayurved (IAA)</strong>, with three peer-reviewed, Scopus-indexed research publications in internationally eminent journals. Her pulse diagnosis (<strong className="text-clinic-teal-900 font-medium">Nadi Parikshan</strong>) consultation uncovers deep organic imbalances to restore systemic harmony safely and naturally.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-clinic-border">
                <div className="flex items-center gap-2">
                  <span className="text-clinic-gold text-lg">✦</span>
                  <span className="text-sm font-mono text-clinic-muted">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-clinic-gold text-lg">✦</span>
                  <span className="text-sm font-mono text-clinic-muted">90%+ Non-Surgical Pain Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-clinic-gold text-lg">✦</span>
                  <span className="text-sm font-mono text-clinic-muted">ScienceDirect Published Author</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/know-doctors">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-clinic-teal-900 hover:bg-clinic-teal-800 text-white px-8 py-4 rounded-sm text-[12px] font-bold tracking-widest uppercase transition-all shadow-md group"
                  >
                    View Doctor Credentials
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-clinic-ivory py-16 md:py-24 border-y border-clinic-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
             className="text-center mb-16 md:mb-20"
           >
             <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
               <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Patient Voices</span>
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-4 font-light leading-[0.9]">
               Healing <span className="italic font-medium text-clinic-teal-900/80">Journeys</span>
             </h2>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
             className="relative max-w-4xl mx-auto"
           >
             {/* Slider Navigation Buttons */}
             <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-12 z-20">
               <button 
                 onClick={prevTestimonial}
                 className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-clinic-border shadow-sm flex items-center justify-center text-clinic-teal-900 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors"
                 aria-label="Previous Testimonial"
               >
                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
               </button>
             </div>
             
             <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-12 z-20">
               <button 
                 onClick={nextTestimonial}
                 className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-clinic-border shadow-sm flex items-center justify-center text-clinic-teal-900 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors"
                 aria-label="Next Testimonial"
               >
                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
               </button>
             </div>

             {/* Testimonial Active Card */}
             <div className="relative min-h-[320px] md:min-h-[380px] w-full flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
               {TESTIMONIALS.map((t, idx) => {
                 let offset = idx - currentTestimonial;
                 if (offset < -1) offset += TESTIMONIALS.length;
                 if (offset > 1) offset -= TESTIMONIALS.length;
                 // Handle edge case if there are more than 3 elements
                 if (offset > 1 || offset < -1) return null;

                 const isVisible = Math.abs(offset) <= 1;

                 return (
                   <motion.div
                     key={idx}
                     initial={false}
                     animate={{ 
                       opacity: offset === 0 ? 1 : isVisible ? 0.5 : 0,
                       scale: offset === 0 ? 1 : 0.85,
                       rotateY: offset === 0 ? 0 : offset > 0 ? -55 : 55,
                       x: offset === 0 ? "0%" : offset > 0 ? "60%" : "-60%",
                       z: offset === 0 ? 40 : -400,
                       zIndex: offset === 0 ? 10 : 0,
                       boxShadow: offset === 0 ? "0 25px 50px -12px rgba(15, 118, 110, 0.15)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                     }}
                     transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                     style={{ transformStyle: "preserve-3d" }}
                     drag="x"
                     dragConstraints={{ left: 0, right: 0 }}
                     dragElastic={0.2}
                     onDragEnd={(e, { offset: dragOffset, velocity }) => {
                       const swipe = Math.abs(dragOffset.x) * velocity.x;
                       if (swipe < -100) nextTestimonial();
                       else if (swipe > 100) prevTestimonial();
                     }}
                     className={`absolute bg-white p-6 md:p-12 rounded-[2rem] border border-clinic-border flex flex-col items-center text-center max-w-2xl mx-auto w-full cursor-grab active:cursor-grabbing ${offset === 0 ? '' : 'pointer-events-none'}`}
                   >
                     <Quote className="w-10 h-10 text-clinic-gold/30 absolute top-6 left-6" />
                     <div className="flex gap-1 mb-6 mt-4">
                       {[...Array(t.rating)].map((_, i) => (
                         <Star key={i} className="w-5 h-5 fill-clinic-gold text-clinic-gold" />
                       ))}
                     </div>
                     <p className="text-clinic-charcoal italic leading-relaxed md:text-lg md:leading-loose mb-8 flex-1">
                       "{t.testimonial}"
                     </p>
                     <div className="mt-auto">
                       <h4 className="font-serif text-clinic-teal-900 text-lg mb-1">{t.name}</h4>
                       <p className="text-xs text-clinic-muted font-medium mb-1">Treated for: {t.condition}</p>
                       <p className="text-[10px] text-clinic-gold uppercase tracking-widest font-bold">Verified Patient</p>
                     </div>
                   </motion.div>
                 );
               })}
             </div>

             {/* Slider Pagination Indicators */}
             <div className="flex justify-center items-center gap-3 mt-10">
               {TESTIMONIALS.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => goToTestimonial(idx)}
                   className={`h-2 rounded-full transition-all duration-300 ${
                     idx === currentTestimonial ? 'w-8 bg-clinic-bronze' : 'w-2 bg-clinic-border hover:bg-clinic-bronze/50'
                   }`}
                   aria-label={`Go to testimonial ${idx + 1}`}
                 />
               ))}
             </div>
           </motion.div>
        </div>
      </section>



      {/* Local SEO FAQ Section targeting "best ayurvedic doctor in pune" */}
      <section className="py-20 md:py-28 bg-clinic-ivory border-t border-clinic-border overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-6 inline-flex items-center gap-4">
              <span className="h-[1px] w-6 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-base md:text-lg">Common Queries Answered</span>
              <span className="h-[1px] w-6 bg-clinic-bronze"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 font-light leading-tight">
              Frequently Asked <span className="italic font-medium text-clinic-teal-900/80">Questions</span>
            </h2>
            <p className="text-clinic-muted font-light mt-3 text-base md:text-lg">Everything you need to know about traditional healing, our specialists, and treatments in Pune.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Who is the best Ayurvedic Doctor in Pune for chronic pain and lifestyle disorders?",
                a: "Dr. Khan Aqsa Zarin (M.D. Kayachikitsa from Pune) is widely regarded as the best Ayurvedic doctor in Pune. She has over 8 years of clinical experience successfully treating complex diseases without surgery. Dr. Aqsa specializes in specialized pain-relieving treatments like Agnikarma and Viddhakarma, alongside classical Panchakarma and personalized organic therapies, maintaining an excellent success rate of 90-95% in non-surgical joint recovery."
              },
              {
                q: "What types of Ayurvedic treatments are offered at Sattvic Centre in Pune?",
                a: "Under the medical directorship of Dr. Khan Aqsa Zarin, Sattvic Advanced Ayurveda & Panchakarma Centre offers a wide spectrum of classical Ayurvedic therapies. These include holistic Kerala Panchakarma therapies like Shirodhara, Basti, Janu Basti, and Nasya, alongside advanced immediate-relief therapies like Agnikarma (thermal cautery) and Viddhakarma (acupuncture-style pain management) for severe neurological and musculoskeletal disorders."
              },
              {
                q: "What is Nadi Parikshan, and how does Dr. Khan Aqsa Zarin use it?",
                a: "Nadi Parikshan is an ancient Ayurvedic pulse diagnosis technique. As a skilled practitioner, Dr. Khan Aqsa Zarin monitors your pulse to diagnose deep cellular blockages, doshic imbalances (Vata, Pitta, Kapha), and root-causes of persistent conditions. Based on this highly personalized assessment, she formulates an exhaustive custom care plan consisting of herbs, therapies, and dietary improvements designed uniquely for your body template."
              },
              {
                q: "Where is the clinic located in Pune and which areas does it serve?",
                a: "Our clinic is located in C Building, 1st Floor, Girme Heights, Salunke Vihar, Pune - 411040. We proudly serve patients seeking the highest-quality Ayurvedic care across Pune, including Salunke Vihar Road, Wanowrie, NIBM, Kondhwa, Lulla Nagar, Fatima Nagar, Camp, Hadapsar, and nearby regions of Maharashtra."
              },
              {
                q: "How can I book an appointment with Dr. Khan Aqsa Zarin in Pune?",
                a: "You can book an appointment for pulse diagnosis or treatment under Pune's best Ayurvedic physician, Dr. Khan Aqsa Zarin, quickly and safely: click the 'Book Consultation' action link on this website which connects directly to our booking calendar, contact us on Call or WhatsApp on +91-9404417145, or visit our clean, hygienic centre in Salunke Vihar, Pune."
              }
            ].map((item, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl border border-clinic-border overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-serif text-lg md:text-xl text-clinic-teal-900 hover:text-clinic-gold transition-colors duration-300"
                  >
                    <span>{item.q}</span>
                    <span className={`text-clinic-gold text-2xl transition-transform duration-300 inline-block ${isOpen ? 'rotate-45' : ''}`}>＋</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 text-clinic-muted font-light leading-relaxed border-t border-clinic-border text-sm md:text-base">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 max-w-5xl mx-auto px-6 md:px-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-clinic-teal-900 rounded-[2.5rem] p-10 md:p-20 text-center text-clinic-white-off relative overflow-hidden shadow-2xl"
        >
          {/* Soft decorative shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: ["0%", "5%", "0%"],
              y: ["0%", "5%", "0%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: ["0%", "-5%", "0%"],
              y: ["0%", "-5%", "0%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-clinic-gold/10 rounded-full blur-[60px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-8 inline-flex items-center gap-4 relative z-10"
          >
            <span className="h-[1px] w-8 bg-clinic-gold"></span>
            <span className="text-clinic-gold font-serif italic text-lg md:text-xl">Your Next Step</span>
            <span className="h-[1px] w-8 bg-clinic-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-6 relative z-10 font-light"
          >
            Begin Your <span className="italic font-medium text-white/90">Healing</span> Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-white/80 max-w-xl mx-auto mb-10 text-lg relative z-10 font-light"
          >
            Schedule an in-depth Pulse Diagnosis (Nadi Pariksha) consultation to uncover your natural doshic balance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 border border-transparent hover:bg-clinic-bronze hover:text-white px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)]"
              >
                Book Consultation
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
