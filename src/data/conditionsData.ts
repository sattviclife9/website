import {
  Activity,
  ShieldAlert,
  Droplets,
  Brain,
  Wind,
  Baby,
  Stethoscope,
} from "lucide-react";

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
      icon:
        | "Activity"
        | "ShieldAlert"
        | "Droplets"
        | "Brain"
        | "Wind"
        | "Baby"
        | "Stethoscope";
    }[];
  };
}

export const specificConditions: Record<string, ConditionData> = {
  "bed-wetting": {
    id: "bed-wetting",
    name: "Bed Wetting",
    ayurvedicName: "Shayya Mutra",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Bed Wetting in Children | Shayya Mutra",
      description: "Treat bed wetting (Shayya Mutra) naturally with Ayurvedic therapies. Strengthen urinary control, calm the nervous system, and build your child's confidence.",
      keywords: "Ayurvedic treatment for bed wetting, Shayya Mutra, natural remedy for enuresis, kids bed wetting solutions, strengthen bladder control in children",
    },
    hero: {
      title: "Natural Solutions for Bed Wetting",
      description: "Address the physical and psychological root causes of nighttime bed wetting (Enuresis). Our Ayurvedic approach strengthens bladder control and calms the nervous system without harsh medications.",
      image: "https://drive.google.com/thumbnail?id=1w5N4Unq14N19AmyjpIGUlWm-KUGmGGez&sz=w1200",
    },
    about: {
      title: "Understanding Bed Wetting (Shayya Mutra)",
      paragraphs: [
        "Bed wetting (Nocturnal Enuresis) is an involuntary leakage of urine during sleep. While common in very young children, persistent bed wetting in older children can cause distress, anxiety, and impact their self-esteem.",
        "Ayurveda identifies bed wetting as 'Shayya Mutra'. It is often linked to an imbalance of Apana Vata (which controls urine elimination), a weak bladder sphincter, or deep-seated fear and psychological stress (aggravated Prana Vata). Other underlying factors can include intestinal worms or chronic constipation."
      ],
      symptomsTitle: "Common Underlying Causes",
      symptoms: [
        "Deep sleep patterns preventing the child from waking up to a full bladder",
        "A physically small or weak bladder capacity",
        "Psychological stress, anxiety, or changes in home/school routines",
        "Constipation putting pressure on the bladder",
        "Presence of intestinal worms (Krimi) causing irritation"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Bed Wetting",
      subtitle: "Strengthening the bladder and relieving underlying stress.",
      items: [
        {
          title: "Nerve & Muscle Tonics",
          desc: "Herbs like Shilajit, Ashwagandha, and Brahmi that nourish the nervous system, reduce anxiety, and improve nerve control over the bladder sphincter.",
          icon: "Brain"
        },
        {
          title: "Addressing Digestion & Krimi (Worms)",
          desc: "If intestinal worms or constipation are the root cause, gentle de-worming therapies and digestive correctors (like Vidangarishta) are administered.",
          icon: "Activity"
        },
        {
          title: "Counseling & Lifestyle Adjustments",
          desc: "Guidance on fluid intake management before bedtime, establishing regular bathroom routines, and providing emotional support without shaming the child.",
          icon: "Stethoscope"
        },
        {
          title: "Warm Oil Applications",
          desc: "Very gentle massage of warm Vata-pacifying oils on the lower abdomen and lower back to strengthen the local muscles and calm Apana Vata.",
          icon: "Droplets"
        }
      ]
    }
  },
  "concentration-support": {
    id: "concentration-support",
    name: "Concentration Support",
    ayurvedicName: "Medhya Rasayana",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Concentration Support in Children",
      description: "Enhance your child's memory, focus, and concentration naturally with Ayurvedic Medhya Rasayana treatments. Safe and effective herbal support for brain health.",
      keywords: "Ayurvedic herbs for child concentration, Medhya Rasayana, improve kids focus naturally, brain tonics for children, memory booster for kids",
    },
    hero: {
      title: "Enhancing Focus and Cognitive Potential",
      description: "Support your child's learning abilities, memory, and attention span with safe, natural Ayurvedic brain tonics and therapies designed to nourish the nervous system.",
      image: "https://drive.google.com/thumbnail?id=1b3MZxc-QQ4vrOgNSld2m-zqENArJrtQV&sz=w1200",
    },
    about: {
      title: "Understanding Concentration Issues in Children",
      paragraphs: [
        "Many children experience difficulties with focus, short attention spans, or memory retention. These challenges can cause frustration in learning environments and impact academic performance and self-esteem.",
        "In Ayurveda, cognitive functions like learning (Dhi), retention (Dhriti), and memory (Smriti) are governed by Vata dosha and supported by pure Kapha (Ojas). When excess Vata creates restlessness, or when Ama (toxins) blocks the mind's clarity, it results in poor concentration. Ayurvedic treatments aim to ground Vata and nourish the brain tissues (Majja Dhatu)."
      ],
      symptomsTitle: "Common Signs of Poor Concentration",
      symptoms: [
        "Difficulty staying focused on a single task or schoolwork",
        "Easily distracted by external stimuli",
        "Forgetfulness or trouble retaining new information",
        "Restlessness and inability to sit still",
        "Frequent daydreaming or spacing out during conversations"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Cognitive Support",
      subtitle: "Nourishing the brain and calming a restless mind.",
      items: [
        {
          title: "Medhya Rasayana (Brain Tonics)",
          desc: "Potent herbs known as 'Medhya' like Brahmi, Shankhpushpi, and Ashwagandha are used to naturally enhance intelligence, memory, and focus.",
          icon: "Brain"
        },
        {
          title: "Swarnaprashana",
          desc: "A classical Ayurvedic immunization that is highly effective in promoting intellect, memory, and overall developmental milestones in children.",
          icon: "ShieldAlert"
        },
        {
          title: "Shirodhara (Relaxation Therapy)",
          desc: "For highly anxious or hyperactive older children, a gentle pouring of warm herbal oil on the forehead helps profoundly calm the central nervous system.",
          icon: "Droplets"
        },
        {
          title: "Dietary Adjustments",
          desc: "Emphasizing brain-nourishing foods like clarified butter (Ghee), almonds, and walnuts, while reducing processed sugars that cause energy and focus crashes.",
          icon: "Activity"
        }
      ]
    }
  },
  "digestive-weakness": {
    id: "digestive-weakness",
    name: "Digestive Weakness",
    ayurvedicName: "Agnimandya / Grahani",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Digestive Weakness in Children",
      description: "Treat your child's digestive weakness naturally with Ayurveda. Resolve tummy aches, poor metabolism, and indigestion safely and effectively.",
      keywords: "Ayurvedic treatment for digestive weakness in kids, Agnimandya, child digestion problems, natural remedy for stomach ache in children",
    },
    hero: {
      title: "Gentle Care for Little Tummies",
      description: "Resolve frequent stomach aches, irregular bowel movements, and overall digestive weakness in children with safe, natural Ayurvedic therapies.",
      image: "https://drive.google.com/thumbnail?id=1Brj67G2V4x0Im57Usb0PK9hgoLhXUId6&sz=w1200",
    },
    about: {
      title: "Understanding Digestive Weakness in Children",
      paragraphs: [
        "Digestive weakness in children can manifest as frequent tummy aches, gas, bloating, and irregular bowel habits (either constipation or loose stools). It disrupts their comfort, sleep, and nutrient absorption.",
        "In Ayurveda, optimal health begins in the gut. Digestive weakness is known as 'Agnimandya' (low digestive fire). When a child's Agni fluctuates due to incorrect eating habits, stress, or eating heavily processed foods, it leads to the creation of 'Ama' (toxins). This Ama blocks the body's channels, causing discomfort and preventing proper nourishment."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Frequent stomach aches or cramps",
        "Excessive gas and bloating",
        "Irregular bowel movements (constipation or diarrhea)",
        "Nausea or feeling uncomfortably full",
        "Undigested food particles in stools"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Digestive Weakness",
      subtitle: "Restoring the digestive fire and clearing toxins smoothly.",
      items: [
        {
          title: "Deepana & Pachana",
          desc: "Carminative and digestive herbs to safely stimulate the child's digestive fire (Agni) and burn away accumulated toxins (Ama).",
          icon: "Activity"
        },
        {
          title: "Mild Cleansing (Vatanulomana)",
          desc: "Using gentle herbs like Triphala or fennel to ensure proper downward movement of Vata, relieving gas, bloating, and constipation.",
          icon: "Baby"
        },
        {
          title: "Gut-Healing Formulations",
          desc: "Custom herbal preparations that soothe the irritated stomach lining and promote the growth of healthy gut fora.",
          icon: "ShieldAlert"
        },
        {
          title: "Dietary Modifications",
          desc: "Transitioning to warm, freshly cooked, easily digestible foods while minimizing heavy, cold, and processed items.",
          icon: "Activity"
        }
      ]
    }
  },
  "poor-appetite": {
    id: "poor-appetite",
    name: "Poor Appetite",
    ayurvedicName: "Agnimandya / Aruchi",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Poor Appetite in Children | Agnimandya",
      description: "Improve your child's appetite naturally with Ayurvedic treatments for Agnimandya. Safe, effective herbs to boost digestion and enhance healthy growth.",
      keywords: "Ayurvedic treatment for poor appetite in kids, Agnimandya, child not eating, increase kids appetite naturally, digestive health for children",
    },
    hero: {
      title: "Boost Healthy Appetite Naturally",
      description: "Address sluggish digestion and low appetite in children with gentle Ayurvedic care. We help rekindle their natural hunger and support optimal growth and nourishment.",
      image: "https://drive.google.com/thumbnail?id=1KYkeovZO-X7IG45pxneMou-ww8MjZjFH&sz=w1200",
    },
    about: {
      title: "Understanding Poor Appetite (Agnimandya)",
      paragraphs: [
        "A consistently poor appetite in children can be a significant cause of concern for parents. It can lead to nutritional deficiencies, stunted growth, fatigue, and lowered immunity if left unaddressed.",
        "In Ayurveda, poor appetite is primarily linked to 'Agnimandya'—a weakened or sluggish digestive fire (Jatharagni). This often results from imbalances in Kapha dosha or the accumulation of poorly digested food (Ama), which suppresses natural hunger signals."
      ],
      symptomsTitle: "Common Signs of Sluggish Digestion",
      symptoms: [
        "Lack of interest in food or pushing meals away",
        "Feeling full after eating a very small amount",
        "Complaints of a heavy or bloated stomach",
        "Lethargy, unexplained tiredness, or crankiness",
        "Irregular bowel movements or minor stomach aches"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Improving Appetite",
      subtitle: "Rekindling the digestive fire and clearing metabolic blockages.",
      items: [
        {
          title: "Deepana & Pachana (Digestive Herbs)",
          desc: "Gentle herbal formulations containing mild spices like Musta, Jeera (Cumin), and Pipalli to safely stimulate Agni and digest Ama.",
          icon: "Activity"
        },
        {
          title: "Taste Enhancement (Rochana)",
          desc: "Use of palatable herbal syrups and digestive drops that enhance taste perception and naturally trigger saliva and stomach acids.",
          icon: "Baby"
        },
        {
          title: "Detoxifying Therapies",
          desc: "Very mild, kid-friendly detoxification practices if necessary to clear excess Kapha from the upper digestive tract.",
          icon: "Droplets"
        },
        {
          title: "Dietary & Routine Corrections",
          desc: "Establishing fixed meal times and removing frequent unhealthy snacking to allow the digestive fire to build naturally between meals.",
          icon: "Brain"
        }
      ]
    }
  },
  "seasonal-allergies": {
    id: "seasonal-allergies",
    name: "Seasonal Allergies",
    ayurvedicName: "Vata-Kapha Pratishyaya / Asatmya",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Seasonal Allergies in Children",
      description: "Effectively manage your child's seasonal allergies with natural Ayurvedic treatments. Reduce sensitivities and build respiratory resistance safely.",
      keywords: "Ayurvedic treatment for kids allergies, seasonal allergies natural remedy, Asatmya, pediatric immunity, allergy prevention",
    },
    hero: {
      title: "Natural Relief from Seasonal Allergies",
      description: "Help your child enjoy every season safely. Our Ayurvedic therapies focus on reducing hypersensitivity and strengthening their natural respiratory defenses against allergens.",
      image: "https://drive.google.com/thumbnail?id=1NYru04O-hsCgk1oJwNA3lnLvrU8Qpaxv&sz=w1200",
    },
    about: {
      title: "Understanding Seasonal Allergies in Children",
      paragraphs: [
        "Seasonal allergies occur when a child's immune system overreacts to outdoor allergens like pollen, mold, or dust, usually during spring, summer, or fall. This heightens histamine release, causing uncomfortable and disruptive symptoms.",
        "In Ayurveda, allergies are a sign of 'Asatmya' (intolerance) and altered immunity (Ojas). When children have accumulated Ama (toxins) and imbalanced Kapha/Vata doshas, they become highly susceptible to changing weather conditions, leading to hyper-reactive respiratory responses."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Itchy, watery, or red eyes",
        "Frequent sneezing and a runny or stuffy nose",
        "Scratchy throat and dry cough",
        "Dark circles under the eyes (allergic shiners)",
        "Tiredness or trouble sleeping due to congestion"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Seasonal Allergies",
      subtitle: "Desensitizing the body naturally and balancing the immune response.",
      items: [
        {
          title: "Detoxification (Ama Pachana)",
          desc: "Gentle elimination of accumulated toxins that aggravate the immune system, making the child less prone to allergic flare-ups.",
          icon: "Activity"
        },
        {
          title: "Immuno-modulator Herbs",
          desc: "Usage of specific herbs like Turmeric (Haridra), Neem, and Guduchi to stabilize the immune reaction and reduce histamine release naturally.",
          icon: "ShieldAlert"
        },
        {
          title: "Nasya (Nasal Drops)",
          desc: "Application of mild medicated oils in the nostrils to physically block allergens, soothe inflamed nasal passages, and clear congestion.",
          icon: "Droplets"
        },
        {
          title: "Respiratory Tonics",
          desc: "Nourishing formulations that heal and strengthen the mucosal lining of the respiratory tract over time.",
          icon: "Wind"
        }
      ]
    }
  },
  "recurrent-colds": {
    id: "recurrent-colds",
    name: "Recurrent Colds",
    ayurvedicName: "Punah Punah Pratishyaya / Bala Kshaya",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Treatment for Recurrent Colds in Children",
      description: "Boost your child's immunity and prevent recurrent colds naturally with Ayurvedic treatments. Safe, effective, and long-lasting relief from frequent infections.",
      keywords: "Ayurvedic treatment for recurrent colds in children, pediatric immunity, natural cold prevention, Bala Kshaya, kids immunity booster",
    },
    hero: {
      title: "Building Strong Immunity Against Colds",
      description: "Protect your child from frequent seasonal sickness. Our Ayurvedic approach builds robust natural immunity, strengthening respiratory health and preventing recurrent infections.",
      image: "https://drive.google.com/thumbnail?id=1fCrB41bvlRVzc8UK6ULcKDdRwE8guIXU&sz=w1200",
    },
    about: {
      title: "Understanding Recurrent Colds",
      paragraphs: [
        "Children are especially susceptible to recurrent colds due to their developing immune systems. Frequent exposure at school or daycare can lead to persistent cycles of runny noses, coughs, and fevers, disrupting their sleep and daily activities.",
        "In Ayurveda, a pediatric tendency for frequent colds indicates a lowered 'Bala' (natural vitality/immunity) and an imbalance in Kapha dosha, which naturally dominates early childhood. Treatment focuses on strengthening the 'Agni' (digestion) and nourishing the 'Ojas' (pure essence of tissues) to build a resilient defense mechanism."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Catching colds frequently (more than typical seasonal changes)",
        "Prolonged recovery times from minor illnesses",
        "Persistent runny or stuffy nose",
        "Frequent low-grade fevers and lethargy",
        "Poor appetite and recurring mild coughs"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Pediatric Immunity",
      subtitle: "Gentle, safe, and effective methods to build your child's resilience.",
      items: [
        {
          title: "Swarnaprashana (Gold Bhasma Drops)",
          desc: "An ancient Ayurvedic immunization technique using medicated ghee and pure gold ash to significantly enhance memory, digestion, and physical strength.",
          icon: "ShieldAlert"
        },
        {
          title: "Agnideepana (Digestive Correction)",
          desc: "Gentle herbal preparations to ensure optimal digestion, as a strong gut is the foundation of a robust immune system in Ayurveda.",
          icon: "Activity"
        },
        {
          title: "Rasayana (Rejuvenative Tonics)",
          desc: "Kid-friendly, palatable herbal jams like specific formulations of Chyawanprash to nourish tissues and defend against respiratory pathogens.",
          icon: "Baby"
        },
        {
          title: "Diet & Lifestyle Guidance",
          desc: "Simple dietary adjustments, emphasizing warm and freshly cooked meals while reducing processed sugars and cold dairy products that accumulate Kapha.",
          icon: "Brain"
        }
      ]
    }
  },
  "neurogenic-bladder": {
    id: "neurogenic-bladder",
    name: "Neurogenic Bladder",
    ayurvedicName: "Vataja Mutrakrichra / Mutraghata",
    category: "Kidney Health",
    seo: {
      title: "Ayurvedic Treatment for Neurogenic Bladder | Mutraghata",
      description: "Manage Neurogenic Bladder effectively with Ayurvedic treatments. Restore neurological control and improve bladder function naturally.",
      keywords: "Ayurvedic treatment for neurogenic bladder, Mutraghata, natural bladder control, Basti treatment, Vataja Mutrakrichra",
    },
    hero: {
      title: "Holistic Care for Neurogenic Bladder",
      description: "Restore healthy bladder function and neurological communication. Our Ayurvedic treatments focus on nourishing the nervous system and regulating Apana Vata for better control.",
      image: "https://drive.google.com/thumbnail?id=1hFrygrVVpSqPybEry-JglrCWQCf-18i3&sz=w1200",
    },
    about: {
      title: "Understanding Neurogenic Bladder",
      paragraphs: [
        "Neurogenic Bladder is a lack of bladder control caused by brain, spinal cord, or nerve problems. This can result in either urinary retention (inability to empty the bladder) or an overactive bladder.",
        "In Ayurveda, this condition represents a severe impairment of 'Apana Vata' (which governs downward movement and elimination), often complicated by damage or weakness in the 'Majja Dhatu' (nervous system). Treatment focuses on reviving nerve communication and restoring standard Vata function."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Inability to sense when the bladder is full",
        "Frequent urinary tract infections (UTIs)",
        "Urinary leakage (incontinence)",
        "Inability to empty the bladder completely (retention)",
        "A constant need to urinate"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Neurogenic Bladder",
      subtitle: "Rejuvenating the nervous system and regulating bladder elimination.",
      items: [
        {
          title: "Basti (Medicated Enema)",
          desc: "The most vital treatment to correct Apana Vata. Specialized Bastis nourish the pelvic nerves and regulate bladder tone.",
          icon: "Activity"
        },
        {
          title: "Shirodhara & Nasya",
          desc: "Therapies directed at stabilizing the central nervous system, reducing stress, and improving brain-to-bladder signaling.",
          icon: "Brain"
        },
        {
          title: "Neuro-tonic Herbs (Medhya Rasayana)",
          desc: "Herbs like Ashwagandha, Brahmi, and Vacha to strengthen nerve tissues and improve neural conductivity.",
          icon: "ShieldAlert"
        },
        {
          title: "Abhyanga & Katibasti",
          desc: "Warm oil therapies applied to the lower back and pelvis to relieve nerve compression and pacify localized Vata.",
          icon: "Droplets"
        }
      ]
    }
  },
  "urinary-incontinence": {
    id: "urinary-incontinence",
    name: "Urinary Incontinence",
    ayurvedicName: "Mutratisara",
    category: "Kidney Health",
    seo: {
      title: "Ayurvedic Treatment for Urinary Incontinence | Mutratisara",
      description: "Manage Urinary Incontinence (Mutratisara) naturally with Ayurvedic treatments. Strengthen pelvic muscles, balance Apana Vata, and regain control over your bladder.",
      keywords: "Ayurvedic treatment for urinary incontinence, Mutratisara, bladder control, natural remedies for incontinence, Apana Vata, pelvic floor strengthening",
    },
    hero: {
      title: "Regain Confidence and Bladder Control",
      description: "Effectively address the root cause of urinary incontinence with targeted Ayurvedic therapies. We help strengthen your pelvic floor and calm bladder hyper-reactivity.",
      image: "https://drive.google.com/thumbnail?id=1hFrygrVVpSqPybEry-JglrCWQCf-18i3&sz=w1200",
    },
    about: {
      title: "Understanding Urinary Incontinence (Mutratisara)",
      paragraphs: [
        "Urinary Incontinence involves the unintentional loss of urine due to a weakened bladder sphincter or overactive bladder muscles. It can significantly impact normal daily life and confidence.",
        "In Ayurveda, this relates to 'Mutratisara' and an imbalance of 'Apana Vata', the dosha responsible for downward elimination. When Apana Vata is aggravated, it leads to a loss of tone and control over the urinary sphincter and bladder tissues."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Leakage of urine upon coughing, sneezing, or laughing",
        "A sudden, intense urge to urinate",
        "Frequent urination, especially during the night",
        "Feeling that the bladder is never fully empty",
        "Inability to hold urine long enough to reach a restroom"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Urinary Incontinence",
      subtitle: "Strengthening tissues and calming the hyperactive Apana Vata.",
      items: [
        {
          title: "Basti (Medicated Enema)",
          desc: "Targeted administration of herbal oils and decoctions to directly nourish the pelvic region and rapidly pacify Apana Vata.",
          icon: "Droplets"
        },
        {
          title: "Pelvic Muscle Strengthening (Yoga & Exercises)",
          desc: "Specific Asanas like Mula Bandha (Root Lock) and Kegel-like exercises to tone the pelvic floor and improve sphincter control.",
          icon: "Activity"
        },
        {
          title: "Herbal Remedies",
          desc: "Potent Ayurvedic herbs like Gokshura, Ashwagandha, and Shilajit that strengthen the urinary tract and nourish reproductive tissues.",
          icon: "ShieldAlert"
        },
        {
          title: "Dietary Adjustments",
          desc: "A Vata-pacifying diet avoiding excessive caffeine, alcohol, and spicy foods that can irritate the bladder.",
          icon: "Activity"
        }
      ]
    }
  },
  "specialized-protocols-for-sle-hashimotos-and-ibd": {
    id: "specialized-protocols-for-sle-hashimotos-and-ibd",
    name: "Specialized Protocols for SLE Hashimoto's and IBD",
    ayurvedicName: "Autoimmune Management",
    category: "Autoimmune Support",
    seo: {
      title: "Ayurvedic Treatment for SLE, Hashimoto's, and IBD",
      description: "Manage Autoimmune Conditions (SLE, Hashimoto's, IBD) effectively with our specialized Ayurvedic protocols. Balance doshas, clear toxins, and boost natural immunity.",
      keywords: "Ayurvedic treatment for autoimmune diseases, SLE, Hashimoto's, IBD, systemic lupus erythematosus, inflammatory bowel disease, natural autoimmune relief",
    },
    hero: {
      title: "Holistic Relief for Autoimmune Conditions",
      description: "Our specialized Ayurvedic protocols for Systemic Lupus Erythematosus (SLE), Hashimoto's Thyroiditis, and Inflammatory Bowel Disease (IBD) focus on deeply correcting the immune system's response by pacifying aggravated doshas and cleansing accumulated toxins (Ama).",
      image: "https://drive.google.com/thumbnail?id=1u_dSJs2GUYUpbZVl9C6FwpeDxpRhAng-&sz=w1200",
    },
    about: {
      title: "Understanding Autoimmune Conditions",
      paragraphs: [
        "Autoimmune diseases like SLE, Hashimoto's, and IBD occur when the immune system mistakenly attacks healthy cells. These conditions cause systemic inflammation and long-term tissue damage, often presenting with diverse and complex symptoms.",
        "In Ayurveda, autoimmune disorders are primarily viewed as a consequence of deeply accumulated toxins (Ama) mixing with aggravated doshas to form 'Amavisha'. This toxic complex confusing the immune system (Ojas) and depositing in different tissues, leading to varied manifestations like joint pain (SLE), thyroid dysfunction (Hashimoto's), or gut inflammation (IBD)."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Chronic fatigue and unexplained weakness",
        "Joint pain and systemic inflammation",
        "Digestive disturbances and chronic gut issues (IBD)",
        "Unexplained weight changes and metabolism issues (Hashimoto's)",
        "Skin rashes and heightened sensitivity (SLE)"
      ]
    },
    treatments: {
      title: "Our Specialized Autoimmune Protocols",
      subtitle: "Detoxification, immunomodulation, and restoring cellular intelligence.",
      items: [
        {
          title: "Ama Pachana & Deepana",
          desc: "Correcting the digestive fire (Agni) and digesting systemic toxins (Ama) through customized herbal formulations to stop further autoimmune triggers.",
          icon: "Activity"
        },
        {
          title: "Panchakarma Detoxification",
          desc: "Deep cleansing therapies like Virechana and Basti to safely eliminate Amavisha (toxic complexes) from the deep tissues, reducing systemic inflammation.",
          icon: "Droplets"
        },
        {
          title: "Rasayana (Immunomodulators)",
          desc: "Potent rejuvenating herbs (like Ashwagandha, Guduchi, and Turmeric) designed to balance the immune response and strengthen healthy tissues.",
          icon: "ShieldAlert"
        },
        {
          title: "Diet & Lifestyle Correction",
          desc: "Personalized anti-inflammatory diets and stress-management practices to prevent flare-ups and sustain long-term remission.",
          icon: "Brain"
        }
      ]
    }
  },
  "bronchitis": {
    id: "bronchitis",
    name: "Bronchitis",
    ayurvedicName: "Kasa",
    category: "Respiratory & Immune Health",
    seo: {
      title: "Ayurvedic Treatment for Bronchitis | Kasa",
      description: "Effective Ayurvedic treatment for Bronchitis (Kasa). Relieve chest congestion, chronic cough, and lung inflammation naturally with our holistic therapies.",
      keywords: "Ayurvedic treatment for bronchitis, Kasa, natural remedies for chest congestion, Ayurveda for chronic cough, lung health",
    },
    hero: {
      title: "Natural Relief from Bronchitis",
      description: "Soothe bronchial inflammation and relieve chronic cough. Our Ayurvedic treatments clear respiratory pathways, eliminate excess mucus, and strengthen lung function for comfortable breathing.",
      image: "https://drive.google.com/thumbnail?id=11FFiXrLPyB6NLOS-a-JQAexByxORjIMq&sz=w1200",
    },
    about: {
      title: "Understanding Bronchitis (Kasa)",
      paragraphs: [
        "Bronchitis is the inflammation of the bronchial tubes, which carry air to and from the lungs. This inflammation causes a persistent cough, often accompanied by thickened mucus (phlegm), chest discomfort, and fatigue.",
        "In Ayurveda, Bronchitis aligns closely with 'Kasa'. It typically arises from an imbalance of Vata and Kapha doshas, which obstruct the respiratory channels (Pranavaha Srotas). Accumulated toxins (Ama) and aggravated doshas lead to inflammation and mucus production."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Persistent, hacking cough (dry or productive)",
        "Production of clear, white, yellowish, or green mucus",
        "Chest congestion or a feeling of fullness",
        "Shortness of breath or wheezing",
        "Fatigue and mild fever"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Bronchitis",
      subtitle: "Clearing congestion, soothing inflammation, and restoring respiratory health.",
      items: [
        {
          title: "Herbal Decoctions (Kashayas)",
          desc: "Potent formulations containing herbs like Vasaka, Licorice (Mulethi), and Ginger to help liquefy and expel stubborn mucus.",
          icon: "Activity"
        },
        {
          title: "Swedana (Medicated Steam)",
          desc: "Inhalation of steam infused with essential oils like Eucalyptus or Camphor to rapidly dilate bronchial tubes and relieve chest tightness.",
          icon: "Droplets"
        },
        {
          title: "Vamana (Therapeutic Emesis)",
          desc: "A Panchakarma procedure for chronic or severe cases to completely eliminate deep-seated Kapha from the upper respiratory tract.",
          icon: "Activity"
        },
        {
          title: "Dietary Modifications",
          desc: "Focus on warm, easily digestible foods, avoiding cold, dairy, and heavy meals to prevent further mucus accumulation and support the digestive fire (Agni).",
          icon: "ShieldAlert"
        }
      ]
    }
  },
  "asthma": {
    id: "asthma",
    name: "Asthma",
    ayurvedicName: "Tamaka Shvasa",
    category: "Respiratory & Immune Health",
    seo: {
      title: "Ayurvedic Treatment for Asthma | Tamaka Shvasa",
      description: "Manage Asthma (Tamaka Shvasa) effectively with Ayurvedic treatments. Clear your airways, reduce inflammation, and breathe freely again naturally.",
      keywords: "Ayurvedic treatment for Asthma, Tamaka Shvasa, natural asthma relief, Vamana therapy, Ayurveda for respiratory health",
    },
    hero: {
      title: "Holistic Relief from Asthma",
      description: "Experience easier breathing and reduced dependency on inhalers. Our Ayurvedic approach targets the root cause, clearing airway blockages and strengthening your lungs.",
      image: "https://drive.google.com/thumbnail?id=1qP81dw6eV98yT22_AiubHxxadTPg_W5X&sz=w1200",
    },
    about: {
      title: "Understanding Asthma (Tamaka Shvasa)",
      paragraphs: [
        "Asthma is a chronic respiratory condition characterized by airway inflammation and constriction, leading to episodes of wheezing, breathlessness, and coughing. Triggers can include allergens, stress, weather changes, and exertion.",
        "In Ayurveda, Asthma correlates predominantly with 'Tamaka Shvasa'. It is viewed as an imbalance where aggravated Vata dosha pushes Kapha dosha into the respiratory channels (Pranavaha Srotas), causing obstruction, inflammation, and difficulty in breathing."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Shortness of breath or difficulty breathing",
        "Wheezing (a whistling sound when breathing out)",
        "Chest tightness or pain",
        "Chronic coughing, especially at night or early morning",
        "Worsening of symptoms during cold weather or exertion"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Asthma",
      subtitle: "Clearing airway obstructions, pacifying doshas, and rejuvenating lung tissues.",
      items: [
        {
          title: "Vamana & Virechana",
          desc: "Panchakarma therapies customized to expel deep-seated Kapha (mucus) and toxins, providing long-term relief from airway obstruction.",
          icon: "Activity"
        },
        {
          title: "Uro Basti",
          desc: "Retaining warm medicated oil over the chest area to relieve muscle stiffness, ease bronchospasm, and nourish the lung tissues.",
          icon: "Activity"
        },
        {
          title: "Dhumapana",
          desc: "Inhalation of medicated herbal smoke to instantly dilate airways, reduce bronchial spasm, and clear phlegm.",
          icon: "Wind"
        },
        {
          title: "Rasayana (Rejuvenation)",
          desc: "Potent lung-strengthening herbs and formulations to build robust respiratory immunity and reduce hypersensitivity to triggers.",
          icon: "ShieldAlert"
        }
      ]
    }
  },
  "cold-flu": {
    id: "cold-flu",
    name: "Cold & Flu",
    ayurvedicName: "Pratishyaya",
    category: "Respiratory & Immune Health",
    seo: {
      title: "Ayurvedic Treatment for Cold and Flu | Pratishyaya",
      description: "Effective and natural Ayurvedic treatment for Cold & Flu. Boost your immunity and alleviate symptoms quickly and naturally.",
      keywords: "Ayurvedic treatment for cold, flu remedies, Pratishyaya, natural immunity boost, Ayurveda for flu",
    },
    hero: {
      title: "Natural Relief from Cold & Flu",
      description: "Quickly overcome common cold and flu symptoms with our traditional Ayurvedic approach, focusing on deeply clearing respiratory pathways and robustly boosting the immune system.",
      image: "https://drive.google.com/thumbnail?id=1HgE8Y6rm48LXmftZXTBiMP_FEJDh7y_R&sz=w1200",
    },
    about: {
      title: "Understanding Cold & Flu (Pratishyaya)",
      paragraphs: [
        "Cold and Flu, frequently manifesting during seasonal transitions or due to weak immunity, are highly infectious viral ailments that directly affect the upper respiratory system.",
        "In Ayurveda, these corelate with 'Pratishyaya'. They often begin with an imbalance in Vata and Kapha doshas, exacerbated by a weak digestive fire (Agni), causing the accumulation of toxins (Ama) that impair respiratory health."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Nasal congestion or a runny nose",
        "Sore throat and persistent dry or wet cough",
        "Fever, chills, and body aches",
        "Lethargy, fatigue, and general weakness",
        "Sneezing and headaches"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Cold & Flu",
      subtitle: "Alleviating symptoms effectively and strengthening natural bodily defenses.",
      items: [
        {
          title: "Diet & Lifestyle (Ahara-Vihara)",
          desc: "Guidance on warm, light, and easily digestible foods to balance Kapha and ignite digestive Agni.",
          icon: "Activity"
        },
        {
          title: "Herbal Remedies",
          desc: "Potent Ayurvedic herbs like Tulsi, Ginger, and Liquorice integrated into formulations to soothe coughs and clear congestion.",
          icon: "Activity"
        },
        {
          title: "Swedana (Steam Therapy)",
          desc: "Medicated herbal steaming to instantly open up congested nasal and respiratory pathways for comfortable breathing.",
          icon: "Droplets"
        },
        {
          title: "Immunity Boosters (Rasayana)",
          desc: "Powerful formulations such as Chyawanprash variants tailored to reinforce immunity and prevent seasonal recurrence.",
          icon: "ShieldAlert"
        }
      ]
    }
  },
  "chronic-sinusitis": {
    id: "chronic-sinusitis",
    name: "Chronic Sinusitis",
    ayurvedicName: "Dushta Pratishyaya",
    category: "Respiratory & Immune Health",
    seo: {
      title: "Ayurvedic Treatment for Chronic Sinusitis | Dushta Pratishyaya",
      description: "Manage and treat Chronic Sinusitis (Dushta Pratishyaya) naturally with Ayurveda. Long-lasting relief through immunity boosting and detoxification.",
      keywords: "Ayurvedic treatment for sinusitis, Dushta Pratishyaya, natural remedies for sinus, Kapha dosha, Nasya therapy",
    },
    hero: {
      title: "Holistic Relief from Chronic Sinusitis",
      description: "Breathe easier and eliminate recurrent sinus congestion. Our Ayurvedic treatment addresses the root cause by balancing Doshas, clearing blockages, and reinforcing respiratory immunity.",
      image: "https://drive.google.com/thumbnail?id=1nv6thAp1fYH5J3_QPlS7R49IBS4eRTGn&sz=w1200",
    },
    about: {
      title: "Understanding Chronic Sinusitis (Dushta Pratishyaya)",
      paragraphs: [
        "Chronic Sinusitis is a persistent inflammation of the sinuses, leading to blocked nasal passages, facial pain, and frequent mucosal discharge. Unlike a typical cold, it lasts for weeks or months.",
        "In Ayurveda, this is closely linked to 'Dushta Pratishyaya', where aggravated Kapha and Vata doshas accumulate in the head and respiratory channels (Pranavaha Srotas), causing chronic blockage and susceptibility to recurrent infections. Managing it involves clearing the channels, and pacifying Kapha dosha."
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Persistent nasal blockage or congestion",
        "Thick, discolored nasal discharge",
        "Facial pain or pressure, especially around the eyes and forehead",
        "Reduced sense of smell and taste",
        "Frequent headaches and fatigue"
      ]
    },
    treatments: {
      title: "Ayurvedic Approach to Sinusitis",
      subtitle: "Clearing nasal blockages and boosting upper respiratory immunity.",
      items: [
        {
          title: "Nasya Therapy",
          desc: "Administration of potent herbal oils or juices through the nasal passages to clear deeply embedded toxins from the sinuses.",
          icon: "Wind"
        },
        {
          title: "Dhumapana & Swedana",
          desc: "Herbal smoke inhalation and facial steam using medicated decoctions to instantly relieve congestion and melt Kapha.",
          icon: "Activity"
        },
        {
          title: "Deepana & Pachana",
          desc: "Herbal supplements to correct digestion and metabolism (Agni), preventing further mucus (Ama) formation.",
          icon: "Droplets"
        },
        {
          title: "Rasayana & Immune Support",
          desc: "Immunity-boosting formulations to prevent seasonal recurrences and improve respiratory resistance.",
          icon: "ShieldAlert"
        }
      ]
    }
  },

  "stroke-paralysis-rehabilitation": {
    id: "stroke-paralysis-rehabilitation",
    name: "Stroke & Paralysis Rehabilitation",
    category: "Neurological & Brain Health",
    seo: {
      title: "Ayurvedic Treatment for Stroke & Paralysis | Pakshaghata Care",
      description: "Effective Ayurvedic rehabilitation for stroke and paralysis (Pakshaghata). Regain mobility and strengthen your nervous system with holistic therapies.",
      keywords: "stroke rehabilitation Ayurveda, Pakshaghata treatment, paralysis Ayurvedic care, neuro-rehabilitation",
    },
    hero: {
      title: "Ayurvedic Rehabilitation for Stroke & Paralysis",
      description: "A comprehensive Ayurvedic approach to stroke recovery (Pakshaghata). We focus on restoring nerve function, improving mobility, and strengthening muscles through specialized therapies.",
      image: "https://drive.google.com/thumbnail?id=165Mr0kBqaFsE6iZe6Yze-Buv-aFBIWes&sz=w1200",
    },
    about: {
      title: "Understanding Pakshaghata (Paralysis)",
      paragraphs: [
        "In Ayurveda, stroke and paralysis are closely correlated with 'Pakshaghata', a condition caused by a severe aggravation of Vata dosha, which controls all sensory and motor functions in the body.",
        "When Vata is obstructed or vitiated, it leads to the loss of movement and sensation in half the body. Our rehabilitation program aims to clear these blockages, pacify Vata, and nourish the deeper nerve tissues for optimal recovery.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Loss of motor control on one side of the body",
        "Numbness or loss of sensation",
        "Difficulty with speech or articulation (Aphasia)",
        "Facial drooping or muscle weakness",
        "Impaired coordination and balance",
      ],
    },
    treatments: {
      title: "Integrative Ayurvedic Therapies",
      subtitle: "Targeted Panchakarma and internal medicine to restore nervous system function.",
      items: [
        {
          title: "Abhyanga & Swedana",
          desc: "Full-body medicated oil massage followed by herbal steam to reduce stiffness, improve circulation, and relax muscles.",
          icon: "Activity",
        },
        {
          title: "Basti Chikitsa",
          desc: "Medicated enemas, specifically Matra Basti or Niruha Basti, to deeply pacify Vata dosha and deliver medicine directly to the nervous system.",
          icon: "Droplets",
        },
        {
          title: "Nasya Therapy",
          desc: "Administration of herbal oils through the nasal passage, which is considered the gateway to the brain, to improve speech and sensory functions.",
          icon: "Wind",
        },
        {
          title: "Shashtika Shali Pinda Sweda",
          desc: "A nourishing sweat therapy using a special type of rice cooked in milk and herbal decoctions to rebuild muscle strength and tone.",
          icon: "Activity",
        },
      ],
    },
  },
  "memory-concentration": {
    id: "memory-concentration",
    name: "Memory & Concentration",
    category: "Neurological & Brain Health",
    seo: {
      title: "Ayurvedic Support for Memory & Concentration",
      description: "Enhance cognitive function, memory, and concentration with natural Ayurvedic herbs and therapies.",
      keywords: "Ayurveda for memory, concentration support, brain health, Medhya Rasayana, cognitive enhancement",
    },
    hero: {
      title: "Enhance Cognitive Health & Memory",
      description: "Unlock your cognitive potential with Ayurveda. Our tailored programs use Medhya Rasayanas (brain tonics) and lifestyle modifications to improve focus, memory retention, and mental clarity.",
      image: "https://drive.google.com/thumbnail?id=1zGJtglxz9b3IbPJrz4SPbyraLi76S1Ge&sz=w1200",
    },
    about: {
      title: "Understanding Cognitive Function in Ayurveda",
      paragraphs: [
        "In Ayurveda, mental functions are governed by the subtle aspects of all three doshas: Vata controls memory acquisition and learning (Dhi), Pitta regulates processing and understanding (Dhriti), and Kapha is responsible for long-term memory retention (Smriti).",
        "Imbalances in these doshas, often caused by stress, poor diet, and lack of sleep, can lead to brain fog, forgetfulness, and poor concentration. Our treatments aim to nourish the mind and restore clarity.",
      ],
      symptomsTitle: "Indicators of Cognitive Strain",
      symptoms: [
        "Forgetting recent events or conversations",
        "Difficulty concentrating on tasks",
        "Frequent 'brain fog' and mental fatigue",
        "Trouble learning new skills",
        "Stress-induced anxiety or restlessness",
      ],
    },
    treatments: {
      title: "Ayurvedic Protocols for Memory",
      subtitle: "Revitalize the mind using potent herbs and therapies.",
      items: [
        {
          title: "Medhya Rasayana Therapy",
          desc: "Use of specific neuro-protective herbs like Brahmi, Ashwagandha, and Shankhpushpi to rebuild cognitive reserves.",
          icon: "Activity",
        },
        {
          title: "Shirodhara",
          desc: "A continuous stream of warm, medicated oil poured over the forehead (third eye) to profoundly relax the central nervous system.",
          icon: "Droplets",
        },
        {
          title: "Nasya",
          desc: "Nasal drops of medicated ghee (like Brahmi Ghee) to directly nourish brain centers and clear mental channels.",
          icon: "Wind",
        },
        {
          title: "Lifestyle & Diet",
          desc: "Guidance on sleep hygiene, stress management (Yoga/Pranayama), and a diet rich in sattvic (pure) foods.",
          icon: "Activity",
        },
      ],
    },
  },
  "ayurvedic-support-for-adhd-autism": {
    id: "ayurvedic-support-for-adhd-autism",
    name: "ADHD & Autism Support",
    category: "Pediatric Healthcare",
    seo: {
      title: "Ayurvedic Support for ADHD & Autism in Children",
      description: "Integrative Ayurvedic care for children with ADHD and Autism. Natural support for focus, behavioral balance, and developmental health.",
      keywords: "Ayurveda for ADHD, Autism support Ayurveda, pediatric herbal care, natural ADHD management",
    },
    hero: {
      title: "Integrative Care for ADHD & Autism",
      description: "A gentle, holistic approach to supporting neurodivergent children. We focus on enhancing cognitive development, balancing energy, and improving communication through specialized Ayurvedic practices.",
      image: "https://drive.google.com/thumbnail?id=1R18hIWx-4_YLK7FJqYv8eM85hISlQLLl&sz=w1200",
    },
    about: {
      title: "An Ayurvedic Perspective on Neurodevelopment",
      paragraphs: [
        "Ayurveda views conditions like ADHD and Autism as complex energetic imbalances, primarily involving altered states of Vata (hyperactivity, impulsiveness) and a dulling of cognitive clarity (Tamas) that affects sensory processing and communication.",
        "Our goal is not merely symptom suppression, but addressing the underlying metabolism (Agni), gut-brain connection, and nourishing the Majja Dhatu (nervous system) to provide child-friendly, supportive care.",
      ],
      symptomsTitle: "Key Challenges Addressed",
      symptoms: [
        "Hyperactivity and impulsivity",
        "Attention deficits or easily distracted",
        "Sensory sensitivities and processing issues",
        "Delayed or disordered communication",
        "Digestive issues (commonly linked to brain health)",
      ],
    },
    treatments: {
      title: "Supportive Nutritional & Herbal Therapies",
      subtitle: "Gentle interventions tailored for pediatric needs.",
      items: [
        {
          title: "Swarna Prashana",
          desc: "A classical immunomodulatory therapy using purified gold ash and herbs given on specific days to promote cognitive function and immunity.",
          icon: "Activity",
        },
        {
          title: "Gut-Brain Diet",
          desc: "Correcting digestive fire (Agni) with a tailored diet that eliminates highly processed foods, sugars, and incompatible food combinations.",
          icon: "Activity",
        },
        {
          title: "Shirodhara & Abhyanga",
          desc: "Highly tailored, gentle tactile therapies to calm the nervous system, reduce sensory overload, and induce better sleep.",
          icon: "Wind",
        },
        {
          title: "Medhya Herbs",
          desc: "Careful administration of mild brain tonics (like Mandukaparni and Vacha) in child-friendly formulations like medicated ghee.",
          icon: "Droplets",
        },
      ],
    },
  },
  sciatica: {
    id: "sciatica",
    name: "Sciatica",
    ayurvedicName: "Gridhrasi",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title:
        "Ayurvedic Treatment for Sciatica | Natural Back & Leg Pain Relief",
      description:
        "Get holistic and effective Ayurvedic treatment for Sciatica (Gridhrasi). Relieve lower back and leg pain naturally.",
      keywords:
        "Sciatica treatment, Ayurvedic treatment for Sciatica, Gridhrasi, Kati Basti for Sciatica",
    },
    hero: {
      title: "Natural & Effective Ayurvedic Treatment for Sciatica",
      description:
        "Experience lasting relief from lower back and radiating leg pain. Our integrative Ayurvedic approach targets the root cause of Sciatica (Gridhrasi) using traditional therapies like Kati Basti, Agnikarma, and Viddhakarma.",
      image:
        "https://drive.google.com/thumbnail?id=1hfuLuiPknvvncNUULPuHkzxeJG7bJBWm&sz=w1200",
    },
    about: {
      title: "What is Sciatica?",
      paragraphs: [
        "Sciatica is a debilitating condition characterized by pain radiating along the sciatic nerve, which runs from the lower back down through the hips, buttocks, and each leg. Usually, it affects only one side of the body.",
        "In Ayurveda, Sciatica is known as Gridhrasi. It is primarily caused by the aggravation of Vata dosha, often accompanied by Kapha imbalance, which leads to stiffness, sharp pain, and sometimes numbness in the affected leg. The term 'Gridhrasi' originates from 'Gridhra' (Vulture), as the patient's gait often resembles the altered walk of a vulture due to the severe pain.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Sharp, shooting pain from the lower back to the leg",
        "Numbness or tingling sensation in the toes/foot",
        "Weakness in the affected leg",
        "Pain that exacerbates while sitting, coughing, or sneezing",
        "Stiffness in the lower back and hips",
        "Difficulty in walking or standing up",
      ],
    },
    treatments: {
      title: "Our Ayurvedic Treatments for Sciatica",
      subtitle:
        "We employ a multi-dimensional approach to relieve nerve compression, reduce inflammation, and restore mobility.",
      items: [
        {
          title: "Kati Basti",
          desc: "A localized oil-retention therapy to nourish nerves and relieve muscle spasms.",
          icon: "Activity",
        },
        {
          title: "Agnikarma",
          desc: "Specialized heat treatment providing rapid relief from sharp sciatic nerve pain.",
          icon: "ShieldAlert",
        },
        {
          title: "Viddhakarma",
          desc: "Micro-puncturing technique to release Vata and improve blood circulation.",
          icon: "Activity",
        },
        {
          title: "Basti Chikitsa",
          desc: "Medicated enema therapy to deeply detoxify and pacify Vata dosha.",
          icon: "Activity",
        },
      ],
    },
  },
  "slip-disc": {
    id: "slip-disc",
    name: "Slip Disc",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Slip Disc | Non-Surgical Relief",
      description:
        "Non-surgical Ayurvedic treatment for herniated or bulging discs. Relieve spinal pain naturally with our specialized therapies.",
      keywords:
        "slip disc treatment, herniated disc Ayurveda, Ayurvedic spine care, Kati Basti",
    },
    hero: {
      title: "Non-Surgical Ayurvedic Treatment for Slip Disc",
      description:
        "Avoid surgery with our targeted Ayurvedic interventions. We focus on reducing inflammation, strengthening spinal muscles, and relieving nerve compression through Panchakarma and herbal remedies.",
      image:
        "https://drive.google.com/thumbnail?id=1dq0gHjJnnLRiPNqaQCh_63QlP2MGx8hC&sz=w1200",
    },
    about: {
      title: "What is a Slip Disc?",
      paragraphs: [
        "A slip disc, or herniated disc, occurs when the soft inner core of a spinal disc pushes through the tough outer layer, pressing against neighboring nerves and causing significant pain.",
        "Ayurveda attributes spinal conditions to the aggravation of Vata dosha, leading to the degeneration of bodily tissues (Dhatus). Our approach focuses on pacifying Vata, repairing tissue damage, and restoring structural flexibility.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Severe, continuous back pain",
        "Pain radiating to the arms or legs",
        "Numbness and tingling in extremities",
        "Muscle weakness",
        "Pain worsening with movement or bending",
      ],
    },
    treatments: {
      title: "Our Ayurvedic Spine Care",
      subtitle:
        "Holistic treatments designed to decompress nerves and strengthen the spine.",
      items: [
        {
          title: "Prishta Basti",
          desc: "Oil-retention therapy over the spine to nourish intervertebral discs.",
          icon: "Activity",
        },
        {
          title: "Pinda Sweda",
          desc: "Herbal bolus massage to reduce inflammation and relax muscles.",
          icon: "Activity",
        },
        {
          title: "Specific Herbal Medicines",
          desc: "To promote bone health and reduce nerve irritation.",
          icon: "ShieldAlert",
        },
        {
          title: "Eranda Taila therapy",
          desc: "Therapeutic application to manage severe Vata disorders affecting the spine.",
          icon: "Droplets",
        },
      ],
    },
  },
  "back-pain": {
    id: "back-pain",
    name: "Back Pain",
    ayurvedicName: "Kati Shula",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Back Pain | Kati Shula Relief",
      description:
        "Find natural relief from lower back pain with authentic Ayurvedic treatments. Strengthen spinal health and relieve stiffness effectively.",
      keywords:
        "back pain ayurveda, kati shula, lower back pain natural relief, kati basti",
    },
    hero: {
      title: "Ayurvedic Care for Back Pain",
      description:
        "Experience relief from severe or chronic back pain with targeted Ayurvedic therapies that relax muscles, nourish bones, and pacify Vata dosha.",
      image:
        "https://drive.google.com/thumbnail?id=1ce9RHwfo1Wt1wDliVJ_sEYy80UyMTJlq&sz=w1200",
    },
    about: {
      title: "Understanding Back Pain",
      paragraphs: [
        "Back pain is an increasingly common issue affecting movement and overall well-being, often caused by poor posture, sedentary lifestyle, strain, or underlying spinal issues.",
        "In Ayurveda, back pain is referred to as 'Kati Shula'. It is largely a sign of Vata imbalance in the lower back (Kati) region, leading to pain, stiffness, and weakness in the local muscles and bones.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Aching or stiffness in the lower back",
        "Sharp or shooting pain upon movement",
        "Pain that limits flexibility or range of motion",
        "Muscle spasms in the surrounding area",
      ],
    },
    treatments: {
      title: "Ayurvedic Therapies for Back Pain",
      subtitle:
        "Our treatment centers on soothing inflammation, relieving muscle spasms, and strengthening the back.",
      items: [
        {
          title: "Kati Basti",
          desc: "Warm medicated oil retained in the lumber region to soothe and nourish the back.",
          icon: "Activity",
        },
        {
          title: "Patra Pinda Sweda",
          desc: "Herbal bolus massage focusing on releasing stiffness and pain.",
          icon: "ShieldAlert",
        },
        {
          title: "Agnikarma",
          desc: "Heat therapy for acute muscle spasms and quick relief.",
          icon: "Activity",
        },
        {
          title: "Herbal Medicines",
          desc: "Ayurvedic herbs and decoctions to eliminate excess Vata.",
          icon: "Droplets",
        },
      ],
    },
  },
  "neck-pain": {
    id: "neck-pain",
    name: "Neck Pain",
    ayurvedicName: "Manya Shula",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Neck Pain | Manya Shula Relief",
      description:
        "Treat neck pain and stiffness naturally through proven Ayurvedic therapies. Improve mobility and relieve cervical tension.",
      keywords:
        "neck pain ayurvedic treatment, manya shula, cervical pain relief, greeva basti",
    },
    hero: {
      title: "Ayurvedic Care for Neck Pain",
      description:
        "Alleviate neck pain and stiffness. Our expert Ayurvedic treatments target muscular tightness and restore optimal cervical spine health.",
      image:
        "https://drive.google.com/thumbnail?id=1Z2IM5In8usy96ivWvJvda0MaY_-WXVGJ&sz=w1200",
    },
    about: {
      title: "Understanding Neck Pain",
      paragraphs: [
        "Neck pain is frequently triggered by prolonged use of computers and smartphones, poor sleeping postures, or sudden jerks, resulting in muscle strain or tension.",
        "Ayurveda diagnoses neck pain primarily as 'Manya Shula' or 'Manyastambha', where aggravated Vata and Kapha doshas settle in the neck, causing stiffness, pain, and restricted movement.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Stiffness or muscle spasms in the neck and upper shoulders",
        "Pain that worsens with holding the head in one place for long periods",
        "Inability to turn the head smoothly",
        "Occasional headache originating from the neck",
      ],
    },
    treatments: {
      title: "Ayurvedic Therapies for Neck Pain",
      subtitle:
        "Treatments focused on alleviating cervical stiffness and improving circulation.",
      items: [
        {
          title: "Greeva Basti",
          desc: "Therapeutic pooling of warm oil over the back of the neck.",
          icon: "Activity",
        },
        {
          title: "Abhyanga & Swedana",
          desc: "Relaxing oil massage followed by steam therapy to melt away stiffness.",
          icon: "Droplets",
        },
        {
          title: "Nasya",
          desc: "Administration of medicinal oils through the nasal passages for cervical health.",
          icon: "ShieldAlert",
        },
        {
          title: "Lepanam",
          desc: "Application of herbal paste over the neck to reduce localized swelling.",
          icon: "Activity",
        },
      ],
    },
  },
  "cervical-lumbar-spondylitis": {
    id: "cervical-lumbar-spondylitis",
    name: "Cervical & Lumbar Spondylitis",
    ayurvedicName: "Manyastambha & Katigraha",
    category: "Spine Health",
    seo: {
      title: "Ayurvedic Treatment for Cervical & Lumbar Spondylitis",
      description:
        "Find natural relief from neck and back pain caused by Cervical and Lumbar Spondylitis through authentic Ayurvedic treatments like Greeva Basti and Kati Basti.",
      keywords:
        "cervical spondylosis ayurvedic treatment, lumbar spondylosis ayurveda, manyastambha, neck pain relief, back pain natural treatment",
    },
    hero: {
      title: "Ayurvedic Care for Cervical & Lumbar Spondylitis",
      description:
        "Relieve neck stiffness, radiating pain, and lower back discomfort with our targeted Ayurvedic therapies that nourish the spine and reverse degenerative changes naturally.",
      image:
        "https://drive.google.com/thumbnail?id=1ZKdGn6v4j0Y7prXEznlpEw-YUEo_Ra1E&sz=w1200",
    },
    about: {
      title: "Understanding Spondylitis",
      paragraphs: [
        "Cervical and Lumbar Spondylitis are degenerative conditions of the spine affecting the neck (cervical) and lower back (lumbar) regions. They involve the wear and tear of spinal discs, cartilage, and bones, often leading to nerve compression and chronic pain.",
        "In Ayurveda, these conditions are correlated with Manyastambha (stiffness in the neck) and Katigraha (stiffness in the lower back). They are primarily Vata disorders, where aggravated Vata leads to the drying up and degeneration of the Kapha (lubrication) in the spinal joints, causing friction, inflammation, and pain.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Stiffness and pain in the neck or lower back",
        "Radiating pain to the arms (cervical) or legs (lumbar)",
        "Numbness, tingling, or weakness in the extremities",
        "Headaches originating from the neck",
        "Reduced range of motion in the spine",
      ],
    },
    treatments: {
      title: "Ayurvedic Therapies for Spondylitis",
      subtitle:
        "Our treatment approach focuses on reducing inflammation, pacifying Vata, and rejuvenating the spinal tissues.",
      items: [
        {
          title: "Greeva Basti & Kati Basti",
          desc: "Warm medicated oil therapies over the neck or lower back to nourish joints and relieve stiffness.",
          icon: "Activity",
        },
        {
          title: "Patra Pinda Sweda",
          desc: "Bolus massage with medicinal leaves to reduce pain and inflammation.",
          icon: "ShieldAlert",
        },
        {
          title: "Nasya",
          desc: "Nasal administration of medicated oils to clear blockages and nourish the cervical region.",
          icon: "Droplets",
        },
        {
          title: "Agnikarma",
          desc: "Targeted thermal therapy for immediate relief from severe musculoskeletal pain.",
          icon: "Activity",
        },
      ],
    },
  },
  osteoarthritis: {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    ayurvedicName: "Sandhigata Vata",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Osteoarthritis | Joint Health",
      description:
        "Naturally manage Osteoarthritis (Sandhigata Vata) with Ayurveda. Improve joint mobility and relieve pain with Janu Basti and more.",
      keywords:
        "osteoarthritis treatment, sandhigata vata, knee pain ayurveda, joint care",
    },
    hero: {
      title: "Holistic Ayurvedic Management for Osteoarthritis",
      description:
        "Rebuild your joint health naturally. Our comprehensive treatments address wear and tear by nourishing joint capsules, reducing inflammation, and balancing the doshas.",
      image:
        "https://drive.google.com/thumbnail?id=1YrZyTdKXy8lrUk8Ipc8NMWJuNCp7nmMw&sz=w1200",
    },
    about: {
      title: "Understanding Osteoarthritis",
      paragraphs: [
        "Osteoarthritis is a degenerative joint disease characterized by the breakdown of cartilage, causing pain, swelling, and stiffness, particularly in weight-bearing joints like the knees.",
        "In Ayurveda, this is known as Sandhigata Vata. As we age, aggravated Vata dosha causes drying and depletion of the synovial fluid (Shleshaka Kapha), resulting in friction and pain in the joints.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Joint pain during or after movement",
        "Stiffness, particularly upon waking",
        "Loss of flexibility and limited range of motion",
        "Grating sensation or clicking sounds when moving",
        "Bone spurs or swelling around the joint",
      ],
    },
    treatments: {
      title: "Integrative Joint Therapies",
      subtitle:
        "Focused on lubrication, pain relief, and strengthening the surrounding muscles.",
      items: [
        {
          title: "Janu Basti",
          desc: "Knee oil-retention therapy to deeply lubricate and repair joint tissues.",
          icon: "Activity",
        },
        {
          title: "Abhyanga",
          desc: "Full body oil massage to improve circulation and reduce total body Vata.",
          icon: "Droplets",
        },
        {
          title: "Upanaha (Poultice)",
          desc: "Warm herbal poultice to reduce swelling and improve mobility.",
          icon: "Activity",
        },
        {
          title: "Rasayana Herbs",
          desc: "Rejuvenating herbs like Ashwagandha and Shallaki to promote tissue regeneration.",
          icon: "ShieldAlert",
        },
      ],
    },
  },
  "rheumatoid-arthritis": {
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    ayurvedicName: "Amavata",
    category: "Musculoskeletal & Joint Care",
    seo: {
      title: "Ayurvedic Treatment for Rheumatoid Arthritis | Amavata",
      description:
        "Manage Rheumatoid Arthritis (Amavata) naturally with Ayurveda. Reduce joint inflammation, stiffness, and pain with personalized therapies.",
      keywords:
        "rheumatoid arthritis treatment ayurveda, amavata, joint inflammation, natural arthritis relief",
    },
    hero: {
      title: "Holistic Ayurvedic Management for Rheumatoid Arthritis",
      description:
        "Experience lasting relief from joint pain and inflammation. Our Ayurvedic approach targets the root cause of Rheumatoid Arthritis by eliminating toxins (Ama) and balancing the immune system.",
      image:
        "https://drive.google.com/thumbnail?id=1a9-GCLHP09owFLiAVGatRI_2MBvqKLA9&sz=w1200",
    },
    about: {
      title: "Understanding Rheumatoid Arthritis (Amavata)",
      paragraphs: [
        "Rheumatoid Arthritis is a chronic inflammatory and autoimmune disorder that primarily affects the joints. It causes painful swelling that can eventually result in bone erosion and joint deformity.",
        "In Ayurveda, it is correlated with 'Amavata', a condition caused by the accumulation of 'Ama' (toxins resulting from improper digestion) combined with aggravated Vata dosha in the joints.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Tender, warm, swollen joints",
        "Joint stiffness that is usually worse in the mornings and after inactivity",
        "Fatigue, fever and loss of appetite",
        "Symmetrical joint involvement (e.g., both hands or both knees)",
      ],
    },
    treatments: {
      title: "Ayurvedic Therapies for Rheumatoid Arthritis",
      subtitle:
        "Focusing on detoxification, reducing inflammation, and immune modulation.",
      items: [
        {
          title: "Langhana & Deepana-Pachana",
          desc: "Fasting and digestive herbs to metabolize and clear Ama (toxins).",
          icon: "Activity",
        },
        {
          title: "Valuka Sweda",
          desc: "Dry heat therapy using sand boluses to reduce severe joint swelling and stiffness.",
          icon: "ShieldAlert",
        },
        {
          title: "Virechana & Basti",
          desc: "Panchakarma cleansing procedures to eliminate toxins and restore doshic balance.",
          icon: "Droplets",
        },
        {
          title: "Dietary Modifications",
          desc: "A customized anti-inflammatory diet avoiding heavy, cold, and incompatible foods.",
          icon: "Activity",
        },
      ],
    },
  },
  "pcod-pcos": {
    id: "pcod-pcos",
    name: "PCOD / PCOS",
    category: "Women's Health & Fertility",
    seo: {
      title: "Ayurvedic Treatment for PCOD & PCOS | Natural Hormonal Balance",
      description:
        "Manage PCOS/PCOD naturally with Ayurveda. Restore hormonal balance, regulate cycles, and support fertility.",
      keywords:
        "PCOS treatment Ayurveda, PCOD natural cure, hormonal imbalance, fertility support",
    },
    hero: {
      title: "Natural Hormonal Balance for PCOD & PCOS",
      description:
        "Find natural rhythm and wellness. We treat the root cause of PCOD & PCOS by detoxifying the body, regulating metabolism, and balancing female hormones using time-tested Ayurvedic protocols.",
      image:
        "https://drive.google.com/thumbnail?id=19qcYN_z9yL031lIoUCD7pKdCurBgMGKM&sz=w1200",
    },
    about: {
      title: "Understanding PCOD & PCOS",
      paragraphs: [
        "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles, weight gain, and fertility issues.",
        "Ayurveda views PCOS as an imbalance of all three doshas, but primarily Kapha, which blocks the reproductive channels (Artavavaha Srotas) and affects normal ovarian function.",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Irregular, heavy, or missed periods",
        "Excess facial and body hair growth (Hirsutism)",
        "Severe acne and skin darkening",
        "Weight gain or difficulty losing weight",
        "Thinning hair or hair loss from the scalp",
        "Difficulty conceiving",
      ],
    },
    treatments: {
      title: "Our Holistic Approach to PCOS",
      subtitle: "Restoring metabolic fire and clearing reproductive channels.",
      items: [
        {
          title: "Vamana & Virechana",
          desc: "Bio-cleansing therapies to eliminate deep-seated toxins and clear Kapha blockages.",
          icon: "Activity",
        },
        {
          title: "Uttarbasti",
          desc: "Specialized urogenital therapy to directly nourish and strengthen the uterus and ovaries.",
          icon: "Baby",
        },
        {
          title: "Metabolic Correction",
          desc: "Dietary guidance and digestive herbs (Deepana-Pachana) to correct insulin resistance.",
          icon: "Activity",
        },
        {
          title: "Menstrual Regulation",
          desc: "Herbs like Shatavari and Ashokarishta to harmonize hormones naturally.",
          icon: "ShieldAlert",
        },
      ],
    },
  },
  psoriasis: {
    id: "psoriasis",
    name: "Psoriasis",
    category: "Skin, Hair & Aesthetic Wellness",
    seo: {
      title: "Ayurvedic Treatment for Psoriasis | Natural Skin Healing",
      description:
        "Effective Ayurvedic therapies for Psoriasis. Detoxify your blood, reduce inflammation, and restore healthy skin.",
      keywords:
        "Psoriasis Ayurvedic treatment, natural skin care, clear psoriasis, Raktamokshan",
    },
    hero: {
      title: "Holistic Healing for Psoriasis",
      description:
        "Achieve clear, healthy skin from within. Our root-cause approach to Psoriasis combines systemic detoxification, dietary recalibration, and topical therapies.",
      image:
        "https://images.unsplash.com/photo-1615287413695-1f96e4fc3b92?auto=format&fit=crop&q=80&w=1200",
    },
    about: {
      title: "Understanding Psoriasis",
      paragraphs: [
        "Psoriasis is a chronic autoimmune condition that speeds up the lifecycle of skin cells, causing cells to build up rapidly on the surface of the skin. The extra skin cells form scales and red patches that are itchy and sometimes painful.",
        "Ayurveda considers Psoriasis to be caused by the vitiation of Vata and Kapha doshas, along with the accumulation of deep-seated toxins in the blood (Rakta dhatu) and skin (Twak).",
      ],
      symptomsTitle: "Common Symptoms",
      symptoms: [
        "Red patches of skin covered with thick, silvery scales",
        "Dry, cracked skin that may bleed or itch",
        "Itching, burning, or soreness",
        "Thickened, pitted, or ridged nails",
        "Swollen and stiff joints (Psoriatic arthritis)",
      ],
    },
    treatments: {
      title: "Ayurvedic Detoxification for Psoriasis",
      subtitle:
        "Deep cleansing to eliminate blood impurities and pacify doshas.",
      items: [
        {
          title: "Virechana",
          desc: "Therapeutic purgation to remove Pitta-predominant toxins from the liver and blood.",
          icon: "Activity",
        },
        {
          title: "Raktamokshan",
          desc: "Blood-letting therapy to release localized impurities and accelerate skin healing.",
          icon: "Droplets",
        },
        {
          title: "Takra Dhara",
          desc: "Continuous pouring of medicated buttermilk over the head to relieve stress and cool the system.",
          icon: "Wind",
        },
        {
          title: "Dietary Protocols",
          desc: "Strict anti-inflammatory diet avoiding incompatible foods (Viruddha Ahara).",
          icon: "Activity",
        },
      ],
    },
  },
};

