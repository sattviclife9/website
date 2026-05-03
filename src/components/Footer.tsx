import React from 'react';
import { SattvicLogo } from './SattvicLogo';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

export default function Footer() {
  const handleLanguageChange = (code: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = code;
      const event = new Event('change', { bubbles: true, cancelable: true });
      select.dispatchEvent(event);
    } else {
      document.cookie = `googtrans=/en/${code}; path=/;`;
      window.location.reload();
    }
  };

  const languages = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'mr', label: 'MARATHI' },
    { code: 'ar', label: 'ARABIC' },
    { code: 'hi', label: 'HINDI' }
  ];

  return (
    <footer className="px-6 md:px-12 py-12 md:py-16 bg-clinic-charcoal border-t border-clinic-gold/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
        {/* Logo added to footer */}
        <div className="flex-shrink-0 transition-all duration-500">
          <Link to="/">
            <SattvicLogo type="full" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left text-clinic-white-off/60 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-clinic-gold rounded-full"></span> Authentic Kerala Roots</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-clinic-gold rounded-full"></span> Specialized Pain Management</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-clinic-gold rounded-full"></span> Holistic Detox Therapies</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-clinic-white-off/60 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Link to="/treatments" className="hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-clinic-gold pb-1">Treatments</Link>
          <Link to="/about" className="hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-clinic-gold pb-1">About Us</Link>
          <div className="hidden md:block h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center space-x-3">
            <GoogleTranslate />
            {languages.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <button 
                  onClick={() => handleLanguageChange(lang.code)}
                  className="hover:text-white transition-colors"
                >
                  {lang.label}
                </button>
                {index < languages.length - 1 && <span className="text-white/30">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 items-center">
          <a href="https://www.facebook.com/profile.php?id=61585341523248" target="_blank" rel="noopener noreferrer" className="text-clinic-white-off/60 hover:text-[#1877F2] transition-all transform hover:scale-110">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/sattvic_advanced_ayurveda/" target="_blank" rel="noopener noreferrer" className="text-clinic-white-off/60 hover:text-[#E4405F] transition-all transform hover:scale-110">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/drkhanaqsazarin/" target="_blank" rel="noopener noreferrer" className="text-clinic-white-off/60 hover:text-[#0A66C2] transition-all transform hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@SattvicAdvancedAyurveda" target="_blank" rel="noopener noreferrer" className="text-clinic-white-off/60 hover:text-[#FF0000] transition-all transform hover:scale-110">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-black/20 rounded flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold">
        <p>&copy; {new Date().getFullYear()} Sattvic Ayurvedic Centre. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
