import { System, ClassicalText, SystemId } from '../../types/content';
import { buildClassicalText, buildSystemThread } from '../factory';
import { tantralokaConceptsEn, TantralokaConcept } from './tantraloka-concepts-en';
import { tantralokaVersesEn } from './tantraloka-verses-en';

const mappedConceptsEn = tantralokaConceptsEn.map((c: TantralokaConcept) => ({
  id: c.id,
  title: `${c.sanskrit} (${c.iast}) - ${c.english}`,
  category: c.category,
  summary: c.definition + "\n\nSignificance: " + c.significance,
  relatedConceptIds: c.relatedConcepts
}));

const mappedConceptsMl = tantralokaConceptsEn.map((c: TantralokaConcept) => ({
  id: c.id,
  title: `${c.sanskrit} (${c.iast}) - വിവർത്തനം വരുന്നു`,
  category: c.category,
  summary: `ഈ ആശയത്തിന്റെ മലയാളം വിവർത്തനം ഉടൻ പ്രസിദ്ധീകരിക്കുന്നതാണ്.`,
  relatedConceptIds: c.relatedConcepts
}));

const mappedThreadEn = tantralokaConceptsEn.map((c: TantralokaConcept, index: number) => ({
  id: `ks-step-${index + 1}`,
  conceptId: c.id,
  title: c.english,
  narrative: `Part of the master ontology of Kashmir Shaivism.\n\nCategory: ${c.category}\n\n${c.definition}`
}));

const mappedThreadMl = tantralokaConceptsEn.map((c: TantralokaConcept, index: number) => ({
  id: `ks-step-${index + 1}`,
  conceptId: c.id,
  title: `${c.english} (Malayalam)`,
  narrative: `ഈ ഭാഗം ഉടൻ മലയാളത്തിൽ ലഭ്യമാകും.`
}));

export const tantralokaText: ClassicalText = buildClassicalText(
  {
    id: 'tantraloka',
    title: 'Tantrāloka',
    transliteratedTitle: 'Tantrāloka',
    author: 'Abhinavagupta',
    system: 'kashmir-shaivism',
    contentDepth: 'full',
    sources: [{ name: 'Tantrāloka Translation', status: 'pending' }]
  },
  {
    en: tantralokaVersesEn,
    ml: {}
  },
  {
    en: mappedConceptsEn,
    ml: mappedConceptsMl
  }
);

export const kashmirShaivismSystem: System = {
  id: 'kashmir-shaivism' as SystemId,
  title: 'Kashmir Shaivism',
  subtitle: 'The non-dual philosophy of Trika and Spanda',
  texts: [tantralokaText],
  thread: buildSystemThread('tantraloka', {
    en: mappedThreadEn,
    ml: mappedThreadMl
  })
};
