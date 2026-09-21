import { describe, it, expect } from 'vitest';
import { getLocalizedPath, extractLanguageFromPath, routes } from '../navigation';

describe('Navigation & Canonical Routing', () => {
  it('extracts language from localized paths', () => {
    expect(extractLanguageFromPath('/ml/systems')).toBe('ml');
    expect(extractLanguageFromPath('/en/library')).toBe('en');
    expect(extractLanguageFromPath('/systems')).toBeNull();
  });

  it('converts un-prefixed paths to localized paths', () => {
    expect(getLocalizedPath('/', 'ml')).toBe('/ml');
    expect(getLocalizedPath('/systems', 'en')).toBe('/en/systems');
    expect(getLocalizedPath('/library', 'ml')).toBe('/ml/library');
  });

  it('switches languages while preserving route and query/hash parameters', () => {
    expect(getLocalizedPath('/ml/systems', 'en')).toBe('/en/systems');
    expect(getLocalizedPath('/en/text/samkhya-karika/verse/1?lens=rajas#apparatus', 'ml')).toBe(
      '/ml/text/samkhya-karika/verse/1?lens=rajas#apparatus'
    );
  });

  it('generates canonical routes for all 4 pillars and detail views', () => {
    expect(routes.home('ml')).toBe('/ml');
    expect(routes.systems('en')).toBe('/en/systems');
    expect(routes.inquiries('ml')).toBe('/ml/inquiries');
    expect(routes.library('en')).toBe('/en/library');
    expect(routes.verse('ml', 'samkhya-karika', '1')).toBe('/ml/text/samkhya-karika/verse/1');
    expect(routes.verse('en', 'yoga-sutras', '1.2', 'yoga')).toBe(
      '/en/system/yoga/text/yoga-sutras/verse/1.2'
    );
  });
});
