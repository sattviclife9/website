import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Activity, 
  Leaf, 
  Flame, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Award, 
  X, 
  Maximize2,
  Calendar,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutNav from '../components/AboutNav';
import Breadcrumbs from '../components/Breadcrumbs';
import OptimizedImage from '../components/OptimizedImage';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.403 5.638A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.2 4.488L3 21l4.645-1.218a8.904 8.904 0 0 0 4.405 1.15h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.628-6.317zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.74.754-2.752-.177-.282a7.441 7.441 0 0 1-1.141-3.971c.002-4.114 3.351-7.462 7.468-7.462a7.429 7.429 0 0 1 5.279 2.188 7.42 7.42 0 0 1 2.183 5.28c-.002 4.114-3.35 7.462-7.467 7.462z"
      fill="currentColor"
    />
    <path
      d="M15.246 13.916c-.225-.113-1.332-.657-1.538-.732-.206-.075-.356-.113-.506.113-.15.225-.581.732-.712.882-.131.15-.262.169-.487.056-.225-.113-.951-.351-1.812-1.119-.67-.597-1.123-1.334-1.254-1.56-.131-.225-.014-.347.098-.459.101-.101.225-.262.338-.394.112-.131.15-.225.225-.375.075-.15.037-.281-.019-.394-.056-.113-.506-1.219-.694-1.669-.183-.438-.369-.379-.506-.386-.131-.007-.281-.009-.431-.009s-.394.056-.6.281c-.206.225-.787.769-.787 1.875s.806 2.175.918 2.325c.112.15 1.587 2.423 3.844 3.398.537.232.956.371 1.282.475.54.172 1.031.148 1.419.09.432-.065 1.332-.544 1.52-1.069.188-.525.188-.975.131-1.069-.056-.094-.206-.15-.431-.263z"
      fill="currentColor"
    />
  </svg>
);

const SANCTUARY_PHOTOS = [
  {
    id: 1,
    category: 'Welcome & Ambience',
    url: "https://lh3.googleusercontent.com/d/1_6jBkEY4w7AKeAnG44TcTwZqKW44eqcj",
    title: "Gateway to Healing",
    description: "Serene entry foyer designed to disconnect you from urban noise and welcome deep restoration."
  },
  {
    id: 2,
    category: 'Welcome & Ambience',
    url: "https://lh3.googleusercontent.com/d/1sQfdHjEYqEfirr7WhTRCfHVa156ce_Wh",
    title: "Welcoming Reception Area",
    description: "Quiet, calm front desk ensuring smooth patient registrations and personalized guidance."
  },
  {
    id: 3,
    category: 'Consultation & Lounges',
    url: "https://lh3.googleusercontent.com/d/10nUKii06kxcKqVy75GQUUmh0Kx8Ldyuq",
    title: "Serene Relaxation Lounge",
    description: "Comfortable pre-treatment waiting area infused with herbal aromas and tranquil lighting."
  },
  {
    id: 4,
    category: 'Consultation & Lounges',
    url: "https://lh3.googleusercontent.com/d/13ugpW0wBmJWAtrPqvFZqpxhfRZb_kmwM",
    title: "Patient Comfort Lounge",
    description: "Dedicated seating space promoting relaxed transitions between therapeutic Panchakarma sessions."
  },
  {
    id: 5,
    category: 'Consultation & Lounges',
    url: "https://lh3.googleusercontent.com/d/1hx5gdwnMD8Ycue17yVNv1xJPKN4bTvsz",
    title: "Consultation Sanctuary",
    description: "Private doctor consultation chamber for confidential Nadi Pariksha (Pulse) and Prakriti evaluation."
  },
  {
    id: 6,
    category: 'Panchakarma Suites',
    url: "https://lh3.googleusercontent.com/d/1VSyacovnUzczMTsS3I1RCAAZVhXoE33V",
    title: "Panchakarma Care Room",
    description: "Classical treatment room equipped with handcrafted wooden Droni tables for Abhyanga & Shirodhara."
  },
  {
    id: 7,
    category: 'Panchakarma Suites',
    url: "https://lh3.googleusercontent.com/d/1nRbmx_gTdnG89r_wQYoTlqA6CRf8OPXO",
    title: "Therapeutic Healing Space",
    description: "Specialized chamber for Viddhakarma, Agnikarma, and customized detox procedures."
  },
  {
    id: 8,
    category: 'Panchakarma Suites',
    url: "https://lh3.googleusercontent.com/d/1NGAuss9v2xj4Oim5tiklmndcHo2LR_yM",
    title: "Holistic Therapies Room",
    description: "Steam (Swedana) and body therapy unit maintaining strict hospital-grade cleanliness and warmth."
  },
  {
    id: 9,
    category: 'Apothecary & Medicine',
    url: "https://lh3.googleusercontent.com/d/18NvLbtOZ7PuAX9ONAOm_meqi7TAcVGE_",
    title: "Authentic Herbal Apothecary",
    description: "On-site classical pharmacy housing single-herb extracts, classical oils, and patient-exclusive medicines."
  },
  {
    id: 10,
    category: 'Apothecary & Medicine',
    url: "https://lh3.googleusercontent.com/d/1vq_oynK_ixoE9O2qcVkMfsi7cOrfL2pK",
    title: "Recognized Expertise & Standards",
    description: "Certified clinical excellence adhering to classical Samhitas and highest patient safety standards."
  }
];

