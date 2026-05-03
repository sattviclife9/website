import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import InsightsNav from '../components/InsightsNav';

export default function News() {
  return (
    <>
      <InsightsNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
      <SEO 
        title="News & Updates | Sattvic Life"
        description="Stay updated with the latest news, wellness camps, and Ayurvedic updates from Sattvic Life."
        keywords="Ayurvedic news, Sattvic Life updates, wellness camps Pune"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Stay Connected</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          News & <span className="italic font-medium text-clinic-teal-900/80">Updates</span>
        </h1>
        <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
          The latest happenings, wellness camps, and insights from the Sattvic Life community.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[2rem] border border-clinic-border/50 text-center min-h-[40vh]">
        <div className="w-16 h-16 bg-clinic-teal-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-clinic-teal-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-clinic-teal-900 mb-3">Check Back Soon</h3>
        <p className="text-clinic-charcoal max-w-md">
          We are currently gathering the latest updates for you. Please check back later for our upcoming newsletters, events, and announcements.
        </p>
      </div>
    </div>
    </>
  );
}
