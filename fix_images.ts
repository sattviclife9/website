import * as fs from 'fs';

let content = fs.readFileSync('src/data/conditionsData.ts', 'utf8');

content = content.replace(
  /"https:\/\/images.unsplash.com\/photo-1576091160399-112ba8d25d1d[^"]+"/g,
  '"https://drive.google.com/thumbnail?id=165Mr0kBqaFsE6iZe6Yze-Buv-aFBIWes&sz=w1200"'
);

content = content.replace(
  /"https:\/\/images.unsplash.com\/photo-1555529902-5261145628b5[^"]+"/g,
  '"https://drive.google.com/thumbnail?id=1zGJtglxz9b3IbPJrz4SPbyraLi76S1Ge&sz=w1200"'
);

content = content.replace(
  /"https:\/\/images.unsplash.com\/photo-1509062522246-3755977927d7[^"]+"/g,
  '"https://drive.google.com/thumbnail?id=1R18hIWx-4_YLK7FJqYv8eM85hISlQLLl&sz=w1200"'
);

fs.writeFileSync('src/data/conditionsData.ts', content, 'utf8');
console.log("Replaced image URLs successfully");