export function getConditionData(slug: string): ConditionData {
  const specificData = specificConditions[slug];
  if (specificData) return specificData;

  // Generate generic but professional data for missing conditions
  const nameParts = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  let readableName = nameParts.join(" ");

  if (slug === "parkinson-s-disease") {
    readableName = "Parkinson's Disease";
  } else if (slug === "ayurvedic-support-for-adhd-autism") {
    readableName = "ADHD & Autism";
  }

  // Categorization logic for dynamic generic images
  let categoryStr = "Specialized Ayurvedic Treatment";
  let targetImage =
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"; // default

  if (slug === "frozen-shoulder") {
    categoryStr = "Musculoskeletal & Joint Care";
    targetImage =
      "https://drive.google.com/thumbnail?id=1hpOCnNuRSpkadZzHzLtcvZwR0xo6M2MH&sz=w1200";
  } else if (slug === "tennis-elbow") {
    categoryStr = "Musculoskeletal & Joint Care";
    targetImage =
      "https://drive.google.com/thumbnail?id=1VKduKgyqcMcLZlHEYzFG0-SKuyjQA8wJ&sz=w1200";
  } else if (slug === "acidity" || slug === "acid-reflux") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1ELIM5uZHPasyz6DndKK9e4GedGvdK7Pv&sz=w1200";
  } else if (slug === "gas-indigestion") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1Uy0w_r20eG8zTvJL3tO94ax24fPD_R6s&sz=w1200";
  } else if (slug === "constipation") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1t6Xm618M01MjS1dPJvHJ_a5OWEh8_qAt&sz=w1200";
  } else if (slug === "irritable-bowel-syndrome") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1djvF6BMERO4i6jdSIr22UlksUC87h2hb&sz=w1200";
  } else if (slug === "diarrhea") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1mX2oOWo2bgMFilqg0SGR66tzs-mbqooN&sz=w1200";
  } else if (slug === "piles-fissure") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1dcM6xn9N5_-uylXQTWK8WOANY0bhsBeF&sz=w1200";
  } else if (slug === "fatty-liver") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1qXZtJXuRfaPDeH8-tNZtLAG6EmHHKsP_&sz=w1200";
  } else if (slug === "jaundice") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1a0UUhUuI54NAG7pDwDlnD0svy1CiLhvR&sz=w1200";
  } else if (slug === "liver-cirrhosis") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1PvAIddTKG5RSjdzyAVVDt8VfJ3EZVX_v&sz=w1200";
  } else if (slug === "diabetes-management") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1DwaCO7zGLJ6W2eV3Z8OaUwY2EOdps6IV&sz=w1200";
  } else if (slug === "thyroid-dysfunction") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1nhn91CKYt2RSdIk8wSG8erfvItcw3Ea3&sz=w1200";
  } else if (slug === "cholesterol-management") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1vKp_7i2oGEPg0RgAs1H3bskqRi2RQy1G&sz=w1200";
  } else if (slug === "obesity") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1LVbpwDguzGdlekvAqgvNsk48zTZakX7E&sz=w1200";
  } else if (slug === "heart-health-support") {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1-JII7Ab3VStC2J8cUI_AXkxwSbytt4d9&sz=w1200";
  } else if (slug === "psoriasis") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1D-T0SA2xpl5WtBWrKF2Ccac2BGDKkmtE&sz=w1200";
  } else if (slug === "eczema") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1voZm5N8sEX6gjjGzMjEacOtKFWhAd8mZ&sz=w1200";
  } else if (slug === "vitiligo") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1fg57IN9GpW65wMMmmusH-BN9kVyU_l7f&sz=w1200";
  } else if (slug === "acne-pigmentation") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1zNgwjoMn4ZKm4XEeIWjVPeFglHLjWfTJ&sz=w1200";
  } else if (slug === "chronic-allergies") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1vaWyizZftg9Fcg_pAEOugbOtMk_vbqWq&sz=w1200";
  } else if (slug === "hair-fall") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1VZ6XQsbWLugyePr2lIrYsM1yXUJEVzcT&sz=w1200";
  } else if (slug === "alopecia") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1Syc1809pD3YUynF-3cZU2MldceOgtfIv&sz=w1200";
  } else if (slug === "dandruff") {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://drive.google.com/thumbnail?id=1yaXnS4761p-CbIdUcz8yiog4z3vljvSN&sz=w1200";
  } else if (slug === "pcod-pcos") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=19qcYN_z9yL031lIoUCD7pKdCurBgMGKM&sz=w1200";
  } else if (slug === "menstrual-irregularities") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1nbAAn6SkfNJGPNVDH-tQPp6bf-Z51rd3&sz=w1200";
  } else if (slug === "fertility-support") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1ul7dQjTTkpqy2lQhC2iSU6W1HIjcifaG&sz=w1200";
  } else if (slug === "repeated-miscarriages-support") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1RmQcXKU52A9_5cy3ZYT-6_AwQoZLvMfW&sz=w1200";
  } else if (slug === "postpartum-care") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1hkc7o9dEIWQ_XFxE6c4gyx2S8GW4qmrm&sz=w1200";
  } else if (slug === "lactation-support") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=11CbOB4Ro-68akN0M-m1gcMvXB6QjSItu&sz=w1200";
  } else if (slug === "white-discharge") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1gFazbt_P5NbfncTmVzMgNAxJNAOubjBN&sz=w1200";
  } else if (slug === "dysmenorrhea") {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://drive.google.com/thumbnail?id=1YP94rifnXEkqje2-oYzQm7dgSiTqyML_&sz=w1200";
  } else if (
    /^(recurrent-colds|seasonal-allergies|poor-appetite|digestive-weakness|concentration-support|bed-wetting)$/i.test(
      slug,
    )
  ) {
    categoryStr = "Pediatric Healthcare";
    targetImage =
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200";
  } else if (
    /(joint|arthrit|osteo|knee|spine|sciatica|disc|spondylitis|back|neck|shoulder|elbow)/i.test(
      slug,
    )
  ) {
    categoryStr = "Musculoskeletal & Joint Care";
    targetImage =
      "https://drive.google.com/thumbnail?id=1FhWwAavrUV07zP-votO8uSljAp0f0WSn&sz=w1200";
  } else if (
    /(digest|acid|gas|constipation|bowel|diarrhea|piles|fissure|liver|jaundice|cirrhosis|diabetes|thyroid|cholesterol|obesity|apptit)/i.test(
      slug,
    )
  ) {
    categoryStr = "Digestive & Metabolic Health";
    targetImage =
      "https://drive.google.com/thumbnail?id=1IersAK5TZ2WKQuASTaKw8y0zvQ6nQJXl&sz=w1200";
  } else if (
    /(skin|psoriasis|eczema|vitiligo|acne|pigment|allergies|hair|alopecia|dandruff)/i.test(
      slug,
    )
  ) {
    categoryStr = "Skin, Hair & Aesthetic Wellness";
    targetImage =
      "https://images.unsplash.com/photo-1615287413695-1f96e4fc3b92?auto=format&fit=crop&q=80&w=1200";
  } else if (
    /(pcod|pcos|menstru|fertil|miscarriage|postpartum|lactat|discharge|dysmenorrhea|women)/i.test(
      slug,
    )
  ) {
    categoryStr = "Women’s Health & Fertility";
    targetImage =
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200";
  } else if (slug === "anxiety-insomnia") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1fIsoQ2EGamhFi8EcE0C8GTzzRz66tKT5&sz=w1200";
  } else if (slug === "irritability") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1JNDC1XZKKrTVzR5lac47RTwqZED_wae_&sz=w1200";
  } else if (slug === "migraine") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1hagur28E5nQjFIyvkxjCIWvxsD_XZ_cT&sz=w1200";
  } else if (slug === "epilepsy") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1By6Iiy7hRGYy8yk3Zp3oox0LojoaS3VV&sz=w1200";
  } else if (slug === "parkinson-s-disease") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1cHv86gSTkYRLQkwrHSNsqP3qwtM4xr5U&sz=w1200";
  } else if (slug === "stroke-paralysis-rehabilitation") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=165Mr0kBqaFsE6iZe6Yze-Buv-aFBIWes&sz=w1200";
  } else if (slug === "memory-concentration") {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1zGJtglxz9b3IbPJrz4SPbyraLi76S1Ge&sz=w1200";
  } else if (
    /(stress|anxiety|insomnia|irritability|migraine|epilepsy|parkinson|stroke|paralysis|memory|concentration|brain|neuro)/i.test(
      slug,
    )
  ) {
    categoryStr = "Mental Health & Neurology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1jSQ-E6gnKoMksygLjoGggogu3VsXszHa&sz=w1200";
  } else if (
    /(sinus|cold|flu|asthma|bronchitis|allerg|respiratory|breath)/i.test(slug)
  ) {
    categoryStr = "Respiratory & Immune Health";
    targetImage =
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200";
  } else if (slug === "erectile-dysfunction") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1KcS2UL7kwn2NLfNXi7SvdQ5gx7h-7XFJ&sz=w1200";
  } else if (slug === "premature-ejaculation") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1al7F4mxkRBQsPFjE-TtBwGe2oAd8DBu4&sz=w1200";
  } else if (slug === "low-sperm-count") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1MhVQGwp2mPQLh9uEMGTXUWXmlDMVJlhi&sz=w1200";
  } else if (slug === "kidney-stones") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1Kiw5mDdt9zX0ieWIDe705SukJRZa9rRH&sz=w1200";
  } else if (slug === "uti") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1M463qaCdOtKV7Q0CcMZf7cFllYTlgUo8&sz=w1200";
  } else if (slug === "prostate-issues") {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://drive.google.com/thumbnail?id=1VbNhqSBl84tLizBy87WZ9D-t5CSAwBx_&sz=w1200";
  } else if (
    /(erect|ejaculat|sperm|kidney|uti|prostate|bladder|urinary|incontin)/i.test(
      slug,
    )
  ) {
    categoryStr = "Men’s Health & Urology";
    targetImage =
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200";
  } else if (slug === "ayurvedic-support-for-adhd-autism") {
    categoryStr = "Pediatric Healthcare";
    targetImage =
      "https://drive.google.com/thumbnail?id=1R18hIWx-4_YLK7FJqYv8eM85hISlQLLl&sz=w1200";
  } else if (/(child|bed-wetting|growth|adhd|autism)/i.test(slug)) {
    categoryStr = "Pediatric Healthcare";
    targetImage =
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200";
  }

  return {
    id: slug,
    name: readableName,
    category: categoryStr,
    seo: {
      title: `Ayurvedic Treatment for ${readableName} | Natural Healing`,
      description: `Discover holistic Ayurvedic treatments for ${readableName}. We address the root cause for long-lasting health and wellness.`,
      keywords: `${readableName} treatment, Ayurveda for ${readableName}, natural cure, holistic healing`,
    },
    hero: {
      title: `Integrative Ayurvedic Care for ${readableName}`,
      description: `Experience a comprehensive, root-cause approach to managing ${readableName}. Our personalized protocols combine ancient wisdom with clinical precision to restore your body's natural balance.`,
      image: targetImage,
    },
    about: {
      title: `Understanding ${readableName}`,
      paragraphs: [
        `${readableName} requires a personalized approach to accurately identify the underlying systemic imbalances. In Ayurveda, we look beyond the superficial symptoms to address the true root cause.`,
        `By evaluating your unique mind-body constitution (Prakriti) and the state of your doshas, our experts craft a targeted regimen to detoxify, repair, and rejuvenate the affected tissues.`,
      ],
      symptomsTitle: "Key Indicators & Symptoms",
      symptoms: [
        "Chronic discomfort or functional disruption",
        "Imbalance in energy or digestive levels",
        "Systemic inflammation or localized pain",
        "Disruption of daily routines and wellness",
        "Symptoms that aggravate with specific lifestyle triggers",
      ],
    },
    treatments: {
      title: `Our Approach to Managing ${readableName}`,
      subtitle: "A multi-dimensional therapy plan designed for deep healing.",
      items: [
        {
          title: "Clinical Assessment",
          desc: "Detailed pulse diagnosis and dosha evaluation to identify the root cause.",
          icon: "Stethoscope",
        },
        {
          title: "Panchakarma Therapies",
          desc: "Targeted detoxification procedures to remove deep-seated impurities.",
          icon: "Droplets",
        },
        {
          title: "Customized Herbal Formulations",
          desc: "Precision-crafted medications to restore balance and nourish tissues.",
          icon: "ShieldAlert",
        },
        {
          title: "Diet & Lifestyle Correction",
          desc: "Personalized dietary regimens and daily routines to sustain long-term health.",
          icon: "Activity",
        },
      ],
    },
  };
}
