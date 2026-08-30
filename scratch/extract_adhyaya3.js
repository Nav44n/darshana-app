const fs = require('fs');
const txt = fs.readFileSync('scratch/vedanta_adhyaya3_raw.txt', 'utf8');
const start = txt.indexOf('export interface BrahmaSutraWithSanskrit');
const end = txt.indexOf('];', start) + 2;

const finalStr = 'import { BrahmaSutra } from "./brahma-sutras-en";\n\n' + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vedanta/brahma-sutras-en-adhyaya3-1.ts', finalStr);
console.log('Extracted successfully');
