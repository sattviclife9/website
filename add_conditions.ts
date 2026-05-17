import * as fs from 'fs';

let content = fs.readFileSync('src/data/conditionsData.ts', 'utf8');

const strokeData = `
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
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
          icon: "Heart",
        },
      ],
    },
  },`;

const memoryData = `
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
      image: "https://images.unsplash.com/photo-1555529902-5261145628b5?auto=format&fit=crop&q=80&w=1200",
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
          icon: "Drop",
        },
        {
          title: "Nasya",
          desc: "Nasal drops of medicated ghee (like Brahmi Ghee) to directly nourish brain centers and clear mental channels.",
          icon: "Wind",
        },
        {
          title: "Lifestyle & Diet",
          desc: "Guidance on sleep hygiene, stress management (Yoga/Pranayama), and a diet rich in sattvic (pure) foods.",
          icon: "Heart",
        },
      ],
    },
  },`;

const adhdData = `
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
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
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
          icon: "Heart",
        },
        {
          title: "Shirodhara & Abhyanga",
          desc: "Highly tailored, gentle tactile therapies to calm the nervous system, reduce sensory overload, and induce better sleep.",
          icon: "Wind",
        },
        {
          title: "Medhya Herbs",
          desc: "Careful administration of mild brain tonics (like Mandukaparni and Vacha) in child-friendly formulations like medicated ghee.",
          icon: "Drop",
        },
      ],
    },
  },`;

const insertText = strokeData + memoryData + adhdData;
const insertionPoint = 'export const specificConditions: Record<string, ConditionData> = {';

if (content.includes(insertionPoint)) {
  const finalContent = content.replace(insertionPoint, insertionPoint + '\\n' + insertText);
  fs.writeFileSync('src/data/conditionsData.ts', finalContent, 'utf8');
  console.log("Updated conditionsData.ts successfully.");
} else {
  console.error("Could not find insertion point.");
}
