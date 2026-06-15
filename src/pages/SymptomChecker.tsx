import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Activity, Brain, Droplets, Leaf, Activity as ActivityIcon, Sun, Heart, Flame, ShieldAlert, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import WellnessNav from '../components/WellnessNav';

type BodyArea = 'head' | 'chest' | 'abdomen' | 'joints' | 'skin' | 'mind';

const BODY_AREAS = [
  { id: 'head', label: 'Head & Neck', icon: Brain, description: 'Headaches, migraines, hair fall, sinus issues.' },
  { id: 'chest', label: 'Chest & Respiratory', icon: ActivityIcon, description: 'Asthma, cough, heart palpitations, allergies.' },
  { id: 'abdomen', label: 'Abdomen & Digestion', icon: Droplets, description: 'Gas, acidity, IBS, weight issues, liver health.' },
  { id: 'joints', label: 'Joints & Muscles', icon: Activity, description: 'Arthritis, back pain, sciatica, muscle stiffness.' },
  { id: 'skin', label: 'Skin & Body Surface', icon: Sun, description: 'Acne, psoriasis, eczema, pigmentation.' },
  { id: 'mind', label: 'Mind & Sleep', icon: Heart, description: 'Stress, anxiety, insomnia, lack of focus.' },
];

const SYMPTOMS_BY_AREA: Record<string, { symptom: string, recommendation: string, link: string }[]> = {
  head: [
    { symptom: 'Frequent Headaches / Migraines', recommendation: 'Recommended: Shirodhara, Nasya', link: '/conditions/migraine' },
    { symptom: 'Severe Hair Fall / Dandruff', recommendation: 'Recommended: Shiroabhyanga, Ayurvedic Hair Care', link: '/conditions/hair-fall' },
    { symptom: 'Chronic Sinus / Blocked Nose', recommendation: 'Recommended: Nasya, Steam Therapy', link: '/conditions/chronic-sinusitis' },
  ],
  chest: [
    { symptom: 'Breathlessness / Asthma', recommendation: 'Recommended: Uro Basti, Vamana', link: '/conditions/asthma' },
    { symptom: 'Frequent Cough & Cold', recommendation: 'Recommended: Immunity Enhancement', link: '/conditions/cold-flu' },
    { symptom: 'Chest Congestion', recommendation: 'Recommended: Swedana, Nasya', link: '/conditions/bronchitis' },
  ],
  abdomen: [
    { symptom: 'Acidity & Heartburn', recommendation: 'Recommended: Virechana, Acid Management', link: '/conditions/acidity' },
    { symptom: 'Bloating & Gas', recommendation: 'Recommended: Vasti, Deepana Pachana', link: '/conditions/gas-indigestion' },
    { symptom: 'Constipation or IBS', recommendation: 'Recommended: Panchakarma, Vasti', link: '/conditions/constipation' },
  ],
  joints: [
    { symptom: 'Knee Pain / Osteoarthritis', recommendation: 'Recommended: Janu Basti, Viddhakarma', link: '/conditions/knee-pain' },
    { symptom: 'Lower Back Pain / Sciatica', recommendation: 'Recommended: Kati Basti, Agnikarma', link: '/conditions/sciatica' },
    { symptom: 'Stiff Neck & Shoulders', recommendation: 'Recommended: Greeva Basti, Abhyanga', link: '/conditions/cervical-lumbar-spondylitis' },
  ],
  skin: [
    { symptom: 'Redness & Itching (Eczema/Psoriasis)', recommendation: 'Recommended: Virechana, Raktamokshana', link: '/conditions/psoriasis' },
    { symptom: 'Acne & Dark Spots', recommendation: 'Recommended: Mukhalepa, Detox', link: '/conditions/acne-pigmentation' },
    { symptom: 'Dry & Flaky Skin', recommendation: 'Recommended: Abhyanga, Herbal Steam', link: '/treatments#skin-hair-aesthetic-wellness' },
  ],
  mind: [
    { symptom: 'Difficulty Sleeping / Insomnia', recommendation: 'Recommended: Shirodhara, Padabhyanga', link: '/conditions/anxiety-insomnia' },
    { symptom: 'High Stress & Anxiety', recommendation: 'Recommended: Shirodhara, Brahmi Taila', link: '/conditions/anxiety-insomnia' },
    { symptom: 'Lack of Concentration', recommendation: 'Recommended: Nasya, Medhya Rasayana', link: '/conditions/memory-concentration' },
  ],
};

