import React from "react";
import { motion } from "motion/react";
import {
  Stethoscope,
  Baby,
  Sparkles,
  ShieldAlert,
  Activity,
  Droplets,
  Brain,
  Wind,
  ArrowRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import TreatmentNav from "../components/TreatmentNav";

interface SubItem {
  name: string;
  path?: string;
}

interface TreatmentItem {
  name: string;
  path?: string;
  subItems?: SubItem[];
}

interface TreatmentCategory {
  title: string;
  icon: React.ReactNode;
  items: TreatmentItem[];
}

export default function Treatments() {
  const categories: TreatmentCategory[] = [
    {
      title: "Musculoskeletal & Joint Care",
      icon: <Activity className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Arthritis & Joint Care",
          subItems: [
            {
              name: "Osteoarthritis (Sandhivat)",
              path: "/conditions/osteoarthritis",
            },
            {
              name: "Rheumatoid Arthritis (Amavata)",
              path: "/conditions/rheumatoid-arthritis",
            },
          ],
        },
        {
          name: "Spine Health",
          subItems: [
            { name: "Sciatica (Gridhrasi)", path: "/conditions/sciatica" },
            { name: "Slip Disc (Katigraha)", path: "/conditions/slip-disc" },
            {
              name: "Cervical & Lumbar Spondylitis (Manyastambha & Katigraha)",
              path: "/conditions/cervical-lumbar-spondylitis",
            },
          ],
        },
        {
          name: "Chronic Pain",
          subItems: [
            { name: "Knee Pain (Janu Shula)", path: "/conditions/knee-pain" },
            { name: "Back Pain (Kati Shula)", path: "/conditions/back-pain" },
            { name: "Neck Pain (Manya Shula)", path: "/conditions/neck-pain" },
          ],
        },
        {
          name: "Sports & Occupational Injuries",
          subItems: [
            { name: "Frozen Shoulder (Apabahnuka)", path: "/conditions/frozen-shoulder" },
            { name: "Tennis Elbow (Kurpara Shula)", path: "/conditions/tennis-elbow" },
          ],
        },
      ],
    },
    {
      title: "Digestive & Metabolic Health",
      icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Digestive Disorders",
          subItems: [
            { name: "Acidity (Amlapitta)", path: "/conditions/acidity" },
            { name: "Gas & Indigestion (Adhmana & Ajirna)", path: "/conditions/gas-indigestion" },
            { name: "Constipation (Vibandha)", path: "/conditions/constipation" },
          ],
        },
        {
          name: "Gut Health",
          subItems: [
            {
              name: "Irritable Bowel Syndrome (IBS)",
              path: "/conditions/irritable-bowel-syndrome",
            },
            { name: "Diarrhea (Atisara)", path: "/conditions/diarrhea" },
            { name: "Piles & Fissure (Arsha & Parikartika)", path: "/conditions/piles-fissure" },
          ],
        },
        {
          name: "Liver Care",
          subItems: [
            { name: "Fatty Liver (Yakrit Roga)", path: "/conditions/fatty-liver" },
            { name: "Jaundice (Kamala)", path: "/conditions/jaundice" },
            { name: "Liver Cirrhosis (Yakritodara)", path: "/conditions/liver-cirrhosis" },
          ],
        },
        {
          name: "Metabolic Support",
          subItems: [
            {
              name: "Diabetes Management (Prameha)",
              path: "/conditions/diabetes-management",
            },
            {
              name: "Thyroid Dysfunction (Galaganda)",
              path: "/conditions/thyroid-dysfunction",
            },
            {
              name: "Cholesterol Management (Medoroga)",
              path: "/conditions/cholesterol-management",
            },
          ],
        },
        {
          name: "Weight Management",
          subItems: [
            { name: "Obesity (Sthaulya)", path: "/conditions/obesity" },
            {
              name: "Heart Health Support (Hrid Roga)",
              path: "/conditions/heart-health-support",
            },
          ],
        },
      ],
    },
    {
      title: "Skin, Hair & Aesthetic Wellness",
      icon: <Sparkles className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Chronic Skin Conditions",
          subItems: [
            { name: "Psoriasis (Eka Kushta)", path: "/conditions/psoriasis" },
            { name: "Eczema (Vicharchika)", path: "/conditions/eczema" },
            { name: "Vitiligo (Shvitra)", path: "/conditions/vitiligo" },
          ],
        },
        {
          name: "Daily Care",
          subItems: [
            {
              name: "Acne & Pigmentation (Yauvanapidika & Vyanga)",
              path: "/conditions/acne-pigmentation",
            },
            {
              name: "Chronic Allergies (Sheetapitta)",
              path: "/conditions/chronic-allergies",
            },
          ],
        },
        {
          name: "Trichology",
          subItems: [
            { name: "Hair Fall (Khalitya)", path: "/conditions/hair-fall" },
            { name: "Alopecia (Indralupta)", path: "/conditions/alopecia" },
            { name: "Dandruff (Darunaka)", path: "/conditions/dandruff" },
          ],
        },
      ],
    },
    {
      title: "Women’s Health & Fertility",
      icon: <Baby className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Hormonal Care",
          subItems: [
            { name: "PCOD / PCOS (Artava Kshaya)", path: "/conditions/pcod-pcos" },
            {
              name: "Menstrual Irregularities (Artava Dosha)",
              path: "/conditions/menstrual-irregularities",
            },
          ],
        },
        {
          name: "Reproductive Health",
          subItems: [
            {
              name: "Fertility Support (Vandhyatva)",
              path: "/conditions/fertility-support",
            },
            {
              name: "Repeated Miscarriages Support (Garbhasrava)",
              path: "/conditions/repeated-miscarriages-support",
            },
          ],
        },
        {
          name: "Maternal Wellness",
          subItems: [
            { name: "Postpartum Care (Sutika Paricharya)", path: "/conditions/postpartum-care" },
            {
              name: "Lactation Support",
              path: "/conditions/lactation-support",
            },
          ],
        },
        {
          name: "General Care",
          subItems: [
            { name: "White Discharge (Shveta Pradara)", path: "/conditions/white-discharge" },
            { name: "Dysmenorrhea (Kashtartava)", path: "/conditions/dysmenorrhea" },
          ],
        },
      ],
    },
    {
      title: "Mental Health & Neurology",
      icon: <Brain className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Stress Management",
          subItems: [
            {
              name: "Anxiety & Insomnia (Chittodvega & Anidra)",
              path: "/conditions/anxiety-insomnia",
            },
            { name: "Irritability", path: "/conditions/irritability" },
          ],
        },
        {
          name: "Neurological Support",
          subItems: [
            { name: "Migraine (Ardhavabhedaka)", path: "/conditions/migraine" },
            { name: "Epilepsy (Apasmara)", path: "/conditions/epilepsy" },
            {
              name: "Parkinson’s Disease (Kampavata)",
              path: "/conditions/parkinson-s-disease",
            },
          ],
        },
        {
          name: "Recovery",
          subItems: [
            {
              name: "Stroke & Paralysis Rehabilitation (Pakshaghata)",
              path: "/conditions/stroke-paralysis-rehabilitation",
            },
          ],
        },
        {
          name: "Developmental Support",
          subItems: [
            {
              name: "Memory & Concentration",
              path: "/conditions/memory-concentration",
            },
            {
              name: "Ayurvedic Support for ADHD/Autism",
              path: "/conditions/ayurvedic-support-for-adhd-autism",
            },
          ],
        },
      ],
    },
    {
      title: "Respiratory & Immune Health",
      icon: <Wind className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Allergy Management",
          subItems: [
            {
              name: "Chronic Sinusitis (Dushta Pratishyaya)",
              path: "/conditions/chronic-sinusitis",
            },
            { name: "Cold & Flu (Pratishyaya)", path: "/conditions/cold-flu" },
          ],
        },
        {
          name: "Respiratory Care",
          subItems: [
            { name: "Asthma (Tamaka Shvasa)", path: "/conditions/asthma" },
            { name: "Bronchitis (Kasa)", path: "/conditions/bronchitis" },
          ],
        },
        {
          name: "Autoimmune Support",
          subItems: [
            {
              name: "Specialized protocols for SLE, Hashimoto’s, and IBD",
              path: "/conditions/specialized-protocols-for-sle-hashimoto-s-and-ibd",
            },
          ],
        },
      ],
    },
    {
      title: "Men’s Health & Urology",
      icon: <Stethoscope className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Reproductive Wellness",
          subItems: [
            {
              name: "Erectile Dysfunction (Klaibya)",
              path: "/conditions/erectile-dysfunction",
            },
            {
              name: "Premature Ejaculation (Shukragata Vata)",
              path: "/conditions/premature-ejaculation",
            },
            { name: "Low Sperm Count (Kshinashukra)", path: "/conditions/low-sperm-count" },
          ],
        },
        {
          name: "Urinary Health",
          subItems: [
            { name: "Kidney Stones (Ashmari)", path: "/conditions/kidney-stones" },
            { name: "UTI (Mutrakrichra)", path: "/conditions/uti" },
            { name: "Prostate Issues (Mutraghata)", path: "/conditions/prostate-issues" },
          ],
        },
        {
          name: "Bladder Support",
          subItems: [
            {
              name: "Urinary Incontinence (Mutratisara)",
              path: "/conditions/urinary-incontinence",
            },
            {
              name: "Neurogenic Bladder",
              path: "/conditions/neurogenic-bladder",
            },
          ],
        },
      ],
    },
    {
      title: "Pediatric (Child) Healthcare",
      icon: <ShieldAlert className="w-6 h-6 text-clinic-teal-900" />,
      items: [
        {
          name: "Immunity",
          subItems: [
            { name: "Recurrent Colds", path: "/conditions/recurrent-colds" },
            {
              name: "Seasonal Allergies",
              path: "/conditions/seasonal-allergies",
            },
          ],
        },
        {
          name: "Growth",
          subItems: [
            { name: "Poor Appetite (Agnimandya)", path: "/conditions/poor-appetite" },
            {
              name: "Digestive Weakness",
              path: "/conditions/digestive-weakness",
            },
          ],
        },
        {
          name: "Development",
          subItems: [
            {
              name: "Concentration Support",
              path: "/conditions/concentration-support",
            },
            { name: "Bed Wetting (Shayya Mutra)", path: "/conditions/bed-wetting" },
          ],
        },
      ],
    },
  ];

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <TreatmentNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
        >
          <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
            <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">
              Our Offerings
            </span>
            <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
            Medical{" "}
            <span className="italic font-medium text-clinic-teal-900/80">
              Treatments
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
            Comprehensive clinical divisions and specialized diagnostic care
            rooted in traditional Ayurveda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              id={category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-clinic-border h-full scroll-mt-[190px] lg:scroll-mt-[160px] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-clinic-ivory rounded-full flex items-center justify-center mb-8">
                {category.icon}
              </div>
              <h3 className="text-3xl font-serif text-clinic-teal-900 mb-8 font-light">
                {category.title}
              </h3>
              <ul className="space-y-6 text-left">
                {category.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <span className="text-clinic-bronze text-lg leading-none mt-1">
                        •
                      </span>
                      {item.path ? (
                        <Link
                          to={item.path}
                          className="text-clinic-teal-900 font-medium hover:text-clinic-bronze transition-colors inline-flex items-center group"
                        >
                          {item.name}
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ) : (
                        <span
                          className={
                            item.subItems
                              ? "text-clinic-teal-900 font-medium"
                              : "text-clinic-muted"
                          }
                        >
                          {item.name}
                        </span>
                      )}
                    </div>
                    {item.subItems && (
                      <ul className="ml-6 space-y-2 mt-1">
                        {item.subItems.map((sub, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-clinic-bronze/50 inline-block shrink-0"></span>
                            {sub.path ? (
                              <Link
                                to={sub.path}
                                className="text-clinic-teal-800 hover:text-clinic-bronze transition-colors text-sm font-medium inline-flex items-center group"
                              >
                                {sub.name}
                                <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </Link>
                            ) : (
                              <span className="text-clinic-muted text-sm">
                                {sub.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
