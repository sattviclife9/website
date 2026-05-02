import fs from 'fs';

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// The script added .replace(/\s*\(.*?\)/, "") essentially by stripping the text from sub.name.
// Actually, earlier the script evaluated replace directly and saved the file. So Navbar has Osteoarthritis without bracket!
// Let's check what's in Navbar.tsx
