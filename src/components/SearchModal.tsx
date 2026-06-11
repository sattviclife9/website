import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronRight, Activity, Calendar, Newspaper } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScrollLock } from '../hooks/useScrollLock';

// Import data
import { specificConditions } from '../data/conditionsData';
import { NEWS_ARTICLES } from '../data/newsData';
import { ANNOUNCEMENTS } from '../data/announcementsData';
import { PROCEDURES } from '../pages/Services';
import { TREATMENTS_CATEGORIES } from '../pages/Treatments';

interface SearchResult {
  title: string;
  category: 'Treatment' | 'Condition' | 'News' | 'Announcement' | 'Page';
  path: string;
  description: string;
  icon?: React.ReactNode;
  score: number;
}

const ALL_PAGES = [
  { title: "Home", path: "/", description: "Sattvic Life Ayurveda Home Page", category: "Page" },
  { title: "About Us", path: "/about-sattvic-ayurveda", description: "Learn about Sattvic Life story and journey", category: "Page" },
  { title: "The Centre", path: "/about-sattvic-ayurveda/centre", description: "Our state of the art Ayurvedic hospital", category: "Page" },
  { title: "Know Your Doctors", path: "/about-sattvic-ayurveda/doctors", description: "Meet our Ayurveda expert practitioners", category: "Page" },
  { title: "Services", path: "/services", description: "Ayurvedic treatments, diagnostics and therapies", category: "Page" },
  { title: "Treatments Overview", path: "/treatments", description: "All Ayurvedic treatments provided", category: "Page" },
  { title: "Wellness Hub", path: "/wellness-hub", description: "Holistic resources, daily diet & routines", category: "Page" },
  { title: "Diet & Routine", path: "/wellness-hub#diet-routine", description: "Diet and daily routine knowledge", category: "Page" },
  { title: "Yoga & Meditation", path: "/wellness-hub#yoga-meditation", description: "Yoga therapies and meditation", category: "Page" },
  { title: "Mental Health", path: "/wellness-hub#mental-health", description: "Mental health and well-being", category: "Page" },
  { title: "Herbal Remedies", path: "/wellness-hub#herbal", description: "DIY herbal remedies", category: "Page" },
  { title: "Video Gallery", path: "/videos", description: "Watch patient stories and informative videos", category: "Page" },
  { title: "Lifestyle Tips", path: "/lifestyle-tips", description: "Practical daily health tips", category: "Page" },
  { title: "Ayurvedic Store", path: "/store", description: "Authentic Ayurvedic medicines", category: "Page" },
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
  const location = useLocation();

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

    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
    const normalizedQuery = query.toLowerCase().trim();
    
    if (searchTerms.length === 0) {
      setResults([]);
      return;
    }

    const calculateScore = (title: string, secondaryText?: string, keywords?: string) => {
      let score = 0;
      const t = title.toLowerCase();
      const s = secondaryText?.toLowerCase() || '';
      const k = keywords?.toLowerCase() || '';

      if (t === normalizedQuery) score += 1000;
      else if (t.startsWith(normalizedQuery)) score += 500;
      else if (t.includes(normalizedQuery)) score += 200;

      searchTerms.forEach(term => {
        if (t.split(' ').includes(term)) score += 100; // exact word match
        else if (t.includes(term)) score += 50;
        else if (s.includes(term)) score += 20;
        else if (k.includes(term)) score += 10;
        else score += 1;
      });
      return score;
    };

    // Search Conditions
    const matchedConditions: SearchResult[] = Object.values(specificConditions)
      .flatMap(cond => {
        const textToSearch = [
          cond.name,
          cond.ayurvedicName || '',
          cond.category,
          cond.seo.description,
          cond.seo.keywords,
          cond.about?.paragraphs?.join(' ') || '',
          cond.about?.symptoms?.join(' ') || '',
          cond.hero?.description || ''
        ].join(' ').toLowerCase();

        if (!searchTerms.every(term => textToSearch.includes(term))) {
          return [];
        }

        const score = calculateScore(
          cond.ayurvedicName ? `${cond.name} (${cond.ayurvedicName})` : cond.name,
          cond.hero?.description || '',
          cond.seo.keywords
        );

        return [{
          title: cond.ayurvedicName ? `${cond.name} (${cond.ayurvedicName})` : cond.name,
          category: 'Condition',
          path: `/conditions/${cond.id}`,
          description: cond.seo.description,
          icon: <Activity className="w-4 h-4" />,
          score
        }];
      });

    // Search News
    const matchedNews: SearchResult[] = NEWS_ARTICLES
      .flatMap(article => {
        const textToSearch = [
          article.title,
          article.excerpt,
          article.category
        ].join(' ').toLowerCase();

        if (!searchTerms.every(term => textToSearch.includes(term))) {
          return [];
        }

        const score = calculateScore(article.title, article.category, article.excerpt);

        return [{
          title: article.title,
          category: 'News',
          path: `/news`, // Or specific news URL if exists
          description: article.excerpt,
          icon: <Newspaper className="w-4 h-4" />,
          score
        }];
      });

    // Search Announcements
    const matchedAnnouncements: SearchResult[] = ANNOUNCEMENTS
      .flatMap(ann => {
        const textToSearch = [
          ann.title,
          ann.description,
          ann.category
        ].join(' ').toLowerCase();

        if (!searchTerms.every(term => textToSearch.includes(term))) {
          return [];
        }

        const score = calculateScore(ann.title, ann.category, ann.description);

        return [{
          title: ann.title,
          category: 'Announcement',
          path: `/announcements?id=${ann.id}`,
          description: ann.description,
          icon: <Calendar className="w-4 h-4" />,
          score
        }];
      });

    // Search Procedures/Treatments
    const matchedProcedures: SearchResult[] = PROCEDURES.flatMap(section => 
      section.items.flatMap(item => {
        const textToSearch = [
          item.name,
          item.desc,
          item.details || '',
          section.category
        ].join(' ').toLowerCase();

        if (!searchTerms.every(term => textToSearch.includes(term))) {
          return [];
        }

        const score = calculateScore(item.name, section.category, item.desc);

        return [{
          title: item.name,
          category: 'Treatment',
          path: `/services#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
          description: item.desc,
          icon: <Activity className="w-4 h-4" />,
          score
        }];
      })
    );

    // Search Treatments page categories
    const matchedTreatmentsCategories: SearchResult[] = TREATMENTS_CATEGORIES.flatMap(category => 
      category.items.flatMap(item => {
        const results: SearchResult[] = [];
        if (item.path) {
          const textMatches = searchTerms.every(term => [item.name, category.title].join(' ').toLowerCase().includes(term));
          if (textMatches) {
            const score = calculateScore(item.name, category.title);
            results.push({
              title: item.name,
              category: 'Condition',
              path: item.path,
              description: `Treatment category: ${category.title}`,
              icon: <Activity className="w-4 h-4" />,
              score
            });
          }
        }
        if (item.subItems) {
          item.subItems.forEach(subItem => {
            if (subItem.path) {
              const textMatches = searchTerms.every(term => [subItem.name, category.title, item.name].join(' ').toLowerCase().includes(term));
              if (textMatches) {
                const score = calculateScore(subItem.name, item.name, category.title);
                results.push({
                  title: subItem.name,
                  category: 'Condition',
                  path: subItem.path,
                  description: `Treatment for ${item.name} under ${category.title}`,
                  icon: <Activity className="w-4 h-4" />,
                  score
                });
              }
            }
          });
        }
        return results;
      })
    );

    // Search Pages
    const matchedPages: SearchResult[] = ALL_PAGES
      .flatMap(p => {
        const textToSearch = `${p.title} ${p.description}`.toLowerCase();
        
        if (!searchTerms.every(term => textToSearch.includes(term))) {
          return [];
        }

        const score = calculateScore(p.title, p.description);

        return [{
          title: p.title,
          category: 'Page' as any,
          path: p.path,
          description: p.description,
          score
        }];
      });
      
    // Combine and slice to max top 12 results
    const combinedMap = new Map<string, SearchResult>();

    [
      ...matchedConditions,
      ...matchedTreatmentsCategories,
      ...matchedProcedures,
      ...matchedPages,
      ...matchedNews,
      ...matchedAnnouncements
    ].forEach(result => {
      if (!combinedMap.has(result.title)) {
        combinedMap.set(result.title, result);
      } else {
        if (result.score > combinedMap.get(result.title)!.score) {
          combinedMap.set(result.title, result);
        }
      }
    });

    const combined = Array.from(combinedMap.values()).sort((a, b) => b.score - a.score).slice(0, 12);
    
    setResults(combined);
  }, [query]);

  const handleSelect = (path: string) => {
    const currentFullPath = location.pathname + location.search + location.hash;
    
    if (path === currentFullPath) {
      if (path.includes('#')) {
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 160;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      const [targetPath, targetHash] = path.split('#');
      if (targetPath === location.pathname && targetHash) {
        setTimeout(() => {
          const element = document.getElementById(targetHash);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 160;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }
    
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
