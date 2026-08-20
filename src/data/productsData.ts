export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  category: string;
  image: string;
  quantity: string;
  price?: string;
  inStock: boolean;
  featured: boolean;
  exclusiveForPatients?: boolean;
  exclusivityNotice?: string;
  patientBadge?: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: {
    title: string;
    description: string;
  }[];
  keyIngredients: {
    name: string;
    botanicalName?: string;
    role: string;
  }[];
  indications: string[];
  dosage: string;
  howToUse: string;
  storage: string;
  badges: string[];
  precautions?: string[];
  classicalReference?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "rakta-b",
    name: "Rakta-B",
    hindiName: "रक्त – बी",
    tagline: "Advanced Blood Purifier & Dermal Revitalizer for Chronic Skin Conditions",
    category: "Classical Blood Purifiers (Rakta Shodhana)",
    image: "/rakta-b.png",
    quantity: "60 Tablets",
    price: "Consult for Pricing / Dispensation",
    inStock: true,
    featured: true,
    exclusiveForPatients: true,
    patientBadge: "Exclusive for Sattvic Patients",
    exclusivityNotice: "Formulated and dispensed exclusively for registered patients of Sattvic Advanced Ayurveda under physician evaluation.",
    shortDescription: "A potent, classical Ayurvedic formulation designed to purify the bloodstream (Rakta Dhatu), pacify aggravated Pitta-Kapha doshas, and provide lasting relief from psoriasis, eczema, dermatitis, acne, and chronic pruritus.",
    fullDescription: "Sattvic Rakta-B is a specialized classical Ayurvedic blood-purifying formulation (Rakta Shodhaka) crafted with time-honored botanical extracts at Sattvic Advanced Ayurveda & Panchakarma Centre. Formulated specifically to eliminate deep-seated metabolic endotoxins (Ama) circulating in the microvascular network, Rakta-B addresses the root etiology of chronic dermatological diseases (Kushtha Roga). By soothing internal metabolic heat, supporting hepatic and splenic clearance, and optimizing dermal microcirculation, it restores the skin's natural barrier, promotes cellular renewal, and delivers clear, radiant skin.",
    keyBenefits: [
      {
        title: "Psoriasis & Dermatitis Management",
        description: "Helps calm rapid epidermal cell proliferation, significantly reducing silvery scaling, dry plaques, erythema (redness), and persistent inflammation."
      },
      {
        title: "Relief from Eczema & Pruritus (Severe Itching)",
        description: "Alleviates stubborn itching (Kandu) and burning sensations (Daha), preventing secondary skin infections and accelerating dermal healing."
      },
      {
        title: "Acne, Pimples & Blemish Clearance",
        description: "Flushes accumulated toxins from skin micro-channels (Srotas), reducing cystic breakouts, sebum imbalance, and post-acne hyperpigmentation."
      },
      {
        title: "Deep Systemic Blood Purification (Rakta Shodhana)",
        description: "Neutralizes circulating endotoxins in the blood tissue (Rakta Dhatu), restoring the natural biological balance of Pitta and Kapha doshas."
      },
      {
        title: "Hepato-Splenic Support & Toxin Elimination",
        description: "Promotes healthy liver (Yakrit) and spleen (Pleeha) functions, accelerating the natural metabolic breakdown and excretion of waste metabolites."
      },
      {
        title: "Radiant Skin Tone & Complexion Enhancement (Varnya)",
        description: "Nourishes the underlying layers of the skin (Twak), supporting collagen synthesis, even tone, and natural glow from within."
      }
    ],
    keyIngredients: [
      {
        name: "Manjistha",
        botanicalName: "Rubia cordifolia",
        role: "The premier Ayurvedic blood purifier (Rakta Shodhaka) that clears lymphatic stagnation and eliminates deep-seated skin toxins."
      },
      {
        name: "Sariva / Anantamul",
        botanicalName: "Hemidesmus indicus",
        role: "Renowned cooling and anti-inflammatory herb that pacifies excessive Pitta heat and calms burning sensations on the skin."
      },
      {
        name: "Guduchi",
        botanicalName: "Tinospora cordifolia",
        role: "Potent immunomodulator (Rasayana) that boosts skin cellular resistance against recurrent infections and allergies."
      },
      {
        name: "Haridra (Turmeric)",
        botanicalName: "Curcuma longa",
        role: "Natural antimicrobial and antioxidant that accelerates wound healing and reduces dermal swelling."
      },
      {
        name: "Saptaparna / Sappan Wood",
        botanicalName: "Alstonia scholaris / Caesalpinia sappan",
        role: "Classical bitter astringent that tones vascular tissue, reduces weeping lesions, and purifies lymphatic channels."
      },
      {
        name: "Amalaki (Indian Gooseberry)",
        botanicalName: "Emblica officinalis",
        role: "Rich in natural bioflavonoids and Vitamin C, cooling internal heat and rejuvenating dermal connective tissue."
      }
    ],
    indications: [
      "Psoriasis (Kitibha / Ekakushtha)",
      "Eczema & Atopic Dermatitis (Vicharchika)",
      "Chronic Itching & Urticaria (Kandu / Sheetapitta)",
      "Stubborn Acne & Pimples (Yuvanapidika)",
      "Skin Allergies & Eruptions",
      "Blood Impurities & Toxin Accumulation (Raktadushti)",
      "Hyperpigmentation & Uneven Skin Tone"
    ],
    dosage: "1 to 2 tablets twice daily, or as directed by an Ayurvedic Physician.",
    howToUse: "Take 1 to 2 tablets after meals with lukewarm water, or as prescribed by your Sattvic Ayurveda doctor. Consistent usage for 8 to 12 weeks is recommended for deep-seated chronic skin conditions.",
    storage: "Store in a cool, hygienic, dry place away from direct sunlight and moisture. Keep the container tightly capped.",
    badges: [
      "100% Natural Botanicals",
      "Traditionally Trusted Formulation",
      "Holistic Ayurvedic Care",
      "No Added Preservatives",
      "Physician Formulated"
    ],
    precautions: [
      "Pregnant or lactating women should consult their Ayurvedic physician prior to use.",
      "Store out of reach of children.",
      "Follow dietary advice (avoid excessive sour, salty, and spicy foods during blood-purifying therapy)."
    ],
    classicalReference: "Formulated adhering to classical Ayurvedic pharmacopoeia guidelines for Rakta Shodhana (Blood Purification) and Kushtha Chikitsa."
  },
  {
    id: "shatavari",
    name: "Shatavari",
    hindiName: "शतावरी",
    tagline: "Classical Women's Wellness & Rejuvenative Rasayana for Hormonal Balance, Lactation & Vitality",
    category: "Women's Wellness & Rejuvenation (Stree Roga & Rasayana)",
    image: "/shatavari.png",
    quantity: "250 GM",
    price: "Consult for Pricing / Dispensation",
    inStock: true,
    featured: true,
    exclusiveForPatients: true,
    patientBadge: "Exclusive for Sattvic Patients",
    exclusivityNotice: "Formulated and dispensed exclusively for registered patients of Sattvic Advanced Ayurveda under physician evaluation.",
    shortDescription: "Pure, premium classical Shatavari (Asparagus racemosus) formulation specifically crafted to support women's reproductive health, hormonal balance, lactation, digestive cooling, and full-body vitality (Rasayana).",
    fullDescription: "Sattvic Shatavari (शतावरी - Asparagus racemosus) is revered in classical Ayurvedic literature as the 'Queen of Herbs' for women's reproductive vitality and holistic wellness. Literally translated as 'she who possesses a hundred husbands,' Shatavari is a premier adaptogen and Rasayana. Sourced from high-altitude potent roots and traditionally processed, it provides natural phytoestrogens to balance hormonal fluctuations, soothe the digestive tract against excess Pitta heat (hyperacidity and ulcers), boost breast milk production (Stanyajanana), and enhance immune resilience (Ojas) for women at all life stages—from adolescence to motherhood and menopause.",
    keyBenefits: [
      {
        title: "Female Hormonal Balance & Menstrual Health",
        description: "Provides natural plant-derived saponins (shatavarins) that support healthy estrogen balance, regular menstrual cycles, and ease PMS symptoms and cramps."
      },
      {
        title: "Enhances Healthy Breast Milk Production (Stanyajanana)",
        description: "A premier Ayurvedic galactagogue widely recommended for lactating mothers to naturally increase milk supply and improve nutritional quality."
      },
      {
        title: "Menopausal Comfort & Hot Flash Relief",
        description: "Naturally cools internal heat and balances fluctuating hormones, reducing hot flashes, night sweats, irritability, and vaginal dryness."
      },
      {
        title: "Full-Body Rejuvenation & Vitality (Rasayana)",
        description: "Nourishes all seven biological tissue layers (Sapta Dhatus) and builds Ojas (life essence), combating chronic physical fatigue and weakness."
      },
      {
        title: "Digestive Soothing & Hyperacidity Relief (Amlapitta)",
        description: "Its cooling (Sheeta) and unctuous (Snigdha) properties soothe the gastric mucosal lining, relieving hyperacidity, acid reflux, gastritis, and ulcers."
      },
      {
        title: "Nervous System Calming & Stress Adaptation",
        description: "Acts as a gentle adaptogen that calms aggravated Vata and Pitta, promoting emotional tranquility, restful sleep, and mental clarity."
      }
    ],
    keyIngredients: [
      {
        name: "Pure Shatavari Root",
        botanicalName: "Asparagus racemosus",
        role: "100% pure, potent root extract/powder rich in steroidal saponins (shatavarins I-IV), isoflavones, bioflavonoids, and mucilaginous compounds that nourish female reproductive tissue and strengthen immunity."
      },
      {
        name: "Classical Bioactive Synergists",
        botanicalName: "Processed in Classical Ayurvedic Mediums",
        role: "Enhanced through traditional Shodhana and processing to maximize bioavailability, palatability, and deep cellular absorption."
      }
    ],
    indications: [
      "Irregular Periods & Menstrual Discomfort (Kashtartava / Artavadushti)",
      "Postpartum Lactation Support & Inadequate Milk (Stanyakshaya)",
      "Menopausal Syndrome, Hot Flashes & Mood Swings (Rajonivrittilakshana)",
      "PCOS / PCOD & Hormonal Irregularities",
      "Hyperacidity, Heartburn & Peptic Discomfort (Amlapitta)",
      "General Debility, Low Stamina & Weak Immunity (Dhatukshaya / Ojakshaya)",
      "High Pitta Heat & Burning Sensations"
    ],
    dosage: "3 to 6 grams (approx. ½ to 1 teaspoon) once or twice daily, or as directed by an Ayurvedic Physician.",
    howToUse: "Take ½ to 1 teaspoon mixed in a cup of warm milk (traditionally recommended for best absorption) or lukewarm water, once or twice daily after food. Can also be combined with a spoonful of pure ghee or honey.",
    storage: "Store in a cool, hygienic, dry place away from direct moisture and sunlight. Keep container tightly sealed after each use.",
    badges: [
      "100% Natural",
      "Traditionally Trusted",
      "Women's Wellness",
      "No Added Preservatives",
      "Pure Root Formulation"
    ],
    precautions: [
      "Individuals with known asparagus allergies should avoid.",
      "If taking specific hormone-sensitive therapies, consult your Ayurvedic physician.",
      "Keep tightly closed in a dry environment to avoid moisture clumping."
    ],
    classicalReference: "Revered in Charaka Samhita (Vayasthapana & Balya Mahakashaya), Sushruta Samhita, and Bhavaprakasha Nighantu (Guduchyadi Varga)."
  }
];
