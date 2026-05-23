import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X, Maximize2 } from 'lucide-react';
import SEO from '../components/SEO';
import TreatmentNav from '../components/TreatmentNav';
import { useScrollLock } from '../hooks/useScrollLock';

interface ServiceItem {
  name: string;
  desc: string;
  details?: string;
  image?: string;
}

interface ServiceSection {
  category: string;
  desc?: string;
  items: ServiceItem[];
}

export const PROCEDURES: ServiceSection[] = [
  {
    category: "Consultation & Diagnostic Services",
    items: [
      { name: "Ayurvedic Consultation", desc: "Personalized consultations focused on understanding root causes and creating natural treatment plans tailored to your body, lifestyle, and health goals." },
      { name: "Clinical Assessment", desc: "Comprehensive evaluation including Detailed Case History, Nadi Parikshan (Pulse Diagnosis), Prakriti & Vikriti Analysis, Agni Assessment, and Manas Assessment." },
      { name: "Prakriti Analysis (Mind–Body Constitution Assessment)", desc: "Detailed assessment of your unique dosha profile for personalized diet and lifestyle planning." },
      { name: "Lifestyle & Wellness Evaluation", desc: "In-depth analysis of daily routines (Dinacharya Assessment) combined with personalized Dietary Mapping and Guidance." },
      { name: "Personalized Treatment Planning", desc: "Tailored Home Regimen Guidance and Personalized Yoga Planning designed specifically for your constitution and health goals." },
      { name: "Diet & Lifestyle Counseling", desc: "Personalized Ayurvedic nutrition and lifestyle guidance designed to improve digestion, energy, sleep, immunity, and overall well-being through sustainable daily habits." },
      { name: "Integrative Ayurvedic Diagnostics", desc: "Modern Diagnostic Support bridging contemporary medical testing with classical Ayurvedic insights for accurate diagnosis." }
    ]
  },
  {
    category: "Panchakarma & Detox Therapies",
    items: [
      { 
        name: "Vamana (Therapeutic Emesis)", 
        image: "https://drive.google.com/thumbnail?id=1NxInI6ywmTFj9IPhM_fMhXQehwuIcyCd&sz=w800",
        desc: "Detoxifies Kapha-dominant conditions like asthma, allergies, and vitiligo through therapeutic vomiting.",
        details: "In this treatment, the patient undergoes internal and external oleation and fomentation for a few days, which include specific therapies and Ayurvedic medicines. This process liquefies the toxins and causes them to accumulate in the upper cavities of the body. The patient is then given emetic medicines and decoctions, which induce therapeutic vomiting and help eliminate toxins from the body tissues. Vamana treatment thus detoxifies and is particularly recommended for Kapha-dominant conditions such as weight gain, asthma, allergies, vitiligo, psoriasis, and hyperacidity."
      },
      { 
        name: "Virechana (Purgation Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1vU8mXps9AZCz1mniaH68HNmsfBjXO136&sz=w800",
        desc: "Eliminates accumulated toxins and clears the bowels. Primarily prescribed for Pitta conditions like jaundice, gastritis, and skin diseases.",
        details: "In Virechana, detoxification occurs through therapeutic purgation by eliminating accumulated toxins and clearing the bowels. The procedure begins with internal and external oleation and fomentation therapies. Thereafter, a natural purgative is administered to promote bowel evacuation, which helps purify the body by removing toxins. Virechana is primarily prescribed for Pitta-dominant conditions such as herpes zoster, jaundice, gastritis, IBS, kidney problems, asthma, fever, skin diseases, bleeding disorders, headaches, burning sensation in the eyes, chronic cough, rhinitis, gout, gynecological disorders, rheumatic conditions, loss of appetite, etc."
      },
      { 
        name: "Basti Chikitsa (Medicated Enema Therapy)", 
        desc: "The prime therapy for balancing Vata dosha. Relieves chronic constipation, arthritis, and neurological conditions.",
        details: "Basti is the prime Ayurvedic therapy for balancing Vata dosha, which controls movement, nerve function, and pain, and is therefore considered the most effective treatment for Vata-related disorders. It provides deep detoxification (Shodhana) by removing accumulated toxins (Ama) from the colon and deeper tissues and is revered as “Ardha Chikitsa” (half of all treatments) due to its wide-ranging impact on almost all body systems and tissues. In this treatment, medicinal liquids are administered through the anal route to purify and balance the body. Depending on the condition and needs of the patient, Basti can use herbal decoctions, medicated oils or ghee, medicated milk, or meat soup as the medicinal medium. It supports digestive health by clearing colon blockages, relieving chronic constipation, and improving nutrient absorption, while also offering significant relief in chronic pain and musculoskeletal conditions such as arthritis, sciatica, rheumatism, gout, and low back pain. Basti is beneficial for neurological and reproductive health, helping manage conditions like hemiplegia, Alzheimer’s disease, Parkinson’s disease, PCOD, and infertility. As a Rasayana (rejuvenation) therapy, it promotes longevity, strength, better complexion, and immunity. What makes Basti unique is its multidimensional action, as it simultaneously expels vitiated doshas and nourishes the body, its safety across all age groups, and its targeted action on the gut, the key center of Vata and the root cause of many diseases."
      },
      { 
        name: "Nasya (Nasal Cleansing Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1ZriV-qvOLRfP7BRFhwoSmAfbj_KAbmNc&sz=w800",
        desc: "Cleanses nasal passages and sinuses, balancing Vata and Kapha. Good for allergies, headaches, and mental clarity.",
        details: "Nasya is an Ayurvedic OPD procedure, usually completed within 15 minutes, and is an integral part of the Dinacharya (daily regimen) described in Ayurveda. It involves the administration of medicated oil or herbal preparations through the nostrils and is especially beneficial for maintaining the health of the head and neck region. Nasya helps cleanse the nasal passages and sinuses, improves breathing, and supports proper oxygen supply to the brain. It is effective in overcoming allergies, nasal dryness, irritation, and congestion, while providing relief from sinusitis, headaches, and respiratory discomfort. Regular practice of Nasya helps balance Vata and Kapha doshas, reduces dryness, strengthens the nose, eyes, ears, throat, and brain, improves mental clarity, and supports overall sensory organ health and well-being."
      },
      { 
        name: "Raktamokshana (Bloodletting Detox Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1T-rhCosd_Ud6T5X4CxrSVplo8w2dCEDx&sz=w800",
        desc: "Bloodletting therapy (e.g. leech therapy) to remove impure blood. Highly effective for acne, psoriasis, gout, and sciatica.",
        details: "Raktamokshan is an Ayurvedic purification therapy in which impure or vitiated blood is removed from the body. It is especially beneficial in conditions related to Pitta dosha imbalance and helps in cleansing and purifying the blood. This therapy helps reduce skin disorders such as acne, rashes, itching, boils, and inflammation. It also relieves pain and swelling, improves blood circulation, reduces acidity, decreases excess heat and toxins in the body, and supports overall immunity. Raktamokshan is commonly used in conditions such as varicose veins, sciatica, arthritis, and other joint disorders, back pain, neck pain, headaches and migraines, muscle stiffness and spasms, and general pain or swelling. It is also indicated in burning sensation, suppuration, gout (Vatarakta), elephantiasis, toxic blood conditions, fibroid, tumors, mastitis, debility, heaviness of the body, conjunctivitis, sinusitis, herpes, liver or spleen abscess, bleeding disorders, and other conditions arising from vitiated blood. Raktamokshan can be performed through different methods such as leech therapy (Jalaukavacharan), venesection (Siravyadha), or cupping, depending on the patient’s condition, body constitution, and the doctor’s advice."
      },
      { 
        name: "Swedana (Herbal Steam Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1QF0kbRglidVTducA3MB0rz1d2BrsZkpw&sz=w800",
        desc: "Induces gentle sweating to dilate body channels and eliminate toxins, typically following Abhyanga.",
        details: "Swedan is an Ayurvedic therapy that induces gentle sweating using medicated steam or warmth and is commonly performed after Abhyanga (oil therapy) to enhance its effects. It can be applied to the entire body or locally on specific areas such as the knees, neck, back, hands, and legs, as advised by the doctor and according to the disease condition. Swedan helps by dilating body channels (Srotas), liquefying toxins (Ama) for easy elimination, and reducing stiffness, heaviness, and coldness in the body. It relieves joint pain, muscle stiffness, and swelling; balances Vata and Kapha dosha; improves blood circulation; delays aging; reduces body heaviness; enhances flexibility and mobility; supports detoxification; improves the effectiveness of Panchakarma therapies; improves vision; reduces tiredness and fatigue; nourishes body tissues (Dhatus); promotes longevity; induces sound sleep; and enhances skin tone and complexion. Swedan is especially useful in conditions such as arthritis and joint disorders, back pain, neck pain, frozen shoulder, muscle spasms and stiffness, cold-related disorders, and as a post-Abhyanga therapy to open body channels."
      },
      {
        name: "Dhoopan (Ayurvedic Herbal Fumigation)",
        image: "https://drive.google.com/thumbnail?id=1k6kBILBeGB2MduWeMzo0QhI_ldd2VM0h&sz=w800",
        desc: "Fumigation with medicinal herbs to purify, disinfect, and promote healing of specific body areas.",
        details: "Dhoopan is a classical Ayurvedic procedure in which medicinal herbs are burned to produce therapeutic smoke that is directed over specific body areas to purify, disinfect, and promote healing. Among its commonly practiced forms are Kesha Dhoopan (hair fumigation), Karna Dhoopan (ear fumigation), Yoni Dhoopan (vaginal fumigation), and Vrana Dhoopan (wound fumigation). Kesha Dhoopan is beneficial for preventing hair fall, reducing dandruff, and improving hair strength and scalp health. Karna Dhoopan helps reduce ear itching, infections, discharge, and irritation, and supports healing. Yoni Dhoopan promotes vaginal hygiene, reduces infections, discharge, and odor, and is especially useful in postpartum care, aiding uterine recovery and healing of vaginal stitches after normal delivery. Vrana Dhoopan is used for infected wounds, non-healing ulcers, and post-surgical wounds, where it helps reduce pus, foul smell, and microbial growth, disinfects the wound, promotes faster healing, dries moist wounds, and relieves pain and itching. Overall, Dhoopan therapies help cleanse the body, improve healing, and promote overall well-being."
      }
    ]
  },
  {
    category: "Pain Management & Musculoskeletal Therapies",
    items: [
      { 
        name: "Agnikarma (Therapeutic Heat Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1qBGPw5BujZ_ZbDLnN2zcO46tg0gsW3fa&sz=w800",
        desc: "Cauterization of specific points using a heated Shalaka to provide long-lasting relief from chronic joint and muscle pain.",
        details: "In Agnikarma therapy, specific points on the body are gently cauterized using a specially designed heated instrument known as a Shalaka. Based on the patient’s condition and the nature of the disease, different types of Shalaka, such as gold, iron, copper, Naga, or Mruttika, are selected to achieve the desired therapeutic effect. The controlled application of heat provides quick and long-lasting pain relief, reduces stiffness and inflammation, improves local blood circulation, relieves nerve compression, and helps prevent the recurrence of chronic pain conditions. Agnikarma is highly effective in conditions such as cervical and lumbar spondylosis, slip disc and sciatica, frozen shoulder, tennis elbow, heel pain (plantar fasciitis), knee pain and osteoarthritis, joint stiffness and inflammation, muscle spasms, sacroiliac joint pain, and trigeminal neuralgia. In addition to pain management, it is also used in certain eye-related conditions and cosmetic procedures, such as the removal of warts, moles, corns, and lipomas, and in the supportive management of conditions like PCOD and hernia."
      },
      { 
        name: "Viddhakarma Therapy", 
        image: "https://drive.google.com/thumbnail?id=10fBzTiNbe-frN27R4Hqre4iKe7uV_Hnm&sz=w800",
        desc: "A para-surgical therapy involving therapeutic puncturing of Marma points for instant pain relief and nerve stimulation.",
        details: "Viddhakarma is an Ayurvedic para-surgical therapy that involves therapeutic puncturing of specific body points with respect to Marma (energy points), using a fine needle for immediate pain relief and overall healing. It works by releasing obstructed Vata, draining impure blood, and stimulating nerve endings, thereby improving circulation and restoring normal physiological function. In pain management, Viddhakarma provides instant and effective relief in conditions such as joint pain, back pain, neck pain, sciatica, frozen shoulder, and muscular stiffness by reducing inflammation, relieving pressure, and enhancing nerve conduction. Beyond pain relief, it is also beneficial in psychosomatic disorders, stress, sleep disturbances, autism, and helps improve concentration and memory. Additionally, it supports skin health, promotes hair growth, and improves reproductive health. Overall, Viddhakarma acts as a holistic therapy that balances doshas, relieves pain, and enhances overall well-being when performed under proper Ayurvedic guidance."
      },
      { 
        name: "Kati Basti (Lower Back Therapy)", 
        image: "https://drive.google.com/thumbnail?id=10xeEpDPg3IQ-W74R-tkt1q8KrRbYCfSG&sz=w800",
        desc: "Localized oil-retention therapy over the lower back to relieve pain, stiffness, spasms, and inflammation.",
        details: "Kati Basti is an Ayurvedic treatment where warm medicated oil is retained over the lumbosacral (lower back) region using a dough reservoir. Kati denotes the waist or lower back, and this therapy is highly effective in pacifying Vata disorders affecting the spine and nerves. The warmth and medicinal properties of the oil penetrate deeply into muscles, intervertebral joints, and nerves, helping relieve pain, stiffness, spasms, and inflammation. Kati Basti is indicated in chronic low back pain, lumbar spondylosis, disc degeneration, sciatica, muscle spasms, sacroiliac joint disorders, and postural strain. It improves circulation, strengthens spinal muscles, nourishes nerves, and restores flexibility, making it valuable for both degenerative and stress-related spinal conditions."
      },
      { 
        name: "Janu Basti (Knee Therapy)", 
        image: "https://drive.google.com/thumbnail?id=18delcsmlVHVZtxXvAQOYgcDCgski4o88&sz=w800",
        desc: "Localized oil-retention therapy over the knees to nourish joints and relieve chronic pain.",
        details: "Janu Basti is an Ayurvedic localized oil-retention therapy in which warm, medicated herbal oil is retained over the knee joint within a dough ring made of black gram flour. Janu refers to the knee, and Basti means to retain, signifying deep nourishment of the joint structures through sustained oil contact. This therapy pacifies aggravated Vata dosha, which is the primary cause of joint degeneration and pain. Janu Basti lubricates the joint, strengthens cartilage, ligaments, and tendons, reduces swelling and pain, and improves range of motion. It is especially beneficial in osteoarthritis, degenerative knee disorders, chronic knee pain, post-injury pain, ligament weakness, ligament tear, and age-related joint wear. Janu Basti also delays joint degeneration, improves synovial fluid quality, and enhances overall knee stability and mobility."
      },
      { 
        name: "Greeva Basti (Neck & Cervical Therapy)", 
        image: "https://drive.google.com/thumbnail?id=17u9KYJjXk7ngAEafMUimAZFux1rGwC1m&sz=w800",
        desc: "Localized oil-retention therapy over the neck to relieve pain and improve mobility.",
        details: "Greeva Basti is a localized oil-retention therapy performed over the neck and cervical spine region, where warm medicated oil is retained within a dough boundary. Greeva means neck, and this therapy is especially effective for cervical disorders. Greeva Basti nourishes cervical vertebrae, intervertebral discs, nerves, and surrounding muscles, helping relieve pain, numbness, and restricted neck movement. It is indicated in cervical spondylosis, cervical disc issues, tension headaches, vertigo, shoulder pain, and postural neck strain, commonly seen due to prolonged screen use. This therapy improves flexibility, strengthens neck muscles, enhances nerve function, and prevents the progression of degenerative cervical conditions."
      },
      { 
        name: "Prishta Basti (Spinal Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1IVOWz48g3FcubCWCXLeAi0Xu-iKBeVjW&sz=w800",
        desc: "Localized oil-retention therapy over the spine to relieve chronic back pain, spine stiffness, and weakness.",
        details: "Prishta Basti is an Ayurvedic therapy in which warm medicated oil is retained over the spine using a herbal dough ring. The warmth allows the oil to penetrate deeper tissues, helping nourish the muscles and balance Vata dosha. It is commonly used for chronic back pain, spine stiffness, spine disorders, and weakness of the back. The therapy helps reduce pain and inflammation, relax muscles, improve circulation, and support spinal strength and mobility."
      },
      { 
        name: "Pinda Sweda (Herbal Bolus Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1bxuU1F1mPy3N0uNTQ4jLseX9RIb30UC7&sz=w800",
        desc: "Warm herbal bundles massaged over the body to induce sweating, relieve pain, and nourish muscles.",
        details: "Pinda Sweda is an Ayurvedic therapy in which warm herbal bundles (potli) made of medicinal herbs or powders are heated and applied to the body to induce sweating, relieve pain, and reduce stiffness. The boluses are prepared by tying herbal ingredients in cloth, heating them in medicated oil, and gently massaging over the affected area, usually after a light oil massage. This combined action improves blood circulation, relaxes muscles, and helps remove Ama (toxins) from the tissues. There are various types of Pinda Sweda, including Patra Pinda Sweda, Churna Pinda Sweda, Shashtika Shali Pinda Sweda, Jambira Pinda Sweda, Valuka Sweda, Mamsa Pinda Sweda, and Kukkut Pinda Sweda, chosen according to the patient’s condition. Among these, Shashtika Shali Pinda Sweda is a nourishing therapy using rice cooked in herbal decoction and milk, which strengthens muscles, improves circulation, and acts as a rejuvenative. It is especially beneficial for joint pain, muscle stiffness, arthritis, and other musculoskeletal conditions, helping improve mobility and promote overall healing and relaxation."
      },
      { 
        name: "Upanaha Sweda (Herbal Poultice Therapy)", 
        image: "https://drive.google.com/thumbnail?id=183HAKfAWlwRvcYm0DZaZDMTHBHwWU2wg&sz=w800",
        desc: "Warm herbal poultice applied over painful areas to reduce stiffness and inflammation in joints.",
        details: "Upanaha is a traditional Ayurvedic therapeutic procedure in which a warm herbal poultice is applied over a painful or affected area of the body and then covered and retained for a specific duration. The poultice is prepared using medicinal powders mixed with substances such as warm oils, ghee, herbal decoctions, fermented liquids, or animal fats, selected according to the aggravated dosha. Upanaha provides sustained warmth (Swedana) and allows the medicinal substances to penetrate deeply into the tissues, making it especially useful in musculoskeletal and joint disorders. The importance of Upanaha lies in its ability to reduce pain, stiffness, swelling, and inflammation, particularly in conditions like osteoarthritis, rheumatoid arthritis, lower back pain, cervical and lumbar spondylosis, frozen shoulder, and sports injuries. The continuous warmth improves local circulation, relaxes muscles, softens contracted tissues, and facilitates the removal of Ama (toxins)."
      }
    ]
  },
  {
    category: "Rejuvenation & Wellness Therapies",
    items: [
      { 
        name: "Abhyanga (Full Body Ayurvedic Massage)", 
        image: "https://drive.google.com/thumbnail?id=1LtSvQ1zHcwUuGUKMLmEtWtHwV_PsJgSt&sz=w800",
        desc: "Luxurious massage using medicated oils tailored to your dosha to liquify toxins and nourish tissues.",
        details: "Abhyanga is an important Ayurvedic therapy in which medicated oils or ghee are gently applied and massaged over the body. It helps liquify toxins (Ama) from the tissues, prepares the body for detoxification therapies such as Panchakarma, and slows down the aging process by nourishing the body tissues (Dhatus). The oil used for Abhyanga is customized by the doctor based on the individual’s body constitution and disease condition, ensuring maximum therapeutic benefit. Ayurvedic Abhyanga is different from routine home massage, as it focuses on using specific oils tailored according to an individual’s Prakriti, season, and the purpose of the massage, and it involves specific pressure, direction, and therapeutic points, making it a targeted and healing procedure rather than simple relaxation. Abhyanga provides relief from body pain, reduces dryness of the skin and joints, improves blood circulation, calms the nervous system, reduces stress, enhances sleep quality, strengthens muscles and joints, and improves overall softness and flexibility of the body."
      },
      { 
        name: "Shirodhara", 
        image: "https://drive.google.com/thumbnail?id=1PvC73g63_vYVsrHjRjgKigIESUU6lKVD&sz=w800",
        desc: "Continuous pouring of warm medicated oil over the forehead to deeply relax the nervous system and relieve stress.",
        details: "Shirodhara is a classical Ayurvedic therapy in which a continuous stream of warm medicated oil, milk, or other herbal liquids is gently poured over the forehead. It deeply relaxes the mind and nervous system, helping balance mainly Vata and Pitta doshas. Shirodhara is highly beneficial for stress, anxiety, insomnia, mental fatigue, headaches, migraines, and hypertension (high blood pressure), as it calms the nervous system and reduces mental overactivity. It is also helpful in hormonal imbalances, PMS (premenstrual syndrome), pre-menopause, and post-menopausal symptoms such as mood swings, irritability, anxiety, hot flashes, and disturbed sleep. Additionally, Shirodhara improves sleep quality, concentration, and emotional stability, supports neurological and endocrine balance, nourishes the scalp and hair, and is effective in psychosomatic and stress-related disorders."
      },
      { 
        name: "Dhara Therapy", 
        image: "https://drive.google.com/thumbnail?id=1EtfdUuWaJstsiBOAOsTrs-NmQef0qsU3&sz=w800",
        desc: "Continuous stream of warm medicated liquid over the body or specific part to induce deep relaxation and healing.",
        details: "In Ayurveda, Dhara refers to a therapeutic procedure in which a warm, medicated liquid is poured in a steady and continuous stream over the body or a specific part of the body. It may be performed as Sarvanga Dhara, where the medicated liquid is poured over the entire body, or as Ekanga (localized) Dhara, in which the stream is applied to specific areas. Based on the individual’s doshic imbalance and health condition, the physician may prescribe different forms of Dhara, such as Taila Dhara (medicated oils), Ghrita Dhara (medicated ghee), Kashaya Dhara (herbal decoctions), Dhanyamla Dhara (fermented liquids), Ksheera Dhara (medicated milk), and Takra Dhara (medicated buttermilk)."
      },
      { 
        name: "Udvartana (Herbal Powder Massage)", 
        image: "https://drive.google.com/thumbnail?id=18sSB7SUV6fQivCJgO6nQ6J9MFmK5Hndo&sz=w800",
        desc: "Herbal powder massage in an upward direction to mobilize toxins, reduce fat, and improve skin tone.",
        details: "Udvartana is a classical Ayurvedic therapy in which a herbal powder massage is applied in a downward-to-upward direction. This method is different from conventional oil massage and is useful for mobilizing accumulated toxins (Ama) and stagnant fat, while stimulating blood circulation and metabolic activity. It is especially beneficial for weight management and body contouring, as brisk upward massage helps to liquefy excess fat, support metabolism, and improve body shape. The medicinal powders act like natural scrubs, cleansing the skin, removing dead cells, and enhancing skin texture and glow."
      },
      { 
        name: "Padabhyanga (Foot Massage Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1Bs6OtPCatfI5IRm1vQI_0CnMf5CvqtnK&sz=w800",
        desc: "Traditional foot massage using a special bronze bowl to draw out excess heat and balance Pitta dosha.",
        details: "Padabhyanga is a traditional Ayurvedic foot massage that focuses on the soles of the feet to promote relaxation, circulation, and overall well-being. In the Kansa Thali variation, a special bronze alloy bowl made of copper, tin, and zinc is used. This metal interacts with the skin’s natural acidity, and the grey residue that appears during the massage is not dirt but a sign of neutralization of excess acidity, helping to balance energy and heat in the body."
      },
      { 
        name: "Hrid Basti", 
        image: "https://drive.google.com/thumbnail?id=10N6hkr7iAYGcVdYWuh2sQJjlXuffKUbN&sz=w800",
        desc: "Localized oil therapy performed over the heart region to deeply nourish heart muscles and calm the nervous system.",
        details: "Hrida refers to the heart, which in Ayurveda is regarded as the seat of Prana, Ojas, and Mana. Hrida Basti is an Ayurvedic localized oil therapy performed over the heart (chest) region. In this therapy, a small ring made of herbal dough is placed on the chest, and warm medicated oil is gently poured into it and retained for a specific duration while maintaining a constant warm temperature. This treatment deeply nourishes and strengthens the heart muscles, improves blood circulation, and calms the nervous system."
      },
      { 
        name: "Karnapoorana (Ear Nourishment Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1aw4Zmy2G2qvZLy1MDMMWkjBPIU98KSNz&sz=w800",
        desc: "Warm medicated oil instilled into the ears to pacify Vata, nourish ears, and soothe the mind.",
        details: "Karnapoorana is a classical Ayurvedic ear therapy in which warm medicated oil is gently instilled into the ears to pacify Vata dosha and nourish the ears and nervous system. It strengthens the ear structures, soothes the mind, and supports overall neurological balance. Karnapoorana is beneficial for ear pain, dryness, excess wax, tinnitus, impaired hearing, ear infections, dizziness, vertigo, headache, migraine, stress, sleeplessness, and mental fatigue."
      },
      { 
        name: "Netra Tarpana (Eye Rejuvenation Therapy)", 
        image: "https://drive.google.com/thumbnail?id=12OM8NRbHwr6eBU5legYQ-ssCYz2rbWF1&sz=w800",
        desc: "Warm medicated ghee or herbal oil gently retained over the eyes to directly nourish the eye tissues.",
        details: "Netra Tarpana is a classical Ayurvedic eye therapy derived from Netra (eyes) and Tarpana (nourishment). In this procedure, a soft dough ring is carefully formed around the eye sockets, and protective eye goggles are placed to ensure safety and proper retention. Warm medicated ghee or herbal oil is then gently retained over the eyes for a specific duration, allowing direct nourishment of the eye tissues. This therapy aims to lubricate, nourish, strengthen, and rejuvenate the eyes while supporting overall eye health."
      },
      {
        name: "Netra Dhawana (Eye Cleansing Therapy)",
        image: "https://drive.google.com/thumbnail?id=1YYvIRHURQs5wyamWMfOa4yOz2FU3B4-3&sz=w800",
        desc: "Gentle washing of the eyes with medicated liquid to refresh and improve vision.",
        details: "Netra Dhawan is a traditional Ayurvedic eye cleansing and care therapy. In this procedure, the eyes are gently washed with a stream of medicated liquid or a specially prepared herbal solution to cleanse them. This helps remove accumulated dust, strain, fatigue, redness, itching, and irritation. Netra Dhawan refreshes the eyes, improves blood circulation, and supports clear vision."
      }
    ]
  },
  {
    category: "Women’s Wellness Therapies",
    items: [
      { 
        name: "Uttarbasti Therapy", 
        image: "https://drive.google.com/thumbnail?id=1KhjD5KCbQeNU_e8alcR53uPSjCalMzXn&sz=w800",
        desc: "Administered through the urethral or vaginal route to cleanse and strengthen the urogenital system.",
        details: "Uttara Basti is a specialized Ayurvedic Panchakarma procedure in which medicated oils or herbal decoctions are administered through the urethral passage in men and women, or through the vaginal route in women, to directly act on the urinary and reproductive organs. This therapy helps cleanse, nourish, and strengthen the organs of the urogenital system, thereby restoring their normal function and improving reproductive and urinary health."
      }
    ]
  },
  {
    category: "Child Wellness Therapies",
    items: [
      { 
        name: "Swarna Prashana", 
        image: "https://drive.google.com/thumbnail?id=17vGlDXERDmyLElLNqwPJOvfQ6fniCOvk&sz=w800",
        desc: "Traditional Ayurvedic remedy to boost immunity, intelligence, and overall growth in children.",
        details: "Swarna Prashana is an Ayurvedic immunity-boosting practice in which purified gold (Swarna Bhasma) is combined with honey, ghee, and selected herbal extracts and administered in small, age-appropriate doses to infants and children from birth up to 16 years. This traditional practice supports overall growth and development, strengthens immunity, and improves resistance to infections."
      }
    ]
  },
  {
    category: "Skin, Hair & Beauty Therapies",
    items: [
      { 
        name: "Mukhalepam (Herbal Face Therapy)", 
        image: "https://drive.google.com/thumbnail?id=136tjtKmUqF3YylYxyErbGYMsm8x7QxGv&sz=w800",
        desc: "Application of medicinal herbal pastes (Lepas) on the face for radiant and blemish-free skin.",
        details: "Mukhalepam is a traditional Ayurvedic facial therapy wherein customized herbal pastes are applied to the face. These lepas are prepared using various Ayurvedic herbs selected according to the individual's skin type and the specific conditions they are trying to manage, such as acne, pigmentation, or early signs of aging. It deeply cleanses, detoxifies, and nourishes the skin, imparting a natural and healthy glow."
      },
      { 
        name: "Ayurvedic Facial Therapies", 
        image: "https://drive.google.com/thumbnail?id=1b2r5-4ACvGY0TbDUHRWqiQknB8tqga2Y&sz=w800",
        desc: "Customized natural facials to cleanse, nourish, and rejuvenate the skin based on individual constitution.",
        details: "An Ayurvedic facial is a natural, customized therapy based on an individual’s skin constitution (Prakriti) and Ayurvedic principles, designed to cleanse, nourish, and rejuvenate the skin for a healthy glow. It uses herbal powders, medicated oils, natural pastes, steam, and gentle massage to deeply cleanse the pores, remove toxins (Ama), enhance skin glow, improve complexion and texture, and reduce acne, pimples, pigmentation, and dark spots."
      },
      { 
        name: "Hair & Scalp Therapies", 
        image: "https://drive.google.com/thumbnail?id=1XtGLSzeFviUC43IuLslUoePKi6znS0nI&sz=w800",
        desc: "Holistic support for hair fall, dandruff, thinning hair, premature greying, and scalp health through Ayurvedic treatments.",
        details: "Holistic support is provided for hair fall, dandruff, thinning hair, premature greying, and overall scalp health through Ayurvedic treatments. Therapies focus on nourishing hair roots, strengthening follicles, improving scalp circulation, and balancing the Doshas to reduce hair loss naturally."
      },
      { 
        name: "Shiro Abhyanga (Head Massage Therapy)", 
        image: "https://drive.google.com/thumbnail?id=1g_SB1WUDmEbAQjsKJTdJoDqGee-3v5Is&sz=w800",
        desc: "Therapeutic head massage using medicated oils to relieve stress and nourish hair roots.",
        details: "Shiro Abhyanga is a deeply relaxing head, neck, and shoulder massage using warm Ayurvedic oils. It stimulates the Marma points on the scalp, which helps pacify Vata, reduce stress, prevent hair fall, and improve overall mental clarity and relaxation."
      },
      { 
        name: "Anti-Ageing Rejuvenation Therapies", 
        image: "https://drive.google.com/thumbnail?id=1zt60-N6KT3IYTO50C5ckzyhuLX0begih&sz=w800",
        desc: "Natural Ayurvedic therapies for pigmentation, wrinkles, tanning, uneven skin tone, and early signs of ageing.",
        details: "Treatment for pigmentation, wrinkles, tanning, uneven skin tone, and early signs of ageing is provided through natural Ayurvedic therapies to promote healthier, brighter, and more youthful-looking skin."
      }
    ]
  },
  {
    category: "Immunity & Rejuvenation Therapies",
    items: [
      { 
        name: "Rasayana Therapy (Rejuvenation & Immunity Enhancement)", 
        image: "https://drive.google.com/thumbnail?id=15C81rD-JhzLEqP0suc1qfG3kyul6dgDn&sz=w800",
        desc: "Holistic rejuvenation therapies, antioxidant-rich formulations, and lifestyle regimens to strengthen immunity and vitality.",
        details: "Rasayana Chikitsa in Ayurveda focuses on rejuvenation, strengthening immunity, and promoting overall wellness. Suitable Rasayana formulations such as Chyawanprash, Ashwagandha, and Shatavari are prescribed to slow the aging process, increase strength and vitality, and maintain long-term health."
      }
    ]
  },
  {
    category: "Wellness & Lifestyle Programs",
    items: [
      { 
        name: "Ayurvedic Detox Program", 
        desc: "Comprehensive cleansing protocols combining diet, lifestyle changes, and Panchakarma therapies.",
        details: "A structured detoxification program that aims to eliminate accumulated Ama (toxins) from the body using tailored Ayurvedic therapies. This program includes specialized diets, herbal supplements, and cleansing procedures to reset the digestive fire (Agni) and promote optimal health."
      },
      { 
        name: "Weight Management Program", 
        desc: "Holistic approach combining therapies like Udvartana with personalized diet for sustainable weight loss.",
        details: "Our Ayurvedic Weight Management Program focuses on balancing the Doshas and enhancing metabolic rate through targeted treatments like Udvartana (herbal powder massage), Swedana, and specialized dietary guidelines. It is a natural and healthy way to achieve and maintain your ideal body weight."
      },
      { 
        name: "Stress Relief & Relaxation Program", 
        desc: "Therapies focused on calming the nervous system and rejuvenating mental health.",
        details: "A customized program designed to combat stress, anxiety, and fatigue using calming treatments such as Shirodhara, Abhyanga, and soothing herbal remedies, coupled with meditation and lifestyle counseling."
      },
      { 
        name: "Bridal Wellness Program", 
        desc: "Pre-wedding wellness encompassing skin care, hair care, detox, and emotional balance.",
        details: "A holistic approach combining herbal pastes, therapies, and diet for naturally radiant, blemish-free skin, along with stress-relieving treatments to calm pre-wedding anxiety and ensure you look and feel your best on your special day."
      },
      { 
        name: "Postpartum Wellness Program", 
        desc: "Restorative therapies, massages, and diet to help the mother regain strength and balance after delivery.",
        details: "Sutika Paricharya or postpartum care involves appropriate Ayurvedic medicines, herbal decoctions, and nourishing formulations to help the body regain strength lost during childbirth, support lactation, and reduce fatigue and weakness. Care includes medicated oil bathing and herbal practices for optimal recovery."
      }
    ]

  }
];


