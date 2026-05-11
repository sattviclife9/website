import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import WellnessNav from '../components/WellnessNav';

type Dosha = 'Vata' | 'Pitta' | 'Kapha';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: Dosha;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How would you describe your body frame?",
    options: [
      { text: "Thin, slender, prominent joints", value: 'Vata' },
      { text: "Medium, well-proportioned, moderate muscle", value: 'Pitta' },
      { text: "Broad, sturdy, heavier build", value: 'Kapha' }
    ]
  },
  {
    id: 2,
    text: "What is your typical skin type?",
    options: [
      { text: "Dry, rough, thin, prone to cold", value: 'Vata' },
      { text: "Warm, oily in T-zone, sensitive, freckles", value: 'Pitta' },
      { text: "Thick, oily, soft, smooth, cool", value: 'Kapha' }
    ]
  },
  {
    id: 3,
    text: "How do you respond to stress?",
    options: [
      { text: "Anxious, worried, restless", value: 'Vata' },
      { text: "Irritable, frustrated, impatient", value: 'Pitta' },
      { text: "Withdrawn, stubborn, unmotivated", value: 'Kapha' }
    ]
  },
  {
    id: 4,
    text: "Describe your sleep patterns:",
    options: [
      { text: "Light, easily awakened, erratic", value: 'Vata' },
      { text: "Moderate, may wake up but falls back asleep mostly", value: 'Pitta' },
      { text: "Deep, heavy, hard to wake up", value: 'Kapha' }
    ]
  },
  {
    id: 5,
    text: "How is your digestion and appetite?",
    options: [
      { text: "Irregular, tendency towards bloating", value: 'Vata' },
      { text: "Strong, sharp, cannot skip meals", value: 'Pitta' },
      { text: "Slow, steady, can skip meals easily", value: 'Kapha' }
    ]
  }
];

export default function DoshaQuiz() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is intro
  const [answers, setAnswers] = useState<Record<number, Dosha>>({});
  const [result, setResult] = useState<Dosha | null>(null);

  const handleStart = () => setCurrentStep(0);

  const handleAnswer = (questionId: number, answer: Dosha) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, Dosha>) => {
    const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(finalAnswers).forEach(val => counts[val]++);
    
    let dominant: Dosha = 'Vata';
    let maxCount = -1;
    
    (Object.keys(counts) as Dosha[]).forEach(dosha => {
      if (counts[dosha] > maxCount) {
        maxCount = counts[dosha];
        dominant = dosha;
      }
    });

    setTimeout(() => {
      setResult(dominant);
      setCurrentStep(QUIZ_QUESTIONS.length);
    }, 400);
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setCurrentStep(-1);
  };

  const getDoshaDescription = (dosha: Dosha) => {
    switch(dosha) {
      case 'Vata': return "You are predominantly composed of Air and Space. Creativity, movement, and enthusiasm are your core strengths. When out of balance, you might feel anxious or experience dry skin and erratic digestion.";
      case 'Pitta': return "You are predominantly composed of Fire and Water. Intellect, determination, and strong digestion are your core strengths. When out of balance, you might experience frustration, inflammation, or heartburn.";
      case 'Kapha': return "You are predominantly Earth and Water. Stability, compassion, and endurance are your core strengths. When out of balance, you may experience lethargy, stubbornness, or weight gain.";
      default: return "";
    }
  };

  return (
    <>
      <WellnessNav />
      <div className="min-h-[80vh] pt-8 pb-12 md:pt-16 md:pb-32 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      <AnimatePresence mode="wait">
        
        {/* INTRO STEP */}
        {currentStep === -1 && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-20 md:mb-28"
          >
            <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Prakriti Test</span>
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
              Discover Your <span className="italic font-medium text-clinic-teal-900/80">Dosha</span>
            </h1>
            <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto mb-10">
              Ayurveda identifies three basic body types or "doshas" — Vata, Pitta, and Kapha. 
              Understanding your unique constitution helps guide your dietary, lifestyle, and treatment choices to maintain balance and optimal health.
            </p>
            <button 
              onClick={handleStart}
              className="inline-flex items-center gap-3 bg-clinic-gold text-clinic-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[13px] hover:bg-clinic-bronze transition-colors shadow-sm"
            >
              Start the Quiz <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* QUESTIONS STEP */}
        {currentStep >= 0 && currentStep < QUIZ_QUESTIONS.length && (
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-clinic-border"
          >
            {/* Progress Bar */}
            <div className="w-full h-1 bg-clinic-teal-50">
              <motion.div 
                className="h-full bg-clinic-teal-500"
                initial={{ width: `${(currentStep / QUIZ_QUESTIONS.length) * 100}%` }}
                animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-clinic-teal-500 mb-4">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </p>
              <h2 className="text-3xl font-serif text-clinic-teal-900 mb-10">
                {QUIZ_QUESTIONS[currentStep].text}
              </h2>

              <div className="space-y-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(QUIZ_QUESTIONS[currentStep].id, option.value)}
                    className="w-full text-left p-6 rounded-xl border border-clinic-border hover:border-clinic-teal-500 hover:bg-clinic-teal-50 transition-all flex items-center justify-between group"
                  >
                    <span className="text-clinic-charcoal text-lg group-hover:text-clinic-teal-900">
                      {option.text}
                    </span>
                    <div className="w-5 h-5 rounded-full border border-clinic-border group-hover:border-clinic-teal-500 flex items-center justify-center">
                      {answers[QUIZ_QUESTIONS[currentStep].id] === option.value && (
                        <div className="w-3 h-3 rounded-full bg-clinic-teal-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* RESULTS STEP */}
        {result && currentStep === QUIZ_QUESTIONS.length && (
           <motion.div 
           key="result"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-white rounded-2xl shadow-xl overflow-hidden text-center border border-clinic-border p-10 md:p-16"
         >
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clinic-teal-50 text-clinic-teal-500 mb-6">
             <CheckCircle2 className="w-8 h-8" />
           </div>
           
           <h2 className="text-4xl font-serif text-clinic-teal-900 mb-2">
             Your Dominant Dosha is <span className="font-bold text-clinic-gold italic">{result}</span>
           </h2>
           
           <div className="w-16 h-[1px] bg-clinic-border mx-auto my-8"></div>
           
           <p className="text-clinic-charcoal text-lg leading-relaxed max-w-2xl mx-auto mb-10">
             {getDoshaDescription(result)}
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-clinic-gold text-clinic-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[13px] hover:bg-clinic-bronze transition-colors shadow-sm text-center">
                Book a Consultation
              </a>
              <button 
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-clinic-border text-clinic-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[13px] hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Retake Quiz
              </button>
           </div>
         </motion.div>
        )}

      </AnimatePresence>
    </div>
    </>
  );
}
