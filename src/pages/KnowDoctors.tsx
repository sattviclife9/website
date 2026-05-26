import React from 'react';
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

  return (
    <>
      <SEO 
        title="Dr. Khan Aqsa Zarin | Best Ayurvedic Doctor in Pune"
        description="Meet Dr. Khan Aqsa Zarin, widely regarded as the best Ayurvedic doctor in Pune. Holding an M.D. in Kayachikitsa with extensive clinical research, she specializes in Panchakarma, Viddhakarma, and Agnikarma."
        keywords="best ayurvedic doctor in Pune, ayurvedic doctor pune, Dr. Khan Aqsa Zarin, M.D. Kayachikitsa doctor Pune, top ayurvedic doctor Pune, Panchakarma doctor Pune, Agnikarma specialist Pune, Nadi Parikshan Salunke Vihar Wanowrie, sattvic ayurveda pune"
        schema={schema}
      />
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12 md:pt-8 md:pb-32">
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
              <li className="flex items-start gap-4"><span className="text-clinic-gold mt-1">✦</span><span><strong className="text-clinic-teal-900 font-medium">3 International Scopus-indexed (JAIM)</strong> research papers (check links below).</span></li>
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

          <div className="mt-16 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-clinic-border">
            <h3 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-8 font-light">Selected International Publications</h3>
            <div className="space-y-6">
              <a href="https://www.sciencedirect.com/science/article/pii/S0975947623001791" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="p-5 rounded-xl border border-clinic-border hover:border-clinic-gold hover:shadow-md transition-all">
                  <h4 className="text-lg text-clinic-charcoal font-medium group-hover:text-clinic-gold transition-colors leading-snug tracking-wide">Ayurveda and Yoga management of chronic alcoholism sequelae - A case report</h4>
                  <p className="text-clinic-muted text-sm mt-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-gold"></span>
                    Journal of Ayurveda and Integrative Medicine (ScienceDirect)
                  </p>
                </div>
              </a>
              <a href="https://www.sciencedirect.com/science/article/pii/S0975947625001196" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="p-5 rounded-xl border border-clinic-border hover:border-clinic-gold hover:shadow-md transition-all">
                  <h4 className="text-lg text-clinic-charcoal font-medium group-hover:text-clinic-gold transition-colors leading-snug tracking-wide">A holistic Ayurvedic approach to manage persistent depressive disorder, Vishada—A case report</h4>
                  <p className="text-clinic-muted text-sm mt-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-gold"></span>
                    Journal of Ayurveda and Integrative Medicine (ScienceDirect)
                  </p>
                </div>
              </a>
              <a href="https://www.sciencedirect.com/science/article/pii/S0975947623000293" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="p-5 rounded-xl border border-clinic-border hover:border-clinic-gold hover:shadow-md transition-all">
                  <h4 className="text-lg text-clinic-charcoal font-medium group-hover:text-clinic-gold transition-colors leading-snug tracking-wide">Implementing traditional ayurveda treatment as a primary care management in a survivor of gas geyser syndrome – A case report</h4>
                  <p className="text-clinic-muted text-sm mt-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-gold"></span>
                    Journal of Ayurveda and Integrative Medicine (ScienceDirect)
                  </p>
                </div>
              </a>
            </div>
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
    </div>
    </>
  );
}
