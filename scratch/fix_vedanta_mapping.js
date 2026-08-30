const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

const newMapping = `concepts: vedantaConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: c.referenceSutras,
    content: {
      en: {
        title: \`\${c.sanskrit} - \${c.term}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.basicDefinition}\\n\\n**Explanation**: \${c.advancedExplanation}\`
      }
    }
  }))`;

content = content.replace(/concepts:\s*vedantaConceptsEn\.map\([^]*?\}\)\)\)/, newMapping);

fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
console.log('Fixed mapping');