const PHILOSOPHY_PILLARS = [
  {
    icon: Leaf,
    title: "Prakriti & Root Cause",
    tagline: "Treating the Individual, Not the Symptom",
    desc: "We diagnose your unique constitutional blueprint (Vata, Pitta, Kapha) and identify deep-seated metabolic toxins (Ama) rather than offering temporary suppressions."
  },
  {
    icon: Activity,
    title: "Pulse + Digital Precision",
    tagline: "Classical Nadi Pariksha & Ayurgrid",
    desc: "Combining centuries-old radial artery pulse examination with digital outcome monitoring to quantify clinical recovery and symptom resolution objectively."
  },
  {
    icon: Flame,
    title: "Authentic Panchakarma",
    tagline: "Structured Medical Detoxification",
    desc: "Therapeutic purging, Shirodhara, and Basti executed in medical alignment with classical Charaka Samhita guidelines on handcrafted medicinal wooden Dronis."
  },
  {
    icon: ShieldCheck,
    title: "Classical In-House Apothecary",
    tagline: "Pure, Unadulterated Botanicals",
    desc: "We formulate potent classical extracts (such as Rakta-B & Shatavari) dispensed exclusively for registered patients under customized doctor supervision."
  }
];

const SPECIALTY_CHIPS = [
  { title: "Digestive & Metabolic Disorders", sub: "Amlapitta, IBS, Constipation, Fatty Liver" },
  { title: "Chronic Skin Diseases & Allergies", sub: "Psoriasis, Eczema, Dermatitis, Acne" },
  { title: "Spine, Joints & Musculoskeletal", sub: "Sciatica, Spondylitis, Osteoarthritis, Slip Disc" },
  { title: "Women's Wellness & Hormones", sub: "PCOS/PCOD, Infertility, Menopause, White Discharge" },
  { title: "Trichology & Hair Health", sub: "Khalitya (Hair Fall), Alopecia, Dandruff" },
  { title: "Stress, Sleep & Neurological", sub: "Anxiety, Insomnia, Migraine, Memory Vitality" }
];

