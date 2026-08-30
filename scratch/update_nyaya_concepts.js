const fs = require('fs');

let content = fs.readFileSync('src/content/nyaya/nyaya-sutras.ts', 'utf8');

// Replace import
content = content.replace(
  "import { nyayaSutrasConceptsEn } from './nyaya-sutras-concepts-en';",
  "import { nyayaConceptsEn } from './nyaya-sutras-concepts-en';"
);

// Replace mapping
const oldMapping = `export const nyayaConcepts: Concept[] = nyayaSutrasConceptsEn.map((c: any) => ({
  id: c.id,
  diagramId: c.diagramId,
  relatedVerseIds: c.relatedVerseIds,
  content: {
    en: {
      title: c.title,
      summary: c.summary
    },
    ml: nyayaSutrasConceptsMl[c.id]
  }
}));`;

const newMapping = `export const nyayaConcepts: Concept[] = nyayaConceptsEn.map((c: any) => ({
  id: c.id,
  relatedVerseIds: c.relatedConcepts,
  content: {
    en: {
      title: \`\${c.sanskrit} (\${c.iast}) - \${c.english}\`,
      summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.definition}\\n\\n**Significance**: \${c.significance}\`
    },
    ml: nyayaSutrasConceptsMl[c.id]
  }
}));`;

content = content.replace(oldMapping, newMapping);

fs.writeFileSync('src/content/nyaya/nyaya-sutras.ts', content);
console.log('nyaya-sutras.ts updated successfully');
