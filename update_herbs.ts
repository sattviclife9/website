import * as fs from 'fs';

let content = fs.readFileSync('src/pages/HerbGlossary.tsx', 'utf8');

content = content.replace(
  /name:\s*'Shatavari',\s*sanskritName:\s*'Asparagus racemosus',\s*image:\s*'[^']+'/,
  "name: 'Shatavari',\n    sanskritName: 'Asparagus racemosus',\n    image: 'https://drive.google.com/thumbnail?id=1utqbVWBTEbvlWDXomhA_5b-rVaYcjF28&sz=w800'"
);

content = content.replace(
  /name:\s*'Amla \(Amalaki\)',\s*sanskritName:\s*'Emblica officinalis',\s*image:\s*'[^']+'/,
  "name: 'Amla (Amalaki)',\n    sanskritName: 'Emblica officinalis',\n    image: 'https://drive.google.com/thumbnail?id=10ue-h37wOZmk9Aq9EiuuUE9wGHZimGRb&sz=w800'"
);

content = content.replace(
  /name:\s*'Brahmi',\s*sanskritName:\s*'Bacopa monnieri',\s*image:\s*'[^']+'/,
  "name: 'Brahmi',\n    sanskritName: 'Bacopa monnieri',\n    image: 'https://drive.google.com/thumbnail?id=10RBrm0J5JiV2DNxRzSgeyuFnEsWo0HuN&sz=w800'"
);

content = content.replace(
  /name:\s*'Tulsi \(Holy Basil\)',\s*sanskritName:\s*'Ocimum sanctum',\s*image:\s*'[^']+'/,
  "name: 'Tulsi (Holy Basil)',\n    sanskritName: 'Ocimum sanctum',\n    image: 'https://drive.google.com/thumbnail?id=15vnOouieYqrCyPr2-Crncuz5WzOoaWto&sz=w800'"
);

fs.writeFileSync('src/pages/HerbGlossary.tsx', content, 'utf8');
console.log("Images updated successfully");
