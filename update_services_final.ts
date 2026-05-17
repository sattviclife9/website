import * as fs from 'fs';

let content = fs.readFileSync('src/pages/Services.tsx', 'utf8');

// Match and reorder "Skin, Hair & Beauty Therapies"
// Current order in code:
// 1. Ayurvedic Facial Therapies
// 2. Mukhalepam (Herbal Face Therapy)
// We need to swap them.

const facialMatch = content.match(/\{\s*name:\s*"Ayurvedic Facial Therapies"[\s\S]*?\},/);
const mukhMatch = content.match(/\{\s*name:\s*"Mukhalepam \(Herbal Face Therapy\)"[\s\S]*?\},/);

if (facialMatch && mukhMatch) {
  content = content.replace(facialMatch[0], '%%%FACIAL%%%');
  content = content.replace(mukhMatch[0], facialMatch[0]);
  content = content.replace('%%%FACIAL%%%', mukhMatch[0]);
}

// Remove "Personalized Diet & Lifestyle Guidance" from "Wellness & Lifestyle Programs"
const dietMatch = content.match(/,\s*\{\s*name:\s*"Personalized Diet & Lifestyle Guidance"[\s\S]*?\}\s*\]/);
if (dietMatch) {
  content = content.replace(dietMatch[0], '\n    ]\n');
}

fs.writeFileSync('src/pages/Services.tsx', content, 'utf8');
console.log("Services updated successfully");
