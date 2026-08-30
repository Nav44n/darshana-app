const fs = require('fs');
let c = fs.readFileSync('src/content/index.ts', 'utf-8');
if (!c.includes('vedantaSystem')) {
  c = c.replace(
    "import { vaisesikaThreadEn } from './vaisesika/vaisesika-sutras-thread-en';",
    "import { vaisesikaThreadEn } from './vaisesika/vaisesika-sutras-thread-en';\nimport { vedantaSystem } from './vedanta';"
  );
  c = c.replace(
    '  }\n];',
    '  },\n  vedantaSystem\n];'
  );
  fs.writeFileSync('src/content/index.ts', c, 'utf-8');
  console.log("Vedanta added to index.ts");
} else {
  console.log("Vedanta already in index.ts");
}
