import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import AboutNav from '../components/AboutNav';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

export default function KnowDoctors() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://sattvic.life/know-doctors/#dr-khan-aqsa-zarin",
      "name": "Dr. Khan Aqsa Zarin",
      "image": "https://lh3.googleusercontent.com/d/1g206DwQZZlSr3ddAFXvdATkJU77qFk1K",
      "description": "Consult Dr. Khan Aqsa Zarin, widely designated as Pune's best Ayurvedic doctor. Specialized in root-cause healing, classical Panchakarma, Agnikarma, and Nadi Parikshan.",
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
      "knowsAbout": ["Ayurveda", "Panchakarma", "Agnikarma", "Viddhakarma", "Nadi Parikshan", "Kayachikitsa", "Spine Care", "Joint Pain", "Digestive Health"],
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
          "name": "Why is Dr. Khan Aqsa Zarin considered the best Ayurvedic doctor in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Khan Aqsa Zarin is widely recognized as Pune's best Ayurvedic doctor due to her advanced academic credentials (M.D. in Kayachikitsa / Medicine from Dr. D.Y. Patil College of Ayurveda, Pune), Scopus-indexed global research publications, and an outstanding clinic success rate of 90-95% in non-surgical joint and pain recovery using Agnikarma and Viddhakarma."
          }
        },
        {
          "@type": "Question",
          "name": "What are Dr. Khan Aqsa Zarin's clinical hours in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Khan Aqsa Zarin consults at Sattvic Advanced Ayurveda in Salunke Vihar, Pune. Standard clinic timings are Monday through Saturday: 10:00 AM - 2:00 PM and 5:00 PM - 8:30 PM; Sunday: 10:00 AM - 2:00 PM."
          }
        },
        {
          "@type": "Question",
          "name": "How does Dr. Aqsa perform pulse diagnosis (Nadi Parikshan)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During a personal session, Dr. Khan Aqsa Zarin performs Nadi Parikshan by sensing the radial pulse. This ancient diagnostic art reveals deep doshic imbalances, toxicity index, and organ function, enabling her to prescribe pin-pointed botanical compounds, customized diet charts, and therapies."
          }
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = React.useState<'academic' | 'social'>('academic');
  const [selectedMedia, setSelectedMedia] = React.useState<{ images: string[], index: number } | null>(null);
  const [selectedLinks, setSelectedLinks] = React.useState<{title: string, url: string}[] | null>(null);

  React.useEffect(() => {
    if (selectedMedia || selectedLinks) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedMedia, selectedLinks]);

  const journalLinks = [
    { title: "Ayurveda and Yoga management of chronic alcoholism sequelae - A case report", url: "https://www.sciencedirect.com/science/article/pii/S0975947623001791" },
    { title: "A holistic Ayurvedic approach to manage persistent depressive disorder, Vishada—A case report", url: "https://www.sciencedirect.com/science/article/pii/S0975947625001196" },
    { title: "Implementing traditional ayurveda treatment as a primary care management in a survivor of gas geyser syndrome – A case report", url: "https://www.sciencedirect.com/science/article/pii/S0975947623000293" }
  ];

  return (
    <>
      <SEO 
        title="Dr. Khan Aqsa Zarin | Best Ayurvedic Doctor in Pune"
        description="Meet Dr. Khan Aqsa Zarin, widely regarded as the best Ayurvedic doctor in Pune. Holding an M.D. in Kayachikitsa with extensive clinical research, she specializes in Panchakarma, Viddhakarma, and Agnikarma."
        keywords="best ayurvedic doctor in Pune, ayurvedic doctor pune, Dr. Khan Aqsa Zarin, M.D. Kayachikitsa doctor Pune, top ayurvedic doctor Pune, Panchakarma doctor Pune, Agnikarma specialist Pune, Nadi Parikshan Salunke Vihar Wanowrie, sattvic ayurveda pune"
        schema={schema}
      />
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-16 md:pt-8 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Our Lineage</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Know Your <span className="italic font-medium text-clinic-teal-900/80">Doctor</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-8 space-y-8 text-clinic-muted text-lg md:text-xl font-light leading-relaxed order-2 lg:order-1"
        >
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-4 font-light">Dr. Khan Aqsa Zarin</h2>
            <p className="text-clinic-gold font-bold uppercase tracking-widest text-sm md:text-base">M.D Kayachikitsa (Medicine)</p>
          </div>
          <p>
            Dr. Khan Aqsa Zarin is a dedicated Ayurvedic physician known for her deep commitment to natural healing and personalized patient care. She holds an <strong className="text-clinic-teal-900 font-medium">M.D. in Kayachikitsa (Medicine)</strong> from Dr. D. Y. Patil College of Ayurveda, Pune, and completed her graduation (<strong className="text-clinic-teal-900 font-medium">B.A.M.S.</strong>) from <strong className="text-clinic-teal-900 font-medium">Government Ayurvedic College and Hospital, Nanded</strong>. She has further enhanced her expertise with a <strong className="text-clinic-teal-900 font-medium">Diploma in Nutrition</strong>, along with <strong className="text-clinic-teal-900 font-medium">certifications in Panchakarma and Yoga</strong>, and <strong className="text-clinic-teal-900 font-medium">fellowship training in Viddhakarma and Agnikarma</strong>.
          </p>

          <div className="bg-clinic-teal-50/50 p-8 md:p-10 rounded-[2rem] border border-clinic-border">
            <p className="mb-6">
              She has earned extensive recognition at both the national and international levels. Her notable academic and professional achievements include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">3 International Scopus-indexed (JAIM)</strong> research papers <button onClick={() => setSelectedLinks(journalLinks)} className="text-clinic-gold underline hover:text-clinic-teal-900 transition-colors">(click here)</button>.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">1 Patent Published</strong>.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">1 Book Publishing Underway</strong> (Advances in Kayachikitsa).</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">4 National Paper Presentations</strong> and <strong className="text-clinic-teal-900 font-medium">6 National Poster Presentations</strong>.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">1 International Poster Presentation</strong>.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">Member of the International Academy of Ayurved (IAA)</strong>, Pune.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span>Delivered <strong className="text-clinic-teal-900 font-medium">international online guest lectures</strong> in Canada and UAE.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span>Conducted extensive <strong className="text-clinic-teal-900 font-medium">clinical and theoretical lectures</strong> for undergraduates.</span></li>
            </ul>
          </div>

          <div className="bg-clinic-teal-50/50 p-8 md:p-10 rounded-[2rem] border border-clinic-border">
            <p className="mb-6">
              Beyond academic excellence, her practical clinical milestones and contributions include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">8+ Years of Clinical Experience</strong> in authentic Ayurvedic practice.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">Successfully treated over 500 patients</strong> for chronic pain management, lifestyle disorders, and various systemic ailments.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span>Achieved a <strong className="text-clinic-teal-900 font-medium">90–95% success rate</strong> in non-surgical joint pain recovery utilizing highly specialized therapeutic protocols.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">Organized and contributed to 50+ free medical camps</strong> across rural areas, actively championing community health and wellbeing.</span></li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">Developed advanced post-COVID recovery protocols</strong> for hundreds of patients, focusing on personalized internal rehabilitation.</span></li>
            </ul>
          </div>

          <p>
            With extensive clinical exposure across Kayachikitsa, Gynaecology, and community healthcare, Dr. Khan Aqsa Zarin has managed a wide array of patients in both outpatient (OPD) and inpatient (IPD) settings. She is highly skilled in performing specialized therapies such as <strong className="text-clinic-teal-900 font-medium">Viddhakarma, Agnikarma, and Cupping Therapy</strong>—known for providing immediate and effective relief in pain-related conditions.
          </p>
          <p>
            She believes in identifying the systemic root cause (<span className="italic">Nidana</span>) of a disease through precise diagnostic methods, prominently including <strong className="text-clinic-teal-900 font-medium">Nadi Parikshan (Pulse Diagnosis)</strong>. Every treatment is thoughtfully designed based on the patient's intrinsic body constitution (<span className="italic">Prakriti</span>), seasonal variations, and specific physiological needs. Her holistic approach seamlessly integrates functional herbal medicines, traditional therapies, and personalized diet and lifestyle modifications. She emphasizes empowering patients through their health journey so that, over time, they become self-reliant, reducing their dependency on long-term medications, and maintaining optimal health naturally.
          </p>

          <blockquote className="mt-16 p-10 md:p-12 bg-clinic-teal-50 rounded-[2.5rem] border-l-4 border-clinic-gold text-clinic-teal-900 font-serif italic text-2xl md:text-3xl leading-snug">
            "True healing is a journey we walk together—with trust, care, and understanding. My aim is not just to treat your illness, but to truly listen to you, support you, and gently guide you back to balance in life. True success for me is when my patients feel truly healthy, confident, and at peace—embracing positive lifestyle changes naturally and eventually living a life free from dependence on medicines."
          </blockquote>

          <div className="mt-16 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-clinic-border">
            <h3 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-8 font-light">Key Areas of Expertise</h3>
            <ul className="space-y-6 text-clinic-muted">
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Chronic joint and musculoskeletal pain</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Skin and beauty concerns</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Gut and digestive care</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Stress, anxiety, and sleep-related issues</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Hair and scalp problems</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Women's health and fertility care</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Lifestyle disorders</li>
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1.5">✦</span> Immunity-boosting and Panchakarma detox</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4 order-1 lg:order-2"
        >
          <div className="sticky space-y-8" style={{ top: 'calc(var(--header-height, 145px) + 2rem)' }}>
            <div className="bg-clinic-teal-50 rounded-2xl overflow-hidden shadow-xl border border-clinic-border">
              <OptimizedImage
                src="https://lh3.googleusercontent.com/d/1g206DwQZZlSr3ddAFXvdATkJU77qFk1K"
                alt="Dr. Khan Aqsa Zarin"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dual Tab Academic Achievements and Social Work Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 pt-16 border-t border-clinic-border text-left"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-base md:text-lg">Credentials Portfolio</span>
            <span className="h-[1px] w-6 bg-clinic-bronze"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 font-light leading-tight">
            Academic Honors & <span className="italic font-medium text-clinic-teal-900/80">Social Impact</span>
          </h2>
          <p className="text-clinic-muted font-light mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Explore Dr. Khan Aqsa Zarin's professional milestones divided across scholastic clinical research, degrees, and community welfare initiatives.
          </p>
        </div>

        {/* Tab Selection Pill */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-clinic-teal-50/60 p-1.5 rounded-full border border-clinic-border shadow-sm">
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 md:px-8 py-3 rounded-full text-[11px] md:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'academic' 
                  ? 'bg-clinic-teal-900 text-white shadow-md' 
                  : 'text-clinic-muted hover:text-clinic-teal-900'
              }`}
            >
              🎓 Academic Achievements
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-6 md:px-8 py-3 rounded-full text-[11px] md:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'social' 
                  ? 'bg-clinic-teal-900 text-white shadow-md' 
                  : 'text-clinic-muted hover:text-clinic-teal-900'
              }`}
            >
              🤝 Social & Community Work
            </button>
          </div>
        </div>

        {/* Categories content layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {(activeTab === 'academic' ? [
             {
               title: "M.D. Kayachikitsa Accomplishment",
               event: "Dr. D. Y. Patil College of Ayurveda",
               description: "Rigorous academic certification showcasing Dr. Aqsa's expertise in classical Ayurvedic medicine and internal treatment.",
               image: "https://drive.google.com/thumbnail?id=1CT3ohJ3yDMw9sTjDHPBZFEexPG2Q8CU2&sz=w1000",
               badge: "M.D. Degree"
             },
             {
               title: "Clinical Case Presentations",
               event: "National Seminars & Conferences",
               description: "Awarded recognition and visual certification showcasing evidence-based results of traditional therapies on complex disorders.",
               images: [
                 "https://lh3.googleusercontent.com/d/1HTRxfuMdPGgkby-nkxrrHHMEC4spaDKR",
                 "https://lh3.googleusercontent.com/d/1pXntA-iaxfjBFeyfS3P0GC79GTgRro8W"
               ],
               badge: "Scientific Honor"
             },
             {
               title: "Scientific Journal Publication",
               event: "International Research Journal",
               description: "Peer-reviewed research and clinical study publication showcasing expertise and contributions to Ayurvedic medicine.",
               image: "https://lh3.googleusercontent.com/d/1K2luBRR01EC0na4VZ0mA5vk7BDGiAqKK",
               badge: "Journal Publication",
               links: journalLinks
             },
             {
               title: "Orientation for juniors",
               event: "Academic Mentorship",
               description: "Guided and mentored junior students through comprehensive orientation sessions to foster academic excellence in Ayurvedic practices.",
               image: "https://drive.google.com/thumbnail?id=1jF2CwG0G0HDP5rVvY9t5o4efzDn04oJR&sz=w1000",
               badge: "Academic Mentorship"
             }
           ] : [
             {
               title: "COVID-19 Pandemic Service",
               event: "Emergency Healthcare Relief",
               description: "Actively contributed dedicated medical service during the COVID-19 pandemic, providing critical patient care and traditional immunity support.",
               images: [
                 "https://lh3.googleusercontent.com/d/1QZu63E-la5qHyN12dzw-xStd3J0cyyxU",
                 "https://lh3.googleusercontent.com/d/19X6iseKfqCzXuBHEPD7uw8kJmNF5xjwm",
                 "https://lh3.googleusercontent.com/d/1aGv3yh9izuWTFrNASRf1d1zxQcgSh8Og"
               ],
               badge: "Frontline Service"
             },
             {
               title: "Free Agnikarma & Viddhakarma Camps",
               event: "Community Wellness Initiative",
               description: "Organized specialized camps to provide ancient Ayurvedic pain management techniques free of cost to those in need.",
               images: [
                 "https://lh3.googleusercontent.com/d/1plw3_u8HOnJqb13qeDQsXPXG5a-zWH6j",
                 "https://lh3.googleusercontent.com/d/12gRxcBARdp-T-AqPYSIU1G0oUVZJgt7b",
                 "https://lh3.googleusercontent.com/d/1di6sgQVm8gZPw1D0hJvMAnjTV3oBaMYe"
               ],
               badge: "Community Wellness"
             },
             {
               title: "Free Health Check",
               event: "Health Check Camp",
               description: "Provided free Raktamokshana, Agnikarma & Viddhakarma services for public welfare.",
               image: "https://lh3.googleusercontent.com/d/1fGfr-3H1Yv_6IHYNU5TuN-xG7ZB8jorW",
               badge: "Health Camp"
             }
           ]).map((item: any, idx) => (
             <CredentialCard key={idx} item={item} onImageClick={(images, index) => setSelectedMedia({ images, index })} onLinksClick={setSelectedLinks} />
           ))}
        </div>

        {/* Dynamic Instructional Assistant Advice Alert box */}
        <div className="mt-16 p-8 rounded-3xl bg-clinic-ivory border border-clinic-border shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <p className="font-serif text-clinic-teal-900 italic text-lg text-center">
            "Sattvic Centre stands for medical excellence and compassionate human care."
          </p>
        </div>
      </motion.div>
    </div>
    
    {/* Full Screen Image Lightbox */}
    {selectedMedia && createPortal(
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
        style={{ zIndex: 100000 }}
        onClick={() => setSelectedMedia(null)}
      >
        <button 
          className="absolute top-6 right-6 md:top-8 md:right-8 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-sm transition-all shadow-lg cursor-pointer"
          style={{ zIndex: 100001 }}
          onClick={() => setSelectedMedia(null)}
          aria-label="Close preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        {selectedMedia.images.length > 1 && (
          <>
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-sm transition-all shadow-lg cursor-pointer"
              style={{ zIndex: 100001 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
              }}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-sm transition-all shadow-lg cursor-pointer"
              style={{ zIndex: 100001 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
              }}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </>
        )}

        <div 
          className="relative max-w-full max-h-[80vh] md:max-h-[88vh] flex items-center justify-center select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={selectedMedia.images[selectedMedia.index]} 
            alt="Event full view" 
            className="max-w-[92vw] md:max-w-[90vw] max-h-[75vh] md:max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 transition-all duration-300"
          />
        </div>
        
        {selectedMedia.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 100001 }} onClick={e => e.stopPropagation()}>
            {selectedMedia.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMedia(prev => prev ? { ...prev, index: idx } : null)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedMedia.index === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>,
      document.body
    )}

    {/* Links Modal */}
    {selectedLinks && createPortal(
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        style={{ zIndex: 100000 }}
        onClick={() => setSelectedLinks(null)}
      >
        <div 
          className="relative w-full max-w-2xl max-h-[90vh] bg-clinic-white-off rounded-[2rem] shadow-2xl border border-clinic-border flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-10 flex-grow min-h-0 overflow-y-auto block">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-serif text-clinic-teal-900 leading-tight">Selected International Publications</h3>
                <p className="text-clinic-muted mt-2">Peer-reviewed research indexed globally.</p>
              </div>
              <button 
                onClick={() => setSelectedLinks(null)}
                className="text-clinic-teal-900/50 hover:text-clinic-teal-900 bg-clinic-teal-50 hover:bg-clinic-teal-100 p-2.5 rounded-full transition-colors flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="space-y-4">
              {selectedLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="p-5 rounded-2xl bg-white border border-clinic-border group-hover:border-clinic-gold/50 group-hover:shadow-md transition-all">
                    <h4 className="text-base md:text-lg text-clinic-teal-900 font-medium group-hover:text-clinic-gold transition-colors leading-snug tracking-wide">
                      {link.title}
                    </h4>
                    <p className="text-clinic-muted text-xs md:text-sm mt-3 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinic-gold"></span>
                      Journal of Ayurveda and Integrative Medicine (ScienceDirect)
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  );
}

function CredentialCard({ item, onImageClick, onLinksClick }: { item: any, onImageClick: (images: string[], index: number) => void, onLinksClick: (links: any[]) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const images = item.images && Array.isArray(item.images) ? item.images : [item.image];
  const hasMultiple = images.length > 1;

  // Auto sliding: Changes image index every 4 seconds if there are multiple images
  // Dependency on currentImageIndex automatically resets the timer whenever the user manually clicks/swipes
  React.useEffect(() => {
    if (!hasMultiple) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hasMultiple, currentImageIndex, images.length]);

  // Touch handlers for mobile swipe navigation
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50; // swiped left -> next image
    const isRightSwipe = distance < -50; // swiped right -> prev image

    if (isLeftSwipe) {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else if (isRightSwipe) {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden border border-clinic-border shadow-sm flex flex-col h-full group cursor-pointer"
      onClick={() => {
        if (item.links && item.links.length > 0) {
          onLinksClick(item.links);
        } else {
          onImageClick(images, currentImageIndex);
        }
      }}
    >
      {/* Image Frame */}
      <div 
        className="relative aspect-[4/3] bg-clinic-teal-50 overflow-hidden border-b border-clinic-border"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
         <OptimizedImage
            src={images[currentImageIndex]}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
         {hasMultiple && (
           <>
             {/* Left/Right controls */}
             <button
               onClick={prevImage}
               className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors z-20 group-hover:opacity-100 opacity-80"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
             </button>
             <button
               onClick={nextImage}
               className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors z-20 group-hover:opacity-100 opacity-80"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
             </button>
             <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
               {images.map((_, idx) => (
                 <div
                   key={idx}
                   className={`h-1.5 rounded-full transition-all ${ 
                     idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50' 
                   }`}
                 />
               ))}
             </div>
           </>
         )}
         <span className="absolute top-4 left-4 bg-clinic-teal-900 text-[10px] font-bold tracking-wider uppercase text-white px-3 py-1.5 rounded-full shadow-sm z-30 pointer-events-none">
           {item.badge}
         </span>
         {/* Click indicator hint on hover */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
           <div className="bg-white/90 text-clinic-teal-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-all pointer-events-none">
             Click to expand
           </div>
         </div>
      </div>
      
      {/* Content Panel */}
      <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
        <span className="text-clinic-gold text-xs font-mono font-medium tracking-wider block mb-2">{item.event}</span>
        <h3 className="text-xl font-serif text-clinic-teal-900 font-light mb-3 leading-tight group-hover:text-clinic-gold transition-colors">
          {item.title}
        </h3>
        <p className="text-clinic-muted font-light text-sm leading-relaxed flex-grow">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
