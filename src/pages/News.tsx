import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import InsightsNav from '../components/InsightsNav';
import { NEWS_ARTICLES } from '../data/newsData';

export default function News() {
  return (
    <>
      <InsightsNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
      <SEO 
        title="Ayurvedic News & Updates | Sattvic Life"
        description="Read the latest general news, research, and updates in the world of Ayurveda and holistic wellness."
        keywords="Ayurvedic news, health updates, holistic wellness news, Ayurveda research"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Holistic Knowledge</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          News & <span className="italic font-medium text-clinic-teal-900/80">Updates</span>
        </h1>
        <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
          The latest general news, research, and insights from the world of Ayurveda and holistic wellness.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_ARTICLES.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-clinic-border hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-clinic-teal-50 text-clinic-teal-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-clinic-muted text-sm font-light">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-clinic-teal-900 mb-4 group-hover:text-clinic-gold transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-clinic-charcoal font-light leading-relaxed mb-8 flex-1 text-sm md:text-base">
                {article.excerpt}
              </p>
              <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-clinic-border/50">
                <span className="text-xs font-bold text-clinic-teal-900/60 uppercase tracking-wider">Sources:</span>
                <div className="flex flex-col gap-2">
                  {article.sources.map((source, sIdx) => (
                    <a 
                      key={sIdx}
                      href={source.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between group/link text-clinic-teal-900 font-medium text-[13px] hover:text-clinic-gold transition-colors"
                    >
                      <span className="truncate pr-4">{source.name}</span>
                      <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
