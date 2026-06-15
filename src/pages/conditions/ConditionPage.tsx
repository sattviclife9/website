import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Activity, CheckCircle2, ArrowRight, ShieldAlert, Phone, Calendar, Droplets, Brain, Wind, Baby, Stethoscope, ChevronDown, MapPin, Star, Award } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getConditionData } from '../../data/conditionsData';
import OptimizedImage from '../../components/OptimizedImage';
import Breadcrumbs from '../../components/Breadcrumbs';

import DemographicsChart from '../../components/DemographicsChart';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const getCategoryAnchor = (category: string): string => {
  const normalized = category.toLowerCase().trim();
  if (normalized.includes("pediatric")) {
    return "pediatric-child-healthcare";
  }
  if (normalized.includes("kidney")) {
    return "men-s-health-urology";
  }
  if (normalized.includes("autoimmune")) {
    return "respiratory-immune-health";
  }
  if (normalized.includes("neurological")) {
    return "mental-health-neurology";
  }
  if (normalized.includes("spine")) {
    return "musculoskeletal-joint-care";
  }
  if (normalized.includes("women")) {
    return "women-s-health-fertility";
  }
  if (normalized.includes("skin") || normalized.includes("hair") || normalized.includes("aesthetic")) {
    return "skin-hair-aesthetic-wellness";
  }
  if (normalized.includes("musculoskeletal") || normalized.includes("joint")) {
    return "musculoskeletal-joint-care";
  }
  if (normalized.includes("digestive") || normalized.includes("metabolic")) {
    return "digestive-metabolic-health";
  }
  if (normalized.includes("respiratory") || normalized.includes("immune")) {
    return "respiratory-immune-health";
  }
  if (normalized.includes("men") || normalized.includes("uro")) {
    return "men-s-health-urology";
  }
  if (normalized.includes("mental") || normalized.includes("neuro")) {
    return "mental-health-neurology";
  }
  // Fallback
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

const getWhyChooseFeatures = (category: string, name: string) => {
  const normalized = category.toLowerCase().trim();
  
  // 1) Pediatric Healthcare
  if (normalized.includes("pediatric")) {
    return [
      {
        icon: <Baby className="w-6 h-6 text-clinic-teal-900" />,
        title: "Gentle Child-Friendly Diagnosis",
        desc: "Stress-free pulse reading (Nadi Parikshan) and customized constitution analysis specifically adapted to understand your child's sensitive Prakriti."
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Safe & Non-Invasive Therapies",
        desc: "Child-safe herbal formulations and mild, comforting external therapies that improve cognitive focus, digestion, and immunity without any side effects."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Empowering Guidance for Parents",
        desc: "Practical daily routine (Dinacharya) modifications, diet plans (Ahara), and positive reinforcement guidance to nurture safe growth at home."
      }
    ];
  }

  // 2) Women's Health & Fertility
  if (normalized.includes("women")) {
    return [
      {
        icon: <Award className="w-6 h-6 text-clinic-teal-900" />,
        title: "Personalized Hormonal Alignment",
        desc: "In-depth analysis of biological rhythms and reproductive channels (Artava Srotas) to address the root causes of PCOD, irregular cycles, and hot flashes."
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Uterine & Pelvic Detoxification",
        desc: "Classical Panchakarma treatments like gentle Basti and Uttarabasti designed to purify biological pathways, strengthen uterine muscles, and naturally support fertility."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Empathetic Multi-Phase Support",
        desc: "Specialized natural rejuvenation therapies tailored to support women through every major milestone, from puberty to postpartum care and menopause."
      }
    ];
  }

  // 3) Musculoskeletal & Spinal / Joint Care
  if (normalized.includes("spine") || normalized.includes("musculoskeletal") || normalized.includes("joint") || normalized.includes("injury")) {
    return [
      {
        icon: <Activity className="w-6 h-6 text-clinic-teal-900" />,
        title: "Instant Pain Relief (Agnikarma & Viddhakarma)",
        desc: `Highly specialized, outpatient, micro-acupuncture and thermal therapies providing rapid, drug-free relief from severe pain and stiffness in ${name}.`
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Deep Joint & Cartilage Rejuvenation",
        desc: "Targeted local poolings (like Kati Basti, Janu Basti, and Griva Basti) to restore synovial fluids, nourish worn out cartilage, and strengthen spinal nerves."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Natural Avoidance of Major Surgery",
        desc: "Proven non-surgical protocols to successfully mend slip discs, osteophytic spurs, and arthritis, allowing you to regain full painless mobility naturally."
      }
    ];
  }

  // 4) Mental Health & Neurology
  if (normalized.includes("mental") || normalized.includes("neuro") || normalized.includes("brain") || normalized.includes("stroke")) {
    return [
      {
        icon: <Brain className="w-6 h-6 text-clinic-teal-900" />,
        title: "Grounding Prana Vata and Calm Mind",
        desc: "Targeted regulation of the central nervous system to calm hyperactivity, alleviate chronic insomnia, and clear cognitive fog without dependency."
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Restorative Sirodhara & Nasya",
        desc: "Classical herbal oil dripping and nasal oil administration that deeply relax high-stress centers, nourish the Majja Dhatu (brain tissue), and promote mental clarity."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Pioneering Neuro-Rehabilitation",
        desc: "Evidence-based clinical protocols designed to support motor recovery, speech coordination, and neural plasticity for stroke and paralysis survivors."
      }
    ];
  }

  // 5) Urinary & Men's Health
  if (normalized.includes("men") || normalized.includes("uro") || normalized.includes("kidney") || normalized.includes("urinary")) {
    return [
      {
        icon: <Activity className="w-6 h-6 text-clinic-teal-900" />,
        title: "Regulating Apana Vata & Pelvic Tonage",
        desc: "Specialized therapies to restore the down-ward biological force, strengthening bladder sphincters, reducing prostatic inflammation, and calming overactive pelvic nerves."
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Natural Kidney & Prostate Decongestion",
        desc: "Highly targeted herbal alkalizers, litholytic (stone-dissolving) formulations, and comforting local steam elements to wash out recurrent infections."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Pragmatic Vitality & Mojo Rejuvenation",
        desc: "Confidential, stress-free vajikarana (revitalization) consultations to address physical root causes, clear mental stressors, and restore overall male vigor."
      }
    ];
  }

  // 6) Digestive & Metabolic Health
  if (normalized.includes("digestive") || normalized.includes("metabolic") || normalized.includes("liver") || normalized.includes("diabetes") || normalized.includes("thyroid") || normalized.includes("gut")) {
    return [
      {
        icon: <Activity className="w-6 h-6 text-clinic-teal-900" />,
        title: "Reigniting the Digestive Fire (Agni Chikitsa)",
        desc: "Reversing sluggish gut performance (Manda Agni) — the absolute foundation of Ayurvedic recovery — to eliminate system fermentation."
      },
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Eradicating Cellular Toxins (Ama)",
        desc: "Deploying targeted cleansing (Shodhana) and carminative herbs to digest accumulated deep-tissue toxins, relieving chronic IBS patterns, acidity, and flatulence."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Comprehensive Endocrine Reset",
        desc: "Synergized dietary alignments, specialized herbal, and metabolic therapies to safely adjust fatty liver, insulin resistance, clinical thyroiditis, and lipids."
      }
    ];
  }

  // 7) Skin, Hair & Aesthetic Wellness
  if (normalized.includes("skin") || normalized.includes("hair") || normalized.includes("aesthetic") || normalized.includes("allergy") || normalized.includes("wellness")) {
    return [
      {
        icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
        title: "Intracellular Blood Purification (Rakta Shodhana)",
        desc: "Dermatological healing starting from the inside out. Cleansing metabolic impurities from blood & lymph to resolve psoriasis, stubborn eczema, and acne permanently."
      },
      {
        icon: <Activity className="w-6 h-6 text-clinic-teal-900" />,
        title: "Therapeutic Detox to Intercept Relapses",
        desc: "Customized Virechana and specialized skin-channel flushes to target chronic allergies, completely resetting immune tolerance to common allergens."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Active Follicular Hair Nourishment",
        desc: "Nutritive hair therapies (Shirolepa and Kesha Rasayanas) addressing hormonal dynamics, local scalp clean-ups, and root strengthening to combat hair fall."
      }
    ];
  }

  // 8) Respiratory & Immune Health / Autoimmune Support
  if (normalized.includes("respiratory") || normalized.includes("immune") || normalized.includes("autoimmune") || normalized.includes("allergy") || normalized.includes("sinus")) {
    return [
      {
        icon: <Wind className="w-6 h-6 text-clinic-teal-900" />,
        title: "Clearing Pulmonary Channels (Pranavaha Srotas)",
        desc: "Strengthening lung capacity and soothing dry, hypersensitive airway pathways through targeted herbal steam, local chest baths (Uro Basti), and soothing inhalations."
      },
      {
        icon: <ShieldAlert className="w-6 h-6 text-clinic-teal-900" />,
        title: "Immune-Modulating Rasayanas",
        desc: "Advanced, natural protocols to gently pacify overactive, hyper-reactive autologous immune responses (for Hashimotos, SLE, IBD, and severe allergies)."
      },
      {
        icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
        title: "Permanent Allergy Shielding",
        desc: "Correcting gut-lung microfluidic pathways to permanently strengthen your body's defense, resolving susceptibility to sudden temperature and pollen changes."
      }
    ];
  }

  // Fallback - General / Specialized Treatment
  return [
    {
      icon: <Stethoscope className="w-6 h-6 text-clinic-teal-900" />,
      title: "Root-Cause Ayurvedic Diagnosis",
      desc: `Detailed pulse-diagnosis (Nadi Parikshan) and multi-point evaluation to uncover the underlying elemental imbalances causes of ${name}.`
    },
    {
      icon: <Droplets className="w-6 h-6 text-clinic-teal-900" />,
      title: "Authentic & Scientific Panchakarma",
      desc: "Precision-scheduled detoxification and restorative physical therapies customized specifically to reverse your clinical condition cleanly."
    },
    {
      icon: <Star className="w-6 h-6 text-clinic-teal-900" />,
      title: "Specialized Parasurgical Treatments",
      desc: "Agni/Viddhakarma outpatient therapies that provide immediate, drug-free relief, alongside comprehensive lifestyle coaching to prevent recurrence."
    }
  ];
};

