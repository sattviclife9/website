import { Activity, ShieldAlert, Droplets, Brain, Wind, Baby, Stethoscope } from 'lucide-react';

export interface ConditionData {
  id: string;
  name: string;
  ayurvedicName?: string;
  category: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
    image: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    symptomsTitle: string;
    symptoms: string[];
  };
  treatments: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: 'Activity' | 'ShieldAlert' | 'Droplets' | 'Brain' | 'Wind' | 'Baby' | 'Stethoscope';
    }[];
  };
}

export const specificConditions: Record<string, ConditionData> = {
  "sciatica": {
    id: "sciatica",
    name: "Sciatica",
    ayurvedicName: "Gridhrasi",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Sciatica | Natural Back & Leg Pain Relief",
      description: "Get holistic and effective Ayurvedic treatment for Sciatica (Gridhrasi). Relieve lower back and leg pain naturally.",
      keywords: "Sciatica treatment, Ayurvedic treatment for Sciatica, Gridhrasi, Kati Basti for Sciatica"
    },
    hero: {
      title: "Natural & Effective Ayurvedic Treatment for Sciatica",
      description: "Experience lasting relief from lower back and radiating leg pain. Our integrative Ayurvedic approach targets the root cause of Sciatica (Gridhrasi) using traditional therapies like Kati Basti, Agnikarma, and Viddhakarma.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
    },
    about: {
      title: "What is Sciatica?",
      paragraphs: [
        "Sciatica is a debilitating condition characterized by pain radiating along the sciatic nerve, which runs from the lower back down through the hips, buttocks, and each leg. Usually, it affects only one side of the body.",
        "In Ayurveda, Sciatica is known as Gridhrasi. It is primarily caused by the aggravation of Vata dosha, often accompanied by Kapha imbalance, which leads to stiffness, sharp pain, and sometimes numbness in the affected leg. The term 'Gridhrasi' originates from 'Gridhra' (Vulture), as the patient's gait often resembles the altered walk of a vulture due to the severe pain."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Sharp, shooting pain from the lower back to the leg",
        "Numbness or tingling sensation in the toes/foot",
        "Weakness in the affected leg",
        "Pain that exacerbates while sitting, coughing, or sneezing",
        "Stiffness in the lower back and hips",
        "Difficulty in walking or standing up"
      ]
    },
    treatments: {
      title: "Our Ayurvedic Treatments for Sciatica",
      subtitle: "We employ a multi-dimensional approach to relieve nerve compression, reduce inflammation, and restore mobility.",
      items: [
        { title: "Kati Basti", desc: "A localized oil-retention therapy to nourish nerves and relieve muscle spasms.", icon: "Activity" },
        { title: "Agnikarma", desc: "Specialized heat treatment providing rapid relief from sharp sciatic nerve pain.", icon: "ShieldAlert" },
        { title: "Viddhakarma", desc: "Micro-puncturing technique to release Vata and improve blood circulation.", icon: "Activity" },
        { title: "Basti Chikitsa", desc: "Medicated enema therapy to deeply detoxify and pacify Vata dosha.", icon: "Activity" }
      ]
    }
  },
  "slip-disc": {
    id: "slip-disc",
    name: "Slip Disc",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Slip Disc | Non-Surgical Relief",
      description: "Non-surgical Ayurvedic treatment for herniated or bulging discs. Relieve spinal pain naturally with our specialized therapies.",
      keywords: "slip disc treatment, herniated disc Ayurveda, Ayurvedic spine care, Kati Basti"
    },
    hero: {
      title: "Non-Surgical Ayurvedic Treatment for Slip Disc",
      description: "Avoid surgery with our targeted Ayurvedic interventions. We focus on reducing inflammation, strengthening spinal muscles, and relieving nerve compression through Panchakarma and herbal remedies.",
      image: "https://images.unsplash.com/photo-1588286840104-e4f62bf98311?auto=format&fit=crop&q=80&w=1200"
    },
    about: {
      title: "What is a Slip Disc?",
      paragraphs: [
        "A slip disc, or herniated disc, occurs when the soft inner core of a spinal disc pushes through the tough outer layer, pressing against neighboring nerves and causing significant pain.",
        "Ayurveda attributes spinal conditions to the aggravation of Vata dosha, leading to the degeneration of bodily tissues (Dhatus). Our approach focuses on pacifying Vata, repairing tissue damage, and restoring structural flexibility."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Severe, continuous back pain",
        "Pain radiating to the arms or legs",
        "Numbness and tingling in extremities",
        "Muscle weakness",
        "Pain worsening with movement or bending"
      ]
    },
    treatments: {
      title: "Our Ayurvedic Spine Care",
      subtitle: "Holistic treatments designed to decompress nerves and strengthen the spine.",
      items: [
        { title: "Prishta Basti", desc: "Oil-retention therapy over the spine to nourish intervertebral discs.", icon: "Activity" },
        { title: "Pinda Sweda", desc: "Herbal bolus massage to reduce inflammation and relax muscles.", icon: "Activity" },
        { title: "Specific Herbal Medicines", desc: "To promote bone health and reduce nerve irritation.", icon: "ShieldAlert" },
        { title: "Eranda Taila therapy", desc: "Therapeutic application to manage severe Vata disorders affecting the spine.", icon: "Droplets" }
      ]
    }
  },
  "osteoarthritis": {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    ayurvedicName: "Sandhigata Vata",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Osteoarthritis | Joint Health",
      description: "Naturally manage Osteoarthritis (Sandhigata Vata) with Ayurveda. Improve joint mobility and relieve pain with Janu Basti and more.",
      keywords: "osteoarthritis treatment, sandhigata vata, knee pain ayurveda, joint care"
    },
    hero: {
      title: "Holistic Ayurvedic Management for Osteoarthritis",
      description: "Rebuild your joint health naturally. Our comprehensive treatments address wear and tear by nourishing joint capsules, reducing inflammation, and balancing the doshas.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1200"
    },
    about: {
      title: "Understanding Osteoarthritis",
      paragraphs: [
        "Osteoarthritis is a degenerative joint disease characterized by the breakdown of cartilage, causing pain, swelling, and stiffness, particularly in weight-bearing joints like the knees.",
        "In Ayurveda, this is known as Sandhigata Vata. As we age, aggravated Vata dosha causes drying and depletion of the synovial fluid (Shleshaka Kapha), resulting in friction and pain in the joints."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Joint pain during or after movement",
        "Stiffness, particularly upon waking",
        "Loss of flexibility and limited range of motion",
        "Grating sensation or clicking sounds when moving",
        "Bone spurs or swelling around the joint"
      ]
    },
    treatments: {
      title: "Integrative Joint Therapies",
      subtitle: "Focused on lubrication, pain relief, and strengthening the surrounding muscles.",
      items: [
        { title: "Janu Basti", desc: "Knee oil-retention therapy to deeply lubricate and repair joint tissues.", icon: "Activity" },
        { title: "Abhyanga", desc: "Full body oil massage to improve circulation and reduce total body Vata.", icon: "Droplets" },
        { title: "Upanaha (Poultice)", desc: "Warm herbal poultice to reduce swelling and improve mobility.", icon: "Activity" },
        { title: "Rasayana Herbs", desc: "Rejuvenating herbs like Ashwagandha and Shallaki to promote tissue regeneration.", icon: "ShieldAlert" }
      ]
    }
  },
  "pcod-pcos": {
    id: "pcod-pcos",
    name: "PCOD / PCOS",
    category: "Women's Health & Fertility",
    seo: {
      title: "Ayurvedic Treatment for PCOD & PCOS | Natural Hormonal Balance",
      description: "Manage PCOS/PCOD naturally with Ayurveda. Restore hormonal balance, regulate cycles, and support fertility.",
      keywords: "PCOS treatment Ayurveda, PCOD natural cure, hormonal imbalance, fertility support"
    },
    hero: {
      title: "Natural Hormonal Balance for PCOD & PCOS",
      description: "Find natural rhythm and wellness. We treat the root cause of PCOD & PCOS by detoxifying the body, regulating metabolism, and balancing female hormones using time-tested Ayurvedic protocols.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200"
    },
    about: {
      title: "Understanding PCOD & PCOS",
      paragraphs: [
        "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles, weight gain, and fertility issues.",
        "Ayurveda views PCOS as an imbalance of all three doshas, but primarily Kapha, which blocks the reproductive channels (Artavavaha Srotas) and affects normal ovarian function."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Irregular, heavy, or missed periods",
        "Excess facial and body hair growth (Hirsutism)",
        "Severe acne and skin darkening",
        "Weight gain or difficulty losing weight",
        "Thinning hair or hair loss from the scalp",
        "Difficulty conceiving"
      ]
    },
    treatments: {
      title: "Our Holistic Approach to PCOS",
      subtitle: "Restoring metabolic fire and clearing reproductive channels.",
      items: [
        { title: "Vamana & Virechana", desc: "Bio-cleansing therapies to eliminate deep-seated toxins and clear Kapha blockages.", icon: "Activity" },
        { title: "Uttarbasti", desc: "Specialized urogenital therapy to directly nourish and strengthen the uterus and ovaries.", icon: "Baby" },
        { title: "Metabolic Correction", desc: "Dietary guidance and digestive herbs (Deepana-Pachana) to correct insulin resistance.", icon: "Activity" },
        { title: "Menstrual Regulation", desc: "Herbs like Shatavari and Ashokarishta to harmonize hormones naturally.", icon: "ShieldAlert" }
      ]
    }
  },
  "psoriasis": {
    id: "psoriasis",
    name: "Psoriasis",
    category: "Skin, Hair & Aesthetic Wellness",
    seo: {
      title: "Ayurvedic Treatment for Psoriasis | Natural Skin Healing",
      description: "Effective Ayurvedic therapies for Psoriasis. Detoxify your blood, reduce inflammation, and restore healthy skin.",
      keywords: "Psoriasis Ayurvedic treatment, natural skin care, clear psoriasis, Raktamokshan"
    },
    hero: {
      title: "Holistic Healing for Psoriasis",
      description: "Achieve clear, healthy skin from within. Our root-cause approach to Psoriasis combines systemic detoxification, dietary recalibration, and topical therapies.",
      image: "https://images.unsplash.com/photo-1615287413695-1f96e4fc3b92?auto=format&fit=crop&q=80&w=1200"
    },
    about: {
      title: "Understanding Psoriasis",
      paragraphs: [
        "Psoriasis is a chronic autoimmune condition that speeds up the lifecycle of skin cells, causing cells to build up rapidly on the surface of the skin. The extra skin cells form scales and red patches that are itchy and sometimes painful.",
        "Ayurveda considers Psoriasis to be caused by the vitiation of Vata and Kapha doshas, along with the accumulation of deep-seated toxins in the blood (Rakta dhatu) and skin (Twak)."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Red patches of skin covered with thick, silvery scales",
        "Dry, cracked skin that may bleed or itch",
        "Itching, burning, or soreness",
        "Thickened, pitted, or ridged nails",
        "Swollen and stiff joints (Psoriatic arthritis)"
      ]
    },
    treatments: {
      title: "Ayurvedic Detoxification for Psoriasis",
      subtitle: "Deep cleansing to eliminate blood impurities and pacify doshas.",
      items: [
        { title: "Virechana", desc: "Therapeutic purgation to remove Pitta-predominant toxins from the liver and blood.", icon: "Activity" },
        { title: "Raktamokshan", desc: "Blood-letting therapy to release localized impurities and accelerate skin healing.", icon: "Droplets" },
        { title: "Takra Dhara", desc: "Continuous pouring of medicated buttermilk over the head to relieve stress and cool the system.", icon: "Wind" },
        { title: "Dietary Protocols", desc: "Strict anti-inflammatory diet avoiding incompatible foods (Viruddha Ahara).", icon: "Activity" }
      ]
    }
  }
};