export default function SymptomChecker() {
  const [selectedArea, setSelectedArea] = useState<BodyArea | null>(null);

  return (
    <>
      <WellnessNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12 md:pt-8 md:pb-32 relative">
        <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-clinic-sea/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Body Map</span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
             Symptom <span className="italic font-medium text-clinic-teal-900/80">Navigator</span>
          </h1>
          <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
            Select the area of your body where you are experiencing discomfort to explore 
            possible Ayurvedic treatments and recommendations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Body Areas Selector */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-clinic-border"
          >
            <h2 className="text-xl font-serif text-clinic-teal-900 mb-6 border-b border-clinic-border pb-4">Where do you feel discomfort?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BODY_AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => {
                    setSelectedArea(area.id as BodyArea);
                    if (window.innerWidth < 1024) {
                      setTimeout(() => {
                        const el = document.getElementById('symptoms-details');
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 160;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }, 100);
                    }
                  }}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${
                    selectedArea === area.id 
                      ? 'border-clinic-gold bg-clinic-teal-50 shadow-md transform scale-[1.02]' 
                      : 'border-clinic-border hover:border-clinic-gold/50 hover:bg-clinic-ivory/50'
                  }`}
                >
                  <area.icon className={`w-8 h-8 mb-3 ${selectedArea === area.id ? 'text-clinic-gold' : 'text-clinic-teal-900'}`} />
                  <span className={`font-semibold mb-1 ${selectedArea === area.id ? 'text-clinic-teal-900' : 'text-clinic-charcoal'}`}>
                    {area.label}
                  </span>
                  <span className="text-xs text-clinic-muted leading-relaxed hidden sm:block">
                    {area.description}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Symptoms & Recommendations */}
          <motion.div 
            id="symptoms-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-clinic-teal-900 text-white p-8 md:p-10 rounded-[2rem] shadow-lg sticky top-32 min-h-[400px] flex flex-col"
          >
            <AnimatePresence mode="wait">
              {selectedArea ? (
                <motion.div
                  key={selectedArea}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
                    <Navigation className="w-6 h-6 text-clinic-gold" />
                    <div>
                      <h3 className="text-2xl font-serif text-clinic-gold">
                        {BODY_AREAS.find(a => a.id === selectedArea)?.label}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">Suggested Ayurvedic Care</p>
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    {SYMPTOMS_BY_AREA[selectedArea].map((item, index) => (
                      <div key={index} className="group relative pl-6">
                        <div className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-clinic-gold"></div>
                        <h4 className="text-lg font-medium text-white mb-2">{item.symptom}</h4>
                        <p className="text-clinic-sea font-medium text-sm mb-3">
                          {item.recommendation}
                        </p>
                        <Link 
                          to={item.link}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                        >
                          Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/60 italic mb-4">
                      Note: This is a diagnostic guide, not a medical prescription. Please consult our doctors for an accurate diagnosis.
                    </p>
                    <Link
                      to="/about-sattvic-ayurveda/contactus"
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-clinic-gold text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-clinic-gold/90 transition-colors"
                    >
                      Book a Consultation
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full text-white/50 flex-1 my-auto"
                >
                  <ActivityIcon className="w-16 h-16 mb-6 opacity-50" />
                  <p className="text-lg font-light max-w-xs mx-auto">
                    Select an area of the body on the left to view related symptoms and recommended Ayurvedic paths.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}