export default function Services() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<{name: string, desc: string, details?: string, image?: string} | null>(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  useScrollLock(!!selectedService);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 160;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <TreatmentNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12 md:pt-8 md:pb-32">
      <SEO 
        title="Ayurvedic Treatments & Panchakarma"
        description="Explore our authentic Ayurvedic treatments in Pune. Specialized services include Agnikarma for chronic pain, Viddhakarma, and traditional Panchakarma detox therapies."
        keywords="Ayurvedic treatments, Agnikarma Pune, Viddhakarma technique, Panchakarma therapy, Ayurvedic detox, Nadi Pariksha Pune"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Healing Protocols</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Ayurvedic <span className="italic font-medium text-clinic-teal-900/80">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
          The core procedures of traditional healing. From Panchakarma to specialized para-surgical therapies.
        </p>
      </motion.div>

      <div className="space-y-24 md:space-y-32">
        {PROCEDURES.map((section: ServiceSection, idx) => {
          const sectionId = section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
          <div key={idx} id={sectionId} className="scroll-mt-[190px] lg:scroll-mt-[160px]">
            <h2 className="text-3xl md:text-4xl font-serif text-clinic-teal-900 mb-6 border-b border-clinic-border pb-6 uppercase tracking-wider">{section.category}</h2>
            {section.desc && (
              <p className="text-lg md:text-xl text-clinic-charcoal font-light mb-10 leading-relaxed max-w-4xl">{section.desc}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, idxi) => (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -6, scale: 1.01 }}
                   transition={{ 
                     y: { duration: 0.2, ease: "easeInOut" },
                     scale: { duration: 0.2, ease: "easeInOut" },
                     opacity: { duration: 0.4 }
                   }}
                   key={idxi} 
                   id={item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                   onClick={() => setSelectedService(item)}
                   className={`p-8 rounded-[2rem] shadow-sm border border-clinic-border cursor-pointer hover:shadow-lg transition-shadow duration-300 group overflow-hidden relative flex flex-col ${item.image ? 'min-h-[320px] justify-end border-none' : 'bg-white'}`}
                >
                  {item.image && (
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-black/20 group-hover:via-gray-900/70 transition-colors duration-500 z-10" />
                      <img src={item.image} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="relative z-10">
                    <h3 className={`text-xl md:text-2xl font-serif mb-4 transition-colors ${item.image ? 'text-white drop-shadow-md group-hover:text-clinic-gold/90' : 'text-clinic-teal-900 group-hover:text-clinic-gold'}`}>{item.name}</h3>
                    <p className={`text-base font-light leading-relaxed ${item.image ? 'text-gray-200 drop-shadow' : 'text-clinic-muted'}`}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )})}
      </div>
      {createPortal(
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20 md:items-center md:pt-4 md:p-6" style={{ zIndex: 99999 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-clinic-teal-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className={`w-full ${isImageExpanded ? 'max-w-6xl h-[90vh]' : 'max-w-2xl max-h-[85vh]'} bg-white rounded-2xl shadow-2xl z-10 relative overflow-hidden flex flex-col transition-all duration-500`}
              >
                <div className={`p-8 md:p-10 overflow-y-auto flex-1 ${isImageExpanded ? 'flex flex-col' : ''}`}>
                  <button
                    onClick={() => {
                      if (isImageExpanded) {
                        setIsImageExpanded(false);
                      } else {
                        setSelectedService(null);
                      }
                    }}
                    className={`absolute top-4 right-4 md:top-6 md:right-6 text-clinic-muted hover:text-clinic-teal-900 transition-colors ${isImageExpanded ? 'bg-white/80 backdrop-blur-sm pl-2 pt-2' : 'bg-clinic-teal-50'} shadow-sm p-2 rounded-full z-[100]`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className={`mb-6 md:mb-8 inline-flex items-center gap-4 ${!isImageExpanded ? 'mt-4 md:mt-0' : ''}`}>
                    <span className="h-[1px] w-8 bg-clinic-bronze"></span>
                    <span className="text-clinic-bronze font-serif italic text-sm">Treatment Details</span>
                  </div>
                  <h3 className="text-3xl font-serif text-clinic-teal-900 mb-6 pr-12 leading-tight">
                    {selectedService.name}
                  </h3>
                  {selectedService.image && (
                    <div 
                      className={`relative w-full cursor-pointer group rounded-xl overflow-hidden ${isImageExpanded ? 'flex-1 h-full min-h-0 bg-clinic-teal-50 mb-0' : 'aspect-video mb-8'}`}
                      onClick={() => setIsImageExpanded(!isImageExpanded)}
                    >
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.name} 
                        referrerPolicy="no-referrer" 
                        className={`w-full h-full ${isImageExpanded ? 'object-contain bg-black/5' : 'object-cover hover:scale-105 transition-transform duration-500'}`} 
                      />
                      {!isImageExpanded && (
                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  )}
                  {!isImageExpanded && (
                    <div className="prose prose-teal max-w-none text-clinic-charcoal/80 text-lg leading-relaxed whitespace-pre-line">
                      {selectedService.details || selectedService.desc}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
    </>
  );
}