export function getConditionData(slug: string): ConditionData {
  const specificData = specificConditions[slug];
  if (specificData) return specificData;

  // Generate generic but professional data for missing conditions
  const nameParts = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const readableName = nameParts.join(' ');

  // Categorization logic for dynamic generic images
  let categoryStr = "Specialized Ayurvedic Treatment";
  let targetImage = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"; // default

  if (/(joint|arthrit|osteo|knee|spine|sciatica|disc|spondylitis|back|neck|shoulder|elbow)/i.test(slug)) {
    categoryStr = "Musculoskeletal & Joint Care";
    targetImage = "https://drive.google.com/thumbnail?id=1FhWwAavrUV07zP-votO8uSljAp0f0WSn&sz=w1200";
  } else if (/(digest|acid|gas|constipation|bowel|diarrhea|piles|fissure|liver|jaundice|cirrhosis|diabetes|thyroid|cholesterol|obesity|apptit)/i.test(slug)) {
    categoryStr = "Digestive & Metabolic Health";
    targetImage = "https://drive.google.com/thumbnail?id=1IersAK5TZ2WKQuASTaKw8y0zvQ6nQJXl&sz=w1200";
  } else if (/(skin|psoriasis|eczema|vitiligo|acne|pigment|allergies|hair|alopecia|dandruff)/i.test(slug)) {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage = "https://images.unsplash.com/photo-1615287413695-1f96e4fc3b92?auto=format&fit=crop&q=80&w=1200";
  } else if (/(pcod|pcos|menstru|fertil|miscarriage|postpartum|lactat|discharge|dysmenorrhea|women)/i.test(slug)) {
    categoryStr = "Women’s Health & Fertility";
    targetImage = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200";
  } else if (/(stress|anxiety|insomnia|irritability|migraine|epilepsy|parkinson|stroke|paralysis|memory|concentration|adhd|autism|brain|neuro)/i.test(slug)) {
    categoryStr = "Mental Health & Neurology";
    targetImage = "https://drive.google.com/thumbnail?id=1jSQ-E6gnKoMksygLjoGggogu3VsXszHa&sz=w1200";
  } else if (/(sinus|cold|flu|asthma|bronchitis|allerg|respiratory|breath)/i.test(slug)) {
    categoryStr = "Respiratory & Immune Health";
    targetImage = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200";
  } else if (/(erect|ejaculat|sperm|kidney|uti|prostate|bladder|urinary|incontin)/i.test(slug)) {
    categoryStr = "Men’s Health & Urology";
    targetImage = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200";
  } else if (/(child|bed-wetting|growth)/i.test(slug)) {
    categoryStr = "Pediatric Healthcare";
    targetImage = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200";
  }

  return {
    id: slug,
    name: readableName,
    category: categoryStr,
    seo: {
      title: `Ayurvedic Treatment for ${readableName} | Natural Healing`,
      description: `Discover holistic Ayurvedic treatments for ${readableName}. We address the root cause for long-lasting health and wellness.`,
      keywords: `${readableName} treatment, Ayurveda for ${readableName}, natural cure, holistic healing`
    },
    hero: {
      title: `Integrative Ayurvedic Care for ${readableName}`,
      description: `Experience a comprehensive, root-cause approach to managing ${readableName}. Our personalized protocols combine ancient wisdom with clinical precision to restore your body's natural balance.`,
      image: targetImage
    },
    about: {
      title: `Understanding ${readableName}`,
      paragraphs: [
        `${readableName} requires a personalized approach to accurately identify the underlying systemic imbalances. In Ayurveda, we look beyond the superficial symptoms to address the true root cause.`,
        `By evaluating your unique mind-body constitution (Prakriti) and the state of your doshas, our experts craft a targeted regimen to detoxify, repair, and rejuvenate the affected tissues.`
      ],
      symptomsTitle: "Key Indicators & Symptoms",
      symptoms: [
        "Chronic discomfort or functional disruption",
        "Imbalance in energy or digestive levels",
        "Systemic inflammation or localized pain",
        "Disruption of daily routines and wellness",
        "Symptoms that aggravate with specific lifestyle triggers"
      ]
    },
    treatments: {
      title: `Our Approach to Managing ${readableName}`,
      subtitle: "A multi-dimensional therapy plan designed for deep healing.",
      items: [
        { title: "Clinical Assessment", desc: "Detailed pulse diagnosis and dosha evaluation to identify the root cause.", icon: "Stethoscope" },
        { title: "Panchakarma Therapies", desc: "Targeted detoxification procedures to remove deep-seated impurities.", icon: "Droplets" },
        { title: "Customized Herbal Formulations", desc: "Precision-crafted medications to restore balance and nourish tissues.", icon: "ShieldAlert" },
        { title: "Diet & Lifestyle Correction", desc: "Personalized dietary regimens and daily routines to sustain long-term health.", icon: "Activity" }
      ]
    }
  };
}
