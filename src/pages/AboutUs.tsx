import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import AboutNav from '../components/AboutNav';

export default function AboutUs() {
  return (
    <>
      <AboutNav />
      <SEO 
        title="Our Philosophy | Expert Ayurveda Doctors"
        description="Learn about Sattvic Life's mission to provide authentic, root-cause Ayurvedic healing. Meet our expert practitioners dedicated to traditional Panchakarma and pain management."
        keywords="Ayurveda doctors Pune, Sattvic Life philosophy, authentic Ayurveda India, holistic healing centre"
      />
      
      {/* Hero section */}
      <section className="bg-clinic-teal-50 pt-20 pb-16 border-b border-clinic-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-4 inline-flex items-center gap-4">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg">Our Philosophy</span>
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] font-light mb-12">
              About <span className="italic font-medium text-clinic-teal-900/80">Sattvic</span>
            </h1>
            <p className="text-2xl md:text-3xl text-clinic-teal-900 font-serif leading-snug font-light">
              At Sattvic Advanced Ayurveda & Panchakarma Clinic, we offer authentic, result-oriented Ayurvedic treatment designed to address the root cause of disease—not just its symptoms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="text-clinic-charcoal text-lg font-light leading-relaxed space-y-6">
            <p>
              Located in Pune, our clinic is dedicated to helping individuals struggling with chronic lifestyle disorders find long-term, sustainable healing through classical Ayurveda and specialized Panchakarma therapies.
            </p>
            <p>
              In today’s fast-paced lifestyle, conditions like acidity, skin disorders, hair fall, joint pain, hormonal imbalance, and stress are often managed temporarily. At Sattvic Advanced Ayurveda, we take a different approach—focusing on deep detoxification, metabolic correction, and personalized healing protocols.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-clinic-teal-50 border-y border-clinic-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-6 font-light">
                Our Ayurvedic Philosophy: <br/>
                <span className="italic font-medium">Root-Cause Healing</span>
              </h3>
              <p className="text-clinic-charcoal mb-8 text-lg font-light">
                “Sattvic” represents purity, balance, and harmony. In our clinical practice, this translates into:
              </p>
              <ul className="space-y-4 text-clinic-charcoal mb-8">
                <li className="flex items-start gap-4">
                  <span className="text-clinic-gold text-2xl leading-none">&bull;</span>
                  <span>Clean, therapeutic diet plans</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-clinic-gold text-2xl leading-none">&bull;</span>
                  <span>Lifestyle correction based on Ayurvedic principles</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-clinic-gold text-2xl leading-none">&bull;</span>
                  <span>Authentic Panchakarma detox therapies</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-clinic-gold text-2xl leading-none">&bull;</span>
                  <span>Personalized treatment based on Prakriti (body constitution)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-clinic-border">
              <p className="text-clinic-charcoal text-lg font-light leading-relaxed mb-8">
                Unlike many Ayurveda clinics, we combine traditional diagnostic methods such as Nadi Pariksha (pulse examination) with modern tracking systems to ensure accurate diagnosis and measurable progress.
              </p>
              <div className="p-6 bg-clinic-ivory rounded-2xl border border-clinic-border">
                <p className="text-clinic-teal-900 font-serif italic text-xl">
                  Our goal is simple: restore your body’s natural equilibrium and prevent recurrence of disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-6 font-light">Specialized Ayurvedic Treatments</h3>
            <p className="text-clinic-charcoal text-lg font-light max-w-2xl mx-auto">
              We are known for providing some of the most effective Ayurvedic treatments in Pune for various conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Acidity and digestive disorders",
              "Skin diseases and chronic allergies",
              "Hair fall and scalp conditions",
              "Joint pain and musculoskeletal issues",
              "Women’s health and hormonal imbalance",
              "Stress, anxiety, and lifestyle disorders"
            ].map((item, index) => (
              <div key={index} className="bg-clinic-ivory p-6 rounded-2xl border border-clinic-border flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-clinic-gold shrink-0"></span>
                <span className="text-clinic-charcoal font-light">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-clinic-charcoal text-lg font-light leading-relaxed text-center max-w-4xl mx-auto mb-20">
            Our expertise lies in classical Panchakarma treatment in Pune, including therapies like Shirodhara, Basti, and customized detox programs designed according to each patient’s condition. Every treatment plan is fully personalized, ensuring deeper healing and long-lasting results.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-clinic-teal-50 p-8 md:p-12 rounded-3xl border border-clinic-border">
              <h3 className="text-2xl font-serif text-clinic-teal-900 mb-6">Authentic Panchakarma & Detox Therapies</h3>
              <p className="text-clinic-charcoal mb-6 font-light">
                At Sattvic Advanced Ayurveda, Panchakarma is not performed as a routine package—it is a carefully structured medical process. Our detox therapies help:
              </p>
              <ul className="space-y-3 mb-6">
                {["Eliminate toxins (Ama) from the body", "Improve digestion and metabolism", "Balance Doshas (Vata, Pitta, Kapha)", "Enhance immunity and energy levels"].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                     <span className="text-clinic-gold mt-1">✦</span>
                     <span className="text-clinic-charcoal font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-clinic-charcoal font-light italic text-sm mt-8 opacity-80 border-t border-clinic-border pt-4">
                Patients looking for Panchakarma detox in Pune often choose us for our precision-based approach and authentic methodology.
              </p>
            </div>
            
            <div className="p-4 md:p-8">
              <h3 className="text-2xl font-serif text-clinic-teal-900 mb-6">Patient-Centric Care & Modern Clinical Experience</h3>
              <p className="text-clinic-charcoal mb-6 font-light">
                We provide a calm, clean, and minimalist clinical environment designed for comfort and healing. What makes us different:
              </p>
              <ul className="space-y-4 mb-8">
                {["Detailed consultations with root-cause analysis", "Integration of Ayurvedic wisdom with modern monitoring (Ayurgrid)", "Customized diet and lifestyle guidance", "Continuous follow-up for long-term results"].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                     <span className="w-1.5 h-1.5 mt-2 rounded-full bg-clinic-teal-900 shrink-0"></span>
                     <span className="text-clinic-charcoal font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-clinic-charcoal font-light">
                Many of our patients come to us after trying multiple treatments without success. Through our structured approach, they experience not just relief—but lasting transformation in their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-clinic-charcoal text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clinic-teal-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl font-serif text-clinic-ivory mb-16 font-light">
            Why Choose <span className="italic font-medium text-clinic-gold">Sattvic</span> Advanced Ayurveda in Pune?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-20">
            {[
              "Authentic Ayurvedic treatment with modern precision",
              "Specialized Panchakarma therapies",
              "Focus on chronic and lifestyle disorders",
              "Personalized treatment protocols",
              "Proven results in difficult cases",
              "Serene and professional clinical environment"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-clinic-gold text-2xl leading-none">&bull;</span>
                <span className="text-white/90 text-lg font-light">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="border border-white/10 p-8 md:p-16 rounded-[2.5rem] bg-white/5 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Book Your Ayurvedic Consultation in Pune</h3>
            <p className="mb-6 text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              If you are searching for a trusted Ayurveda clinic in Pune or effective Panchakarma treatment near you, Sattvic Advanced Ayurveda offers a holistic and result-driven approach to healing.
            </p>
            <p className="mb-10 text-white/90 font-medium">
              Book your consultation today and take the first step towards natural, long-term wellness.
            </p>
            <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" className="inline-block relative z-10">
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
