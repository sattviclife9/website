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

const PROCEDURES: ServiceSection[] = [
  {
    category: "Consultation and Diagnostic Services",
    items: [
      { name: "Clinical Assessment", desc: "Comprehensive evaluation including Detailed Case History, Nadi Parikshan (Pulse Diagnosis), Prakriti & Vikriti Analysis, Agni Assessment, and Manas Assessment." },
      { name: "Lifestyle & Wellness Evaluation", desc: "In-depth analysis of daily routines (Dinacharya Assessment) combined with personalized Dietary Mapping and Guidance." },
      { name: "Personalized Care Planning", desc: "Tailored Home Regimen Guidance and Personalized Yoga Planning designed specifically for your constitution and health goals." },
      { name: "Integrative Diagnostics", desc: "Modern Diagnostic Support bridging contemporary medical testing with classical Ayurvedic insights for accurate diagnosis." }
    ]
  },
  {
    category: "Panchakarma and Detox Therapies",
    items: [
      { 
        name: "Nasya (Nasal Therapy)", 
        desc: "Cleanses nasal passages and sinuses, balancing Vata and Kapha. Good for allergies, headaches, and mental clarity.",
        details: "Nasya is an Ayurvedic OPD procedure, usually completed within 15 minutes, and is an integral part of the Dinacharya (daily regimen) described in Ayurveda. It involves the administration of medicated oil or herbal preparations through the nostrils and is especially beneficial for maintaining the health of the head and neck region. Nasya helps cleanse the nasal passages and sinuses, improves breathing, and supports proper oxygen supply to the brain. It is effective in overcoming allergies, nasal dryness, irritation, and congestion, while providing relief from sinusitis, headaches, and respiratory discomfort. Regular practice of Nasya helps balance Vata and Kapha doshas, reduces dryness, strengthens the nose, eyes, ears, throat, and brain, improves mental clarity, and supports overall sensory organ health and well-being.",
        image: "https://drive.google.com/thumbnail?id=1vpJdms9yG39uoKOQZrbYlahE6yOEA3b_&sz=w1200"
      },
      { 
        name: "Vamana (Therapeutic Emesis)", 
        desc: "Detoxifies Kapha-dominant conditions like asthma, allergies, and vitiligo through therapeutic vomiting.",
        details: "In this treatment, the patient undergoes internal and external oleation and fomentation for a few days, which include specific therapies and Ayurvedic medicines. This process liquefies the toxins and causes them to accumulate in the upper cavities of the body. The patient is then given emetic medicines and decoctions, which induce therapeutic vomiting and help eliminate toxins from the body tissues. Vamana treatment thus detoxifies and is particularly recommended for Kapha-dominant conditions such as weight gain, asthma, allergies, vitiligo, psoriasis, and hyperacidity.",
        image: "https://drive.google.com/thumbnail?id=17N2y8OZPTDEOI6We9iJsFaC7H_ccS_0A&sz=w1200"
      },
      { 
        name: "Virechana (Purgation Therapy)", 
        desc: "Eliminates accumulated toxins and clears the bowels. Primarily prescribed for Pitta conditions like jaundice, gastritis, and skin diseases.",
        details: "In Virechana, detoxification occurs through therapeutic purgation by eliminating accumulated toxins and clearing the bowels. The procedure begins with internal and external oleation and fomentation therapies. Thereafter, a natural purgative is administered to promote bowel evacuation, which helps purify the body by removing toxins. Virechana is primarily prescribed for Pitta-dominant conditions such as herpes zoster, jaundice, gastritis, IBS, kidney problems, asthma, fever, skin diseases, bleeding disorders, headaches, burning sensation in the eyes, chronic cough, rhinitis, gout, gynecological disorders, rheumatic conditions, loss of appetite, etc."
      },
      { 
        name: "Basti Chikitsa (Medicated Detox Enema Therapy)", 
        desc: "The prime therapy for balancing Vata dosha. Relieves chronic constipation, arthritis, and neurological conditions.",
        details: "Basti is the prime Ayurvedic therapy for balancing Vata dosha, which controls movement, nerve function, and pain, and is therefore considered the most effective treatment for Vata-related disorders. It provides deep detoxification (Shodhana) by removing accumulated toxins (Ama) from the colon and deeper tissues and is revered as “Ardha Chikitsa” (half of all treatments) due to its wide-ranging impact on almost all body systems and tissues. In this treatment, medicinal liquids are administered through the anal route to purify and balance the body. Depending on the condition and needs of the patient, Basti can use herbal decoctions, medicated oils or ghee, medicated milk, or meat soup as the medicinal medium. It supports digestive health by clearing colon blockages, relieving chronic constipation, and improving nutrient absorption, while also offering significant relief in chronic pain and musculoskeletal conditions such as arthritis, sciatica, rheumatism, gout, and low back pain. Basti is beneficial for neurological and reproductive health, helping manage conditions like hemiplegia, Alzheimer’s disease, Parkinson’s disease, PCOD, and infertility. As a Rasayana (rejuvenation) therapy, it promotes longevity, strength, better complexion, and immunity. What makes Basti unique is its multidimensional action, as it simultaneously expels vitiated doshas and nourishes the body, its safety across all age groups, and its targeted action on the gut, the key center of Vata and the root cause of many diseases."
      },
      { 
        name: "Raktamokshan (Blood Detox Therapy)", 
        desc: "Bloodletting therapy (e.g. leech therapy) to remove impure blood. Highly effective for acne, psoriasis, gout, and sciatica.",
        details: "Raktamokshan is an Ayurvedic purification therapy in which impure or vitiated blood is removed from the body. It is especially beneficial in conditions related to Pitta dosha imbalance and helps in cleansing and purifying the blood. This therapy helps reduce skin disorders such as acne, rashes, itching, boils, and inflammation. It also relieves pain and swelling, improves blood circulation, reduces acidity, decreases excess heat and toxins in the body, and supports overall immunity. Raktamokshan is commonly used in conditions such as varicose veins, sciatica, arthritis, and other joint disorders, back pain, neck pain, headaches and migraines, muscle stiffness and spasms, and general pain or swelling. It is also indicated in burning sensation, suppuration, gout (Vatarakta), elephantiasis, toxic blood conditions, fibroid, tumors, mastitis, debility, heaviness of the body, conjunctivitis, sinusitis, herpes, liver or spleen abscess, bleeding disorders, and other conditions arising from vitiated blood. Raktamokshan can be performed through different methods such as leech therapy (Jalaukavacharan), venesection (Siravyadha), or cupping, depending on the patient’s condition, body constitution, and the doctor’s advice.",
        image: "https://drive.google.com/thumbnail?id=1yRgwP1QS4AVZki3nJUOWcMbcr0FWoksZ&sz=w1200"
      },
      {
        name: "Dhoompan (Medicated Smoke Therapy)",
        desc: "Inhalation of medicinal herbal smoke to clear respiratory tract and sensory organs.",
        details: "In Ayurveda, Dhoompan is a therapeutic procedure in which medicinal herbal smoke is inhaled through the nose and exhaled strictly through the mouth. Regular practice helps maintain the health of organs above the shoulders by eliminating vitiated Vata and Kapha doshas. This therapy is highly effective for chronic respiratory conditions, specifically relieving sinusitis by draining mucus and reducing inflammation. It also benefits symptoms of DNS (Deviated Nasal Septum) by clearing blockages, reducing swelling, and improving nasal airflow. Beyond respiratory relief, Dhoompan treats persistent cough, asthma, chronic rhinitis, allergies, and recurrent sneezing. It eliminates bad breath, strengthens teeth and hair, and prevents premature graying. Additionally, it clears the sensory organs, reducing head heaviness, earaches, and eye discharges while restoring voice clarity. By removing stupor, it promotes a sense of lightness and alertness throughout the body.",
        image: "https://drive.google.com/thumbnail?id=1rc9bUqMx0H6Ezpb27sZ1f5Kopvj45TR_&sz=w1200"
      },
      {
        name: "Dhoopan Therapies (Ayurvedic Fumigation)",
        desc: "Fumigation with medicinal herbs to purify, disinfect, and promote healing of specific body areas.",
        details: "Dhoopan is a classical Ayurvedic procedure in which medicinal herbs are burned to produce therapeutic smoke that is directed over specific body areas to purify, disinfect, and promote healing. Among its commonly practiced forms are Kesha Dhoopan (hair fumigation), Karna Dhoopan (ear fumigation), Yoni Dhoopan (vaginal fumigation), and Vrana Dhoopan (wound fumigation). Kesha Dhoopan is beneficial for preventing hair fall, reducing dandruff, and improving hair strength and scalp health. Karna Dhoopan helps reduce ear itching, infections, discharge, and irritation, and supports healing. Yoni Dhoopan promotes vaginal hygiene, reduces infections, discharge, and odor, and is especially useful in postpartum care, aiding uterine recovery and healing of vaginal stitches after normal delivery. Vrana Dhoopan is used for infected wounds, non-healing ulcers, and post-surgical wounds, where it helps reduce pus, foul smell, and microbial growth, disinfects the wound, promotes faster healing, dries moist wounds, and relieves pain and itching. Overall, Dhoopan therapies help cleanse the body, improve healing, and promote overall well-being."
      }
    ]
  },
  {
    category: "Specialized Pain Management",
    items: [
      { 
        name: "Viddhakarma (Para-surgical Therapy)", 
        desc: "A para-surgical therapy involving therapeutic puncturing of Marma points for instant pain relief and nerve stimulation.",
        details: "Viddhakarma is an Ayurvedic para-surgical therapy that involves therapeutic puncturing of specific body points with respect to Marma (energy points), using a fine needle for immediate pain relief and overall healing. It works by releasing obstructed Vata, draining impure blood, and stimulating nerve endings, thereby improving circulation and restoring normal physiological function. In pain management, Viddhakarma provides instant and effective relief in conditions such as joint pain, back pain, neck pain, sciatica, frozen shoulder, and muscular stiffness by reducing inflammation, relieving pressure, and enhancing nerve conduction. Beyond pain relief, it is also beneficial in psychosomatic disorders, stress, sleep disturbances, autism, and helps improve concentration and memory. Additionally, it supports skin health, promotes hair growth, and improves reproductive health. Overall, Viddhakarma acts as a holistic therapy that balances doshas, relieves pain, and enhances overall well-being when performed under proper Ayurvedic guidance."
      },
      { 
        name: "Agnikarma (Therapeutic Heat Therapy)", 
        desc: "Cauterization of specific points using a heated Shalaka to provide long-lasting relief from chronic joint and muscle pain.",
        details: "In Agnikarma therapy, specific points on the body are gently cauterized using a specially designed heated instrument known as a Shalaka. Based on the patient’s condition and the nature of the disease, different types of Shalaka, such as gold, iron, copper, Naga, or Mruttika, are selected to achieve the desired therapeutic effect. The controlled application of heat provides quick and long-lasting pain relief, reduces stiffness and inflammation, improves local blood circulation, relieves nerve compression, and helps prevent the recurrence of chronic pain conditions. Agnikarma is highly effective in conditions such as cervical and lumbar spondylosis, slip disc and sciatica, frozen shoulder, tennis elbow, heel pain (plantar fasciitis), knee pain and osteoarthritis, joint stiffness and inflammation, muscle spasms, sacroiliac joint pain, and trigeminal neuralgia. In addition to pain management, it is also used in certain eye-related conditions and cosmetic procedures, such as the removal of warts, moles, corns, and lipomas, and in the supportive management of conditions like PCOD and hernia."
      },
      { 
        name: "Fire Cupping Therapy (Dry Hijama)", 
        desc: "Uses controlled heat suction to improve circulation, relieve muscle tension, and remove stagnation.",
        details: "Fire Cupping Therapy is a traditional therapeutic technique used to relieve pain, improve circulation, and help detoxify the body. In this therapy, special cups are placed on specific areas of the body after creating mild suction using controlled heat. The vacuum effect gently lifts the skin and underlying tissues, stimulating blood flow and helping to remove stagnation. The suction created during fire cupping improves local blood circulation, relieves muscle tension and stiffness, reduces inflammation, helps detoxify the blood, and promotes relaxation and faster recovery. Additionally, it aids in removing toxins (Ama) from deeper tissues, supports lymphatic drainage and immune function, helps manage chronic pain conditions such as back, neck, and joint pain, reduces stress, anxiety, and fatigue, improves skin health by enhancing tissue nourishment, and may be beneficial in conditions like migraines, sciatica, and respiratory congestion. Fire cupping provides quick and effective results when performed by a trained professional and is often included as part of a holistic healing approach."
      },
      { 
        name: "Hijama Therapy (Wet Cupping)", 
        desc: "Controlled suction to draw out stagnant blood and toxins, providing rapid relief from inflammation and stiffness.",
        details: "Hijama is a traditional therapeutic technique that uses controlled suction to draw out stagnant blood and toxins from the body. It helps in pain management by improving blood circulation, reducing inflammation, and relieving muscle tension. The suction created during Hijama decreases pressure on nerves and promotes the release of natural pain-relieving substances in the body, leading to quick and effective relief. It is especially beneficial in conditions like back pain, neck pain, joint pain, sciatica, frozen shoulder, and muscle stiffness. Regular Hijama therapy also supports detoxification, enhances mobility, and promotes faster healing of affected tissues."
      },
      { 
        name: "Janu Basti (Knee Basti)", 
        desc: "Localized oil-retention therapy over the knees to nourish joints and relieve chronic pain.",
        details: "Janu Basti (Knee Basti) is an Ayurvedic localized oil-retention therapy in which warm, medicated herbal oil is retained over the knee joint within a dough ring made of black gram flour. Janu refers to the knee, and Basti means to retain, signifying deep nourishment of the joint structures through sustained oil contact. This therapy pacifies aggravated Vata dosha, which is the primary cause of joint degeneration and pain. Janu Basti lubricates the joint, strengthens cartilage, ligaments, and tendons, reduces swelling and pain, and improves range of motion. It is especially beneficial in osteoarthritis, degenerative knee disorders, chronic knee pain, post-injury pain, ligament weakness, ligament tear, and age-related joint wear. Janu Basti also delays joint degeneration, improves synovial fluid quality, and enhances overall knee stability and mobility."
      },
      { 
        name: "Kati Basti (Lower Back Basti)", 
        desc: "Localized oil-retention therapy over the lower back to relieve pain, stiffness, spasms, and inflammation.",
        details: "Kati Basti (Lower Back Basti) is an Ayurvedic treatment where warm medicated oil is retained over the lumbosacral (lower back) region using a dough reservoir. Kati denotes the waist or lower back, and this therapy is highly effective in pacifying Vata disorders affecting the spine and nerves. The warmth and medicinal properties of the oil penetrate deeply into muscles, intervertebral joints, and nerves, helping relieve pain, stiffness, spasms, and inflammation. Kati Basti is indicated in chronic low back pain, lumbar spondylosis, disc degeneration, sciatica, muscle spasms, sacroiliac joint disorders, and postural strain. It improves circulation, strengthens spinal muscles, nourishes nerves, and restores flexibility, making it valuable for both degenerative and stress-related spinal conditions."
      },
      { 
        name: "Prishta Basti (Spine Basti)", 
        desc: "Localized oil-retention therapy over the spine to relieve chronic back pain, spine stiffness, and weakness.",
        details: "Prishta Basti (Spine Basti) is an Ayurvedic therapy in which warm medicated oil is retained over the spine using a herbal dough ring. The warmth allows the oil to penetrate deeper tissues, helping nourish the muscles and balance Vata dosha. It is commonly used for chronic back pain, spine stiffness, spine disorders, and weakness of the back. The therapy helps reduce pain and inflammation, relax muscles, improve circulation, and support spinal strength and mobility."
      },
      { 
        name: "Greeva Basti (Cervical Basti)", 
        desc: "Localized oil-retention therapy over the neck to relieve pain and improve mobility.",
        details: "Greeva Basti (Cervical Basti) is a localized oil-retention therapy performed over the neck and cervical spine region, where warm medicated oil is retained within a dough boundary. Greeva means neck, and this therapy is especially effective for cervical disorders. Greeva Basti nourishes cervical vertebrae, intervertebral discs, nerves, and surrounding muscles, helping relieve pain, numbness, and restricted neck movement. It is indicated in cervical spondylosis, cervical disc issues, tension headaches, vertigo, shoulder pain, and postural neck strain, commonly seen due to prolonged screen use. This therapy improves flexibility, strengthens neck muscles, enhances nerve function, and prevents the progression of degenerative cervical conditions."
      }
    ]
  },
  {
    category: "Nourishing & Restorative Therapies",
    items: [
      { 
        name: "Abhyanga (Full Body Massage)", 
        desc: "Luxurious massage using medicated oils tailored to your dosha to liquify toxins and nourish tissues.",
        details: "Abhyanga is an important Ayurvedic therapy in which medicated oils or ghee are gently applied and massaged over the body. It helps liquify toxins (Ama) from the tissues, prepares the body for detoxification therapies such as Panchakarma, and slows down the aging process by nourishing the body tissues (Dhatus). The oil used for Abhyanga is customized by the doctor based on the individual’s body constitution and disease condition, ensuring maximum therapeutic benefit. Ayurvedic Abhyanga is different from routine home massage, as it focuses on using specific oils tailored according to an individual’s Prakriti, season, and the purpose of the massage, and it involves specific pressure, direction, and therapeutic points, making it a targeted and healing procedure rather than simple relaxation. Abhyanga provides relief from body pain, reduces dryness of the skin and joints, improves blood circulation, calms the nervous system, reduces stress, enhances sleep quality, strengthens muscles and joints, and improves overall softness and flexibility of the body. It can be performed on the entire body or on specific areas such as the knees, back, neck, hands, or legs, depending on the patient’s complaints and the doctor’s advice."
      },
      { 
        name: "Swedan (Medicated Steam Bath)", 
        desc: "Induces gentle sweating to dilate body channels and eliminate toxins, typically following Abhyanga.",
        details: "Swedan is an Ayurvedic therapy that induces gentle sweating using medicated steam or warmth and is commonly performed after Abhyanga (oil therapy) to enhance its effects. It can be applied to the entire body or locally on specific areas such as the knees, neck, back, hands, and legs, as advised by the doctor and according to the disease condition. Swedan helps by dilating body channels (Srotas), liquefying toxins (Ama) for easy elimination, and reducing stiffness, heaviness, and coldness in the body. It relieves joint pain, muscle stiffness, and swelling; balances Vata and Kapha dosha; improves blood circulation; delays aging; reduces body heaviness; enhances flexibility and mobility; supports detoxification; improves the effectiveness of Panchakarma therapies; improves vision; reduces tiredness and fatigue; nourishes body tissues (Dhatus); promotes longevity; induces sound sleep; and enhances skin tone and complexion. Swedan is especially useful in conditions such as arthritis and joint disorders, back pain, neck pain, frozen shoulder, muscle spasms and stiffness, cold-related disorders, and as a post-Abhyanga therapy to open body channels."
      },
      { 
        name: "Padabhyanga with Kansa Thali", 
        desc: "Traditional foot massage using a special bronze bowl to draw out excess heat and balance Pitta dosha.",
        details: "Padabhyanga is a traditional Ayurvedic foot massage that focuses on the soles of the feet to promote relaxation, circulation, and overall well-being. In the Kansa Thali variation, a special bronze alloy bowl made of copper, tin, and zinc is used. This metal interacts with the skin’s natural acidity (Pitta), and the grey residue that appears during the massage is not dirt but a sign of neutralization of excess acidity, helping to balance energy and heat in the body. During Kansa Thali Padabhyanga, warm oils—often herbal or medicated—are applied to the feet, and the Kansa bowl or wand is used to massage the soles. This combines the nourishing benefits of Abhyanga (oil massage) with the unique therapeutic properties of Kansa metal, promoting deep relaxation, improved circulation, dosha balance, and overall healing. The therapy helps reduce dryness, pain, burning sensations in the soles, and stiffness in the feet and legs, while relieving foot tension and inducing overall relaxation. It calms the mind, supports deep and restful sleep, and, according to Ayurveda, nourishes vision, reduces and prevents sciatica pain, and promotes eye health. Additionally, it enhances blood circulation to the feet, creates a feeling of lightness, and keeps the soles soft, supple, and healthy."
      },
      { 
        name: "Hrid Basti (Cardiac Basti)", 
        desc: "Localized oil therapy performed over the heart region to deeply nourish heart muscles and calm the nervous system.",
        details: "Hrida refers to the heart, which in Ayurveda is regarded as the seat of Prana, Ojas, and Mana. Hrida Basti is an Ayurvedic localized oil therapy performed over the heart (chest) region. In this therapy, a small ring made of herbal dough is placed on the chest, and warm medicated oil is gently poured into it and retained for a specific duration while maintaining a constant warm temperature. This treatment deeply nourishes and strengthens the heart muscles, improves blood circulation, and calms the nervous system. Hrida Basti helps reduce stress, anxiety, palpitations, and chest tightness while balancing aggravated Vata and Pitta dosha. It also promotes emotional calmness and deep relaxation. Hrida Basti is especially beneficial in stress-related heart complaints, mild hypertension, palpitations, anxiety, functional (non-structural) cardiac disorders, insomnia, and fatigue, and supports overall cardiovascular and emotional well-being.",
        image: "https://drive.google.com/thumbnail?id=10N6hkr7iAYGcVdYWuh2sQJjlXuffKUbN&sz=w1200"
      },
      { 
        name: "Dhara (Therapeutic Pouring)", 
        desc: "Continuous stream of warm medicated liquid over the body or specific part to induce deep relaxation and healing.",
        details: "In Ayurveda, Dhara refers to a therapeutic procedure in which a warm, medicated liquid is poured in a steady and continuous stream over the body or a specific part of the body. It may be performed as Sarvanga Dhara, where the medicated liquid is poured over the entire body, or as Ekanga (localized) Dhara, in which the stream is applied to specific areas such as the head (Shirodhara), joints (Sandhi Dhara), or other affected regions. Based on the individual’s doshic imbalance and health condition, the physician may prescribe different forms of Dhara, such as Taila Dhara (medicated oils for Vata disorders and degenerative conditions), Ghrita Dhara (medicated ghee for nourishment and strengthening), Kashaya Dhara (a powerful “dry” sudation using herbal decoctions for detoxification), Dhanyamla Dhara (fermented liquids for inflammatory and Ama-related conditions), Ksheera Dhara (medicated milk for inflammation and weakness, known for its cooling and nourishing properties), and Takra Dhara (medicated buttermilk for stress, hypertension, and skin disorders such as psoriasis and hair-related issues). Dhara therapy helps strengthen body tissues, soothe muscles and joints, improve flexibility and circulation, balance digestive fire, reduce pain and stiffness, and induce deep relaxation and rejuvenation. It also supports dosha regulation, delays aging, enhances immunity, and improves skin health and complexion."
      },
      { 
        name: "Shirodhara (Head Pouring Therapy)", 
        desc: "Continuous pouring of warm medicated oil over the forehead to deeply relax the nervous system and relieve stress.",
        details: "Shirodhara is a classical Ayurvedic therapy in which a continuous stream of warm medicated oil, milk, or other herbal liquids is gently poured over the forehead. It deeply relaxes the mind and nervous system, helping balance mainly Vata and Pitta doshas. Shirodhara is highly beneficial for stress, anxiety, insomnia, mental fatigue, headaches, migraines, and hypertension (high blood pressure), as it calms the nervous system and reduces mental overactivity. It is also helpful in hormonal imbalances, PMS (premenstrual syndrome), pre-menopause, and post-menopausal symptoms such as mood swings, irritability, anxiety, hot flashes, and disturbed sleep. Additionally, Shirodhara improves sleep quality, concentration, and emotional stability, supports neurological and endocrine balance, nourishes the scalp and hair, and is effective in psychosomatic and stress-related disorders. Overall, it promotes deep relaxation, rejuvenation, and long-term mental and physical well-being."
      },
      { 
        name: "Upanaha (Poultice Therapy)", 
        desc: "Warm herbal poultice applied over painful areas to reduce stiffness and inflammation in joints.",
        details: "Upanaha is a traditional Ayurvedic therapeutic procedure in which a warm herbal poultice is applied over a painful or affected area of the body and then covered and retained for a specific duration. The poultice is prepared using medicinal powders mixed with substances such as warm oils, ghee, herbal decoctions, fermented liquids, or animal fats, selected according to the aggravated dosha. Upanaha provides sustained warmth (Swedana) and allows the medicinal substances to penetrate deeply into the tissues, making it especially useful in musculoskeletal and joint disorders. The importance of Upanaha lies in its ability to reduce pain, stiffness, swelling, and inflammation, particularly in conditions like osteoarthritis, rheumatoid arthritis, lower back pain, cervical and lumbar spondylosis, frozen shoulder, and sports injuries. The continuous warmth improves local circulation, relaxes muscles, softens contracted tissues, and facilitates the removal of Ama (toxins). By pacifying aggravated Vata and Kapha doshas, Upanaha promotes healing, restores joint mobility, and enhances overall comfort, making it a valuable therapy in both acute and chronic painful conditions."
      },
      { 
        name: "Pinda Sweda (Herbal Bolus Therapy)", 
        desc: "Warm herbal bundles massaged over the body to induce sweating, relieve pain, and nourish muscles.",
        details: "Pinda Sweda is an Ayurvedic therapy in which warm herbal bundles (potli) made of medicinal herbs or powders are heated and applied to the body to induce sweating, relieve pain, and reduce stiffness. The boluses are prepared by tying herbal ingredients in cloth, heating them in medicated oil, and gently massaging over the affected area, usually after a light oil massage. This combined action improves blood circulation, relaxes muscles, and helps remove Ama (toxins) from the tissues. There are various types of Pinda Sweda, including Patra Pinda Sweda (herbal leaves), Churna Pinda Sweda (herbal powders), Shashtika Shali Pinda Sweda (Njavara Kizhi – medicated rice), Jambira Pinda Sweda (lemon-based), Valuka Sweda (sand), Mamsa Pinda Sweda/Mamsa Kizhi (medicated meat), and Kukkut Pinda Sweda/Kukutanda Kizhi (chicken-based), chosen according to the patient’s condition. Among these, Shashtika Shali Pinda Sweda is a nourishing therapy using rice cooked in herbal decoction and milk, which strengthens muscles (Mamsa dhatu), improves circulation, and acts as a rejuvenative (Rasayana). It is especially beneficial for joint pain, muscle stiffness, arthritis, and other musculoskeletal conditions, helping improve mobility and promote overall healing and relaxation."
      },
      { 
        name: "Udvartana (Scrub Massage)", 
        desc: "Herbal powder massage in an upward direction to mobilize toxins, reduce fat, and improve skin tone.",
        details: "Udvartana is a classical Ayurvedic therapy in which a herbal powder massage is applied in a downward-to-upward direction. This method is different from conventional oil massage and is useful for mobilizing accumulated toxins (Ama) and stagnant fat, while stimulating blood circulation and metabolic activity. It is especially beneficial for weight management and body contouring, as brisk upward massage helps to liquefy excess fat, support metabolism, and improve body shape. The medicinal powders act like natural scrubs, cleansing the skin, removing dead cells, and enhancing skin texture and glow. By increasing blood and lymph circulation, Udvartana promotes detoxification, refreshes the muscles, and helps reduce heaviness, sluggishness, and swelling. It is indicated in conditions such as obesity, overweight, high cholesterol, slow metabolism, lethargy, and lack of freshness. Additionally, it helps improve skin health and radiance, manage skin conditions like psoriasis, strengthen and tone muscles and joints, prepare the body for Panchakarma therapies, and is useful for lifestyle-related disorders such as PCOS and hypothyroidism."
      },
      { 
        name: "Anjan (Medicated Kohl)", 
        desc: "Therapy involving medicated kohl to improve vision and remove accumulated Kapha.",
        details: "Anjana is an Ayurvedic eye therapy in which medicated kohl is applied to the inner margins of the eyelids to maintain eye health and manage various ocular disorders. It enhances vision and supports normal ocular function by cleansing the eyes and removing accumulated Kapha and Ama (Toxins). Anjana helps relieve symptoms such as eye strain, itching, redness, burning sensation, excessive discharge, and heaviness of the eyes. Regular and judicious use improves clarity of vision, reduces fatigue caused by prolonged screen exposure, dust, smoke, and pollution, and strengthens ocular tissues. By balancing Pitta and Kapha, Anjana plays an important role in promoting long-term eye health and preventing eye diseases when administered under proper Ayurvedic guidance.",
        image: "https://drive.google.com/thumbnail?id=1kZpBnkUQpvMoGtlgt9TNxOZCqfKMjbk6&sz=w1200"
      },
      { 
        name: "Netra Tarpana (Eye Nourishment)", 
        desc: "Warm medicated ghee or herbal oil gently retained over the eyes to directly nourish the eye tissues.",
        details: "Netra Tarpana is a classical Ayurvedic eye therapy derived from Netra (eyes) and Tarpana (nourishment). In this procedure, a soft dough ring is carefully formed around the eye sockets, and protective eye goggles are placed, as shown in the image, to ensure safety and proper retention. Warm medicated ghee or herbal oil is then gently retained over the eyes for a specific duration, allowing direct nourishment of the eye tissues. This therapy aims to lubricate, nourish, strengthen, and rejuvenate the eyes while supporting overall eye health. Netra Tarpana provides both preventive and therapeutic benefits. It soothes dry and tired eyes, relieves strain and irritation, and improves clarity of vision by nourishing the optic tissues. The medicated ghee or oil helps reduce burning, redness, itching, and fatigue, making it especially beneficial for those with prolonged screen exposure or environmental stress. Regular therapy strengthens ocular muscles and nerves, reduces dark circles and puffiness, slows age-related degenerative changes such as early cataract and glaucoma, and, by balancing aggravated Pitta and Vata dosha, supports long-term eye health and overall well-being."
      },
      {
        name: "Netra Dhawan (Eye Cleansing)",
        desc: "Gentle washing of the eyes with medicated liquid to refresh and improve vision.",
        details: "Netra Dhawan is a traditional Ayurvedic eye cleansing and care therapy. In this procedure, the eyes are gently washed with a stream of medicated liquid or a specially prepared herbal solution to cleanse them. This helps remove accumulated dust, strain, fatigue, redness, itching, and irritation. Netra Dhawan refreshes the eyes, improves blood circulation, and supports clear vision. Regular practice strengthens the eye muscles, maintains eye health, reduces the risk of eye disorders, and helps balance aggravated Vata and Pitta doshas. It is especially beneficial for those who spend long hours in front of screens or are exposed to dusty or polluted environments."
      },
      {
        name: "Karnapuran (Ear Nourishment)",
        desc: "Warm medicated oil instilled into the ears to pacify Vata, nourish ears, and soothe the mind.",
        details: "Karnapuran is a classical Ayurvedic ear therapy in which warm medicated oil is gently instilled into the ears to pacify Vata dosha and nourish the ears and nervous system. It strengthens the ear structures, soothes the mind, and supports overall neurological balance. Karnapuran is beneficial for ear pain, dryness, excess wax, tinnitus, impaired hearing, ear infections, dizziness, vertigo, headache, migraine, stress, sleeplessness, and mental fatigue. When done regularly under medical guidance, it helps maintain ear health, calms the nervous system, and improves overall wellness."
      }
    ]
  },
  {
    category: "Bridal Wellness Package",
    items: [
      { name: "Ayurvedic Skin Glow & Anti-Acne Program", desc: "A holistic approach combining herbal pastes, therapies, and diet for naturally radiant, blemish-free skin." },
      { name: "Body Detox & Weight Management", desc: "Specialized Panchakarma and therapies to eliminate toxins and manage weight effectively before your big day." },
      { name: "Hair & Scalp Care", desc: "Nourishing treatments to address hair fall, dandruff, and scalp health for thick, lustrous hair." },
      { name: "Hormonal & Menstrual Balance", desc: "Ayurvedic interventions to regulate hormonal health, correct menstrual irregularities, and establish emotional balance." },
      { name: "Stress Relief & Emotional Wellness", desc: "Calming therapies like Shirodhara and meditation to soothe bridal anxiety, relax the nervous system, and improve sleep." },
      { name: "Personalized Diet & Lifestyle Plan", desc: "A customized dietary regimen and lifestyle guide based on your Prakriti to ensure sustained vitality and holistic well-being." }
    ]
  },
  {
    category: "Women and Child Healthcare",
    items: [
      { 
        name: "Beej Shuddhi (Preconception Detox)", 
        desc: "Ayurvedic purification therapies to cleanse the reproductive system for healthy conception.",
        details: "Beej Shuddhi is a vital Ayurvedic preconception program that prepares both parents for healthy conception. Just as farming requires the right season, fertile land, sufficient water, and good-quality seeds to grow a healthy plant, similarly, a healthy baby requires Rutu (right timing), Kshetra (a healthy uterus), Ambu (proper nourishment), and Beej (strong sperm and ovum). When these four factors are well balanced, they support healthy conception and proper fetal development. Through detoxification therapies like Panchakarma, along with proper diet and lifestyle corrections, Beej Shuddhi helps remove accumulated toxins and improves the quality of sperm and ovum. This creates a clean and nourishing internal environment for pregnancy, supports a smooth pregnancy, aids in the birth of a healthy and mentally strong child, and reduces the risk of congenital disorders and recurrent miscarriages."
      },
      { 
        name: "Garbhini Paricharya (Ayurvedic Pregnancy Care)", 
        desc: "A specialized regimen including diet and lifestyle recommendations for a healthy pregnancy.",
        details: "At Sattvic Advanced Ayurveda, Garbhini Paricharya is offered as a personalized Ayurvedic care program for pregnant women. After individual assessment, we guide mothers with month-wise diet recommendations, lifestyle practices, daily routine guidance, and gentle herbal support based on classical Ayurvedic principles. As described in the Ayurvedic Shastras, appropriate month-wise medicines and formulations are advised to support the changing needs of the mother and the developing baby. Specific Ayurvedic support may also be provided to help maintain healthy fetal growth, adequate baby weight, and proper amniotic fluid levels (AFI), wherever required. Our medicines are aimed at helping manage common pregnancy concerns such as tiredness, nausea, bloating, weakness, anemia, constipation, loss of appetite, mood swings, and abdominal discomfort, thereby supporting the overall health and comfort of the mother during pregnancy. Special attention is given to maternal comfort, emotional balance, and overall well-being. This holistic approach helps support the healthy growth and development of the baby, strengthens the mother’s health, and prepares the body for a smoother and more natural delivery."
      },
      { 
        name: "Garbha Sanskar (Ayurvedic Prenatal Care & Conscious Pregnancy Guidance)", 
        desc: "Mental, physical, and spiritual preparation for the mother and child during pregnancy.",
        details: "Garbha Sanskar is an Ayurvedic prenatal practice that focuses on the physical, mental, and spiritual development of the baby during pregnancy. Ayurveda teaches that a mother’s thoughts, emotions, behavior, diet, lifestyle, music, and surroundings directly influence the growing fetus. For example, Ayurveda explains that the intellect of the fetus develops prominently around the fifth month; therefore, mothers are encouraged to engage in intellectually stimulating activities, such as typing on a keyboard or fine handwork like weaving, to positively influence the cognitive and fine motor development of the fetus. Similarly, month-wise guidance, known as Garbha Sanskar, is provided throughout pregnancy to support the holistic growth of the baby."
      },
      { 
        name: "Normal Delivery", 
        desc: "Ayurvedic support and therapies designed to strengthen the body for an easier natural birth.",
        details: "At Sattvic Advanced Ayurveda, special care is provided during the later months of pregnancy to help prepare the body for a smooth and natural delivery. Through appropriate diet, lifestyle guidance, and gentle Ayurvedic medicines, along with Basti (medicated enema) in the 8th and 9th months, as described in Ayurvedic texts, the body is gradually supported to improve strength, flexibility, and natural readiness for childbirth. In addition, proper guidance is provided regarding traditional Ayurvedic practices during labor, including when and how certain classical measures such as Eranda Taila (castor oil), Apamarga Moola, Langali, and other supportive remedies may be used. Guidance is also given regarding post-delivery care, including placental expulsion and healing of vaginal stitches practices mentioned in Ayurveda, ensuring that these are understood and followed safely. This careful guidance helps avoid misconceptions and supports the mother in achieving the maximum benefits of traditional Ayurvedic knowledge during childbirth."
      },
      { 
        name: "Postpartum Care (Sutika Paricharya)", 
        desc: "Restorative therapies, massages, and diet to help the mother regain strength and balance after delivery.",
        details: "At Sattvic Advanced Ayurveda, special care is provided for mothers after delivery to support proper recovery, restore strength, and manage postpartum changes such as weight fluctuations, mood swings, mental irritation, and exhaustion. This includes appropriate Ayurvedic medicines, herbal decoctions, and nourishing formulations to help the body regain strength lost during childbirth and reduce body pain, weakness, and fatigue. Support is also provided for breast milk production and lactation, with the use of traditional Ayurvedic herbs such as Shatavari, which is freshly farm-prepared, chemical-free, and authentic, along with other suitable formulations. In addition, herbal bath preparations using Eranda Patra and other traditional herbs, medicated oil bathing, and Yoni Dhupan (vaginal fumigation) to support the healing of stitches are recommended. These external care practices help relieve tiredness, stiffness, and discomfort, while promoting relaxation and faster recovery after delivery. This holistic postpartum care helps restore the mother’s energy, strength, and overall well-being, supporting a healthy recovery after childbirth."
      },
      { 
        name: "Uttarbasti (Urogenital Therapy)", 
        desc: "Administered through the urethral or vaginal route to cleanse and strengthen the urogenital system.",
        details: "Uttara Basti is a specialized Ayurvedic Panchakarma procedure in which medicated oils or herbal decoctions are administered through the urethral passage in men and women, or through the vaginal route in women, to directly act on the urinary and reproductive organs. This therapy helps cleanse, nourish, and strengthen the organs of the urogenital system, thereby restoring their normal function and improving reproductive and urinary health. It is commonly used in conditions such as urinary disorders, difficulty in urination, urinary infections, urinary incontinence, neurogenic bladder, bladder inflammation, stones in the urinary tract, male infertility, impotence, menstrual disorders, uterine and vaginal disorders, and female infertility. The therapy works by cleansing accumulated doshas in the bladder and uterus, reducing inflammation, improving circulation, and supporting the proper functioning of reproductive organs. The procedure is performed under medical supervision. Before the therapy, the patient is prepared with mild Abhyanga (oil massage) and fomentation. Then, a small quantity of sterile medicated oil or herbal preparation is gently introduced into the urethra or vaginal canal using a specialized catheter or instrument. The medicine acts locally on the affected organs to promote healing, nourishment, and rejuvenation of tissues."
      },
      { 
        name: "Swarna Prashana (Child Immunity Care)", 
        desc: "Traditional Ayurvedic remedy to boost immunity, intelligence, and overall growth in children.",
        details: "Swarna Prashana is an Ayurvedic immunity-boosting practice in which purified gold (Swarna Bhasma) is combined with honey, ghee, and selected herbal extracts and administered in small, age-appropriate doses to infants and children from birth up to 16 years. This traditional practice supports overall growth and development, strengthens immunity, and improves resistance to infections. It also enhances memory, concentration, learning ability, and speech, while promoting better appetite, digestion, physical strength, and overall vitality. Regular administration of Swarna Prashana helps create a strong foundation for a child’s physical and mental health, supporting long-term well-being and resilience."
      },
      { 
        name: "Prakriti Parikshan (Mind–Body Constitution)", 
        desc: "Detailed assessment of a child's unique dosha profile for personalized diet and lifestyle planning.",
        details: "Prakriti Parikshan for children is a detailed Ayurvedic assessment to understand a child’s unique mind–body constitution (Prakriti). Based on this evaluation, personalized counseling is offered to parents to help them understand their child’s natural strengths, emotional patterns, behavioral tendencies, and unique learning style, enabling the child to grow confidently, improve school performance, and reach their full potential in both career and personal life. Guidance is provided on how to interact, communicate, and nurture the child according to their constitution so they can grow confidently, perform to their full potential, and progress positively without stress or frustration. In addition, customized home regimens, diet advice, daily routines, and behavioral tips are suggested to support the child’s physical health, emotional balance, and overall development in a harmonious way."
      },
      { 
        name: "Concentration and Memory Improvement", 
        desc: "Herbal remedies and specific therapeutic routines to enhance focus and cognitive abilities in children.",
        details: "Concentration and Memory Improvement is achieved through a combination of Ayurvedic therapies and holistic guidance. Viddhakarma helps stimulate specific Marma (energy) points, which improves circulation, coordinates the sensory organs, and supports the balance of the nervous system. Swarna Prashana, along with appropriate home remedies and lifestyle modifications such as a balanced diet, proper sleep, and healthy daily routines, helps nourish the brain and maintain mental stability. In addition, counseling after Prakriti Parikshan supports parents and children in developing effective study habits, emotional balance, and better focus. Together, these approaches aim to enhance concentration, memory, and overall cognitive development."
      },
      { 
        name: "Support for Hyperactive Children", 
        desc: "Calming therapies and dietary adjustments to soothe the nervous system and balance energy levels.",
        details: "Hyperactive children are supported through a holistic Ayurvedic approach aimed at calming the nervous system and improving behavioral balance. Viddhakarma helps stimulate specific Marma points, which help regulate nervous activity, promote relaxation, and improve attention. Along with this, appropriate Ayurvedic medicines are used to support brain nourishment and balance Vata, which is often associated with hyperactivity. Together with guidance on diet, daily routine, and parental counseling, this approach helps improve focus, emotional stability, and overall behavioral balance in children."
      },
      { 
        name: "Support for Children with Autism", 
        desc: "A holistic approach combining specialized treatments, diet, and therapies to support developmental progress.",
        details: "Children with autism are approached through a holistic Ayurvedic framework aimed at supporting sensory balance, communication, and behavioral stability. Viddhakarma helps stimulate specific Marma (energy) points, which supports better coordination of the sensory system and regulation of the nervous system. This stimulation helps improve sensory processing and encourages better responsiveness, including improved eye contact and engagement. Along with this, appropriate Ayurvedic medicines are used to nourish and support brain function and behavioral balance. Counseling for parents, along with guidance on daily routine, diet, and lifestyle, helps create a supportive environment for the child’s development. Together, these approaches aim to support better sensory balance, communication, and overall behavioral development."
      },
      { 
        name: "Support for Children with Developmental Delays", 
        desc: "Tailored Ayurvedic interventions to nourish tissues and improve physical and mental milestones.",
        details: "Children with developmental delays are approached through a comprehensive Ayurvedic method aimed at supporting overall neurological and developmental growth. Viddhakarma helps stimulate specific Marma (energy) points, which assist in improving nervous system coordination, sensory integration, and motor responses. This stimulation supports better responsiveness, attention, and developmental progression. Along with this, appropriate Ayurvedic medicines are used to nourish the brain, strengthen cognitive functions, and support healthy growth and development. Counseling and guidance for parents, along with recommendations for diet, daily routines, and lifestyle practices, help create a structured and supportive environment for the child. Together, these approaches aim to encourage improvement in learning ability, communication skills, motor coordination, and overall developmental milestones."
      }
    ]
  },
  {
    category: "Skin and Aesthetic Care",
    items: [
      { 
        name: "Skin Diseases", 
        desc: "Management of various skin conditions through detailed Ayurvedic evaluation and holistic treatment to address root causes.",
        details: "Various skin conditions are managed through detailed Ayurvedic evaluation and holistic treatment aimed at addressing the root cause rather than only suppressing symptoms. Treatment is provided for a wide range of skin disorders, including systemic lupus erythematosus (SLE) and other autoimmune skin diseases, eczema, urticaria, psoriasis, fungal infections, vitiligo, scabies, herpes, skin allergies and rashes, pigmentation disorders, acne and pimples, dark spots, and chronic itching conditions, among others. The approach focuses on restoring internal balance, improving skin health, and promoting long-term well-being."
      },
      { 
        name: "Skin Brightening and Anti-Ageing Care", 
        desc: "Natural Ayurvedic therapies for pigmentation, wrinkles, tanning, uneven skin tone, and early signs of ageing.",
        details: "Treatment for pigmentation, wrinkles, tanning, uneven skin tone, and early signs of ageing is provided through natural Ayurvedic therapies to promote healthier, brighter, and more youthful-looking skin."
      },
      { 
        name: "Ayurvedic Facial and Skin Rejuvenation", 
        desc: "Customized natural facials to cleanse, nourish, and rejuvenate the skin based on individual constitution.",
        details: "An Ayurvedic facial is a natural, customized therapy based on an individual’s skin constitution (Prakriti) and Ayurvedic principles, designed to cleanse, nourish, and rejuvenate the skin for a healthy glow. It uses herbal powders, medicated oils, natural pastes, steam, and gentle massage to deeply cleanse the pores, remove toxins (Ama), enhance skin glow, improve complexion and texture, and reduce acne, pimples, pigmentation, and dark spots. Unlike chemical facials, it works by balancing the Doshas (Vata, Pitta, and Kapha) and improving skin health from within, making it safe and suitable for all skin types. This therapy also supports anti-ageing by minimizing fine lines and wrinkles, nourishes skin tissues, improves blood circulation, and helps calm the mind by relieving stress. Being completely natural and chemical-free, regular Ayurvedic facials promote healthy, radiant, and youthful skin while maintaining the natural beauty and overall balance of the body and mind."
      },
      { 
        name: "Hair Fall and Scalp Care", 
        desc: "Holistic support for hair fall, dandruff, thinning hair, premature greying, and scalp health through Ayurvedic treatments.",
        details: "Holistic support is provided for hair fall, dandruff, thinning hair, premature greying, and overall scalp health through Ayurvedic treatments and lifestyle guidance. Therapies focus on nourishing hair roots, strengthening follicles, improving scalp circulation, and balancing the Doshas (Vata, Pitta, Kapha) to reduce hair loss naturally. Herbal oils, medicated pastes, scalp massages, detoxifying therapies, Viddhakarma, and Raktamokshan are used to remove toxins (Ama), stimulate blood flow, and support healthy hair growth. In addition, personalized dietary recommendations, daily routines, and stress management tips help maintain long-term hair and scalp health, resulting in stronger, shinier, and more resilient hair."
      },
      { 
        name: "Personalized Beauty and Skin Care Guidance", 
        desc: "Personalized recommendations for diet, lifestyle, and Ayurvedic care to support healthy, radiant skin.",
        details: "An individual assessment is conducted to understand one’s Prakriti (body constitution), skin type, and current health status. Based on this evaluation, personalized recommendations for diet, lifestyle, daily routines, and Ayurvedic care are provided to support healthy, radiant skin and enhance natural beauty. Therapies may include herbal facials, cleansing treatments, herbal oils, massages, and natural detoxification methods tailored to the individual’s needs. In addition, guidance on stress management, sleep, and hydration is provided to maintain long-term skin health and overall wellness. This holistic approach ensures that every treatment and recommendation is customized, safe, and effective, helping individuals achieve balanced, glowing, and youthful skin naturally."
      },
      { 
        name: "Skin, Hair and Body Care Products", 
        desc: "A range of natural, farm-prepared Ayurvedic products for daily skin, hair, and body care.",
        details: "Our range of authentic Ayurvedic products includes:\n- Sattvic Kumkumadi Glow Serum\n- Sattvic Ojas Hair Oil\n- Sattvic KeshAmrit Shampoo\n- Sattvic KeshRang Mehendi Hair Pack\n- Sattvic KeshTejas Hair Wash Powder\n- Sattvic Body Glow Lotion\n- Sattvic Skin Protection Soap\n- Sattvic Body Nourishing Soap\n- Sattvic Glow Ubtan\n- Sattvic Slimming Bath Powder"
      }
    ]
  },
  {
    category: "Immunity and Vitality Enhancement",
    items: [
      { 
        name: "Immunity and Vitality Enhancement (Rasayana Chikitsa)", 
        desc: "Holistic rejuvenation therapies, antioxidant-rich formulations, and lifestyle regimens to strengthen immunity and vitality.",
        details: "Rasayana Chikitsa in Ayurveda focuses on rejuvenation, strengthening immunity, and promoting overall wellness. At our clinic, suitable Rasayana formulations such as Chyawanprash, Ashwagandha, Shatavari, Guduchi, Brahmi, Yashti, Amalaki, medicated milk preparations, and other antioxidant-rich Ayurvedic medicines are prescribed based on individual assessment. These preparations are authentically made and administered with proper guidance. Patients are also advised on how to grow, prepare, and use certain herbs at home so that the entire family can benefit from natural wellness practices. Along with herbal Rasayana, we emphasize holistic lifestyle regimens such as mindful daily routines, swimming, walking barefoot on natural grass, and other nature-based practices that enhance physical, mental, and emotional balance. This integrated approach helps improve immunity, slow the ageing process, increase strength and vitality, and maintain long-term health and wellness."
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
      <SEO 
        title="Ayurvedic Treatments & Panchakarma"
        description="Explore our authentic Ayurvedic treatments in Pune. Specialized services include Agnikarma for chronic pain, Viddhakarma, and traditional Panchakarma detox therapies."
        keywords="Ayurvedic treatments, Agnikarma Pune, Viddhakarma technique, Panchakarma therapy, Ayurvedic detox, Nadi Pariksha Pune"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
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
                   transition={{ duration: 0.4 }}
                   key={idxi} 
                   onClick={() => setSelectedService(item)}
                   className={`p-8 rounded-[2rem] shadow-sm border border-clinic-border cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden relative flex flex-col ${item.image ? 'min-h-[320px] justify-end border-none' : 'bg-white'}`}
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
                  <div className={`mb-4 inline-flex items-center gap-3 ${!isImageExpanded ? 'mt-4 md:mt-0' : ''}`}>
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
