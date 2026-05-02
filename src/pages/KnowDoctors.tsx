import React from 'react';
import { motion } from 'motion/react';
import AboutNav from '../components/AboutNav';
import OptimizedImage from '../components/OptimizedImage';

export default function KnowDoctors() {
  return (
    <>
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg">Our Lineage</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Know Your <span className="italic font-medium text-clinic-teal-900/80">Doctor</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-8 space-y-6 text-clinic-muted text-lg leading-relaxed"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-serif text-clinic-teal-900 mb-2 font-light">Dr. Khan Aqsa Zarin</h2>
            <p className="text-clinic-gold font-bold uppercase tracking-widest text-sm">M.D Kayachikitsa (Medicine)</p>
          </div>
          <p>
            Dr. Khan Aqsa Zarin is a dedicated Ayurvedic physician known for her deep commitment to natural healing and personalized patient care. She holds an <strong className="text-clinic-teal-900 font-medium">M.D. in Kayachikitsa (Medicine)</strong> from Dr. D. Y. Patil College of Ayurveda, Pune, and completed her graduation (<strong className="text-clinic-teal-900 font-medium">B.A.M.S.</strong>) from <strong className="text-clinic-teal-900 font-medium">Government Ayurvedic College and Hospital Nanded</strong>. She has further enhanced her expertise with a <strong className="text-clinic-teal-900 font-medium">Diploma in Nutrition</strong>, along with <strong className="text-clinic-teal-900 font-medium">certifications in Panchakarma and Yoga</strong>, and <strong className="text-clinic-teal-900 font-medium">fellowship training in Viddhakarma and Agnikarma</strong>.
          </p>
          <p>
            She has earned extensive recognition at both national and international levels. Her notable academic and professional achievements include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-6">
            <li><strong className="text-clinic-teal-900 font-medium">3 International Scopus-indexed (JAIM)</strong> research papers.</li>
            <li><strong className="text-clinic-teal-900 font-medium">1 Patent Published</strong>.</li>
            <li><strong className="text-clinic-teal-900 font-medium">1 Book Publishing Underway</strong> (Advances in Kayachikitsa).</li>
            <li><strong className="text-clinic-teal-900 font-medium">4 National Paper Presentations</strong> and <strong className="text-clinic-teal-900 font-medium">6 National Poster Presentations</strong>.</li>
            <li><strong className="text-clinic-teal-900 font-medium">1 International Poster Presentation</strong>.</li>
            <li><strong className="text-clinic-teal-900 font-medium">Member of International Academy of Ayurved (IAA)</strong>, Pune.</li>
            <li><strong className="text-clinic-teal-900 font-medium">International guest lectures</strong> in Canada.</li>
            <li>Taken <strong className="text-clinic-teal-900 font-medium">clinical and theoretical lectures</strong> for undergraduates.</li>
          </ul>
          <p>
            With extensive clinical exposure across Kayachikitsa, Gynaecology, and community healthcare, Dr. Khan Aqsa Zarin has managed a wide range of patients in both OPD and IPD settings. She is skilled in performing specialized therapies such as <strong className="text-clinic-teal-900 font-medium">Viddhakarma, Agnikarma, and cupping</strong>, known for providing effective and often immediate relief in pain-related conditions. Her experience also includes participation in medical camps and dedicated patient care during critical times such as the COVID-19 pandemic.
          </p>
          <p>
            She believes in identifying the root cause (Nidana) of disease through precise diagnosis, including <strong className="text-clinic-teal-900 font-medium">Nadi Parikshan</strong>, and providing targeted, individualized treatment. She carefully plans every treatment based on the patient's body constitution (Prakriti), seasonal variations, and specific health needs. Her approach integrates Ayurvedic medicines, therapies, diet, and lifestyle modifications, with the goal of achieving complete and sustainable healing. She emphasizes guiding patients in such a way that, over time, they become independent of long-term medications and are able to maintain their health naturally.
          </p>

          <blockquote className="mt-10 p-8 bg-clinic-teal-50 rounded-2xl border-l-4 border-clinic-gold text-clinic-teal-900 font-serif italic text-xl leading-relaxed">
            "True healing is a journey we walk together—with trust, care, and understanding. My aim is not just to treat your illness, but to truly listen to you, support you, and gently guide you back to balance in life. True success for me is when my patients feel truly healthy, confident, and at peace—embracing positive lifestyle changes naturally and eventually living a life free from dependence on medicines."
          </blockquote>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-clinic-border">
            <h3 className="text-2xl font-serif text-clinic-teal-900 mb-6 font-light">Selected International Publications</h3>
            <div className="space-y-4">
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
          className="lg:col-span-4"
        >
          <div className="sticky top-40 space-y-8">
            <div className="bg-clinic-teal-50 rounded-2xl overflow-hidden shadow-xl border border-clinic-border">
              <OptimizedImage
                src="/doctor.jpg"
                alt="Dr. Khan Aqsa Zarin"
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-clinic-border">
              <h3 className="text-xl font-serif text-clinic-teal-900 mb-6 border-b border-clinic-border pb-4">Key Areas of Expertise</h3>
            <ul className="space-y-4 text-clinic-muted">
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Chronic joint and musculoskeletal pain</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Skin and beauty concerns</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Gut and digestive care</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Stress, anxiety, and sleep-related issues</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Hair and scalp problems</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Women's health and fertility care</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Lifestyle disorders</li>
              <li className="flex items-start gap-3"><span className="text-clinic-gold mt-1">✦</span> Immunity-boosting and Panchakarma detox</li>
            </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
