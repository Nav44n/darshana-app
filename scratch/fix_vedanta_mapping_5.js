const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

// Update the import
content = content.replace(
  `import { vedantaConceptsEn } from './brahma-sutras-concepts-en';`,
  `import { brahmaSutrasConceptsEn } from './brahma-sutras-concepts-en';`
);

// Update the mapping logic
const oldMapping = `concepts: vedantaConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: c.referenceSutras || [],
    content: {
      en: {
        title: \`\${c.sanskrit} - \${c.term}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.basicDefinition}\\n\\n**Explanation**: \${c.advancedExplanation}\`
      }
    }
  }))`;

const newMapping = `concepts: brahmaSutrasConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: [],
    content: {
      en: {
        title: \`\${c.sanskrit} - \${c.term}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.basicDefinition}\\n\\n**Explanation**: \${c.advancedExplanation}\`
      }
    }
  }))`;

content = content.replace(oldMapping, newMapping);
fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
console.log('Fixed final mapping.');
