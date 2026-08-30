const fs = require('fs');

const raw = fs.readFileSync('scratch/adhyaya2_sanskrit_raw.txt', 'utf8');

const sutras = [];

let currentText = raw;
let adhyaya = 2;
let pada = 1;
let sutraNum = 1;

currentText = currentText.replace('ब्रह्मसूत्रम् - द्वितीयोऽध्यायः (Brahma Sutras - Adhyaya 2)', '');

const padas = currentText.split(/प्रथमः पादः \(Pada 1\)|द्वितीयः पादः \(Pada 2\)|तृतीयः पादः \(Pada 3\)|चतुर्थः पादः \(Pada 4\)/).filter(p => p.trim());

for (let p = 0; p < padas.length; p++) {
  pada = p + 1;
  let padaText = padas[p];
  
  const regex = /(.+?)॥\s*([०-९0-9]+)\s*॥/g;
  let match;
  
  while ((match = regex.exec(padaText)) !== null) {
    let sanskritText = match[1].trim() + " ॥ " + match[2] + " ॥";
    let devanagariToEng = {
      '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', 
      '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
    };
    
    let numStr = match[2].trim();
    let engNumStr = '';
    for (let char of numStr) {
      engNumStr += devanagariToEng[char] || char;
    }
    
    sutraNum = parseInt(engNumStr, 10);
    
    sutras.push({
      id: `${adhyaya}.${pada}.${sutraNum}`,
      sanskrit: sanskritText
    });
  }
}

let tsFile = fs.readFileSync('src/content/vedanta/brahma-sutras-en-adhyaya2.ts', 'utf8');

sutras.forEach(sutra => {
  const idMatch = new RegExp(`id:\\s*"${sutra.id}",`);
  tsFile = tsFile.replace(idMatch, `id: "${sutra.id}",\n    sanskrit: "${sutra.sanskrit}",`);
});

fs.writeFileSync('src/content/vedanta/brahma-sutras-en-adhyaya2.ts', tsFile);
console.log(`Updated ${sutras.length} sutras with Sanskrit text in Adhyaya 2.`);
