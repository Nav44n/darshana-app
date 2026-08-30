const fs = require('fs');
const txt = fs.readFileSync('scratch/vedanta_adhyaya4_raw.txt', 'utf8');
const start = txt.indexOf('export const brahmaSutrasEnAdhyaya4');
const end = txt.indexOf('];', start) + 2;

const finalStr = "import { BrahmaSutraWithSanskrit } from './brahma-sutras-en-adhyaya3-1';\n\n" + txt.substring(start, end) + '\n';
fs.writeFileSync('src/content/vedanta/brahma-sutras-en-adhyaya4.ts', finalStr);
console.log('Extracted successfully');
