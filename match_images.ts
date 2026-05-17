import * as fs from 'fs';

let content = fs.readFileSync('src/pages/Services.tsx', 'utf8');

const imageMap: Record<string, string> = {
  "Ayurvedic Consultation": "1fIsoQ2EGamhFi8EcE0C8GTzzRz66tKT5",
  "Clinical Assessment": "1jSQ-E6gnKoMksygLjoGggogu3VsXszHa",
  "Prakriti Analysis": "1zGJtglxz9b3IbPJrz4SPbyraLi76S1Ge",
  "Lifestyle & Wellness": "1IersAK5TZ2WKQuASTaKw8y0zvQ6nQJXl",
  "Personalized Treatment": "1-JII7Ab3VStC2J8cUI_AXkxwSbytt4d9",
  "Integrative Ayurvedic": "1R18hIWx-4_YLK7FJqYv8eM85hISlQLLl",
  "Diet & Lifestyle": "1DwaCO7zGLJ6W2eV3Z8OaUwY2EOdps6IV",
  
  "Vamana": "165Mr0kBqaFsE6iZe6Yze-Buv-aFBIWes",
  "Virechana": "1PvAIddTKG5RSjdzyAVVDt8VfJ3EZVX_v",
  "Basti Chikitsa": "1hfuLuiPknvvncNUULPuHkzxeJG7bJBWm",
  "Nasya": "1zGJtglxz9b3IbPJrz4SPbyraLi76S1Ge",
  "Raktamokshana": "1a9-GCLHP09owFLiAVGatRI_2MBvqKLA9",
  "Swedana": "1FhWwAavrUV07zP-votO8uSljAp0f0WSn",
  "Agnikarma": "1hpOCnNuRSpkadZzHzLtcvZwR0xo6M2MH",
  "Viddhakarma": "1dq0gHjJnnLRiPNqaQCh_63QlP2MGx8hC",
  "Kati Basti": "1ce9RHwfo1Wt1wDliVJ_sEYy80UyMTJlq",
  "Janu Basti": "1YrZyTdKXy8lrUk8Ipc8NMWJuNCp7nmMw",
  "Greeva Basti": "1Z2IM5In8usy96ivWvJvda0MaY_-WXVGJ",
  "Prishta Basti": "1ZKdGn6v4j0Y7prXEznlpEw-YUEo_Ra1E",
  "Pinda Sweda": "1FhWwAavrUV07zP-votO8uSljAp0f0WSn",
  "Upanaha Sweda": "1VKduKgyqcMcLZlHEYzFG0-SKuyjQA8wJ",
  
  "Abhyanga": "1FhWwAavrUV07zP-votO8uSljAp0f0WSn",
  "Shirodhara": "1jSQ-E6gnKoMksygLjoGggogu3VsXszHa",
  "Dhara Therapy": "16Qs9mwjpknCEqSRgG7eO-4fnO7HSn3hz",
  "Udvartana": "1LVbpwDguzGdlekvAqgvNsk48zTZakX7E",
  "Padabhyanga": "1fIsoQ2EGamhFi8EcE0C8GTzzRz66tKT5",
  "Hrid Basti": "1-JII7Ab3VStC2J8cUI_AXkxwSbytt4d9",
  
  "Uttarbasti Therapy": "19qcYN_z9yL031lIoUCD7pKdCurBgMGKM",
  "Swarna Prashana": "1R18hIWx-4_YLK7FJqYv8eM85hISlQLLl",
  
  "Ayurvedic Facial": "1D-T0SA2xpl5WtBWrKF2Ccac2BGDKkmtE",
  "Mukhalepam": "1voZm5N8sEX6gjjGzMjEacOtKFWhAd8mZ",
  "Hair & Scalp": "1VZ6XQsbWLugyePr2lIrYsM1yXUJEVzcT",
  "Shiro Abhyanga": "1yaXnS4761p-CbIdUcz8yiog4z3vljvSN",
  "Anti-Ageing": "1D-T0SA2xpl5WtBWrKF2Ccac2BGDKkmtE",
  
  "Rasayana": "1jSQ-E6gnKoMksygLjoGggogu3VsXszHa",
  "Ayurvedic Detox": "1ELIM5uZHPasyz6DndKK9e4GedGvdK7Pv",
  "Weight Management": "1LVbpwDguzGdlekvAqgvNsk48zTZakX7E",
  "Stress Relief": "1fIsoQ2EGamhFi8EcE0C8GTzzRz66tKT5",
  "Bridal Wellness": "19qcYN_z9yL031lIoUCD7pKdCurBgMGKM",
  "Postpartum Wellness": "1hkc7o9dEIWQ_XFxE6c4gyx2S8GW4qmrm",
  "Personalized Diet": "1DwaCO7zGLJ6W2eV3Z8OaUwY2EOdps6IV"
};

const itemRegex = /(name:\s*"([^"]+)",\s*desc:\s*"[^"]+")/g;

content = content.replace(itemRegex, (match, base, name) => {
  let id = null;
  for (const key of Object.keys(imageMap)) {
    if (name.includes(key)) {
      id = imageMap[key];
      break;
    }
  }
  if (!id) {
    // Default image if no match
    id = "1fIsoQ2EGamhFi8EcE0C8GTzzRz66tKT5"; 
  }
  return base + `, image: "https://drive.google.com/thumbnail?id=${id}&sz=w800"`;
});

fs.writeFileSync('src/pages/Services.tsx', content, 'utf8');
console.log("Images mapped successfully.");
