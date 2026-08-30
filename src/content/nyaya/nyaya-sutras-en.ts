export interface NyayaSutra {
  id: string;
  number: string;
  section: string;
  devanagari: string;
  iast: string;
  diagramId?: string;
  conceptIds?: string[];
  translation: string;
  commentary?: string;
  keyPoints?: string[];
}

import { nyayaSutrasBook1En } from './nyaya-sutras-book1-en';
import { nyayaSutrasBook2En } from './nyaya-sutras-book2-en';

export const nyayaSutrasEn: NyayaSutra[] = [
  ...nyayaSutrasBook1En,
  ...nyayaSutrasBook2En
];
