const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

// Add import if not present
if (!content.includes('vedantaConceptsEn')) {
  content = content.replace(
    "import { brahmaSutrasMl } from './brahma-sutras-ml';",
    "import { brahmaSutrasMl } from './brahma-sutras-ml';\nimport { vedantaConceptsEn } from './brahma-sutras-concepts-en';\nimport { Concept } from '../../types/content';"
  );
  
  // Notice: Concept is already imported in the first line! Let's check first line.
  // Actually, I can just replace `concepts: []` with the mapped concepts.
  
  const conceptsMapping = `concepts: vedantaConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: c.relatedConcepts,
    content: {
      en: {
        title: \`\${c.sanskrit} (\${c.iast}) - \${c.english}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.definition}\\n\\n**Significance**: \${c.significance}\`
      }
    }
  }))`;
  
  content = content.replace("concepts: []", conceptsMapping);
  
  // Ensure Concept is imported in the first line. 
  // It is imported in brahma-sutras.ts: `import { ClassicalText } from '../../types/content';`
  // We don't necessarily need to import Concept if we don't type the array directly, but let's be safe.
  if (!content.includes('import { ClassicalText, Concept }')) {
    content = content.replace('import { ClassicalText }', 'import { ClassicalText, Concept }');
  }

  fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
  console.log('brahma-sutras.ts updated successfully');
} else {
  console.log('Already updated');
}
