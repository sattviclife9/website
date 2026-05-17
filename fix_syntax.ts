import * as fs from 'fs';

let content = fs.readFileSync('src/data/conditionsData.ts', 'utf8');

content = content.replace('{\\n', '{\n');

fs.writeFileSync('src/data/conditionsData.ts', content, 'utf8');
console.log("Fixed syntax error");
