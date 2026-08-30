const fs = require('fs');
let c = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');
c = c.replace("import { Concept } from '../../types/content';\n", "");
fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', c);
