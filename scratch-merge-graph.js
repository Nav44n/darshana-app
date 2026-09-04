const fs = require('fs');
const path = require('path');

// Extract concepts from TS file
const conceptsText = fs.readFileSync('src/content/nyaya/nyaya-sutras-concepts-en.ts', 'utf8');

const idRegex = /id:\s*['"]([^'"]+)['"]/g;
const sanskritRegex = /sanskrit:\s*['"]([^'"]+)['"]/g;
const descRegex = /definition:\s*['"]([^'"]+)['"]/g;

// Very basic extraction for the graph
const nodes = [];
const lines = conceptsText.split('{');
lines.forEach(block => {
  const idMatch = /id:\s*['"]([^'"]+)['"]/.exec(block);
  const sanskritMatch = /sanskrit:\s*['"]([^'"]+)['"]/.exec(block);
  const descMatch = /definition:\s*['"]([^'"]+)['"]/.exec(block);
  
  if (idMatch && sanskritMatch) {
    nodes.push({
      id: `concept:${idMatch[1]}`,
      label: sanskritMatch[1],
      type: 'Concept',
      properties: {
        description: descMatch ? descMatch[1] : '',
        system: 'Nyāya'
      }
    });
  }
});

const graphPath = path.join(__dirname, 'src/knowledge/darshana-knowledge-graph.json');
const currentGraph = JSON.parse(fs.readFileSync(graphPath, 'utf8'));

// Filter out existing Nyaya nodes to avoid duplicates if run multiple times
currentGraph.nodes = currentGraph.nodes.filter(n => n.properties.system !== 'Nyāya');

// Add new nodes
currentGraph.nodes.push(...nodes);

fs.writeFileSync(graphPath, JSON.stringify(currentGraph, null, 2));
console.log('Merged ' + nodes.length + ' Nyaya concepts into the global graph JSON!');
