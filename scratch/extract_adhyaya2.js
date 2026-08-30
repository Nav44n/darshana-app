const fs = require('fs');
const txt = fs.readFileSync('scratch/vedanta_adhyaya2_raw.txt', 'utf8');
const start = txt.indexOf('export const brahmaSutrasEnAdhyaya2');
const end = txt.indexOf('];', start) + 2;

const finalStr = 'import { BrahmaSutra } from "./brahma-sutras-en";\n\n' + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vedanta/brahma-sutras-en-adhyaya2.ts', finalStr);
console.log('Extracted successfully');
