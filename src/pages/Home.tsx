import React from 'react';
import { Leaf, ChevronRight, ArrowRight, Sun, Droplets, Wind, Activity, Stethoscope, Star, MessageCircle, Utensils, Heart, Brain } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import BackToTopButton from '../components/BackToTopButton';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    testimonial: "I was suffering from chronic lower back pain for years. The Agnikarma treatment provided immediate relief that I couldn't find elsewhere. Truly life-changing experience.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    testimonial: "The Panchakarma detox helped me clear my skin and improved my digestion tremendously. The doctors are very knowledgeable and compassionate.",
    rating: 5
  },
  {
    name: "Sunita Reddy",
    testimonial: "Shirodhara was the most relaxing experience of my life. It helped me manage my stress and insomnia naturally. I highly recommend Sattvic for authentic Ayurvedic care.",
    rating: 5
  }
];

const THERAPIES = [
  {
    id: 1,
    title: 'Chronic Joint & Musculoskeletal Pain',
    description: 'Advanced treatments like Viddhakarma and Agnikarma to provide instant and lasting relief from arthritis, sciatica, and muscular stiffness.',
    image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=600&auto=format&fit=crop',
    icon: <Sun className="w-5 h-5 text-clinic-gold" />,
    duration: 'Rapid Relief',
  },
  {
    id: 2,
    title: 'Skin & Beauty Rejuvenation',
    description: 'Root-cause management for chronic skin issues and personalized Ayurvedic facials using potent herbal formulations for a natural glow.',
    image: 'https://images.unsplash.com/photo-1620608552195-236b3598dcbe?q=80&w=600&auto=format&fit=crop',
    icon: <Droplets className="w-5 h-5 text-clinic-gold" />,
    duration: 'Holistic',
  },
  {
    id: 3,
    title: 'Gut & Digestive Care',
    description: 'Restoring digestive balance gently and naturally through personalized detox regimens to improve metabolism and overcome discomfort.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop',
    icon: <Leaf className="w-5 h-5 text-clinic-gold" />,
    duration: 'Internal Balance',
  },
  {
    id: 4,
    title: 'Stress, Anxiety & Sleep Problems',
    description: 'Deeply relaxing therapies including Shirodhara and Nasya to remove deeply-rooted toxins, nourish the mind, and restore emotional stability.',
    image: 'https://images.unsplash.com/photo-1544161513-01859bf9ec4d?q=80&w=600&auto=format&fit=crop',
    icon: <Wind className="w-5 h-5 text-clinic-gold" />,
    duration: 'Calming',
  }
];