const getConditionFAQs = (category: string, name: string) => {
  const normalized = category.toLowerCase().trim();

  // 1) Pediatric Healthcare
  if (normalized.includes("pediatric")) {
    return [
      {
        q: `Is it safe to give Ayurvedic medicines to children for ${name}?`,
        a: `Yes, absolutely. Children are highly responsive to Ayurvedic treatments as their tissues (Dhatus) are gentle and dynamic. At Sattvic Advanced Ayurveda, we only use purified, non-toxic, age-appropriate herbs and mild natural therapies that are perfectly safe and free of chemical side effects.`
      },
      {
        q: `How does Ayurveda diagnose the root cause of ${name} in kids?`,
        a: `Through gentle pulse reading (Nadi Parikshan) and an in-depth understanding of your child's constitution (Prakriti). We identify whether ${name} is a result of low digestive fire (Manda Agni) or imbalances in Vata and Kapha doshas, correcting the core physiological cause rather than just suppressing symptoms.`
      },
      {
        q: `Does pediatric treatment for ${name} involve strict dietary restrictions?`,
        a: `No, we do not believe in harsh restrictions for growing children. We suggest gentle, nourishing, and tasty dietary adjustments (Ahara) along with easy daily routines (Dinacharya) that parents can easily incorporate into school and home life.`
      },
      {
        q: `How fast can we expect improvements in ${name} under Ayurvedic care?`,
        a: `Many pediatric conditions show noticeable improvements within 2 to 4 weeks because children's bodies self-heal rapidly. Complete resolution typically takes 2 to 3 months of consistent, gentle therapies to strengthen their long-term immunity and overall development.`
      }
    ];
  }

  // 2) Women's Health & Fertility
  if (normalized.includes("women")) {
    return [
      {
        q: `How does Ayurveda view ${name} differently from allopathy?`,
        a: `In Ayurveda, women's health is governed by the downward flow of Apana Vata and the purity of gynecological channels (Artava Srotas). Rather than using external synthetic hormones to force temporary relief, we treat ${name} by regulating your natural endocrine rhythm, clearing ovarian blockages, and deeply nourishing reproductive tissues.`
      },
      {
        q: `Is Panchakarma necessary for treating ${name} or fertility struggles?`,
        a: `Yes, Panchakarma is highly beneficial. Specific treatments such as Basti (medicated oil/decoction enemas) and Uttarabasti (uterine channel purification) are exceptionally effective for clearing obstructions in pelvic channels, balancing hormones, and preparing a healthy uterine wall for natural conception.`
      },
      {
        q: `What dietary changes are advised for women undergoing therapies for ${name}?`,
        a: `We focus on warm, nourishing, easily digestible cooked foods. We suggest incorporating healthy fats like A2 cow's ghee and spices like cumin, ginger, and turmeric, while minimizing cold, dry, processed, and highly refined foods that cause pelvic stagnation.`
      },
      {
        q: `Can I take Ayurvedic treatments for ${name} alongside modern medical prescriptions?`,
        a: `Yes, our treatments run safely alongside conventional allopathic medicines. Under our doctors' close supervision, as your natural hormonal balance and organ functions return to normal, the reliance on daily synthetic hormone support can often be gradually and safely reduced.`
      }
    ];
  }

  // 3) Musculoskeletal, Joint, Spine & Injuries
  if (normalized.includes("spine") || normalized.includes("musculoskeletal") || normalized.includes("joint") || normalized.includes("injury")) {
    return [
      {
        q: `Can Ayurveda really heal severe musculoskeletal conditions like ${name} without surgery?`,
        a: `Yes. Severe joint and spinal conditions like slip discs, nerve compressions, and osteoarthritis respond remarkably well to classical parasurgical and nourishing therapies. These treatments restore spinal nerve function and joint lubrication naturally, avoiding invasive surgical procedures.`
      },
      {
        q: `How do Agnikarma and Viddhakarma help in relieving pain and stiffness in ${name}?`,
        a: `Agnikarma (thermal therapy) and Viddhakarma (medical micro-puncture) are specialized outpatient procedures that provide instant, drug-free pain relief. They instantly increase local micro-circulation, digest accumulated metabolic toxins (Ama) in local muscle fibers, and relieve deep tissue spasms.`
      },
      {
        q: `Is complete bed rest required during the recovery phase of ${name}?`,
        a: `Rarely. While we advise avoiding heavy movements and heavy lifting that strain the spinal channels, we actively encourage mild, restorative stretching and customized movements to keep joints lubricated and prevent muscle stiffness.`
      },
      {
        q: `How long do the therapeutic benefits last for joint and bone conditions?`,
        a: `Since we target the root cause—by replenishing joint synovial fluid, reducing disc friction, and strengthening supportive muscles—the recovery is long-lasting. Combining treatment with healthy postural habits prevents recurrence and keeps you active for years.`
      }
    ];
  }

  // 4) Mental Health & Neurology
  if (normalized.includes("mental") || normalized.includes("neuro") || normalized.includes("brain") || normalized.includes("stroke")) {
    return [
      {
        q: `How does Ayurveda explain neurological and psychological imbalances like ${name}?`,
        a: `All nervous system functions are governed by Vata Dosha (specifically Prana Vata and Vyana Vata). Imbalances like ${name} occur when nervous pathways become congested or dehydrated. We treat this by deeply grounding, lubricating, and nourishing these delicate neural networks.`
      },
      {
        q: `What role do Shirodhara and Nasya play in treating ${name}?`,
        a: `Shirodhara (continuous warm herbal oil flow on the forehead) works directly on the pituitary gland, soothing stress and deeply calming the nervous system. Nasya (drop-by-drop nasal oil delivery) nourishes brain tissue directly, clearing blockages and improving mental acuity, sleep, and motor functions.`
      },
      {
        q: `Are Ayurvedic mental health and nerve medicines habit-forming?`,
        a: `Not at all. Ayurvedic nerve-rejuvenators (Medhya Rasayanas) like Brahmi, Shankhapushpi, and Ashwagandha are entirely safe, non-sedating, and non-addictive. They revitalize nerve synapses and enhance natural brain plasticity rather than biochemically suppressing mood artificially.`
      },
      {
        q: `What is the success rate in using Ayurveda for stroke or paralysis rehabilitation?`,
        a: `Very high, especially when we start rehabilitation early. By combining targeted nerve-stimulating herbs with classical sensory-motor therapies (like Pizhichil and intensive Basti), we help patients recover coordination, muscle tone, and speech path significantly faster.`
      }
    ];
  }

  // 5) Urinary & Men's Health
  if (normalized.includes("men") || normalized.includes("uro") || normalized.includes("kidney") || normalized.includes("urinary")) {
    return [
      {
        q: `What is the Ayurvedic approach to addressing issues like ${name}?`,
        a: `These conditions mostly trace back to an imbalance in Apana Vata—the biological energy that controls the pelvic floor, elimination, and sexual pathways. We focus on relaxing pelvic muscles, improving bladder elasticity, reducing prostatic swelling, and clearing urinary tract pathways using purifying, cooling, and strengthening herbs.`
      },
      {
        q: `Are the consultations for men's reproductive and urinary issues confidential?`,
        a: `Absolutely. At Sattvic advanced Ayurveda, we strictly maintain 100% patient confidentiality and privacy. Your consultation and treatment plan are discussed in a respectful, supportive, and stress-free environment.`
      },
      {
        q: `How does Ayurveda treat recurrent urinary tract infections (UTIs) and kidney stones?`,
        a: `Instead of continuous antibiotic cycles, we treat UTIs by altering the bladder's internal pH and flushing infectious heat (Pitta) from kidneys. For stones, we use litholytic herbs (Varuna, Pashanbhed) to naturally break stones down into fine sand-like particles for painless flushing through urine.`
      },
      {
        q: `At what age should men start clinical consultations for prostate health?`,
        a: `Men over 40-50 experiencing slow urine flow, night frequency, or discomfort should seek screening. Natural preventive therapies can arrest benign prostate enlargement (BPH) early, preventing the need for future surgical intervention.`
      }
    ];
  }

  // 6) Digestive & Metabolic Health
  if (normalized.includes("digestive") || normalized.includes("metabolic") || normalized.includes("liver") || normalized.includes("diabetes") || normalized.includes("thyroid") || normalized.includes("gut")) {
    return [
      {
        q: `Why is gut health considered the foundation of recovery for ${name} in Ayurveda?`,
        a: `Ayurveda teaches that all core metabolic and systemic diseases start in the gut with low digestive fire (Manda Agni). If your food isn't properly digested, it ferments and produces a toxic, sticky paste called 'Ama'. To treat ${name}, we must first rekindle your metabolic fire and completely clean out these metabolic toxins.`
      },
      {
        q: `Can Ayurveda replace insulin or daily thyroid medication for ${name}?`,
        a: `For early-stage metabolic conditions, yes. Through extensive lifestyle upgrades, digestive resets, and natural herbs, we have helped numerous patients normalize HbA1c and thyroid levels completely. For long-standing cases, our treatment safely runs alongside modern diagnostics, helping reduce dependency and preventing typical diabetic/thyroid organ damage.`
      },
      {
        q: `What is the role of Panchakarma in metabolic disorders like ${name}?`,
        a: `Panchakarma therapies like Virechana (therapeutic purgation) are invaluable for metabolic resetting. It flushes stored liver toxins, boosts endocrine receptivity, is highly effective in melting subcutaneous fat, and improves insulin sensitivity across cells.`
      },
      {
        q: `How does your clinic customize diet charts for metabolic recovery?`,
        a: `Diet is medicine. We do not prescribe standard, boring, starvation diets. We build custom nutritional paths based on your current digestive capability (Agni), your metabolic Prakriti (body-type), and seasonal variations, so you eat foods that naturally digest and nourish you.`
      }
    ];
  }

  // 7) Skin, Hair & Aesthetic Wellness
  if (normalized.includes("skin") || normalized.includes("hair") || normalized.includes("aesthetic") || normalized.includes("allergy") || normalized.includes("wellness")) {
    return [
      {
        q: `Why do skin and hair issues like ${name} require internal medicine, not just topical creams?`,
        a: `In Ayurveda, the skin is an external reflection of internal blood purity (Rakta Dhatu) and digestive function. Applying heavy external creams only suppresses skin flare-ups temporarily. To heal ${name} permanently, we must detoxify the blood tissue, balance the liver, and flush systemic toxins (Ama) from deep skin layers.`
      },
      {
        q: `Can chronic and autoimmune skin conditions like Psoriasis or Vitiligo be cured?`,
        a: `These conditions are managed exceptionally well with Ayurveda. By combining regular, gentle cellular-level detoxification (Virechana/Raktamokshana) with custom immune-modulating herbs, we soothe skin inflammation, stop new flare-ups, and help restore normal skin pigment and texture.`
      },
      {
        q: `How does Ayurveda stop severe hair fall and treat damaged hair follicles?`,
        a: `Hair is considered a byproduct of bone tissue (Asthi Dhatu). Severe hair fall is caused by excess Pitta heat burning hair follicles, coupled with poor root nourishment. We use soothing scalp therapies (Shirolepa/Dhara), clinical hair vitalizers, and iron/calcium-rich bone-nurturing herbs to stop loss and trigger thick new growth.`
      },
      {
        q: `Are there any immediate home-care guidelines I should follow during the treatment?`,
        a: `Yes. Avoid compatibility-destroying food combinations (Viruddha Ahara), such as taking seafood with dairy products, or mixing fruits with milk. Also, choose mild, natural, soap-free skin cleansers and chemical-free hair washes to prevent scalp irritation.`
      }
    ];
  }

  // 8) Respiratory, Allergy & Immune Support
  if (normalized.includes("respiratory") || normalized.includes("immune") || normalized.includes("autoimmune") || normalized.includes("allergy") || normalized.includes("sinus")) {
    return [
      {
        q: `How does Ayurveda address hypersensitivity and chronic sinusitis/asthma?`,
        a: `These conditions represent a combination of sluggish digestion producing mucous-like toxins (Ama) and high Kapha blockages in respiratory airways (Pranavaha Srotas). We focus on strengthening your gut, melting respiratory phlegm through chest therapies, and clearing nasal pathways using specialized Nasya oils.`
      },
      {
        q: `Is there a way to permanently clear chronic allergies without daily antihistamines?`,
        a: `Yes. Daily antihistamines only mask the response. Ayurveda strengthens your natural immune tolerance. By purifying blood lymph pathways and regulating immune-stimulating systems, we shield your lungs and respiratory pathways from pollen, dust, and temperature changes permanently.`
      },
      {
        q: `What natural therapies are used to calm autoimmune conditions like SLE or IBD?`,
        a: `Autoimmune disorders are viewed as a state of 'Tejas' (cellular intelligence) gone wild. Toxins (Ama) coating cells mislead immune fighters. We use gentle, non-irritating, cooling immune-modulatory herbs (like Guduchi, Yashtimadhu) and soothing local therapies to nourish gut mucosal linings, calm flare-ups, and restore somatic balance.`
      },
      {
        q: `Can pediatric allergy and asthma patients be treated under these protocols?`,
        a: `Yes! Pediatric immunity is delicate and highly responsive. Early, gentle Ayurvedic care helps children grow out of chronic respiratory sensitivity naturally, building a lifelong buffer against bronchial and sinus infections.`
      }
    ];
  }

  // Fallback - General / Specialized Treatment
  return [
    {
      q: `Can Ayurveda help cure ${name}?`,
      a: `Ayurveda provides highly effective, root-cause holistic treatments for ${name}. By balancing your unique Doshas (Vata, Pitta, Kapha) and eliminating internal toxins (Ama) through Panchakarma, we treat the underlying cause rather than just suppressing the symptoms.`
    },
    {
      q: `Which is the best Ayurvedic treatment for ${name} in Pune?`,
      a: `The ideal treatment requires a personalized approach. At Sattvic Advanced Ayurveda in Pune, we begin with a deep diagnostic Nadi Parikshan. Based on your constitution, we prescribe customized herbal formulations, dietary changes, and highly effective Panchakarma therapies like Basti or Shirodhara.`
    },
    {
      q: `Is Panchakarma necessary for ${name}?`,
      a: `For chronic or severe cases of ${name}, Panchakarma is highly recommended. It detoxifies the body at a cellular level, clears blocked channels, and accelerates the profound healing process, allowing our herbal medicines to absorb perfectly.`
    },
    {
      q: `How long does the Ayurvedic treatment take to show results?`,
      a: `While acute symptoms can often be managed within a few weeks, chronic conditions require a dedicated approach over a period of 1 to 3 months. Every patient's journey is different, but natural, sustainable recovery is always our ultimate goal.`
    }
  ];
};

