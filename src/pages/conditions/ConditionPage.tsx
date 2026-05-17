import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Activity, CheckCircle2, ArrowRight, ShieldAlert, Phone, Calendar, Droplets, Brain, Wind, Baby, Stethoscope } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getConditionData } from '../../data/conditionsData';
import OptimizedImage from '../../components/OptimizedImage';

import DemographicsChart from '../../components/DemographicsChart';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function ConditionPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/treatments" replace />;
  }

  const data = getConditionData(slug);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-8 h-8" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8" />;
      case 'Droplets': return <Droplets className="w-8 h-8" />;
      case 'Brain': return <Brain className="w-8 h-8" />;
      case 'Wind': return <Wind className="w-8 h-8" />;
      case 'Baby': return <Baby className="w-8 h-8" />;
      case 'Stethoscope': return <Stethoscope className="w-8 h-8" />;
      default: return <Activity className="w-8 h-8" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={`${data.seo.keywords}, Ayurvedic treatment for ${data.name}, Panchakarma for ${data.name}, natural remedies, holistic healing, Sattvic Ayurveda Pune, Nadi Parikshan, pain management`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={data.hero.image} />
        <meta property="og:url" content={`https://sattvicadvancedayurveda.com/conditions/${slug}`} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={`https://sattvicadvancedayurveda.com/conditions/${slug}`} />

        {/* Structured JSON-LD Data for MedicalCondition */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": data.name,
            "alternateName": data.ayurvedicName || "",
            "description": data.seo.description,
            "image": data.hero.image,
            "possibleTreatment": {
              "@type": "Ayurvedic",
              "name": data.treatments.title
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-16 lg:pb-20 overflow-hidden bg-clinic-paper">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-clinic-bronze via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="h-[1px] w-8 bg-clinic-bronze"></span>
                <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">{data.category}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-clinic-teal-900 leading-[1.1] mb-6 lg:mb-8 font-light">
                {data.hero.title.includes(data.name) ? (
                  <>
                    {data.hero.title.split(data.name)[0]}
                    <span className="italic font-medium">{data.name}</span>
                    {data.hero.title.split(data.name)[1]}
                  </>
                ) : (
                  data.hero.title
                )}
              </h1>

              {/* Mobile Image */}
              <div className="block lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative mb-6">
                <div className="absolute inset-0 bg-clinic-teal-900/20 mix-blend-multiply z-10"></div>
                <OptimizedImage 
                  src={data.hero.image} 
                  alt={data.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-lg md:text-xl text-clinic-charcoal font-light mb-8 lg:mb-10 leading-relaxed">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center bg-clinic-teal-900 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-clinic-teal-800 hover:shadow-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+1234567890" className="inline-flex items-center justify-center border-2 border-clinic-teal-900 text-clinic-teal-900 px-8 py-4 rounded-full font-medium transition-all hover:bg-clinic-teal-50">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-clinic-teal-900/20 mix-blend-multiply z-10"></div>
                <OptimizedImage 
                  src={data.hero.image} 
                  alt={data.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-clinic-sand z-20 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-clinic-teal-50 flex items-center justify-center text-clinic-teal-900">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-clinic-teal-900">100%</div>
                    <div className="text-sm text-clinic-muted">Natural Healing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Condition Section */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-8 md:mb-10">
            <DemographicsChart conditionName={data.name} category={data.category} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-6">{data.about.title}</h2>
              {data.about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-clinic-muted mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            
            <div className="bg-clinic-sand/30 p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-clinic-teal-900 mb-6">{data.about.symptomsTitle}</h3>
              <ul className="space-y-4">
                {data.about.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-clinic-bronze flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-clinic-charcoal/80">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Treatments Section */}
      <section className="py-16 md:py-20 bg-clinic-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">{data.treatments.title}</h2>
            <p className="text-clinic-sand/80 text-lg">
              {data.treatments.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.treatments.items.map((treatment, idx) => (
              <div key={idx} className="bg-clinic-teal-800/50 border border-clinic-teal-700 p-8 rounded-2xl hover:bg-clinic-teal-800 transition-colors">
                <div className="w-14 h-14 rounded-full bg-clinic-bronze/20 text-clinic-bronze flex items-center justify-center mb-6">
                  {renderIcon(treatment.icon)}
                </div>
                <h3 className="text-2xl font-serif mb-4">{treatment.title}</h3>
                <p className="text-clinic-sand/70 leading-relaxed">
                  {treatment.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clinic-paper">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-clinic-teal-900 mb-8 leading-tight">
            Take the First Step Towards a Pain-Free Life
          </h2>
          <p className="text-xl text-clinic-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let {data.name} control your daily activities. Consult our Ayurvedic experts today to get a personalized treatment plan for lasting relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-clinic-bronze text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#A66E3A] hover:shadow-lg text-lg">
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Appointment
            </Link>
            <a href={`https://wa.me/919404417145?text=${encodeURIComponent(`Hello! I would like to know more about the Ayurvedic treatment for ${data.name} at Sattvic Advanced Ayurveda.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#20BE5C] hover:shadow-lg text-lg">
              <WhatsAppIcon className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
