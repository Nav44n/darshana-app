const fs = require('fs');

let content = fs.readFileSync('src/content/vedanta/brahma-sutras.ts', 'utf8');

const oldStr = `concepts: vedantaConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: c.referenceSutras,
    content: {
      en: {
        title: \`\${c.sanskrit} - \${c.term}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.basicDefinition}\\n\\n**Explanation**: \${c.advancedExplanation}\`
      }
    }
  }))`;

const newStr = `concepts: vedantaConceptsEn.map((c: any) => ({
    id: c.id,
    relatedVerseIds: [],
    content: {
      en: {
        title: \`\${c.sanskrit} (\${c.iast}) - \${c.english}\`,
        summary: \`**Category**: \${c.category}\\n\\n**Definition**: \${c.definition}\\n\\n**Significance**: \${c.significance}\`
      }
    }
  }))`;

content = content.replace(oldStr, newStr);
fs.writeFileSync('src/content/vedanta/brahma-sutras.ts', content);
console.log('Fixed mapping correctly this time.');