export default function AboutUs() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof SANCTUARY_PHOTOS[0] | null>(null);

  const categories = ['All', 'Welcome & Ambience', 'Consultation & Lounges', 'Panchakarma Suites', 'Apothecary & Medicine'];

  const filteredPhotos = activeFilter === 'All' 
    ? SANCTUARY_PHOTOS 
    : SANCTUARY_PHOTOS.filter(p => p.category === activeFilter);

  return (
    <>
      <AboutNav />
      <SEO 
        title="Our Story & The Centre | Sattvic Advanced Ayurveda Pune"
        description="Discover the heritage, philosophy, and authentic healing sanctuary of Sattvic Advanced Ayurveda & Panchakarma Clinic in Pune. Root-cause classical healing and modern clinical precision."
        keywords="about Sattvic Ayurveda Pune, authentic Ayurvedic clinic Pune, Panchakarma centre Salunke Vihar, Nadi Pariksha doctor Pune, Ayurvedic hospital NIBM Kondhwa, Dr Khan Aqsa Zarin story"
      />

      {/* Hero Section */}
      <section className="bg-clinic-teal-50 pt-4 md:pt-8 pb-16 md:pb-24 border-b border-clinic-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-6 invisible md:visible">
            <Breadcrumbs items={[{ label: 'About Us', path: '/about-sattvic-ayurveda' }, { label: 'Our Story & Centre' }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-clinic-teal-900/10 border border-clinic-teal-900/20 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-clinic-bronze" />
              <span className="text-clinic-teal-900 font-semibold text-xs uppercase tracking-wider">
                Classical Heritage • Healing Sanctum
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-clinic-teal-900 leading-[1.05] font-light mb-6">
              Our Story & <span className="italic font-medium text-clinic-teal-900/85">The Centre</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-clinic-teal-900/90 font-serif leading-relaxed font-light max-w-3xl mx-auto mb-8">
              Rooted in classical Ayurvedic Samhitas, practiced with rigorous diagnostic precision, and hosted in a serene medical sanctuary designed for restorative healing.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              {[
                { label: "Founded on", val: "Classical Samhitas" },
                { label: "Panchakarma", val: "Medical-Grade" },
                { label: "Diagnostics", val: "Nadi + Ayurgrid" },
                { label: "Facility", val: "Sterile & Serene" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-xs border border-clinic-border/80 rounded-2xl p-3 shadow-2xs">
                  <span className="block text-[10px] uppercase tracking-wider text-clinic-muted font-medium">{stat.label}</span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-clinic-teal-900">{stat.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 1: The Genesis & Philosophy (Concise, Engaging, Non-Repetitive) */}
      <section className="py-16 md:py-24 bg-white border-b border-clinic-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-clinic-bronze text-xs uppercase tracking-widest font-bold mb-3">
                <span className="w-6 h-[1px] bg-clinic-bronze"></span>
                <span>The Sattvic Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-clinic-teal-900 leading-tight font-light mb-6">
                Why We Built <br />
                <span className="italic font-medium">Sattvic Advanced Ayurveda</span>
              </h2>
              <div className="text-clinic-charcoal/85 text-base sm:text-lg font-light leading-relaxed space-y-4">
                <p>
                  Modern lifestyle disorders—from stubborn skin conditions and acidity to chronic joint inflammation and metabolic burnout—are frequently treated with quick, symptomatic band-aids that leave the underlying root causes untouched.
                </p>
                <p>
                  At <strong>Sattvic</strong>, we established our clinic in Pune to return to the authentic, uncompromising core of Ayurveda: <em>identifying the Dosha imbalance, eliminating deep cellular endotoxins (Ama), and resetting your metabolic fire (Agni).</em>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-clinic-teal-50/80 p-6 sm:p-8 rounded-3xl border border-clinic-teal-900/10 shadow-xs relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-clinic-gold/20 text-clinic-teal-900">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-clinic-teal-900 font-medium text-lg">The Meaning of "Sattvic"</h4>
                    <p className="text-xs text-clinic-charcoal/70">Purity • Truth • Biological Balance</p>
                  </div>
                </div>
                <p className="text-clinic-charcoal text-sm sm:text-base font-light leading-relaxed italic">
                  "In Ayurveda, Sattva represents the state of pure biological equilibrium and mental clarity. Our medical care is designed to cultivate this purity through customized diets, classical single-herb extracts, and restorative Panchakarma therapies."
                </p>
              </div>
            </div>
          </div>

          {/* 4 Interactive Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-clinic-ivory/60 hover:bg-clinic-ivory p-6 rounded-3xl border border-clinic-border/80 hover:border-clinic-gold/50 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-clinic-teal-900 text-white flex items-center justify-center mb-5 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-clinic-bronze block mb-1">
                      {pillar.tagline}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-clinic-teal-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-clinic-charcoal/80 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Chapter 2: The Healing Centre & Physical Sanctuary */}
      <section id="centre-sanctuary" className="py-16 md:py-24 bg-clinic-teal-50/60 border-b border-clinic-border scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-clinic-border px-3.5 py-1.5 rounded-full shadow-2xs mb-3">
              <Building2 className="w-4 h-4 text-clinic-bronze" />
              <span className="text-clinic-teal-900 font-semibold text-xs uppercase tracking-wider">
                Physical Facility Tour
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-clinic-teal-900 font-light leading-tight mb-4">
              Step Inside the <span className="italic font-medium">Healing Sanctum</span>
            </h2>
            
            <p className="text-clinic-charcoal/80 font-light text-base sm:text-lg leading-relaxed">
              Every square foot of our Pune centre is engineered to provide acoustic quietude, immaculate medical hygiene, authentic teakwood Panchakarma tables (Dronis), and a dedicated classical apothecary.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-clinic-teal-900 text-white shadow-sm'
                    : 'bg-white text-clinic-charcoal/70 border border-stone-200 hover:bg-clinic-teal-50 hover:text-clinic-teal-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid with Lightbox Triggers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:border-clinic-teal-900/30 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <OptimizedImage
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View High-Res
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-clinic-bronze block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-clinic-teal-900 mb-1.5">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Chapter 3: Specialized Clinical Verticals */}
      <section className="py-16 md:py-24 bg-white border-b border-clinic-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif text-clinic-teal-900 font-light mb-4">
              Focused Clinical Expertise
            </h2>
            <p className="text-clinic-charcoal/80 font-light text-base leading-relaxed">
              Patients visit Sattvic Advanced Ayurveda from across Maharashtra for targeted protocols in challenging and chronic health complaints:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {SPECIALTY_CHIPS.map((spec, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-clinic-ivory/50 border border-clinic-border flex items-start gap-3.5 hover:bg-clinic-ivory transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-clinic-bronze shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-semibold text-clinic-teal-900 text-sm mb-1">{spec.title}</h4>
                  <p className="text-xs text-clinic-charcoal/70 font-light">{spec.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Doctor Link Card */}
          <div className="bg-clinic-teal-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-clinic-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-8">
                <span className="text-clinic-gold text-xs uppercase tracking-widest font-bold block mb-2">
                  Clinical Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light mb-3">
                  Consult With Dr. Khan Aqsa Zarin & The Vaidya Team
                </h3>
                <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
                  BAMS, Post-Graduate Fellow in Panchakarma, Viddhakarma & Agnikarma with years of proven clinical outcomes in difficult chronic cases.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
                <Link
                  to="/about-sattvic-ayurveda/doctors/dr-khan-aqsa-zarin"
                  className="inline-flex items-center justify-center gap-2 bg-clinic-gold hover:bg-clinic-bronze text-clinic-teal-900 hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Know Your Doctor</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/treatments"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Explore Treatments</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Banner CTA */}
      <section className="py-16 md:py-24 bg-clinic-charcoal text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-clinic-ivory mb-6 font-light">
            Begin Your Healing Journey at Sattvic
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed mb-8">
            Experience authentic Panchakarma detoxification, Nadi Pariksha diagnosis, and personalized root-cause therapy in Pune.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic-gold text-clinic-teal-900 hover:bg-clinic-bronze hover:text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </a>

            <a
              href="https://wa.me/919404417145?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20at%20Sattvic%20Advanced%20Ayurveda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Facility Photos */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-60 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-stone-800 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full flex-1 overflow-auto flex items-center justify-center">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.title}
                  className="max-h-[72vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinic-bronze block mb-0.5">
                  {selectedPhoto.category}
                </span>
                <h4 className="text-lg font-serif text-clinic-teal-900 font-medium">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-stone-600 max-w-xl mx-auto mt-1">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
