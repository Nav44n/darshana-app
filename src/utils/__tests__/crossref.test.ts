import { linkifyReferences } from '../crossref';

describe('linkifyReferences', () => {
  it('returns a single plain segment when there are no references', () => {
    const segments = linkifyReferences('No references in this sentence at all.');
    expect(segments).toHaveLength(1);
    expect(segments[0].link).toBeUndefined();
    expect(segments[0].text).toBe('No references in this sentence at all.');
  });

  it('links a valid Yoga Sūtra reference (I.2 style)', () => {
    const segments = linkifyReferences('This echoes sūtra I.2 directly.');
    const linked = segments.filter((s) => s.link);
    expect(linked).toHaveLength(1);
    expect(linked[0].text).toBe('I.2');
    expect(linked[0].link).toEqual({ systemId: 'yoga', textId: 'yoga-sutras', verseId: 'I.2' });
  });

  it('links a valid Sāṃkhya Kārikā reference, linking only the numeral', () => {
    const segments = linkifyReferences('See Kārikā 67 for the full argument.');
    const linked = segments.filter((s) => s.link);
    expect(linked).toHaveLength(1);
    expect(linked[0].text).toBe('67');
    expect(linked[0].link).toEqual({ systemId: 'samkhya', textId: 'samkhya-karika', verseId: '67' });
  });

  it('links a cross-system reference phrased as "Sāṃkhya Kārikā 62"', () => {
    const segments = linkifyReferences('Vijñānabhikṣu quotes Sāṃkhya Kārikā 62 here.');
    const linked = segments.filter((s) => s.link);
    expect(linked).toHaveLength(1);
    expect(linked[0].link?.systemId).toBe('samkhya');
    expect(linked[0].link?.verseId).toBe('62');
  });

  it('leaves unrecognized texts alone, even if the phrasing is similar', () => {
    const segments = linkifyReferences('Compare this to Bhagavad Gita 2.47.');
    const linked = segments.filter((s) => s.link);
    expect(linked).toHaveLength(0);
  });

  it('ignores references that do not actually exist in the target text', () => {
    const segments = linkifyReferences('As mentioned in I.999 and Kārikā 90.');
    const linked = segments.filter((s) => s.link);
    expect(linked).toHaveLength(0);
  });

  it('links multiple distinct references in one string, in order', () => {
    const segments = linkifyReferences('Compare I.2 with II.29 and also Kārikā 3.');
    const linked = segments.filter((s) => s.link);
    expect(linked.map((s) => s.text)).toEqual(['I.2', 'II.29', '3']);
  });

  it('reconstructing all segment text reproduces the original string', () => {
    const original = 'Compare I.2 with Kārikā III and II.29, then Kārikā LXVII.';
    const segments = linkifyReferences(original);
    expect(segments.map((s) => s.text).join('')).toBe(original);
  });

  it('handles an empty string without throwing', () => {
    expect(linkifyReferences('')).toEqual([]);
  });
});
