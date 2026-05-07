import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronRight, Activity, Calendar, Newspaper } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollLock } from '../hooks/useScrollLock';

// Import data
import { specificConditions } from '../data/conditionsData';
import { NEWS_ARTICLES } from '../data/newsData';
import { ANNOUNCEMENTS } from '../data/announcementsData';

interface SearchResult {
  title: string;
  category: 'Treatment' | 'Condition' | 'News' | 'Announcement' | 'Page';
  path: string;
  description: string;
  icon?: React.ReactNode;
}

const ALL_PAGES = [
  { title: "Home", path: "/", description: "Sattvic Life Ayurveda Home Page", category: "Page" },
  { title: "About Us", path: "/about", description: "Learn about Sattvic Life story and journey", category: "Page" },
  { title: "The Centre", path: "/about/centre", description: "Our state of the art Ayurvedic hospital", category: "Page" },
  { title: "Know Your Doctors", path: "/about/doctors", description: "Meet our Ayurveda expert practitioners", category: "Page" },
  { title: "Services", path: "/services", description: "Ayurvedic treatments, diagnostics and therapies", category: "Page" },
  { title: "Treatments Overview", path: "/treatments", description: "All Ayurvedic treatments provided", category: "Page" },
  { title: "Wellness Hub", path: "/wellness-hub", description: "Holistic resources, daily diet & routines", category: "Page" },
  { title: "Diet & Routine", path: "/wellness-hub#diet-routine", description: "Diet and daily routine knowledge", category: "Page" },
  { title: "Yoga & Meditation", path: "/wellness-hub#yoga-meditation", description: "Yoga therapies and meditation", category: "Page" },
  { title: "Mental Health", path: "/wellness-hub#mental-health", description: "Mental health and well-being", category: "Page" },
  { title: "Herbal Remedies", path: "/wellness-hub#herbal", description: "DIY herbal remedies", category: "Page" },
  { title: "Video Gallery", path: "/videos", description: "Watch patient stories and informative videos", category: "Page" },
  { title: "Lifestyle Tips", path: "/lifestyle-tips", description: "Practical daily health tips", category: "Page" },
  { title: "Store", path: "/store", description: "Authentic Ayurvedic medicines", category: "Page" },
  { title: "Contact Us", path: "/contact", description: "Get in touch with us", category: "Page" }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    
    // Search Conditions
    const matchedConditions: SearchResult[] = Object.values(specificConditions)
      .filter(cond => 
        cond.name.toLowerCase().includes(lowercaseQuery) || 
        cond.ayurvedicName?.toLowerCase().includes(lowercaseQuery) ||
        cond.category.toLowerCase().includes(lowercaseQuery) ||
        cond.seo.description.toLowerCase().includes(lowercaseQuery) ||
        cond.seo.keywords.toLowerCase().includes(lowercaseQuery)
      )
      .map(cond => ({
        title: cond.ayurvedicName ? `${cond.name} (${cond.ayurvedicName})` : cond.name,
        category: 'Condition',
        path: `/conditions/${cond.id}`,
        description: cond.seo.description,
        icon: <Activity className="w-4 h-4" />
      }));

    // Search News
    const matchedNews: SearchResult[] = NEWS_ARTICLES
      .filter(article => 
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.category.toLowerCase().includes(lowercaseQuery)
      )
      .map(article => ({
        title: article.title,
        category: 'News',
        path: `/news`, // Or specific news URL if exists
        description: article.excerpt,
        icon: <Newspaper className="w-4 h-4" />
      }));

    // Search Announcements
    const matchedAnnouncements: SearchResult[] = ANNOUNCEMENTS
      .filter(ann => 
        ann.title.toLowerCase().includes(lowercaseQuery) ||
        ann.description.toLowerCase().includes(lowercaseQuery) ||
        ann.category.toLowerCase().includes(lowercaseQuery)
      )
      .map(ann => ({
        title: ann.title,
        category: 'Announcement',
        path: `/announcements?id=${ann.id}`,
        description: ann.description,
        icon: <Calendar className="w-4 h-4" />
      }));

    // Search Pages
    const matchedPages: SearchResult[] = ALL_PAGES
      .filter(p => p.title.toLowerCase().includes(lowercaseQuery) || p.description.toLowerCase().includes(lowercaseQuery))
      .map(p => ({
        title: p.title,
        category: 'Page' as any,
        path: p.path,
        description: p.description
      }));
      
    // Combine and slice to max top 12 results
    const combined = [
      ...matchedConditions,
      ...matchedPages,
      ...matchedNews,
      ...matchedAnnouncements
    ].slice(0, 12);
    
    setResults(combined);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Condition': return 'bg-clinic-bronze/10 text-clinic-bronze';
      case 'News': return 'bg-blue-100 text-blue-800';
      case 'Announcement': return 'bg-purple-100 text-purple-800';
      default: return 'bg-clinic-teal-50 text-clinic-teal-900';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6 md:pt-32"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-clinic-charcoal/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Search Input Area */}
            <div className="relative border-b border-clinic-border">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-clinic-muted">
                <Search className="w-6 h-6" />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for conditions, treatments, news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none py-6 pl-16 pr-16 text-lg sm:text-xl text-clinic-charcoal placeholder:text-clinic-muted focus:ring-0 outline-none"
              />
              <button
                onClick={onClose}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-clinic-muted hover:text-clinic-charcoal hover:bg-clinic-teal-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto flex-1 min-h-[100px] bg-clinic-paper">
              {query.trim() === '' ? (
                <div className="px-8 py-12 text-center text-clinic-muted">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clinic-teal-50 text-clinic-teal-900 mb-4">
                    <Search className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-lg font-medium">What are you looking for?</p>
                  <p className="text-sm mt-2">Try searching for "Sciatica", "Panchakarma", or "News"</p>
                </div>
              ) : results.length > 0 ? (
                <div className="py-4">
                  <div className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-clinic-muted flex items-center justify-between">
                    <span>Search Results for "{query}"</span>
                    <span>{results.length} found</span>
                  </div>
                  <ul className="mt-2">
                    {results.map((result, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleSelect(result.path)}
                          className="w-full text-left px-6 py-4 hover:bg-clinic-ivory transition-colors flex items-start gap-4 border-l-4 border-transparent hover:border-clinic-gold group"
                        >
                          <div className={`p-2 rounded-full mt-1 ${getCategoryColor(result.category)} shrink-0`}>
                            {result.icon || <ChevronRight className="w-4 h-4" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base sm:text-lg font-medium text-clinic-teal-900 group-hover:text-clinic-charcoal transition-colors truncate">
                                {result.title}
                              </h4>
                              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${getCategoryColor(result.category)}`}>
                                {result.category}
                              </span>
                            </div>
                            <p className="text-sm text-clinic-charcoal/70 line-clamp-1 group-hover:text-clinic-charcoal/90 transition-colors">
                              {result.description}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="px-8 py-16 text-center text-clinic-muted">
                  <p className="text-lg">No results found for "<span className="font-medium text-clinic-charcoal">{query}</span>"</p>
                  <p className="text-sm mt-2">Try adjusting your search terms</p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="bg-clinic-teal-900 text-white/70 px-6 py-3 text-xs sm:text-sm font-light flex items-center justify-between border-t border-clinic-teal-800">
              <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[10px] sm:text-xs">esc</kbd> to close</span>
              <span>Available treatments, conditions & updates</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
