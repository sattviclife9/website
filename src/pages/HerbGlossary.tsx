import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, Leaf, Droplets, Sun, Wind, Activity } from 'lucide-react';
import WellnessNav from '../components/WellnessNav';
import { useScrollLock } from '../hooks/useScrollLock';

type Dosha = 'Vata' | 'Pitta' | 'Kapha' | 'Tridoshic';

interface Herb {
  id: string;
  name: string;
  sanskritName: string;
  image: string;
  description: string;
  benefits: string[];
  doshaEffect: Dosha;
  uses: string;
}

const HERBS: Herb[] = [
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    sanskritName: 'Withania somnifera',
    image: 'https://drive.google.com/thumbnail?id=1KiwiJVmRK7NtxogbMeiJdQfZ5393uvnN&sz=w800', 
    description: 'An adaptogenic herb known for its ability to reduce stress and anxiety, boost energy levels, and improve concentration.',
    benefits: ['Reduces Stress & Anxiety', 'Improves Sleep', 'Boosts Immunity', 'Enhances Stamina'],
    doshaEffect: 'Tridoshic',
    uses: 'Commonly consumed as a powder mixed with warm milk or water before bed.'
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    sanskritName: 'Curcuma longa / Haridra',
    image: 'https://drive.google.com/thumbnail?id=1e5RWDqYncVkg4yTWZkCkXHnTEOpbHkHP&sz=w800',
    description: 'A powerful anti-inflammatory and antioxidant herb with a vibrant yellow color, used for centuries in cooking and medicine.',
    benefits: ['Reduces Inflammation', 'Improves Skin Health', 'Supports Joint Health', 'Boosts Immunity'],
    doshaEffect: 'Kapha',
    uses: 'Added to curries, consumed as golden milk, or taken as a supplement for joint pain.'
  },
  {
    id: 'triphala',
    name: 'Triphala',
    sanskritName: 'Amalaki, Bibhitaki, Haritaki',
    image: 'https://drive.google.com/thumbnail?id=1jxUSHh_nt2MNexBwDEAgaSxwMVHutT11&sz=w800',
    description: 'A traditional herbal blend of three fruits used primarily as a digestive tonic and gentle bowel cleanser.',
    benefits: ['Promotes Digestion', 'Rich in Antioxidants', 'Aids in Weight Loss', 'Improves Eye Health'],
    doshaEffect: 'Tridoshic',
    uses: 'Taken with warm water before bed to support regular bowel movements and detoxification.'
  },
  {
    id: 'brahmi',
    name: 'Brahmi',
    sanskritName: 'Bacopa monnieri',
    image: 'https://drive.google.com/thumbnail?id=10RBrm0J5JiV2DNxRzSgeyuFnEsWo0HuN&sz=w800',
    description: 'A renowned brain tonic in Ayurveda used to enhance memory, concentration, and cognitive function while calming the mind.',
    benefits: ['Improves Memory', 'Reduces Anxiety', 'Enhances Focus', 'Promotes Hair Growth'],
    doshaEffect: 'Tridoshic',
    uses: 'Consumed as a tea, taken in capsule form, or applied as an oil for scalp massage.'
  },
  {
    id: 'tulsi',
    name: 'Tulsi (Holy Basil)',
    sanskritName: 'Ocimum sanctum',
    image: 'https://drive.google.com/thumbnail?id=15vnOouieYqrCyPr2-Crncuz5WzOoaWto&sz=w800',
    description: 'Considered a sacred plant in India, Tulsi is a potent adaptogen that helps the body cope with all types of stress.',
    benefits: ['Relieves Cough & Cold', 'Manages Stress', 'Supports Heart Health', 'Improves Digestion'],
    doshaEffect: 'Kapha',
    uses: 'Chewed fresh, brewed into a soothing tea, or used as an extract for respiratory support.'
  },
  {
    id: 'shatavari',
    name: 'Shatavari',
    sanskritName: 'Asparagus racemosus',
    image: 'https://drive.google.com/thumbnail?id=1P8wAm0vhRVaX_OfcMYn97NT850I7-HZl&sz=w800',
    description: 'A rejuvenating herb known for balancing hormones and supporting female reproductive health across all stages of life.',
    benefits: ['Balances Hormones', 'Supports Fertility', 'Boosts Immunity', 'Soothes Digestion'],
    doshaEffect: 'Vata',
    uses: 'Usually taken in powder form mixed with milk or ghee.'
  },
  {
    id: 'amalaki',
    name: 'Amla (Amalaki)',
    sanskritName: 'Emblica officinalis',
    image: 'https://drive.google.com/thumbnail?id=10ue-h37wOZmk9Aq9EiuuUE9wGHZimGRb&sz=w800',
    description: 'A potent superfruit loaded with Vitamin C and antioxidants. It acts as a powerful rejuvenative and immunity enhancer.',
    benefits: ['Boosts Immunity', 'Nourishes Hair & Scalp', 'Improves Vision', 'Balances Stomach Acid'],
    doshaEffect: 'Pitta',
    uses: 'Consumed fresh, as juice, in tablet form, or as a key ingredient in Chyawanprash.'
  },
  {
    id: 'guduchi',
    name: 'Giloy (Guduchi)',
    sanskritName: 'Tinospora cordifolia',
    image: 'https://drive.google.com/thumbnail?id=1PDkrWoM7Jw75IjUB_1MeXpRrU1pfso8p&sz=w800',
    description: 'Referred to as "Amrita" (Root of Immortality), this creeper is celebrated for its deep immune-boosting and detoxifying powers.',
    benefits: ['Fights Chronic Fevers', 'Improves Digestion', 'Purifies Blood', 'Manages Stress'],
    doshaEffect: 'Tridoshic',
    uses: 'Usually boiled into a decoction (kadha) or consumed as tablet/powder formulations.'
  },
  {
    id: 'neem',
    name: 'Neem',
    sanskritName: 'Azadirachta indica',
    image: 'https://drive.google.com/thumbnail?id=1qoupjqLLex32F_hhqyeGfy8RD4DW_05m&sz=w800',
    description: 'A powerful detoxifier traditionally used for its antibacterial, antifungal, and blood-purifying properties.',
    benefits: ['Clears Acne & Skin Issues', 'Purifies Blood', 'Supports Oral Health', 'Regulates Blood Sugar'],
    doshaEffect: 'Kapha',
    uses: 'Applied topically as a paste or oil, or ingested cautiously in capsule or powder form.'
  },
  {
    id: 'yashtimadhu',
    name: 'Licorice (Mulethi)',
    sanskritName: 'Glycyrrhiza glabra / Yashtimadhu',
    image: 'https://drive.google.com/thumbnail?id=1C7FZq-i3RO3P3w8xO0mjyBkJ7RltrbiL&sz=w800',
    description: 'A naturally sweet root that acts as a demulcent, soothing irritated tissues in the respiratory and digestive tracts.',
    benefits: ['Soothes Sore Throat', 'Relieves Acid Reflux', 'Nourishes Respiratory Tract', 'Improves Voice Quality'],
    doshaEffect: 'Vata',
    uses: 'Chewed raw, taken as a powder with honey, or brewed into a soothing tea.'
  },
  {
    id: 'haritaki',
    name: 'Haritaki',
    sanskritName: 'Terminalia chebula',
    image: 'https://drive.google.com/thumbnail?id=1D3rzVg9XroT-KnO4uAGthe4w1FvufpRo&sz=w800',
    description: 'Known as the "King of Medicines", it gently cleanses the physical system and is especially supportive for Vata dosha.',
    benefits: ['Supports Detoxification', 'Improves Digestion', 'Enhances Brain Function', 'Promotes Longevity'],
    doshaEffect: 'Vata',
    uses: 'Usually taken as a powder with warm water at night, and is a key ingredient in Triphala.'
  },
  {
    id: 'punarnava',
    name: 'Punarnava',
    sanskritName: 'Boerhavia diffusa',
    image: 'https://drive.google.com/thumbnail?id=1NRyNxwBQ6ygUEX9YzkhdvD1SlK_dnreY&sz=w800',
    description: 'A deeply revitalizing herb known to support proper kidney and liver function, and to help manage fluid retention.',
    benefits: ['Supports Urinary Tract', 'Reduces Fluid Retention', 'Promotes Liver Health', 'Revitalizes Body'],
    doshaEffect: 'Kapha',
    uses: 'Consumed as juice, powder, or decoction to support renal and hepatic function.'
  },
  {
    id: 'ginger',
    name: 'Ginger (Shunthi)',
    sanskritName: 'Zingiber officinale',
    image: 'https://drive.google.com/thumbnail?id=1-C30kNEwwB0-ecv7KT32E0yyvwPMLGPV&sz=w800',
    description: 'Referred to as the "Universal Medicine", ginger kindles the digestive fire and clears systemic sluggishness.',
    benefits: ['Kindles Digestive Fire', 'Relieves Nausea', 'Reduces Joint Pain', 'Clears Respiratory Congestion'],
    doshaEffect: 'Kapha',
    uses: 'Used fresh in cooking and teas, or dry (Shunthi) in Ayurvedic digestive formulations.'
  },
  {
    id: 'arjuna',
    name: 'Arjuna',
    sanskritName: 'Terminalia arjuna',
    image: 'https://drive.google.com/thumbnail?id=1NcY9snMYIwZfKi7HsXXAUQIB3JXKcFde&sz=w800',
    description: 'The ancient bark of the Arjuna tree is the premier cardiovascular tonic in Ayurveda, supporting both physical and emotional heart health.',
    benefits: ['Strengthens Heart Muscle', 'Normalizes Blood Pressure', 'Improves Cardiac Output', 'Balances Emotions'],
    doshaEffect: 'Pitta',
    uses: 'Typically taken as a bark decoction boiled in milk (Ksheer Pak) or in capsule form.'
  }
];

