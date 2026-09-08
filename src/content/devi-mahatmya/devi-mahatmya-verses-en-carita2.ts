// Madhyama Carita: Adhyayas 2-4 (Mahishasura Vadha / Vishnu-granthi-bheda)
// Backward-compat shim — canonical sources are now ./chapters/devi-mahatmya-ch02/03/04.ts.
// Merged by ./devi-mahatmya-verses-en.ts.
import type { RawVerseEn } from './devi-mahatmya-verses-en';
import { deviMahatmyaCh02En } from './chapters/devi-mahatmya-ch02';
import { deviMahatmyaCh03En } from './chapters/devi-mahatmya-ch03';
import { deviMahatmyaCh04En } from './chapters/devi-mahatmya-ch04';

export const deviMahatmyaVersesEnCarita2: RawVerseEn[] = [
  ...deviMahatmyaCh02En,
  ...deviMahatmyaCh03En,
  ...deviMahatmyaCh04En,
];
