const fs = require('fs');

// 1. Fix Concepts File
let conceptsFile = 'src/content/vedanta/brahma-sutras-concepts-en.ts';
let cContent = fs.readFileSync(conceptsFile, 'utf8');

cContent = cContent.replace(
  `relatedConcepts: ["concept_brahman", "concept_jiva", "concept_pancha_kosha"]`,
  `relatedConcepts: ["concept_brahman", "concept_jiva", "concept_pancha_kosha"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_atman", "concept_upadhi", "concept_avidya"]`,
  `relatedConcepts: ["concept_atman", "concept_antahkarana"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_brahman", "concept_maya", "concept_karma"]`,
  `relatedConcepts: ["concept_brahman", "concept_maya", "concept_karma_traya"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_avidya", "concept_vivartavada", "concept_adhyasa"]`,
  `relatedConcepts: ["concept_vivartavada", "concept_adhyasa"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_jiva", "concept_upadhi"]`,
  `relatedConcepts: ["concept_jiva"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_brahman", "concept_moksha"]`,
  `relatedConcepts: ["concept_brahman", "concept_jivanmukti"]`
);
cContent = cContent.replace(
  `relatedConcepts: ["concept_karma_traya", "concept_videhamukti"]`,
  `relatedConcepts: ["concept_karma_traya"]`
);

fs.writeFileSync(conceptsFile, cContent);


// 2. Fix Thread File
let threadFile = 'src/content/vedanta/brahma-sutras-thread-en.ts';
let tContent = fs.readFileSync(threadFile, 'utf8');

tContent = tContent.replace(/concept_nirguna_brahman/g, 'concept_brahman');
tContent = tContent.replace(/concept_saguna_brahman/g, 'concept_ishvara');
tContent = tContent.replace(/concept_upadhi/g, 'concept_antahkarana');
tContent = tContent.replace(/concept_samsara/g, 'concept_maya');
tContent = tContent.replace(/concept_karma/g, 'concept_karma_traya');
tContent = tContent.replace(/concept_jnana_yoga/g, 'concept_sadhana_chatushtaya');
tContent = tContent.replace(/concept_moksha/g, 'concept_krama_mukti');
tContent = tContent.replace(/concept_videhamukti/g, 'concept_turiya');

fs.writeFileSync(threadFile, tContent);

console.log('Fixed sync issues in concepts and thread files.');
