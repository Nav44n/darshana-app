// @ts-nocheck
import * as fs from 'fs';
import * as path from 'path';

// Compile TS dynamically so we can run this easily


const { nyayaKnowledgeGraph } = require('../src/content/nyaya/nyaya-graph-data');
const graphPath = path.resolve(__dirname, '../src/knowledge/darshana-knowledge-graph.json');
const currentGraph = JSON.parse(fs.readFileSync(graphPath, 'utf8'));

// We already have 82 Nyaya concept nodes in there (from earlier steps).
// Let's filter them out and re-add them based on the new max-effort schema.
const nonNyayaNodes = currentGraph.nodes.filter((n: any) => n.properties?.system !== 'Nyāya');
const nonNyayaEdges = currentGraph.edges.filter((e: any) => e.properties?.system !== 'Nyāya');

const newNyayaNodes = nyayaKnowledgeGraph.nodes.map((n: any) => {
  return {
    id: n.id,
    label: n.label,
    type: n.kind,
    properties: {
      ...n.properties,
      system: 'Nyāya'
    }
  };
});

const newNyayaEdges = nyayaKnowledgeGraph.edges.map((e: any) => {
  return {
    source: e.source,
    target: e.target,
    relation: e.relation,
    properties: {
      ...e.properties,
      system: 'Nyāya'
    }
  };
});

const updatedGraph = {
  nodes: [...nonNyayaNodes, ...newNyayaNodes],
  edges: [...nonNyayaEdges, ...newNyayaEdges]
};

fs.writeFileSync(graphPath, JSON.stringify(updatedGraph, null, 2), 'utf8');

console.log(`Successfully merged Nyaya graph data!`);
console.log(`Total Nodes: ${updatedGraph.nodes.length} (Nyaya: ${newNyayaNodes.length})`);
console.log(`Total Edges: ${updatedGraph.edges.length} (Nyaya: ${newNyayaEdges.length})`);