export default function ConditionPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  if (!slug) {
    return <Navigate to="/treatments" replace />;
  }

  const data = getConditionData(slug);
  const whyChooseFeatures = getWhyChooseFeatures(data.category, data.name);
  const conditionFAQs = getConditionFAQs(data.category, data.name);

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
        <title>{data.seo.title.includes('Pune') ? data.seo.title : `${data.seo.title} in Pune | Sattvic Ayurveda`}</title>
        <meta name="description" content={data.seo.description.includes('Pune') ? data.seo.description : `${data.seo.description} Visit Sattvic Advanced Ayurveda & Panchakarma Centre in Pune for expert care.`} />
        <meta name="keywords" content={`${data.seo.keywords}, Ayurvedic treatment for ${data.name} in Pune, Best Ayurvedic clinic for ${data.name} in Pune, Panchakarma for ${data.name}, natural remedies, holistic healing, Sattvic Ayurveda Pune, Dr. Khan Aqsa Zarin, Ayurvedic Doctor Pune`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={data.hero.image} />
        <meta property="og:url" content={`https://sattvicadvancedayurveda.com/conditions/${slug}`} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={`https://sattvicadvancedayurveda.com/conditions/${slug}`} />

        {/* Structured JSON-LD Data for MedicalCondition & FAQ */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": conditionFAQs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-16 lg:pb-20 overflow-hidden bg-clinic-paper">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-clinic-bronze via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Treatments', path: '/treatments' },
              { 
                label: data.category, 
                path: `/treatments#${getCategoryAnchor(data.category)}` 
              },
              { label: data.name }
            ]} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex flex-wrap items-center gap-3 md:gap-4 mb-8">
                <span className="h-[1px] w-8 bg-clinic-bronze"></span>
                <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">{data.category}</span>
                {data.ayurvedicName && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-bronze/40"></span>
                    <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">
                      Sanskrit: <span className="font-sans font-medium text-clinic-teal-900 not-italic">{data.ayurvedicName}</span>
                    </span>
                  </>
                )}
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
                <Link to="/about-sattvic-ayurveda/contactus" className="inline-flex items-center justify-center bg-clinic-teal-900 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-clinic-teal-800 hover:shadow-lg">
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

      {/* Local SEO & EEAT Section */}
      <section className="py-16 md:py-24 bg-clinic-paper border-t border-clinic-teal-900/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-clinic-bronze/10 rounded-full text-clinic-bronze font-medium text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Trusted Ayurvedic Care in Pune
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-clinic-teal-900 mb-6 leading-tight max-w-3xl mx-auto">
            Why Choose Sattvic Ayurveda for {data.name} in Pune?
          </h2>
          <p className="text-lg text-clinic-muted mb-12 leading-relaxed max-w-3xl mx-auto">
            Led by Dr. Khan Aqsa Zarin, Sattvic Advanced Ayurveda & Panchakarma Centre is Pune's leading destination for holistic, root-cause healing. We don't just treat symptoms; we restore your body's natural balance through classical Ayurvedic protocols and evidence-based therapies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {whyChooseFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white border border-clinic-teal-900/10 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-clinic-teal-50 flex items-center justify-center text-clinic-teal-900">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-serif text-clinic-teal-900 mb-2">{feature.title}</h4>
                  <p className="text-clinic-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-clinic-teal-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-clinic-muted">Expert insights about managing {data.name} with Ayurveda.</p>
          </div>
          
          <div className="space-y-4">
            {conditionFAQs.map((faq, idx) => (
              <div key={idx} className="border border-clinic-teal-900/10 rounded-2xl overflow-hidden transition-all bg-clinic-sand/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-serif text-clinic-teal-900 font-medium">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-clinic-teal-900/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-clinic-teal-900 text-white' : 'text-clinic-teal-900'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-clinic-muted leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
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
            <Link to="/about-sattvic-ayurveda/contactus" className="inline-flex items-center justify-center bg-clinic-bronze text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#A66E3A] hover:shadow-lg text-lg">
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
