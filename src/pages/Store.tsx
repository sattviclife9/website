import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  Droplet, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Clock, 
  Maximize2, 
  X, 
  AlertCircle,
  HelpCircle,
  Pill,
  Award,
  Flame,
  Check,
  ChevronRight,
  ArrowLeft,
  ArrowUp,
  Share2,
  Package,
  Layers,
  HeartHandshake
} from 'lucide-react';
import WellnessNav from '../components/WellnessNav';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { useScrollLock } from '../hooks/useScrollLock';
import { PRODUCTS, Product } from '../data/productsData';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Store() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialProductId = searchParams.get('product');

  // selectedProduct is the product currently open in the detail modal / view
  const [activeProduct, setActiveProduct] = useState<Product | null>(() => {
    if (initialProductId) {
      return PRODUCTS.find(p => p.id === initialProductId) || null;
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'indications' | 'usage' | 'faqs'>('benefits');
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);

  // Lock body scroll when a product modal or image lightbox is active
  useScrollLock(Boolean(activeProduct) || isImageExpanded);

  // Sync state when URL search param changes
  useEffect(() => {
    const prodId = searchParams.get('product');
    if (prodId) {
      const match = PRODUCTS.find(p => p.id === prodId);
      if (match) {
        setActiveProduct(match);
      }
    }
  }, [searchParams]);

  // Handle ESC key to close modal or expanded image
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageExpanded) {
          setIsImageExpanded(false);
        } else if (activeProduct) {
          handleCloseProduct();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProduct, isImageExpanded]);

  // Handle browser Back button for product detail modal
  useEffect(() => {
    if (activeProduct) {
      window.history.pushState({ isProductModalOpen: true }, "");

      const handlePopState = () => {
        setActiveProduct(null);
        setSearchParams({});
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state?.isProductModalOpen) {
          window.history.back();
        }
      };
    }
  }, [activeProduct]);

  // Handle browser Back button for expanded image modal
  useEffect(() => {
    if (isImageExpanded) {
      window.history.pushState({ isStoreImageExpanded: true }, "");

      const handlePopState = () => {
        setIsImageExpanded(false);
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state?.isStoreImageExpanded) {
          window.history.back();
        }
      };
    }
  }, [isImageExpanded]);

  const handleOpenProduct = (product: Product) => {
    setActiveProduct(product);
    setSearchParams({ product: product.id });
    setActiveTab('benefits');
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
    setShowScrollTop(false);
  };

  const handleCloseProduct = useCallback(() => {
    setActiveProduct(null);
    setSearchParams({});
    setIsImageExpanded(false);
  }, [setSearchParams]);

  // Track scroll position in modal
  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 220) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToModalTop = () => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Touch handlers for swipe-down to dismiss
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchEndY - touchStartY.current;
    // If swiped down by more than 60px from header, close modal
    if (diff > 60) {
      handleCloseProduct();
    }
    touchStartY.current = null;
  };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Ayurvedic Store & Apothecary', path: '/store' }
  ];

  const getWhatsappLink = (product: Product) => {
    const text = encodeURIComponent(
      `Hello! I would like to inquire about/order ${product.name} (${product.quantity}) from Sattvic Advanced Ayurveda.`
    );
    return `https://wa.me/919404417145?text=${text}`;
  };

  return (
    <>
      <SEO
        title="Ayurvedic Store & Apothecary | Classical Formulations & Medicines"
        description="Explore authentic physician-formulated Ayurvedic medicines at Sattvic Advanced Ayurveda, Pune. Classical formulations including Rakta-B (Blood Purifier) and Shatavari (Women's Health & Rejuvenation)."
        keywords="Ayurvedic store Pune, Shatavari powder Pune, Rakta-B tablets, Ayurvedic blood purifier, women wellness Ayurveda, PCOS Ayurvedic medicine, authentic Ayurvedic apothecary Pune"
      />

      <WellnessNav />

      <div className="bg-[#FAF8F5] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 pb-20 md:pb-32">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-10 md:mb-14"
          >
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
              <span className="text-clinic-bronze font-serif italic text-sm md:text-base">
                Classical Apothecary & Physician Formulations
              </span>
              <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-clinic-teal-900 leading-[1.1] mb-4 font-light">
              Ayurvedic <span className="italic font-medium text-clinic-teal-900/80">Store</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-clinic-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
              Authentic physician-formulated herbal medicines, single-herb classical extracts, and therapeutic preparations adhering to classical Ayurvedic pharmacopoeia.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* PRODUCT CATALOG GRID (All screen sizes)                                   */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleOpenProduct(prod)}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-lg hover:border-clinic-teal-900/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-clinic-bronze bg-clinic-bronze/10 px-3 py-1 rounded-full">
                    {prod.category.split('(')[0].trim()}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Physician Formulated
                  </span>
                </div>

                {/* Main Product Showcase Box */}
                <div className="flex items-center gap-5 sm:gap-6 mb-5">
                  <div className="w-28 sm:w-32 h-36 sm:h-40 shrink-0 bg-stone-50 rounded-2xl border border-stone-200/80 p-2.5 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-contain"
                    />
                    <span className="absolute bottom-1.5 right-1.5 bg-clinic-teal-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase">
                      {prod.quantity}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-serif text-clinic-teal-900 font-medium group-hover:text-clinic-bronze transition-colors">
                        {prod.name}
                      </h3>
                      {prod.hindiName && (
                        <span className="text-base font-serif text-clinic-bronze font-normal">
                          ({prod.hindiName})
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                      {prod.tagline}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-clinic-bronze" />
                      <span>{prod.dosage}</span>
                    </div>
                  </div>
                </div>

                {/* Key Indications Pills */}
                <div className="mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                    Primary Clinical Indications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.indications.slice(0, 3).map((ind, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center text-[11px] font-medium text-stone-700 bg-stone-50 border border-stone-200/80 px-2.5 py-0.5 rounded-md"
                      >
                        <Check className="w-3 h-3 text-emerald-600 mr-1 shrink-0" />
                        {ind}
                      </span>
                    ))}
                    {prod.indications.length > 3 && (
                      <span className="text-[11px] font-medium text-stone-400 self-center pl-1">
                        +{prod.indications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions & Button Bar */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProduct(prod);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-clinic-teal-900 hover:bg-clinic-teal-800 text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>View Full Details & Ingredients</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsappLink(prod)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="shrink-0 p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title={`Inquire about ${prod.name} on WhatsApp`}
                    aria-label={`Inquire about ${prod.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Apothecary Quality Banner */}
          <div className="bg-linear-to-r from-clinic-teal-900 to-[#10302E] text-white rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden max-w-5xl mx-auto shadow-sm">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
              <Leaf className="w-80 h-80" />
            </div>

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-clinic-gold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Sattvic Quality Guarantee
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-3 text-white">
                The Sattvic Apothecary Standard
              </h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                Every formulation dispensed at Sattvic Advanced Ayurveda is prepared using authentically sourced botanical raw materials, classical decoction methods, and rigorous hygiene protocols.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919404417145?text=Hello!%20I%20would%20like%20to%20inquire%20about%20medicines%20from%20the%20Sattvic%20Apothecary."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
                <Link
                  to="/about-sattvic-ayurveda/contactus"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL PRODUCT DETAIL MODAL (Universal for Desktop, Tablet & Mobile)        */}
      {/* Portaled directly to document.body with top-level z-index (z-[9999])       */}
      {/* ========================================================================= */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-xs flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden"
              onClick={handleCloseProduct}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full h-[100dvh] sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
              >
                {/* TOP HEADER BAR: High-Contrast Close & Back Controls */}
                <div 
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-xs select-none"
                >
                  {/* Left: Back Button */}
                  <button
                    onClick={handleCloseProduct}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white hover:bg-clinic-teal-900 hover:text-white border border-stone-300 px-3.5 py-2 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                    title="Back to All Medicines (Esc)"
                    aria-label="Back to All Medicines"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Back to Medicines</span>
                    <span className="sm:hidden">Back</span>
                  </button>

                  {/* Center Title */}
                  <div className="text-center truncate px-2 max-w-[45%] sm:max-w-[55%]">
                    <h3 className="text-xs sm:text-sm font-bold text-clinic-teal-900 font-serif truncate">
                      {activeProduct.name} {activeProduct.hindiName && `(${activeProduct.hindiName})`}
                    </h3>
                    <span className="text-[10px] text-clinic-bronze uppercase tracking-wider truncate block">
                      {activeProduct.category.split('(')[0].trim()}
                    </span>
                  </div>

                  {/* Right: Big Prominent Close Button */}
                  <button
                    onClick={handleCloseProduct}
                    className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                    title="Close details (Esc)"
                    aria-label="Close details"
                  >
                    <span>Close</span>
                    <X className="w-4 h-4" />
                  </button>
                </div>

              {/* Scrollable Modal Content */}
              <div 
                ref={modalScrollRef}
                onScroll={handleModalScroll}
                className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-8 space-y-6 pb-28 sm:pb-8"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {/* Product Showcase Section: Image + Title + Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                  
                  {/* Left: Product Image */}
                  <div className="md:col-span-5 flex flex-col items-center">
                    <div className="relative w-full max-w-[280px] md:max-w-none aspect-4/5 rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 flex items-center justify-center p-4 group">
                      <img 
                        src={activeProduct.image} 
                        alt={`${activeProduct.name} - ${activeProduct.tagline}`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Expand Image Button */}
                      <button
                        onClick={() => setIsImageExpanded(true)}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-clinic-teal-900 p-2.5 rounded-full shadow-md hover:bg-clinic-teal-900 hover:text-white transition-all transform active:scale-95 cursor-pointer"
                        title="View High Resolution Image"
                        aria-label="View High Resolution Image"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Quantity Badge */}
                      <div className="absolute top-3 left-3 bg-clinic-teal-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase">
                        {activeProduct.quantity}
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-400 mt-2 italic flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Tap image to zoom label
                    </p>

                    {/* Quality badges */}
                    <div className="grid grid-cols-2 gap-2 w-full mt-3">
                      <div className="bg-[#FAF8F5] p-2 rounded-xl border border-stone-200/60 flex items-center justify-center gap-1.5 text-[11px] text-stone-700 font-medium">
                        <Leaf className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        100% Herbal
                      </div>
                      <div className="bg-[#FAF8F5] p-2 rounded-xl border border-stone-200/60 flex items-center justify-center gap-1.5 text-[11px] text-stone-700 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-clinic-teal-900 shrink-0" />
                        Classical Method
                      </div>
                    </div>
                  </div>

                  {/* Right: Title, Indications & Quick CTAs */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-clinic-bronze bg-clinic-bronze/10 px-2.5 py-0.5 rounded-full">
                          {activeProduct.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                          Classical Formulation
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2.5 mb-1.5">
                        <h2 className="text-2xl sm:text-3xl font-serif text-clinic-teal-900 font-medium">
                          {activeProduct.name}
                        </h2>
                        {activeProduct.hindiName && (
                          <span className="text-lg sm:text-xl font-serif text-clinic-bronze font-normal">
                            ({activeProduct.hindiName})
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 font-medium mb-4 leading-relaxed">
                        {activeProduct.tagline}
                      </p>

                      <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 mb-4 text-xs text-emerald-950 leading-relaxed">
                        <strong className="font-semibold block mb-0.5">Primary Clinical Action:</strong>
                        {activeProduct.shortDescription}
                      </div>

                      {/* Indications Tags */}
                      <div className="mb-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                          Target Health Conditions:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProduct.indications.map((ind, i) => (
                            <span 
                              key={i} 
                              className="inline-flex items-center text-[11px] font-medium text-stone-700 bg-stone-100/90 border border-stone-200/80 px-2.5 py-1 rounded-lg"
                            >
                              <Check className="w-3 h-3 text-emerald-600 mr-1 shrink-0" />
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quick Dosage Info */}
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs flex items-center justify-between mb-4">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-stone-400 block">Dosage</span>
                          <span className="font-medium text-stone-800">{activeProduct.dosage}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-bold uppercase text-stone-400 block">Packaging</span>
                          <span className="font-bold text-clinic-teal-900">{activeProduct.quantity}</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact CTAs */}
                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-3">
                      <a
                        href={getWhatsappLink(activeProduct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-5 py-2.5 rounded-full font-medium text-xs transition-all shadow-xs active:scale-98"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Inquire / Order on WhatsApp
                      </a>

                      <a
                        href="tel:+919404417145"
                        className="inline-flex items-center gap-1.5 border border-stone-300 text-stone-700 hover:text-clinic-teal-900 hover:border-clinic-teal-900 px-4 py-2.5 rounded-full font-medium text-xs transition-all"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        +91 9404417145
                      </a>
                    </div>
                  </div>

                </div>

                {/* Tabs Navigation */}
                <div className="border-t border-stone-200 pt-6">
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
                    {[
                      { id: 'benefits', label: 'Key Health Benefits', icon: Sparkles },
                      { id: 'ingredients', label: 'Herbal Ingredients', icon: Leaf },
                      { id: 'indications', label: 'Indications & Pathology', icon: Flame },
                      { id: 'usage', label: 'Dosage & Anupana', icon: Clock },
                      { id: 'faqs', label: 'Safety & FAQs', icon: HelpCircle },
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            isActive
                              ? 'bg-clinic-teal-900 text-white shadow-xs'
                              : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Body Content */}
                  <div className="mt-4 bg-[#FAF8F5]/80 p-5 rounded-2xl border border-stone-200/80">
                    {activeTab === 'benefits' && (
                      <div className="space-y-4">
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {activeProduct.fullDescription}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {activeProduct.keyBenefits.map((b, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                              <h4 className="text-xs font-bold text-clinic-teal-900 mb-1 flex items-center gap-1.5">
                                <span className="w-4 h-4 rounded-full bg-clinic-teal-50 text-clinic-teal-900 flex items-center justify-center text-[10px]">
                                  {i + 1}
                                </span>
                                {b.title}
                              </h4>
                              <p className="text-xs text-stone-600 leading-relaxed">{b.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'ingredients' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {activeProduct.keyIngredients.map((ing, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 flex items-start gap-3">
                              <Leaf className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                              <div>
                                <h4 className="text-xs font-bold text-clinic-teal-900">
                                  {ing.name} {ing.botanicalName && <span className="text-[11px] font-normal italic text-stone-400">({ing.botanicalName})</span>}
                                </h4>
                                <p className="text-xs text-stone-600 mt-1 leading-relaxed">{ing.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        {activeProduct.classicalReference && (
                          <div className="bg-white p-3.5 rounded-xl border border-stone-200 text-xs text-stone-600">
                            <strong className="font-semibold text-stone-800">Classical Reference:</strong> {activeProduct.classicalReference}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'indications' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {activeProduct.indications.map((ind, i) => (
                            <div key={i} className="bg-white p-3.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-800 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-clinic-bronze shrink-0" />
                              <span>{ind}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'usage' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-white p-4 rounded-xl border border-stone-200">
                            <span className="text-[10px] font-bold uppercase text-stone-400 block mb-1">Recommended Dosage</span>
                            <p className="text-xs text-stone-800 font-medium">{activeProduct.dosage}</p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-stone-200">
                            <span className="text-[10px] font-bold uppercase text-stone-400 block mb-1">Anupana (Vehicle)</span>
                            <p className="text-xs text-stone-800 font-medium">{activeProduct.howToUse}</p>
                          </div>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-stone-200 text-xs text-stone-600">
                          <strong className="font-semibold text-stone-800">Storage:</strong> {activeProduct.storage}
                        </div>
                      </div>
                    )}

                    {activeTab === 'faqs' && (
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-xl border border-stone-200">
                          <h4 className="text-xs font-bold text-clinic-teal-900 mb-1">
                            How quickly does {activeProduct.name} start showing clinical results?
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {activeProduct.id === 'shatavari'
                              ? 'Initial digestive cooling and vitality relief begin within 7-10 days. Hormonal regularity and deep rejuvenation develop over 6-12 weeks.'
                              : 'Patients typically notice reduction in itching and erythema within 10 to 14 days, with significant plaque clearance over 8 to 12 weeks.'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200">
                          <h4 className="text-xs font-bold text-clinic-teal-900 mb-1">
                            Can I get this dispatched to my home address?
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            Yes. We dispense directly from our Pune clinic and provide delivery across India via courier after clinical verification.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Close / Return Button */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={handleCloseProduct}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Medicines</span>
                  </button>

                  <button
                    onClick={handleCloseProduct}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 underline underline-offset-4 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    Close window
                  </button>
                </div>

              </div>

              {/* Floating Scroll to Top button */}
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToModalTop}
                    className="absolute bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-clinic-teal-900 text-white shadow-lg p-2.5 rounded-full flex items-center gap-1 text-xs font-medium cursor-pointer hover:bg-clinic-teal-800"
                    title="Scroll to Top"
                    aria-label="Scroll to top"
                  >
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-[11px] pr-1">Top</span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Mobile Fixed Bottom Action Bar */}
              <div className="sm:hidden absolute bottom-0 inset-x-0 bg-white/98 backdrop-blur-md border-t border-stone-200 p-3.5 flex items-center gap-2.5 z-30 shadow-lg">
                <a
                  href={getWhatsappLink(activeProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white py-3 rounded-full font-medium text-xs shadow-md active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>

                <button
                  onClick={handleCloseProduct}
                  className="px-4 py-3 rounded-full bg-stone-800 text-white font-medium text-xs hover:bg-stone-900 active:scale-95"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}

      {/* High-Resolution Image Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isImageExpanded && activeProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageExpanded(false)}
              className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col items-center"
              >
                <button
                  onClick={() => setIsImageExpanded(false)}
                  className="absolute top-4 right-4 z-10 bg-stone-800 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-full flex-1 overflow-auto flex items-center justify-center">
                  <img 
                    src={activeProduct.image} 
                    alt={`${activeProduct.name} packaging`}
                    className="max-h-[75vh] w-auto object-contain rounded-xl"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-serif text-clinic-teal-900 font-medium">
                    {activeProduct.name} ({activeProduct.quantity})
                  </h4>
                  <p className="text-xs text-stone-500">
                    {activeProduct.tagline}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
