import React, { useState, useEffect } from 'react';
import { X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { SattvicLogo } from './SattvicLogo';

import { ClinicStatus } from './ClinicStatus';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [wellnessHubDropdownOpen, setWellnessHubDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Render a nav link
  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`border-b transition-all ${
        isActive(to) 
          ? 'text-clinic-teal-900 border-clinic-gold' 
          : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex flex-col">
        {/* Top Notification Bar */}
        <div className="bg-clinic-charcoal border-b border-clinic-gold/30 text-clinic-white-off py-2.5 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left order-1">
              <ClinicStatus />
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center sm:justify-end order-2 pt-1 sm:pt-0">
              <a href="tel:+919404417145" className="flex items-center gap-2 hover:text-clinic-gold transition-colors">
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>Call Us: +91-9404417145</span>
              </a>
              <a href="https://wa.me/919404417145" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clinic-gold transition-colors">
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        <nav
          className={`transition-all duration-300 w-full ${
            isScrolled
              ? 'bg-white shadow-sm border-b border-clinic-border py-0'
              : 'bg-white border-b border-clinic-border py-1'
          }`}
        >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/">
            <SattvicLogo type="full" className="mr-4" inHeader={true} />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center gap-8 text-[11px] uppercase tracking-[0.15em] font-semibold text-clinic-teal-900/70 items-center">
            <NavLink to="/">Home</NavLink>
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link to="/services" className={`flex items-center gap-1 border-b transition-all pb-0.5 ${
                isActive('/services')
                  ? 'text-clinic-teal-900 border-clinic-gold' 
                  : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
              }`}>
                Services
              </Link>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-clinic-border shadow-xl rounded-sm overflow-hidden flex flex-col py-2 uppercase text-[10px] tracking-wider"
                  >
                    <Link to="/services" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30 font-medium text-clinic-teal-900">Overview</Link>
                    <Link to="/services#consultation-and-diagnostic-services" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Consultation & Diagnostic</Link>
                    <Link to="/services#panchakarma-and-detox-therapies" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Panchakarma & Detox</Link>
                    <Link to="/services#specialized-pain-management" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Specialized Pain Management</Link>
                    <Link to="/services#nourishing-restorative-therapies" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Nourishing & Restorative</Link>
                    <Link to="/services#women-and-child-healthcare" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Women & Child Healthcare</Link>
                    <Link to="/services#skin-and-aesthetic-care" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors border-b border-clinic-border/30">Skin & Aesthetic Care</Link>
                    <Link to="/services#immunity-and-vitality-enhancement" className="px-4 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Immunity & Vitality</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setTreatmentsDropdownOpen(false)}
            >
              <Link to="/treatments" className={`flex items-center gap-1 border-b transition-all pb-0.5 ${
                isActive('/treatments') || location.pathname.startsWith('/conditions/')
                  ? 'text-clinic-teal-900 border-clinic-gold' 
                  : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
              }`}>
                Treatments
              </Link>
              
              <AnimatePresence>
                {treatmentsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[22rem] bg-white border border-clinic-border shadow-xl rounded-sm flex flex-col py-2 uppercase text-[10px] tracking-wider z-[100] group"
                  >
                    <Link to="/treatments" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors w-full border-b border-clinic-border/30 font-medium text-clinic-teal-900">
                      Overview
                    </Link>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#musculoskeletal-joint-care" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full">
                        Musculoskeletal & Joint Care
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Arthritis & Joint Care</div>
                        <Link to="/conditions/osteoarthritis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Osteoarthritis (Sandhivat)
                        </Link>
                        <Link to="/conditions/rheumatoid-arthritis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Rheumatoid Arthritis (Amavata)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Spine Health</div>
                        <Link to="/conditions/sciatica" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Sciatica (Gridhrasi)
                        </Link>
                        <Link to="/conditions/slip-disc" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Slip Disc (Katigraha)
                        </Link>
                        <Link to="/conditions/cervical-lumbar-spondylitis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Cervical & Lumbar Spondylitis (Manyastambha & Katigraha)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Chronic Pain</div>
                        <Link to="/conditions/knee-pain" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Knee Pain (Janu Shula)
                        </Link>
                        <Link to="/conditions/back-pain" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Back Pain (Kati Shula)
                        </Link>
                        <Link to="/conditions/neck-pain" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Neck Pain (Manya Shula)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Sports & Occupational Injuries</div>
                        <Link to="/conditions/frozen-shoulder" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Frozen Shoulder (Apabahnuka)
                        </Link>
                        <Link to="/conditions/tennis-elbow" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Tennis Elbow (Kurpara Shula)
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#digestive-metabolic-health" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Digestive & Metabolic Health
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Digestive Disorders</div>
                        <Link to="/conditions/acidity" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Acidity (Amlapitta)
                        </Link>
                        <Link to="/conditions/gas-indigestion" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Gas & Indigestion (Adhmana & Ajirna)
                        </Link>
                        <Link to="/conditions/constipation" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Constipation (Vibandha)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Gut Health</div>
                        <Link to="/conditions/irritable-bowel-syndrome" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Irritable Bowel Syndrome (IBS)
                        </Link>
                        <Link to="/conditions/diarrhea" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Diarrhea (Atisara)
                        </Link>
                        <Link to="/conditions/piles-fissure" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Piles & Fissure (Arsha & Parikartika)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Liver Care</div>
                        <Link to="/conditions/fatty-liver" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Fatty Liver (Yakrit Roga)
                        </Link>
                        <Link to="/conditions/jaundice" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Jaundice (Kamala)
                        </Link>
                        <Link to="/conditions/liver-cirrhosis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Liver Cirrhosis (Yakritodara)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Metabolic Support</div>
                        <Link to="/conditions/diabetes-management" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Diabetes Management (Prameha)
                        </Link>
                        <Link to="/conditions/thyroid-dysfunction" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Thyroid Dysfunction (Galaganda)
                        </Link>
                        <Link to="/conditions/cholesterol-management" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Cholesterol Management (Medoroga)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Weight Management</div>
                        <Link to="/conditions/obesity" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Obesity (Sthaulya)
                        </Link>
                        <Link to="/conditions/heart-health-support" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Heart Health Support (Hrid Roga)
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#skin-hair-aesthetic-wellness" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Skin, Hair & Aesthetic Wellness
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Chronic Skin Conditions</div>
                        <Link to="/conditions/psoriasis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Psoriasis (Eka Kushta)
                        </Link>
                        <Link to="/conditions/eczema" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Eczema (Vicharchika)
                        </Link>
                        <Link to="/conditions/vitiligo" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Vitiligo (Shvitra)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Daily Care</div>
                        <Link to="/conditions/acne-pigmentation" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Acne & Pigmentation (Yauvanapidika & Vyanga)
                        </Link>
                        <Link to="/conditions/chronic-allergies" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Chronic Allergies (Sheetapitta)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Trichology</div>
                        <Link to="/conditions/hair-fall" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Hair Fall (Khalitya)
                        </Link>
                        <Link to="/conditions/alopecia" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Alopecia (Indralupta)
                        </Link>
                        <Link to="/conditions/dandruff" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Dandruff (Darunaka)
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#women-s-health-fertility" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Women’s Health & Fertility
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Hormonal Care</div>
                        <Link to="/conditions/pcod-pcos" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          PCOD / PCOS (Artava Kshaya)
                        </Link>
                        <Link to="/conditions/menstrual-irregularities" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Menstrual Irregularities (Artava Dosha)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Reproductive Health</div>
                        <Link to="/conditions/fertility-support" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Fertility Support (Vandhyatva)
                        </Link>
                        <Link to="/conditions/repeated-miscarriages-support" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Repeated Miscarriages Support (Garbhasrava)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Maternal Wellness</div>
                        <Link to="/conditions/postpartum-care" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Postpartum Care (Sutika Paricharya)
                        </Link>
                        <Link to="/conditions/lactation-support" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Lactation Support
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">General Care</div>
                        <Link to="/conditions/white-discharge" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          White Discharge (Shveta Pradara)
                        </Link>
                        <Link to="/conditions/dysmenorrhea" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Dysmenorrhea (Kashtartava)
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#mental-health-neurology" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Mental Health & Neurology
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Stress Management</div>
                        <Link to="/conditions/anxiety-insomnia" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Anxiety & Insomnia (Chittodvega & Anidra)
                        </Link>
                        <Link to="/conditions/irritability" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Irritability
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Neurological Support</div>
                        <Link to="/conditions/migraine" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Migraine (Ardhavabhedaka)
                        </Link>
                        <Link to="/conditions/epilepsy" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Epilepsy (Apasmara)
                        </Link>
                        <Link to="/conditions/parkinson-s-disease" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Parkinson’s Disease (Kampavata)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Recovery</div>
                        <Link to="/conditions/stroke-paralysis-rehabilitation" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Stroke & Paralysis Rehabilitation (Pakshaghata)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Developmental Support</div>
                        <Link to="/conditions/memory-concentration" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Memory & Concentration
                        </Link>
                        <Link to="/conditions/ayurvedic-support-for-adhd-autism" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Ayurvedic Support for ADHD/Autism
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#respiratory-immune-health" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Respiratory & Immune Health
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Allergy Management</div>
                        <Link to="/conditions/chronic-sinusitis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Chronic Sinusitis (Dushta Pratishyaya)
                        </Link>
                        <Link to="/conditions/cold-flu" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Cold & Flu (Pratishyaya)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Respiratory Care</div>
                        <Link to="/conditions/asthma" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Asthma (Tamaka Shvasa)
                        </Link>
                        <Link to="/conditions/bronchitis" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Bronchitis (Kasa)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Autoimmune Support</div>
                        <Link to="/conditions/specialized-protocols-for-sle-hashimoto-s-and-ibd" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Specialized protocols for SLE, Hashimoto’s, and IBD
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#men-s-health-urology" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Men’s Health & Urology
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Reproductive Wellness</div>
                        <Link to="/conditions/erectile-dysfunction" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Erectile Dysfunction (Klaibya)
                        </Link>
                        <Link to="/conditions/premature-ejaculation" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Premature Ejaculation (Shukragata Vata)
                        </Link>
                        <Link to="/conditions/low-sperm-count" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Low Sperm Count (Kshinashukra)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Urinary Health</div>
                        <Link to="/conditions/kidney-stones" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Kidney Stones (Ashmari)
                        </Link>
                        <Link to="/conditions/uti" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          UTI (Mutrakrichra)
                        </Link>
                        <Link to="/conditions/prostate-issues" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Prostate Issues (Mutraghata)
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Bladder Support</div>
                        <Link to="/conditions/urinary-incontinence" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Urinary Incontinence (Mutratisara)
                        </Link>
                        <Link to="/conditions/neurogenic-bladder" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Neurogenic Bladder
                        </Link>
                      </div>
                    </div>
                    <div className="group/sub relative w-full">
                      <Link to="/treatments#pediatric-child-healthcare" className="px-5 py-3 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors flex justify-between items-center w-full border-t border-clinic-border/30">
                        Pediatric (Child) Healthcare
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <div className="absolute top-0 left-[95%] w-72 bg-white border border-clinic-border shadow-xl rounded-sm py-2 hidden group-hover/sub:flex flex-col z-[110] max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Immunity</div>
                        <Link to="/conditions/recurrent-colds" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Recurrent Colds
                        </Link>
                        <Link to="/conditions/seasonal-allergies" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Seasonal Allergies
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Growth</div>
                        <Link to="/conditions/poor-appetite" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Poor Appetite (Agnimandya)
                        </Link>
                        <Link to="/conditions/digestive-weakness" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Digestive Weakness
                        </Link>
                        <div className="px-4 py-2 text-clinic-teal-900 font-bold border-b border-clinic-border/30 bg-clinic-teal-50/50">Development</div>
                        <Link to="/conditions/concentration-support" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Concentration Support
                        </Link>
                        <Link to="/conditions/bed-wetting" className="px-5 py-2 hover:bg-clinic-teal-50 hover:text-clinic-bronze transition-colors flex items-center gap-2 capitalize text-xs font-medium border-b border-clinic-border/10 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-clinic-bronze flex-shrink-0"></span>
                          Bed Wetting (Shayya Mutra)
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setWellnessHubDropdownOpen(true)}
              onMouseLeave={() => setWellnessHubDropdownOpen(false)}
            >
              <Link to="/dosha-quiz" className={`cursor-pointer flex items-center gap-1 border-b transition-all pb-0.5 ${
                isActive('/dosha-quiz') || isActive('/lifestyle-tips') || isActive('/store')
                  ? 'text-clinic-teal-900 border-clinic-gold' 
                  : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
              }`}>
                Wellness Hub
              </Link>
              
              <AnimatePresence>
                {wellnessHubDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-clinic-border shadow-xl rounded-sm overflow-hidden flex flex-col py-2 uppercase text-[10px] tracking-wider"
                  >
                    <Link to="/store" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Ayurvedic Store</Link>
                    <Link to="/dosha-quiz" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Dosha Quiz</Link>
                    <Link to="/lifestyle-tips" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Lifestyle Tips</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link to="/announcements" className={`cursor-pointer flex items-center gap-1 border-b transition-all pb-0.5 ${
                isActive('/announcements') || isActive('/news') || isActive('/videos')
                  ? 'text-clinic-teal-900 border-clinic-gold' 
                  : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
              }`}>
                Insights
              </Link>
              
              <AnimatePresence>
                {shopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-clinic-border shadow-xl rounded-sm overflow-hidden flex flex-col py-2 uppercase text-[10px] tracking-wider"
                  >
                    <Link to="/announcements" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Announcements</Link>
                    <Link to="/videos" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Video Gallery</Link>
                    <Link to="/news" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">News & Updates</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link to="/about" className={`flex items-center gap-1 border-b transition-all pb-0.5 ${
                isActive('/about') || isActive('/about/doctors') || isActive('/contact')
                  ? 'text-clinic-teal-900 border-clinic-gold' 
                  : 'hover:text-clinic-teal-900 border-transparent hover:border-clinic-gold'
              }`}>
                About Us
              </Link>
              
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-clinic-border shadow-xl rounded-sm overflow-hidden flex flex-col py-2 uppercase text-[10px] tracking-wider"
                  >
                    <Link to="/about" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Our Story</Link>
                    <Link to="/about/centre" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">The Centre</Link>
                    <Link to="/about/doctors" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Know Your Doctor</Link>
                    <Link to="/contact" className="px-4 py-2 hover:bg-clinic-teal-50 hover:text-clinic-teal-900 transition-colors">Contact Us</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer">
              <button className="bg-clinic-gold text-clinic-charcoal px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-widest hover:bg-clinic-bronze hover:text-white transition-all uppercase shadow-[0_3px_10px_0_rgba(212,175,55,0.4)] hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5">
                Book Consultation
              </button>
            </a>
          </div>

          <button
            className="lg:hidden text-clinic-charcoal p-2 focus:outline-none transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className="w-8 h-0.5 bg-clinic-teal-900 rounded-full transition-all"></span>
              <span className="w-6 h-0.5 bg-clinic-bronze rounded-full transition-all"></span>
              <span className="w-8 h-0.5 bg-clinic-teal-900 rounded-full transition-all"></span>
            </div>
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-clinic-white-off p-6 lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
            <SattvicLogo type="icon" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-clinic-teal-900" />
            </button>
          </div>
            <div className="flex flex-col gap-6 text-[13px] uppercase tracking-[0.15em] font-semibold text-clinic-teal-900/70">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`border-b border-clinic-border pb-4 ${isActive('/') ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}>Home</Link>

              <div className="flex flex-col">
                <div 
                  className={`border-b border-clinic-border pb-3 w-full flex justify-between items-center ${isActive('/services') ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}
                >
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="uppercase flex-1 text-left">Services</Link>
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')} 
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center ${
                      mobileExpanded === 'services' 
                        ? 'bg-clinic-teal-50 text-clinic-teal-900 shadow-sm border border-clinic-teal-900/10' 
                        : 'text-clinic-teal-900/50 bg-clinic-white-off/50 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 text-[12px] mt-2 mb-2"
                    >
                      <Link to="/services" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase text-clinic-teal-900 font-medium tracking-wider">Overview</Link>
                      <Link to="/services#consultation-and-diagnostic-services" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Consultation & Diagnostic</Link>
                      <Link to="/services#panchakarma-and-detox-therapies" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Panchakarma & Detox</Link>
                      <Link to="/services#specialized-pain-management" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Specialized Pain Management</Link>
                      <Link to="/services#nourishing-restorative-therapies" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Nourishing & Restorative</Link>
                      <Link to="/services#women-and-child-healthcare" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Women & Child Healthcare</Link>
                      <Link to="/services#skin-and-aesthetic-care" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Skin & Aesthetic Care</Link>
                      <Link to="/services#immunity-and-vitality-enhancement" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Immunity & Vitality</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <div 
                  className={`border-b border-clinic-border pb-3 w-full flex justify-between items-center ${(isActive('/treatments') || location.pathname.startsWith('/conditions/')) ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}
                >
                  <Link to="/treatments" onClick={() => setMobileMenuOpen(false)} className="uppercase flex-1 text-left">Treatments</Link>
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === 'treatments' ? null : 'treatments')} 
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center ${
                      mobileExpanded === 'treatments' 
                        ? 'bg-clinic-teal-50 text-clinic-teal-900 shadow-sm border border-clinic-teal-900/10' 
                        : 'text-clinic-teal-900/50 bg-clinic-white-off/50 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === 'treatments' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExpanded === 'treatments' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 text-[12px] mt-2 mb-2"
                    >
                      <Link to="/treatments" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase text-clinic-teal-900 font-medium tracking-wider">Overview</Link>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#musculoskeletal-joint-care" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Musculoskeletal & Joint Care
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Arthritis & Joint Care</div>
                          <Link to="/conditions/osteoarthritis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Osteoarthritis (Sandhivat)</span>
                          </Link>
                          <Link to="/conditions/rheumatoid-arthritis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Rheumatoid Arthritis (Amavata)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Spine Health</div>
                          <Link to="/conditions/sciatica" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Sciatica (Gridhrasi)</span>
                          </Link>
                          <Link to="/conditions/slip-disc" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Slip Disc (Katigraha)</span>
                          </Link>
                          <Link to="/conditions/cervical-lumbar-spondylitis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Cervical & Lumbar Spondylitis (Manyastambha & Katigraha)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Chronic Pain</div>
                          <Link to="/conditions/knee-pain" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Knee Pain (Janu Shula)</span>
                          </Link>
                          <Link to="/conditions/back-pain" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Back Pain (Kati Shula)</span>
                          </Link>
                          <Link to="/conditions/neck-pain" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Neck Pain (Manya Shula)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Sports & Occupational Injuries</div>
                          <Link to="/conditions/frozen-shoulder" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Frozen Shoulder (Apabahnuka)</span>
                          </Link>
                          <Link to="/conditions/tennis-elbow" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Tennis Elbow (Kurpara Shula)</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#digestive-metabolic-health" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Digestive & Metabolic Health
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Digestive Disorders</div>
                          <Link to="/conditions/acidity" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Acidity (Amlapitta)</span>
                          </Link>
                          <Link to="/conditions/gas-indigestion" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Gas & Indigestion (Adhmana & Ajirna)</span>
                          </Link>
                          <Link to="/conditions/constipation" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Constipation (Vibandha)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Gut Health</div>
                          <Link to="/conditions/irritable-bowel-syndrome" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Irritable Bowel Syndrome (IBS)</span>
                          </Link>
                          <Link to="/conditions/diarrhea" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Diarrhea (Atisara)</span>
                          </Link>
                          <Link to="/conditions/piles-fissure" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Piles & Fissure (Arsha & Parikartika)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Liver Care</div>
                          <Link to="/conditions/fatty-liver" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Fatty Liver (Yakrit Roga)</span>
                          </Link>
                          <Link to="/conditions/jaundice" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Jaundice (Kamala)</span>
                          </Link>
                          <Link to="/conditions/liver-cirrhosis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Liver Cirrhosis (Yakritodara)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Metabolic Support</div>
                          <Link to="/conditions/diabetes-management" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Diabetes Management (Prameha)</span>
                          </Link>
                          <Link to="/conditions/thyroid-dysfunction" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Thyroid Dysfunction (Galaganda)</span>
                          </Link>
                          <Link to="/conditions/cholesterol-management" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Cholesterol Management (Medoroga)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Weight Management</div>
                          <Link to="/conditions/obesity" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Obesity (Sthaulya)</span>
                          </Link>
                          <Link to="/conditions/heart-health-support" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Heart Health Support (Hrid Roga)</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#skin-hair-aesthetic-wellness" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Skin, Hair & Aesthetic Wellness
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Chronic Skin Conditions</div>
                          <Link to="/conditions/psoriasis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Psoriasis (Eka Kushta)</span>
                          </Link>
                          <Link to="/conditions/eczema" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Eczema (Vicharchika)</span>
                          </Link>
                          <Link to="/conditions/vitiligo" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Vitiligo (Shvitra)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Daily Care</div>
                          <Link to="/conditions/acne-pigmentation" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Acne & Pigmentation (Yauvanapidika & Vyanga)</span>
                          </Link>
                          <Link to="/conditions/chronic-allergies" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Chronic Allergies (Sheetapitta)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Trichology</div>
                          <Link to="/conditions/hair-fall" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Hair Fall (Khalitya)</span>
                          </Link>
                          <Link to="/conditions/alopecia" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Alopecia (Indralupta)</span>
                          </Link>
                          <Link to="/conditions/dandruff" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Dandruff (Darunaka)</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#women-s-health-fertility" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Women’s Health & Fertility
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Hormonal Care</div>
                          <Link to="/conditions/pcod-pcos" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>PCOD / PCOS (Artava Kshaya)</span>
                          </Link>
                          <Link to="/conditions/menstrual-irregularities" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Menstrual Irregularities (Artava Dosha)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Reproductive Health</div>
                          <Link to="/conditions/fertility-support" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Fertility Support (Vandhyatva)</span>
                          </Link>
                          <Link to="/conditions/repeated-miscarriages-support" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Repeated Miscarriages Support (Garbhasrava)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Maternal Wellness</div>
                          <Link to="/conditions/postpartum-care" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Postpartum Care (Sutika Paricharya)</span>
                          </Link>
                          <Link to="/conditions/lactation-support" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Lactation Support</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">General Care</div>
                          <Link to="/conditions/white-discharge" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>White Discharge (Shveta Pradara)</span>
                          </Link>
                          <Link to="/conditions/dysmenorrhea" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Dysmenorrhea (Kashtartava)</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#mental-health-neurology" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Mental Health & Neurology
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Stress Management</div>
                          <Link to="/conditions/anxiety-insomnia" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Anxiety & Insomnia (Chittodvega & Anidra)</span>
                          </Link>
                          <Link to="/conditions/irritability" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Irritability</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Neurological Support</div>
                          <Link to="/conditions/migraine" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Migraine (Ardhavabhedaka)</span>
                          </Link>
                          <Link to="/conditions/epilepsy" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Epilepsy (Apasmara)</span>
                          </Link>
                          <Link to="/conditions/parkinson-s-disease" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Parkinson’s Disease (Kampavata)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Recovery</div>
                          <Link to="/conditions/stroke-paralysis-rehabilitation" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Stroke & Paralysis Rehabilitation (Pakshaghata)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Developmental Support</div>
                          <Link to="/conditions/memory-concentration" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Memory & Concentration</span>
                          </Link>
                          <Link to="/conditions/ayurvedic-support-for-adhd-autism" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Ayurvedic Support for ADHD/Autism</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#respiratory-immune-health" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Respiratory & Immune Health
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Allergy Management</div>
                          <Link to="/conditions/chronic-sinusitis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Chronic Sinusitis (Dushta Pratishyaya)</span>
                          </Link>
                          <Link to="/conditions/cold-flu" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Cold & Flu (Pratishyaya)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Respiratory Care</div>
                          <Link to="/conditions/asthma" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Asthma (Tamaka Shvasa)</span>
                          </Link>
                          <Link to="/conditions/bronchitis" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Bronchitis (Kasa)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Autoimmune Support</div>
                          <Link to="/conditions/specialized-protocols-for-sle-hashimoto-s-and-ibd" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Specialized protocols for SLE, Hashimoto’s, and IBD</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#men-s-health-urology" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Men’s Health & Urology
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Reproductive Wellness</div>
                          <Link to="/conditions/erectile-dysfunction" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Erectile Dysfunction (Klaibya)</span>
                          </Link>
                          <Link to="/conditions/premature-ejaculation" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Premature Ejaculation (Shukragata Vata)</span>
                          </Link>
                          <Link to="/conditions/low-sperm-count" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Low Sperm Count (Kshinashukra)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Urinary Health</div>
                          <Link to="/conditions/kidney-stones" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Kidney Stones (Ashmari)</span>
                          </Link>
                          <Link to="/conditions/uti" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>UTI (Mutrakrichra)</span>
                          </Link>
                          <Link to="/conditions/prostate-issues" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Prostate Issues (Mutraghata)</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Bladder Support</div>
                          <Link to="/conditions/urinary-incontinence" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Urinary Incontinence (Mutratisara)</span>
                          </Link>
                          <Link to="/conditions/neurogenic-bladder" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Neurogenic Bladder</span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col border-b border-clinic-border/50">
                        <Link to="/treatments#pediatric-child-healthcare" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 uppercase text-clinic-teal-900/80 font-medium hover:text-clinic-teal-900">
                          Pediatric (Child) Healthcare
                        </Link>
                        <div className="flex flex-col pl-4 pb-4 gap-3">
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Immunity</div>
                          <Link to="/conditions/recurrent-colds" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Recurrent Colds</span>
                          </Link>
                          <Link to="/conditions/seasonal-allergies" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Seasonal Allergies</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Growth</div>
                          <Link to="/conditions/poor-appetite" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Poor Appetite (Agnimandya)</span>
                          </Link>
                          <Link to="/conditions/digestive-weakness" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Digestive Weakness</span>
                          </Link>
                          <div className="text-clinic-bronze font-medium capitalize text-[11px] leading-snug mt-2">Development</div>
                          <Link to="/conditions/concentration-support" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Concentration Support</span>
                          </Link>
                          <Link to="/conditions/bed-wetting" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="pl-2 capitalize text-clinic-muted hover:text-clinic-teal-900 flex items-start pt-[2px] gap-2 text-[13px] leading-snug">
                            <span className="w-1 h-1 rounded-full bg-clinic-border flex-shrink-0 mt-[6px]"></span>
                            <span>Bed Wetting (Shayya Mutra)</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col">
                <div 
                  className={`border-b border-clinic-border pb-3 w-full flex justify-between items-center ${(isActive('/dosha-quiz') || isActive('/lifestyle-tips') || isActive('/store')) ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}
                >
                  <Link to="/dosha-quiz" onClick={() => setMobileMenuOpen(false)} className="uppercase flex-1 text-left">Wellness Hub</Link>
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === 'wellness' ? null : 'wellness')} 
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center ${
                      mobileExpanded === 'wellness' 
                        ? 'bg-clinic-teal-50 text-clinic-teal-900 shadow-sm border border-clinic-teal-900/10' 
                        : 'text-clinic-teal-900/50 bg-clinic-white-off/50 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === 'wellness' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExpanded === 'wellness' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 mt-2 mb-2"
                    >
                      <Link to="/dosha-quiz" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase text-clinic-teal-900 font-medium tracking-wider">Overview</Link>
                      <Link to="/store" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Ayurvedic Store</Link>
                      <Link to="/dosha-quiz" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Dosha Quiz</Link>
                      <Link to="/lifestyle-tips" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Lifestyle Tips</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <div 
                  className={`border-b border-clinic-border pb-3 w-full flex justify-between items-center ${(isActive('/announcements') || isActive('/videos') || isActive('/news')) ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}
                >
                  <Link to="/announcements" onClick={() => setMobileMenuOpen(false)} className="uppercase flex-1 text-left">Insights</Link>
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === 'shop' ? null : 'shop')} 
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center ${
                      mobileExpanded === 'shop' 
                        ? 'bg-clinic-teal-50 text-clinic-teal-900 shadow-sm border border-clinic-teal-900/10' 
                        : 'text-clinic-teal-900/50 bg-clinic-white-off/50 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === 'shop' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExpanded === 'shop' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 mt-2 mb-2"
                    >
                      <Link to="/announcements" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase text-clinic-teal-900 font-medium tracking-wider">Overview</Link>
                      <Link to="/announcements" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Announcements</Link>
                      <Link to="/videos" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Video Gallery</Link>
                      <Link to="/news" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">News & Updates</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col">
                <div 
                  className={`border-b border-clinic-border pb-3 w-full flex justify-between items-center ${(isActive('/about') || isActive('/about/centre') || isActive('/about/doctors') || isActive('/contact')) ? 'text-clinic-teal-900' : 'hover:text-clinic-teal-900'}`}
                >
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="uppercase flex-1 text-left">About Us</Link>
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')} 
                    className={`p-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center ${
                      mobileExpanded === 'about' 
                        ? 'bg-clinic-teal-50 text-clinic-teal-900 shadow-sm border border-clinic-teal-900/10' 
                        : 'text-clinic-teal-900/50 bg-clinic-white-off/50 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExpanded === 'about' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 mt-2 mb-2"
                    >
                      <Link to="/about" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase text-clinic-teal-900 font-medium tracking-wider">Overview</Link>
                      <Link to="/about" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Our Story</Link>
                      <Link to="/about/centre" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">The Centre</Link>
                      <Link to="/about/doctors" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Know Your Doctor</Link>
                      <Link to="/contact" onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }} className="py-4 border-b border-clinic-border/50 uppercase">Contact Us</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="mt-auto pb-8 pt-8 flex flex-col gap-3">
              <a href="https://wa.me/919404417145" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.15em] font-bold text-green-700 border border-green-700/30 bg-green-50 px-6 py-4 rounded-sm shadow-sm transition-colors hover:bg-green-100">
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a href="tel:+919404417145" className="flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.15em] font-bold text-clinic-teal-900 border border-clinic-border bg-white px-6 py-4 rounded-sm shadow-sm">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full mt-3 bg-clinic-gold text-clinic-charcoal px-6 py-4 rounded-sm text-center font-bold tracking-widest uppercase hover:bg-clinic-bronze hover:text-white transition-all shadow-[0_4px_14px_0_rgba(212,175,55,0.39)]">
                  Book Consultation
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
