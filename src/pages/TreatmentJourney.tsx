import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Leaf, Droplets, Sun, CalendarCheck, ShieldCheck } from 'lucide-react';
import TreatmentNav from '../components/TreatmentNav';

const JOURNEY_STEPS = [
  {
    phase: 'Phase 1',
    title: 'Initial Consultation & Diagnosis',
    icon: Stethoscope,
    duration: 'Day 1',
    description: 'A deep-dive understanding of your unique constitution (Prakriti) and current imbalances (Vikriti).',
    details: [
      'Nadi Pariksha (Pulse Diagnosis)',
      'Detailed medical history evaluation',
      'Tongue and eye examination',
      'Personalized diet and lifestyle counseling'
    ],
    color: 'bg-clinic-teal-900',
    iconBg: 'bg-clinic-teal-900',
    iconColor: 'text-white'
  },
  {
    phase: 'Phase 2',
    title: 'Poorva Karma (Preparation)',
    icon: Leaf,
    duration: 'Day 2 - Day 7',
    description: 'Preparing the body to release deep-seated toxins from the tissues into the digestive tract.',
    details: [
      'Snehana (Internal and External Oleation - Ghee intake and Oil Massage)',
      'Swedana (Therapeutic Sweating)',
      'Custom herbal formulas to kindle digestive fire (Agni)'
    ],
    color: 'bg-clinic-sea',
    iconBg: 'bg-clinic-sea/20',
    iconColor: 'text-clinic-teal-900'
  },
  {
    phase: 'Phase 3',
    title: 'Pradhana Karma (Main Therapy)',
    icon: Droplets,
    duration: 'Day 8 - Day 14',
    description: 'The core Panchakarma procedures to flush out the mobilized toxins from the body.',
    details: [
      'Vamana (Therapeutic vomiting for Kapha), Virechana (Purgation for Pitta)',
      'Basti (Medicated Enemas for Vata)',
      'Nasya (Nasal administration for head/neck toxins)',
      'Raktamokshana (Blood purification if required)'
    ],
    color: 'bg-clinic-bronze',
    iconBg: 'bg-clinic-bronze/20',
    iconColor: 'text-clinic-bronze'
  },
  {
    phase: 'Phase 4',
    title: 'Paschat Karma (Restoration)',
    icon: Sun,
    duration: 'Day 15 - Day 21',
    description: 'Rebuilding the tissue strength and restoring the digestive fire post-detoxification.',
    details: [
      'Samsarjana Krama (Gradual reintroduction of solid foods)',
      'Rasayana (Rejuvenating herbal jams and tonics)',
      'Gentle yoga and breathing exercises (Pranayama)'
    ],
    color: 'bg-clinic-gold',
    iconBg: 'bg-clinic-gold/20',
    iconColor: 'text-clinic-gold'
  },
  {
    phase: 'Phase 5',
    title: 'Ongoing Maintenance & Follow-up',
    icon: ShieldCheck,
    duration: 'Ongoing',
    description: 'Sustainable practices to maintain the new state of balance and prevent future disease.',
    details: [
      'Periodic follow-up consultations',
      'Seasonal detox recommendations (Rutu Shodhana)',
      'Long-term herbal and lifestyle management'
    ],
    color: 'bg-clinic-charcoal',
    iconBg: 'bg-clinic-charcoal/10',
    iconColor: 'text-clinic-charcoal'
  }
];

export default function TreatmentJourney() {
  return (
    <>
      <TreatmentNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12 md:pt-8 md:pb-32 relative overflow-hidden">
        <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-clinic-sea/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-clinic-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">The Road to Healing</span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
             Treatment <span className="italic font-medium text-clinic-teal-900/80">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
            A standard Ayurvedic healing journey goes beyond just symptoms. It systematically prepares, deeply detoxifies, and completely rehabilitates the body.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[38px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-clinic-teal-900/50 via-clinic-gold/50 to-clinic-teal-900/10"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-2 md:mt-0 z-10">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md border-[4px] border-clinic-ivory flex items-center justify-center relative`}>
                    <div className={`absolute inset-0 rounded-full ${step.iconBg} animate-pulse-slow opacity-50`}></div>
                    <step.icon className={`w-6 h-6 md:w-7 md:h-7 relative z-10 ${step.iconColor}`} />
                  </div>
                </div>

                {/* Content Area */}
                <div className={`pl-24 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-clinic-border relative hover:shadow-lg transition-shadow duration-300">
                    {/* Connecting line for desktop */}
                    <div className={`hidden md:block absolute top-8 w-16 h-0.5 border-t-2 border-dashed border-clinic-border ${index % 2 === 0 ? '-right-16' : '-left-16'}`}></div>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-clinic-ivory border border-clinic-border text-clinic-teal-900`}>
                      {step.phase} • {step.duration}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-clinic-teal-900 mb-3">{step.title}</h3>
                    <p className="text-clinic-charcoal/80 font-light mb-6">{step.description}</p>
                    
                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : 'items-start'} flex flex-col`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-clinic-muted font-medium text-left">
                          <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-clinic-gold mt-1.5"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 text-center"
        >
          <p className="text-clinic-muted italic mb-6">Note: The timeline is illustrative and varies significantly based on individual health conditions.</p>
        </motion.div>
      </div>
    </>
  );
}
