import React, { useState, useEffect, useCallback } from 'react';
import { Leaf, ChevronRight, ChevronLeft, ArrowRight, Sun, Droplets, Wind, Activity, Stethoscope, Star, MessageCircle, Utensils, Heart, Brain, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

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
  const [currentTherapy, setCurrentTherapy] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Sattvic Ayurveda & Wellness Centre",
    "alternateName": "Sattvic Life",
    "description": "Expert Ayurvedic care specializing in Agnikarma, Viddhakarma, and Panchakarma for chronic pain, skin issues, and digestive health.",
    "url": "https://sattvic.life",
    "telephone": "+919404417145",
    "medicalSpecialty": ["AyurvedicMedicine", "PainManagement", "DigestiveHealth"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded City",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 10:00-20:00",
    "image": "https://lh3.googleusercontent.com/d/1Z5sQpQRsH-JUUuxKU2kYdS4MOflfEFTU",
    "priceRange": "$$",
    "review": TESTIMONIALS.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.testimonial,
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating }
    }))
  };

  return (
    <>
      <SEO 
        title="Authentic Ayurveda & Chronic Pain Relief"
        description="Experience the healing power of authentic Ayurveda at Sattvic Life. Specialized Agnikarma, Viddhakarma, and Panchakarma treatments for instant pain relief and holistic wellness."
        keywords="Ayurveda Clinic Pune, Agnikarma therapy, Viddhakarma treatment, Panchakarma detox, Ayurvedic pain relief, Nadi Pariksha, Sattvic Life Ayurveda"
        schema={schema}
      />
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center md:text-left relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto md:mx-0 lg:col-span-5"
          >
            <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">
                Expert Ayurvedic Care
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] mb-6 md:mb-8 font-light">
              Relief from Chronic Illness with <br className="hidden md:block" />
              <span className="italic font-medium text-clinic-teal-900/80">Authentic Ayurveda</span>
            </h1>
            <p className="text-lg md:text-xl text-clinic-muted leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              We specialize in personalized Panchakarma and natural Ayurvedic treatments to address the root cause of your pain. Start your healing journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
                <button className="group w-full justify-center flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest hover:bg-clinic-bronze hover:text-white transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5 border border-transparent">
                  Book Consultation
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual showing Clinic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
           <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-4">The Sattvic Experience</h2>
             <p className="text-clinic-muted font-light text-lg">What to expect when you choose us for your healing journey.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { icon: <Activity className="w-6 h-6" />, title: "Thorough Consultations", desc: "We spend time understanding your complete health history, lifestyle, and diet, not just treating your immediate symptoms." },
               { icon: <Leaf className="w-6 h-6" />, title: "Authentic Treatments", desc: "All our therapies use traditional Kerala Panchakarma methods and pure, unadulterated herbal formulations." },
               { icon: <Stethoscope className="w-6 h-6" />, title: "Root-Cause Focus", desc: "We aim to carefully treat the underlying imbalance in your doshas to provide sustainable, long-term health benefits." }
             ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-clinic-teal-50 p-8 rounded-2xl border border-clinic-border relative shadow-sm flex flex-col items-start hover:-translate-y-2 hover:shadow-md hover:bg-clinic-ivory transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clinic-gold border border-clinic-border mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl text-clinic-teal-900 mb-3 group-hover:text-clinic-gold transition-colors duration-300">{feature.title}</h3>
                  <p className="text-clinic-charcoal leading-relaxed">{feature.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="bg-clinic-teal-900 text-clinic-white-off py-16 md:py-28 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, staggerChildren: 0.1 }}
             className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6"
           >
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Instant pain management</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Integrated mind-body approach</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Personalized treatment plans</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Expertise in chronic disorders</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Natural healing methods</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Long-term preventive care</span>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4 sm:col-span-2">
               <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                 <span className="text-clinic-gold text-sm font-bold">✓</span>
               </div>
               <span className="text-white/90 text-lg font-light">Doctor-guided therapies based on proven protocols</span>
             </motion.div>
           </motion.div>
         </div>
       </section>
 
       {/* What We Treat */}
      <section className="py-16 md:py-24 bg-white border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16 md:mb-20">
             <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
               <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Our Expertise</span>
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
             </div>
             <h2 className="text-3xl md:text-5xl font-serif text-clinic-teal-900 mb-6 font-light leading-[0.9]">
               Conditions We <span className="italic font-medium text-clinic-teal-900/80">Treat</span>
             </h2>
             <p className="text-clinic-muted font-light text-lg max-w-2xl mx-auto">Discover the root-cause Ayurvedic solutions we provide for various chronic lifestyle disorders.</p>
           </div>
           
           {/* Desktop Grid */}
           <div className="hidden md:grid md:grid-cols-3 gap-8">
             {THERAPIES.map((therapy, idx) => (
               <motion.div 
                 key={therapy.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
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
           
           <div className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
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
           </div>
        </div>
      </section>

      {/* Dosha Quiz Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="bg-clinic-teal-50 rounded-2xl md:rounded-[2.5rem] p-10 md:p-16 border border-clinic-border text-center flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-sm">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-4 md:mb-6 leading-tight">What's Your Ayurvedic Body Type?</h3>
            <p className="text-clinic-muted font-light text-lg">Take our quick dosha quiz to uncover your unique mind-body constitution and receive personalized insight into your health.</p>
          </div>
          <Link to="/dosha-quiz" className="w-full md:w-auto">
            <button className="w-full md:w-auto whitespace-nowrap bg-clinic-gold text-clinic-charcoal px-8 py-4 rounded-xl text-[13px] font-bold tracking-widest shadow-sm hover:bg-clinic-bronze transition-colors uppercase">
              Take the Quiz
            </button>
          </Link>
        </div>
      </section>

      {/* Lifestyle Tips Teaser */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-clinic-teal-900 rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-clinic-gold font-serif italic text-lg md:text-xl mb-6 md:mb-8 block">Ayurvedic Living</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-[0.9]">
                  Nourish Your Body,<br />
                  <span className="italic font-light">Calm Your Mind</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-light mb-8 md:mb-10 leading-relaxed">
                  Discover practical wisdom for daily rituals, mindful eating, and mental clarity through the Sattvic lifestyle. Small changes, profound impact.
                </p>
                <Link to="/lifestyle-tips" className="inline-block">
                  <button className="bg-clinic-gold hover:bg-clinic-gold/90 text-clinic-teal-900 px-8 py-4 rounded-full transition-all font-bold flex items-center gap-2 group shadow-lg">
                    Explore Lifestyle Tips
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-clinic-ivory py-16 md:py-24 border-y border-clinic-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16 md:mb-20">
             <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
               <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Patient Voices</span>
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-4 font-light leading-[0.9]">
               Healing <span className="italic font-medium text-clinic-teal-900/80">Journeys</span>
             </h2>
           </div>
           
           <div className="relative max-w-4xl mx-auto">
             {/* Slider Navigation Buttons */}
             <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20 hidden md:block">
               <button 
                 onClick={prevTestimonial}
                 className="w-12 h-12 rounded-full bg-white border border-clinic-border shadow-sm flex items-center justify-center text-clinic-teal-900 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors"
                 aria-label="Previous Testimonial"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
             </div>
             
             <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20 hidden md:block">
               <button 
                 onClick={nextTestimonial}
                 className="w-12 h-12 rounded-full bg-white border border-clinic-border shadow-sm flex items-center justify-center text-clinic-teal-900 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors"
                 aria-label="Next Testimonial"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
             </div>

             {/* Testimonial Active Card */}
             <div className="relative min-h-[320px] flex items-center justify-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentTestimonial}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.5, ease: "anticipate" }}
                   drag="x"
                   dragConstraints={{ left: 0, right: 0 }}
                   dragElastic={0.2}
                   onDragEnd={(e, { offset, velocity }) => {
                     const swipe = Math.abs(offset.x) * velocity.x;
                     if (swipe < -100) nextTestimonial();
                     else if (swipe > 100) prevTestimonial();
                   }}
                   className="relative bg-white p-8 md:p-12 rounded-[2rem] border border-clinic-border shadow-md flex flex-col items-center text-center max-w-3xl mx-auto my-auto w-full cursor-grab active:cursor-grabbing"
                 >
                   <Quote className="w-10 h-10 text-clinic-gold/30 absolute top-6 left-6" />
                   <div className="flex gap-1 mb-6 mt-4">
                     {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                       <Star key={i} className="w-5 h-5 fill-clinic-gold text-clinic-gold" />
                     ))}
                   </div>
                   <p className="text-clinic-charcoal italic leading-relaxed md:text-lg md:leading-loose mb-8 flex-1">
                     "{TESTIMONIALS[currentTestimonial].testimonial}"
                   </p>
                   <div className="mt-auto">
                     <h4 className="font-serif text-clinic-teal-900 text-lg mb-1">{TESTIMONIALS[currentTestimonial].name}</h4>
                     <p className="text-xs text-clinic-muted font-medium mb-1">Treated for: {TESTIMONIALS[currentTestimonial].condition}</p>
                     <p className="text-[10px] text-clinic-gold uppercase tracking-widest font-bold">Verified Patient</p>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>

             {/* Slider Pagination Indicators */}
             <div className="flex justify-center items-center gap-3 mt-10">
               {TESTIMONIALS.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentTestimonial(idx)}
                   className={`h-2 rounded-full transition-all duration-300 ${
                     idx === currentTestimonial ? 'w-8 bg-clinic-bronze' : 'w-2 bg-clinic-border hover:bg-clinic-bronze/50'
                   }`}
                   aria-label={`Go to testimonial ${idx + 1}`}
                 />
               ))}
             </div>
           </div>
        </div>
      </section>



      {/* CTA Banner */}
      <section className="py-20 md:py-32 max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="bg-clinic-teal-900 rounded-[2.5rem] p-10 md:p-20 text-center text-clinic-white-off relative overflow-hidden shadow-2xl">
          {/* Soft decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinic-gold/10 rounded-full blur-[60px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="mb-6 md:mb-8 inline-flex items-center gap-4 relative z-10">
            <span className="h-[1px] w-8 bg-clinic-gold"></span>
            <span className="text-clinic-gold font-serif italic text-lg md:text-xl">Your Next Step</span>
            <span className="h-[1px] w-8 bg-clinic-gold"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6 relative z-10 font-light">
            Begin Your <span className="italic font-medium text-white/90">Healing</span> Journey
          </h2>
          <p className="text-center text-white/80 max-w-xl mx-auto mb-10 text-lg relative z-10 font-light">
            Schedule an in-depth Pulse Diagnosis (Nadi Pariksha) consultation to uncover your natural doshic balance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer">
              <button className="group flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 border border-transparent hover:bg-clinic-bronze hover:text-white px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5">
                Book Consultation
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
