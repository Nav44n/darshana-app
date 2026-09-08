import { deviMahatmyaVersesEnKavaca } from './devi-mahatmya-verses-en-kavaca';
import { deviMahatmyaVersesEnArgala } from './devi-mahatmya-verses-en-argala';
import { deviMahatmyaVersesEnKilaka } from './devi-mahatmya-verses-en-kilaka';
import { deviMahatmyaVersesEnCarita1 } from './devi-mahatmya-verses-en-carita1';
import { deviMahatmyaVersesEnCarita2 } from './devi-mahatmya-verses-en-carita2';
import { deviMahatmyaVersesEnCarita3 } from './devi-mahatmya-verses-en-carita3';
import { deviMahatmyaVersesEnPrayoga } from './devi-mahatmya-verses-en-prayoga';

export { deviMahatmyaVersesEnPrayoga };

export interface RawVerseEn {
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

// Canonical Devi Mahatmya order: Purvanga (Kavaca, Argala, Kilaka),
// Prathama (ch.1), Madhyama (ch.2-4), Uttama (ch.5-13), and Prayoga Vidhi ritual manual.
export const deviMahatmyaVersesEn: RawVerseEn[] = [
  ...deviMahatmyaVersesEnKavaca,
  ...deviMahatmyaVersesEnArgala,
  ...deviMahatmyaVersesEnKilaka,
  ...deviMahatmyaVersesEnCarita1,
  ...deviMahatmyaVersesEnCarita2,
  ...deviMahatmyaVersesEnCarita3,
  ...deviMahatmyaVersesEnPrayoga,
];
