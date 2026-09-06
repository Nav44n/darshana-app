import * as fs from 'fs';
import * as path from 'path';

// Import from the TS files (by transpiling dynamically or simply reading the text)
const mainFilePath = path.join(__dirname, '../src/content/kashmir-shaivism/tantraloka-concepts-en.ts');
let mainContent = fs.readFileSync(mainFilePath, 'utf8');

const partsFilePath = path.join(__dirname, '../scratch/tantraloka-parts.ts');
const partsContent = fs.readFileSync(partsFilePath, 'utf8');

// We will parse out the arrays and merge them into a single string.
// Let's just create a new file that has the interface and the merged array.

const interfaceCode = `export interface TantralokaConcept {
  id: string;
  sanskrit: string;
  iast: string;
  english: string;
  category: "Absolute Reality" | "Epistemology" | "Cosmology" | "Subtle Physiology" | "Ritual & Mantra" | "Soteriology" | "Philosophy of Language" | "Aesthetics & Experience";
  definition: string;
  significance: string;
  relatedConcepts: string[];
}`;

// Extract array contents using regex
const extractArrayContent = (text: string) => {
  const match = text.match(/\[([\s\S]*?)\];/);
  return match ? match[1].trim() : '';
};

const vol1Matches = [...mainContent.matchAll(/export const tantralokaConceptsVol1: TantralokaConcept\[\] = \[([\s\S]*?)\];/g)];
const vol1Content = vol1Matches.length > 0 ? vol1Matches[0][1].trim() : '';

const part2Matches = [...partsContent.matchAll(/export const tantralokaConceptsPart2 = \[([\s\S]*?)\];/g)];
const part2Content = part2Matches.length > 0 ? part2Matches[0][1].trim() : '';

const part3Matches = [...partsContent.matchAll(/export const tantralokaConceptsPart3 = \[([\s\S]*?)\];/g)];
const part3Content = part3Matches.length > 0 ? part3Matches[0][1].trim() : '';

const part4Matches = [...partsContent.matchAll(/export const tantralokaConceptsPart4 = \[([\s\S]*?)\];/g)];
const part4Content = part4Matches.length > 0 ? part4Matches[0][1].trim() : '';

const part5Matches = [...partsContent.matchAll(/export const tantralokaConceptsPart5 = \[([\s\S]*?)\];/g)];
const part5Content = part5Matches.length > 0 ? part5Matches[0][1].trim() : '';

const combinedElements = [
  vol1Content,
  part2Content,
  part3Content,
  part4Content,
  part5Content
].filter(c => c.length > 0).join(',\n\n');


const finalFileContent = `/**
 * ============================================================================
 * TANTRĀLOKA: MASTER ONTOLOGY & CONCEPTS DIRECTORY (VOL 1 COMPLETE)
 * ============================================================================
 * This file represents the systematic conceptual mapping of Abhinavagupta's 
 * Tantrāloka (Volume 1). It maps the non-dual Shaiva philosophy (Trika).
 * ============================================================================
 */

${interfaceCode}

export const tantralokaConceptsEn: TantralokaConcept[] = [
${combinedElements}
];
`;

fs.writeFileSync(mainFilePath, finalFileContent, 'utf8');
console.log('Merged successfully!');
