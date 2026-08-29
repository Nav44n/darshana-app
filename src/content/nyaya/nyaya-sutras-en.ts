export interface NyayaSutra {
  id: string;
  number: number;
  section: string;
  devanagari: string;
  iast: string;
  diagramId?: string;
  conceptIds?: string[];
  translation: string;
  commentary?: string;
  keyPoints?: string[];
}

export const nyayaSutrasEn: NyayaSutra[] = [
  // User will provide content here
];