export default function HerbGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDosha, setSelectedDosha] = useState<'All' | Dosha>('All');
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);

  useScrollLock(!!selectedHerb);

  const filteredHerbs = HERBS.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          herb.sanskritName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDosha = selectedDosha === 'All' || herb.doshaEffect === selectedDosha;
    return matchesSearch && matchesDosha;
  });

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
            <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Nature's Pharmacy</span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
             Herb <span className="italic font-medium text-clinic-teal-900/80">Glossary</span>
          </h1>
          <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
            Explore our interactive directory of foundational Ayurvedic herbs, their properties, and profound healing benefits.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-white p-6 rounded-[2rem] shadow-sm border border-clinic-border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-clinic-muted" />
            <input 
              type="text" 
              placeholder="Search by english or sanskrit name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-clinic-ivory rounded-full border border-clinic-border focus:outline-none focus:border-clinic-gold focus:ring-1 focus:ring-clinic-gold transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Vata', 'Pitta', 'Kapha', 'Tridoshic'].map(dosha => (
              <button
                key={dosha}
                onClick={() => setSelectedDosha(dosha as typeof selectedDosha)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDosha === dosha 
                    ? 'bg-clinic-teal-900 text-white' 
                    : 'bg-clinic-ivory text-clinic-charcoal hover:bg-clinic-teal-50'
                }`}
              >
                {dosha}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredHerbs.map((herb, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={herb.id}
                onClick={() => setSelectedHerb(herb)}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-clinic-border cursor-pointer hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={herb.image} alt={herb.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-clinic-teal-900 border border-clinic-border/50">
                    {herb.doshaEffect}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif text-clinic-teal-900 mb-1 group-hover:text-clinic-gold transition-colors">{herb.name}</h3>
                  <p className="text-sm font-medium text-clinic-muted italic mb-4">{herb.sanskritName}</p>
                  <p className="text-clinic-charcoal/80 text-sm line-clamp-3 mb-6 flex-1 text-light">
                    {herb.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-clinic-teal-900 group-hover:text-clinic-gold transition-colors mt-auto">
                    View Details <Info className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredHerbs.length === 0 && (
          <div className="text-center py-20">
            <Leaf className="w-12 h-12 text-clinic-muted mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif text-clinic-teal-900">No herbs found</h3>
            <p className="text-clinic-muted mt-2">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Modal */}
        {createPortal(
          <AnimatePresence>
            {selectedHerb && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedHerb(null)}
                  className="fixed inset-0 bg-clinic-teal-900/60 backdrop-blur-sm z-50"
                />
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-3xl bg-white rounded-[2rem] shadow-2xl z-[51] overflow-hidden max-h-[90vh] flex flex-col"
                >
                  <div className="h-64 relative shrink-0">
                    <img src={selectedHerb.image} alt={selectedHerb.name} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setSelectedHerb(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-8 md:p-12 overflow-y-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                      <div>
                        <h2 className="text-3xl font-serif text-clinic-teal-900 mb-2">{selectedHerb.name}</h2>
                        <p className="text-lg text-clinic-muted italic">{selectedHerb.sanskritName}</p>
                      </div>
                      <div className="inline-block bg-clinic-sea/10 text-clinic-teal-900 px-4 py-2 rounded-full font-medium text-sm">
                        Balances {selectedHerb.doshaEffect}
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-clinic-teal-900 mb-3 border-b border-clinic-border pb-2">Properties</h4>
                        <p className="text-clinic-charcoal/80 leading-relaxed font-light">{selectedHerb.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-clinic-teal-900 mb-3 border-b border-clinic-border pb-2">Key Benefits</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedHerb.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-clinic-charcoal/80 text-sm font-medium">
                              <Leaf className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
  
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-clinic-teal-900 mb-3 border-b border-clinic-border pb-2">Common Uses</h4>
                        <p className="text-clinic-charcoal/80 leading-relaxed font-light">{selectedHerb.uses}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </>
  );
}
