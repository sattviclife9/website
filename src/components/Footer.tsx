import React from 'react';
import { SattvicLogo } from './SattvicLogo';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
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
    <footer className="bg-clinic-charcoal border-t border-clinic-gold/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10 flex flex-col gap-8">
        
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Column 1: Brand & Taglines */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-block transition-transform duration-500 hover:scale-105 -mt-6 -mb-6 md:-mt-8 md:-mb-8">
              <SattvicLogo type="full" className="!h-28 sm:!h-36 lg:!h-48 w-auto" />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-clinic-gold text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 text-clinic-white-off/70 text-xs md:text-sm font-medium tracking-wide">
              <Link to="/about" className="hover:text-white transition-colors w-fit mx-auto sm:mx-0">About Us</Link>
              <Link to="/treatments" className="hover:text-white transition-colors w-fit mx-auto sm:mx-0">Treatments</Link>
              <Link to="/services" className="hover:text-white transition-colors w-fit mx-auto sm:mx-0">Services</Link>
              <Link to="/about/doctors" className="hover:text-white transition-colors w-fit mx-auto sm:mx-0">Meet the Doctors</Link>
              <Link to="/contact" className="hover:text-white transition-colors w-fit mx-auto sm:mx-0">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-clinic-gold text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold mb-4">Connect</h4>
            <div className="flex flex-col gap-4 text-clinic-white-off/70 text-xs md:text-sm tracking-wide">
              <a href="tel:+919404417145" className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-clinic-gold group-hover:scale-110 transition-transform flex-shrink-0 sm:mt-0.5" />
                <span>+91-9404417145</span>
              </a>
              <a href="mailto:sattviclife9@gmail.com" className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-clinic-gold group-hover:scale-110 transition-transform flex-shrink-0 sm:mt-0.5" />
                <span>sattviclife9@gmail.com</span>
              </a>
              <a href="https://www.google.com/maps/search/Sattvic+Advanced+Ayurveda+and+Panchakarma+Centre" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 hover:text-white transition-colors group">
                <MapPin className="w-4 h-4 text-clinic-gold group-hover:scale-110 transition-transform flex-shrink-0 sm:mt-1" />
                <span className="leading-relaxed">
                  Sattvic Advanced Ayurveda<br />
                  and Panchakarma Centre
                </span>
              </a>
            </div>
          </div>

          {/* Column 4: Translation & Social */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-clinic-gold text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold mb-4">Language & Social</h4>
            <div className="flex flex-col gap-5 items-center sm:items-start w-full">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 w-full text-clinic-white-off/80 text-[9px] md:text-[10px] uppercase tracking-[0.1em] font-bold">
                {languages.map((lang, index) => (
                  <React.Fragment key={lang.code}>
                    <button 
                      onClick={() => handleLanguageChange(lang.code)}
                      className="hover:text-white hover:underline underline-offset-4 transition-all"
                    >
                      {lang.label}
                    </button>
                    {index < languages.length - 1 && <span className="text-white/20">|</span>}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="mt-1 w-full flex justify-center sm:justify-start">
                 <GoogleTranslate />
              </div>

              <div className="flex gap-3 items-center justify-center sm:justify-start mt-1">
                <a href="https://www.facebook.com/profile.php?id=61585341523248" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-clinic-white-off/60 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all transform hover:-translate-y-1">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/sattvic_advanced_ayurveda/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-clinic-white-off/60 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all transform hover:-translate-y-1">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/drkhanaqsazarin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-clinic-white-off/60 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all transform hover:-translate-y-1">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@SattvicAdvancedAyurveda" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-clinic-white-off/60 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all transform hover:-translate-y-1">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Sattvic Ayurvedic Centre. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
