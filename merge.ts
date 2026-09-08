import * as fs from 'fs';
import { deviMahatmyaVersesEn as uploadedVerses } from './src/content/devi-mahatmya/uploaded-verses';
import { deviMahatmyaVersesEn as currentVerses } from './src/content/devi-mahatmya/devi-mahatmya-verses-en';

// Create a map of current verses
const mergedMap = new Map();
currentVerses.forEach(v => mergedMap.set(v.id, v));

// Overwrite/add uploaded verses
uploadedVerses.forEach(v => mergedMap.set(v.id, v));

// Now sort them properly
const prefixes = ['dm-kavacha', 'dm-argala', 'dm-keelaka'];
for(let i=1; i<=13; i++) {
  prefixes.push('dm-' + i);
}

const allVerses = Array.from(mergedMap.values());
allVerses.sort((a, b) => {
  const getWeight = (id) => {
    for (let i = 0; i < prefixes.length; i++) {
      if (id.startsWith(prefixes[i] + '-')) {
        const numPart = id.replace(prefixes[i] + '-', '');
        const num = parseInt(numPart.replace(/[^0-9]/g, ''));
        return i * 1000 + (isNaN(num) ? 999 : num);
      }
    }
    return 999999;
  };
  return getWeight(a.id) - getWeight(b.id);
});

function escapeText(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function formatVerse(v) {
  let res = `  {
    id: '${v.id}',
    number: '${v.number}',
    section: '${v.section}',
    devanagari: \`${escapeText(v.devanagari)}\`,
    iast: \`${escapeText(v.iast)}\`,`;
    
  if (v.conceptIds) {
    res += `\n    conceptIds: ${JSON.stringify(v.conceptIds)},`;
  }
  
  res += `\n    translation: \`${escapeText(v.translation)}\`,`;
  res += `\n    commentary: \`${escapeText(v.commentary)}\``;
  
  if (v.keyPoints) {
    res += `,\n    keyPoints: ${JSON.stringify(v.keyPoints)}`;
  }
  
  res += `\n  }`;
  return res;
}

const fileContent = `export interface RawVerseEn {
  id: string;
  number: string;
  section: string;
  devanagari: string;
  iast: string;
  conceptIds?: string[];
  translation: string;
  commentary: string;
  keyPoints?: string[];
}

export const deviMahatmyaVersesEn: RawVerseEn[] = [
${allVerses.map(formatVerse).join(',\n')}
];
`;

fs.writeFileSync('src/content/devi-mahatmya/devi-mahatmya-verses-en.ts', fileContent, 'utf8');
console.log('Merged successfully! Total verses:', allVerses.length);
