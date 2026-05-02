import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Utensils, Sun, Heart, Brain, Share2, Check } from 'lucide-react';
import SEO from '../components/SEO';
import WellnessNav from '../components/WellnessNav';

const LIFESTYLE_TIPS = [
  {
    category: "Ahara (Dietary Wisdom)",
    icon: <Utensils className="w-6 h-6 text-clinic-teal-900" />,
    tips: [
      {
        title: "Eat with the Sun",
        desc: "Make lunch your largest meal (between 12 PM - 2 PM) when your digestive fire (Agni) is at its peak, mirroring the sun's strength."
      },
      {
        title: "Sip Warm Water",
        desc: "Avoid ice-cold beverages during meals. Sip warm or room-temperature water to aid digestion and prevent 'extinguishing' your Agni."
      },
      {
        title: "Mindful Consumption",
        desc: "Eat in a calm environment without distractions like phones or TV. Chew your food thoroughly to start the digestive process in the mouth."
      }
    ]
  },
  {
    category: "Dinacharya (Daily Routine)",
    icon: <Sun className="w-6 h-6 text-clinic-teal-900" />,
    tips: [
      {
        title: "Brahma Muhurta",
        desc: "Wake up during the 'ambrosial hours' (roughly 1.5 hours before sunrise) when the air is filled with Sattvic energy and peace."
      },
      {
        title: "Tongue Scraping",
        desc: "Use a copper or stainless steel scraper every morning to remove 'Ama' (toxins) that accumulate on the tongue overnight."
      },
      {
        title: "Abhyanga (Self-Massage)",
        desc: "Massage your body with warm sesame oil before bathing to calm the nervous system and improve circulation."
      }
    ]
  },
  {
    category: "Manas (Mindfulness & Mental Health)",
    icon: <Brain className="w-6 h-6 text-clinic-teal-900" />,
    tips: [
      {
        title: "Pranayama (Breathwork)",
        desc: "Practice 10 minutes of Nadi Shodhana (Alternate Nostril Breathing) daily to balance both hemispheres of the brain and reduce stress."
      },
      {
        title: "Digital Detox",
        desc: "Disconnect from all screens at least one hour before bed. Allow your mind to wind down naturally with a book or meditation."
      },
      {
        title: "Service (Seva)",
        desc: "Engage in small acts of selfless service. Ayurveda teaches that a generous heart creates a healthy mind and body."
      }
    ]
  }
];

export default function LifestyleTips() {
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (isSharing) return;
    
    const shareData = {
      title: 'Sattvic Lifestyle Tips',
      text: 'Discover Ayurvedic wisdom for daily living at Sattvic Life.',
      url: window.location.href,
    };

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    if (navigator.share) {
      setIsSharing(true);
      try {
        await navigator.share(shareData);
      } catch (err: any) {
        // Don't log AbortError (user cancelled)
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
          // If share fails for other reasons, fallback to copy
          await copyToClipboard();
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      await copyToClipboard();
    }
  };

  return (
    <>
      <WellnessNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <SEO 
        title="Sattvic Lifestyle Tips | Ayurvedic Diet & Routine"
        description="Discover Ayurvedic wisdom for daily living. Practical tips on diet (Ahara), daily routine (Dinacharya), and mindfulness for a balanced, Sattvic life."
        keywords="Ayurvedic lifestyle, Sattvic diet, Dinacharya routine, Ayurvedic mindfulness, healthy daily habits, Agni digestion tips"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg">Living Harmony</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-6">Sattvic Lifestyle <span className="italic">Tips</span></h1>
        <p className="text-clinic-charcoal max-w-2xl mx-auto text-lg leading-relaxed">
          Health in Ayurveda isn't just about medicine—it's a way of living. Small, consistent shifts in your daily choices can lead to profound healing.
        </p>
      </motion.div>

      <div className="space-y-20">
        {LIFESTYLE_TIPS.map((section, sIdx) => (
          <div key={sIdx} className="relative">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-clinic-teal-50 rounded-xl">
                {section.icon}
              </div>
              <h2 className="text-2xl font-serif text-clinic-teal-900">{section.category}</h2>
              <div className="h-[1px] flex-grow bg-clinic-border"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.tips.map((tip, tIdx) => (
                <motion.div
                  key={tIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: tIdx * 0.1 }}
                  className="bg-clinic-ivory/30 p-8 rounded-2xl border border-clinic-border hover:border-clinic-bronze/30 transition-colors"
                >
                  <h3 className="font-serif text-xl text-clinic-teal-900 mb-4">{tip.title}</h3>
                  <p className="text-clinic-charcoal leading-relaxed text-sm">
                    {tip.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 p-10 bg-clinic-teal-900 rounded-3xl text-white text-center"
      >
        <Heart className="w-10 h-10 mx-auto mb-6 text-clinic-bronze" />
        <h2 className="text-2xl md:text-3xl font-serif mb-4">A Journey of a Thousand Miles...</h2>
        <p className="max-w-xl mx-auto opacity-90 mb-8">
          Don't try to change everything at once. Pick one tip from each category to practice this week and observe how your body responds.
        </p>
        <button 
          onClick={handleShare}
          className="bg-clinic-bronze hover:bg-clinic-bronze/90 text-white px-8 py-3 rounded-full transition-all font-medium flex items-center gap-2 mx-auto"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Link Copied!
            </>
          ) : (
            <>
              <Share2 className="w-5 h-5" />
              Share these Tips
            </>
          )}
        </button>
      </motion.div>
    </div>
    </>
  );
}
