import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Activity, CheckCircle2, ArrowRight, ShieldAlert, Phone, Calendar, Droplets, Brain, Wind, Baby, Stethoscope } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getConditionData } from '../../data/conditionsData';
import OptimizedImage from '../../components/OptimizedImage';

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
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-32 overflow-hidden bg-clinic-paper">
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
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-clinic-teal-900 leading-[1.1] mb-8 font-light">
                {data.hero.title.split(data.name)[0]}
                <span className="italic font-medium">{data.name}</span>
                {data.hero.title.split(data.name)[1]}
              </h1>
              
              <p className="text-lg md:text-xl text-clinic-charcoal font-light mb-10 leading-relaxed">
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
              className="relative"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
      <section className="py-24 bg-clinic-teal-900 text-white">
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
          </div>
        </div>
      </section>
    </>
  );
}
