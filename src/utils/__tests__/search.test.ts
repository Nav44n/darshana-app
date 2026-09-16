import { canonIndic, getOrBuildSearchIndex, searchVerses } from '../searchIndex';
import { matchesSanskritQuery, normalizeSanskrit } from '../sanskrit';
import { getRecentSearches, recordSearch, clearSearches } from '../searchHistory';

describe('canonIndic', () => {
  it('collapses source line breaks so a typed space still matches', () => {
    expect(canonIndic('धर्मक्षेत्रे\nकुरुक्षेत्रे')).toBe('धर्मक्षेत्रे कुरुक्षेत्रे');
  });

  it('strips invisible joiners Malayalam keyboards may or may not emit', () => {
    expect(canonIndic('അ‌റിയുക')).toBe('അറിയുക');
    expect(canonIndic('അ‍റിയുക')).toBe('അറിയുക');
  });

  it('is empty for blank input, so callers can skip the canon paths', () => {
    expect(canonIndic('')).toBe('');
    expect(canonIndic('   ')).toBe('');
  });
});

describe('searchVerses indic matching', () => {
  it('finds a Devanagari query present in the corpus', () => {
    // Gita 1.1 opens with धर्मक्षेत्रे — a stable corpus anchor.
    const hits = searchVerses('धर्म');
    expect(hits.length).toBeGreaterThan(0);
  });

  it('matches across a line break the query cannot see', () => {
    const index = getOrBuildSearchIndex();
    const multi = index.find((item) => (item.verse.devanagari || '').includes('\n'));
    expect(multi).toBeDefined();
    if (!multi) return;
    // A word pair straddling a real line break: the raw source holds a
    // newline where the typed query holds a plain space.
    const raw = multi.verse.devanagari || '';
    let query = '';
    let cursor = -1;
    while ((cursor = raw.indexOf('\n', cursor + 1)) !== -1) {
      const before = raw.slice(0, cursor).trimEnd().split(/\s+/).pop() || '';
      const after = raw.slice(cursor + 1).trimStart().split(/\s+/)[0] || '';
      if (before && after && !raw.includes(`${before} ${after}`)) {
        query = `${before} ${after}`;
        break;
      }
    }
    expect(query).not.toBe('');
    const hits = searchVerses(query);
    expect(hits.some((h) => h.item.verse === multi.verse)).toBe(true);
  });
});

describe('matchesSanskritQuery (palette behaviour)', () => {
  it('matches plain-ASCII queries against diacritic targets', () => {
    expect(matchesSanskritQuery('satkāryavāda', 'satkarya')).toBe(true);
    expect(matchesSanskritQuery('Sāṃkhya', 'samkhya')).toBe(true);
    expect(matchesSanskritQuery('pramāṇa', 'pramana')).toBe(true);
    expect(matchesSanskritQuery('Puruṣa', 'PURUSA')).toBe(true);
  });

  it('rejects non-matches and empty targets, accepts empty queries', () => {
    expect(matchesSanskritQuery('puruṣa', 'prakriti')).toBe(false);
    expect(matchesSanskritQuery('', 'dharma')).toBe(false);
    expect(matchesSanskritQuery('dharma', '')).toBe(true);
  });

  it('tolerates surrounding whitespace in palette queries', () => {
    expect(matchesSanskritQuery('Puruṣa', '  purusa  ')).toBe(true);
    expect(matchesSanskritQuery('dharma', '   ')).toBe(true);
  });
});

describe('normalizeSanskrit', () => {
  it('folds the full IAST diacritic range to ASCII bases', () => {
    expect(normalizeSanskrit('śṣṇñṅṛṝḷṭḍṃḥ')).toBe('ssnnnrrltdmh');
    expect(normalizeSanskrit('Sāṃkhya')).toBe('samkhya');
    expect(normalizeSanskrit('')).toBe('');
  });
});

describe('searchVerses ranking determinism', () => {
  it('returns identical order on repeated head queries', () => {
    const first = searchVerses('karma').map((h) => `${h.item.systemId}/${h.item.textId}/${h.item.verse.id}`);
    const second = searchVerses('karma').map((h) => `${h.item.systemId}/${h.item.textId}/${h.item.verse.id}`);
    expect(first).toEqual(second);
  });

  it('breaks score ties on stable id order, not corpus insertion order', () => {
    const hits = searchVerses('karma');
    expect(hits.length).toBeGreaterThan(1);
    for (let i = 1; i < hits.length; i++) {
      if (hits[i].score === hits[i - 1].score) {
        const prev = `${hits[i - 1].item.systemId}/${hits[i - 1].item.textId}/${hits[i - 1].item.verse.id}`;
        const curr = `${hits[i].item.systemId}/${hits[i].item.textId}/${hits[i].item.verse.id}`;
        expect(prev.localeCompare(curr)).toBeLessThanOrEqual(0);
      }
    }
  });
});

describe('searchHistory (node has no window: fail-silent contract)', () => {
  it('reads empty and writes without throwing', () => {
    expect(getRecentSearches()).toEqual([]);
    expect(() => recordSearch('dharma')).not.toThrow();
    expect(() => clearSearches()).not.toThrow();
    expect(getRecentSearches()).toEqual([]);
  });
});
