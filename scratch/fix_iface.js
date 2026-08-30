const fs = require('fs');
let c = fs.readFileSync('src/content/vaisesika/vaisesika-sutras-en.ts', 'utf-8');
c = c.replace('commentary: string; // Synthesized philosophical commentary\n}', 'commentary: string; // Synthesized philosophical commentary\n  diagramId?: string;\n  conceptIds?: string[];\n}');
fs.writeFileSync('src/content/vaisesika/vaisesika-sutras-en.ts', c, 'utf-8');
console.log("Replaced!");
