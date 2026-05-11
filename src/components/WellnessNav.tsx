import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Dosha Quiz', path: '/dosha-quiz' },
  { name: 'Herb Glossary', path: '/herb-glossary' },
  { name: 'Lifestyle Tips', path: '/lifestyle-tips' },
  { name: 'Store', path: '/store' },
  { name: 'Symptom Navigator', path: '/symptom-navigator' }
];

export default function WellnessNav() {
  const location = useLocation();

  return (
    <div className="sticky top-[160px] sm:top-[140px] lg:top-[145px] z-40 w-full bg-clinic-ivory/95 backdrop-blur-md border-b border-clinic-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-2">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 pb-1 lg:pb-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`relative whitespace-nowrap px-4 py-2 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-clinic-teal-900 text-white shadow-md' 
                    : 'text-clinic-muted hover:bg-clinic-teal-50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