export default function Home() {
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
    "image": "https://sattvic.life/clinic.jpg",
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center md:text-left relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg">
                Expert Ayurvedic Care
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-clinic-teal-900 leading-[1.1] mb-6 font-light">
              Relief from Chronic Illness with <br className="hidden md:block" />
              <span className="italic font-medium text-clinic-teal-900/80">Authentic Ayurveda</span>
            </h1>
            <p className="text-lg md:text-xl text-clinic-muted leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              We specialize in personalized Panchakarma and natural Ayurvedic treatments to address the root cause of your pain. Start your healing journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
                <button className="w-full justify-center flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest hover:bg-clinic-bronze hover:text-white transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5 border border-transparent">
                  Book Consultation
                </button>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual showing Clinic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full aspect-video bg-clinic-teal-50 rounded-2xl md:rounded-[2.5rem] border border-clinic-border shadow-xl relative overflow-hidden">
              <OptimizedImage
                src="/clinic.jpg"
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
      <section className="bg-white py-16 border-y border-clinic-border mb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-12">
             <h2 className="text-2xl font-serif text-clinic-teal-900 mb-2">The Sattvic Experience</h2>
             <p className="text-clinic-muted">What to expect when you choose us for your healing journey.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { icon: <Activity className="w-6 h-6" />, title: "Thorough Consultations", desc: "We spend time understanding your complete health history, lifestyle, and diet, not just treating your immediate symptoms." },
               { icon: <Leaf className="w-6 h-6" />, title: "Authentic Treatments", desc: "All our therapies use traditional Kerala Panchakarma methods and pure, unadulterated herbal formulations." },
               { icon: <Stethoscope className="w-6 h-6" />, title: "Root-Cause Focus", desc: "We aim to carefully treat the underlying imbalance in your doshas to provide sustainable, long-term health benefits." }
             ].map((feature, idx) => (
                <div key={idx} className="bg-clinic-teal-50 p-8 rounded-2xl border border-clinic-border relative shadow-sm flex flex-col items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clinic-gold border border-clinic-border mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl text-clinic-teal-900 mb-3">{feature.title}</h3>
                  <p className="text-clinic-charcoal leading-relaxed">{feature.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Dosha Quiz Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <div className="bg-clinic-teal-50 rounded-2xl p-10 md:p-14 border border-clinic-border text-center flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left md:text-left text-center max-w-2xl">
            <h3 className="text-3xl font-serif text-clinic-teal-900 mb-4">What's Your Ayurvedic Body Type?</h3>
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
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-clinic-teal-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-clinic-gold font-serif italic text-lg mb-4 block">Ayurvedic Living</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Nourish Your Body,<br />
                  <span className="italic">Calm Your Mind</span>
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Discover practical wisdom for daily rituals, mindful eating, and mental clarity through the Sattvic lifestyle. Small changes, profound impact.
                </p>
                <Link to="/lifestyle-tips">
                  <button className="bg-clinic-gold hover:bg-clinic-gold/90 text-clinic-teal-900 px-8 py-4 rounded-full transition-all font-bold flex items-center gap-2 group shadow-lg">
                    Explore Lifestyle Tips
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10">
                    <Utensils className="w-8 h-8 text-clinic-gold mb-3" />
                    <span className="text-sm font-medium">Sattvic Diet</span>
                  </div>
                  <div className="aspect-[4/5] bg-clinic-gold/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-clinic-gold/20">
                    <Brain className="w-8 h-8 text-clinic-gold mb-3" />
                    <span className="text-sm font-medium">Mindfulness</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/5] bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                    <Sun className="w-8 h-8 text-clinic-gold mb-3" />
                    <span className="text-sm font-medium">Daily Rhythms</span>
                  </div>
                  <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm border border-white/10">
                    <Heart className="w-8 h-8 text-clinic-gold mb-3" />
                    <span className="text-sm font-medium">Holistic Joy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-clinic-ivory py-12 md:py-16 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
             <div className="mb-4 inline-flex items-center gap-3">
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
               <span className="text-clinic-bronze font-serif italic text-lg">Patient Voices</span>
               <span className="h-[1px] w-8 bg-clinic-bronze"></span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-4 font-light">
               Healing <span className="italic font-medium text-clinic-teal-900/80">Journeys</span>
             </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-8 rounded-2xl border border-clinic-border shadow-sm flex flex-col items-center text-center relative"
               >
                 <div className="flex gap-1 mb-4">
                   {[...Array(item.rating)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-clinic-gold text-clinic-gold" />
                   ))}
                 </div>
                 <p className="text-clinic-charcoal italic leading-relaxed mb-6">"{item.testimonial}"</p>
                 <div className="mt-auto">
                   <span className="w-8 h-[1px] bg-clinic-gold mb-2 block mx-auto"></span>
                   <h4 className="font-serif text-clinic-teal-900">{item.name}</h4>
                   <p className="text-[10px] text-clinic-muted uppercase tracking-widest font-bold">Verified Patient</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>



      {/* Therapies Grid */}
      <section className="bg-clinic-border/20 py-24 border-y border-clinic-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg">Curated Care</span>
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-4 font-light">
              Our Signature <span className="italic font-medium text-clinic-teal-900/80">Treatments</span>
            </h2>
            <p className="text-clinic-muted mt-6">
              A selection of our most requested therapies. A formal consultation is required to tailor the perfect protocol for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {THERAPIES.map((therapy, index) => (
              <motion.div
                key={therapy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl shadow-stone-200/50 overflow-hidden"
              >
                <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <OptimizedImage
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center w-full sm:w-3/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-clinic-white-off border border-clinic-border rounded-full flex items-center justify-center">
                      {React.cloneElement(therapy.icon, { className: 'w-5 h-5 text-clinic-teal-900' })}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-clinic-bronze uppercase">
                      {therapy.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-clinic-teal-900 mb-3">
                    {therapy.title}
                  </h3>
                  <p className="text-xs text-clinic-muted leading-relaxed mb-6">
                    {therapy.description}
                  </p>
                  <Link to="/services">
                    <button className="flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase text-clinic-teal-900 border-b border-transparent hover:border-clinic-bronze hover:text-clinic-bronze transition-colors mt-auto w-max pb-0.5">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="bg-clinic-teal-900 text-clinic-white-off py-12 md:py-24 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-clinic-gold"></span>
              <span className="text-clinic-gold font-serif italic text-lg">Philosophy of Care</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 text-white leading-tight">
              Why Patients <br/><span className="italic font-medium text-clinic-gold">Trust Us</span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed">Experience safe, effective, and trusted Ayurvedic care that prioritizes natural root-cause healing and personalized attention.</p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Instant pain management</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Integrated mind-body approach</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Personalized treatment plans</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Expertise in chronic disorders</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Natural healing methods</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Long-term preventive care</span>
            </div>
            <div className="flex items-start gap-4 sm:col-span-2">
              <div className="w-8 h-8 rounded-full bg-clinic-gold/10 flex items-center justify-center shrink-0 border border-clinic-gold/30">
                <span className="text-clinic-gold text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 text-lg font-light">Doctor-guided therapies based on proven protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="bg-clinic-teal-900 rounded-2xl p-10 md:p-16 text-center text-clinic-white-off relative overflow-hidden shadow-2xl">
          {/* Soft decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinic-gold/10 rounded-full blur-[60px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="mb-4 inline-flex items-center gap-3 relative z-10">
            <span className="h-[1px] w-8 bg-clinic-gold"></span>
            <span className="text-clinic-gold font-serif italic text-lg">Your Next Step</span>
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
              <button className="bg-clinic-gold text-clinic-teal-900 border border-transparent hover:bg-clinic-bronze hover:text-white px-8 py-4 rounded-sm text-[13px] font-bold tracking-widest transition-all uppercase shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5">
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
