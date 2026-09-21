import { SupportedLanguage } from '../types/i18n';

/**
 * Transforms an existing route path to swap its language prefix while
 * strictly preserving the rest of the path, query parameters, and hash.
 * Never dumps the user back to home.
 *
 * Example:
 * `/ml/text/samkhya-karika/verse/1?layer=padartha` -> `/en/text/samkhya-karika/verse/1?layer=padartha`
 */
export function getLocalizedPath(
  currentPathAndSearch: string,
  targetLang: SupportedLanguage
): string {
  if (!currentPathAndSearch || currentPathAndSearch === '/' || currentPathAndSearch === '') {
    return `/${targetLang}`;
  }

  // Separate path from query/hash
  const [path, ...rest] = currentPathAndSearch.split('?');
  const search = rest.length > 0 ? `?${rest.join('?')}` : '';

  // Check if starts with /ml or /en
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'ml' || segments[0] === 'en') {
    segments[0] = targetLang;
    const newPath = '/' + segments.join('/');
    return `${newPath}${search}`;
  }

  // If un-prefixed (legacy route like /systems or /system/samkhya)
  return `/${targetLang}/${segments.join('/')}${search}`;
}

/**
 * Extracts language code from a pathname, or returns fallback.
 */
export function extractLangFromPath(pathname: string, fallback: SupportedLanguage = 'ml'): SupportedLanguage {
  const match = pathname.match(/^\/(ml|en)(\/|$)/);
  if (match && (match[1] === 'ml' || match[1] === 'en')) {
    return match[1] as SupportedLanguage;
  }
  return fallback;
}

/**
 * Extracts language code if present, otherwise returns null.
 */
export function extractLanguageFromPath(pathname: string): SupportedLanguage | null {
  const match = pathname.match(/^\/(ml|en)(\/|$)/);
  if (match && (match[1] === 'ml' || match[1] === 'en')) {
    return match[1] as SupportedLanguage;
  }
  return null;
}

/** Canonical URL generators */
export const routes = {
  home: (lang: SupportedLanguage = 'ml') => `/${lang}`,
  systems: (lang: SupportedLanguage = 'ml') => `/${lang}/systems`,
  systemDetail: (lang: SupportedLanguage, systemId: string) => `/${lang}/system/${systemId}`,
  systemExplore: (lang: SupportedLanguage, systemId: string) => `/${lang}/system/${systemId}/explore`,
  systemThread: (lang: SupportedLanguage, systemId: string) => `/${lang}/system/${systemId}/thread`,
  inquiries: (lang: SupportedLanguage = 'ml') => `/${lang}/inquiries`,
  inquiryDetail: (lang: SupportedLanguage, inquiryId: string) => `/${lang}/inquiry/${inquiryId}`,
  library: (lang: SupportedLanguage = 'ml') => `/${lang}/library`,
  text: (lang: SupportedLanguage, textId: string, systemId?: string) =>
    systemId ? `/${lang}/system/${systemId}/text/${textId}` : `/${lang}/text/${textId}`,
  verse: (lang: SupportedLanguage, textId: string, verseId: string | number, systemId?: string) =>
    systemId
      ? `/${lang}/system/${systemId}/text/${textId}/verse/${verseId}`
      : `/${lang}/text/${textId}/verse/${verseId}`,
  concept: (lang: SupportedLanguage, conceptId: string, systemId?: string, textId?: string) =>
    systemId && textId
      ? `/${lang}/system/${systemId}/text/${textId}/concept/${conceptId}`
      : `/${lang}/concept/${conceptId}`,
  source: (lang: SupportedLanguage, sourceId: string) => `/${lang}/source/${sourceId}`,
};
