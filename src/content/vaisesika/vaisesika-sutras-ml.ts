import { VaisesikaSutra } from './vaisesika-sutras-en';
import { vaisesikaSutrasMlBooks1To3 } from './vaisesika-sutras-ml-books1-3';
import { vaisesikaSutrasMlBooks4To8 } from './vaisesika-sutras-ml-books4-8';
import { vaisesikaSutrasMlBook8 } from './vaisesika-sutras-ml-book8';
import { vaisesikaSutrasMlBooks9And10 } from './vaisesika-sutras-ml-books9-10';

export const vaisesikaSutrasMl: VaisesikaSutra[] = [
  ...vaisesikaSutrasMlBooks1To3,
  ...vaisesikaSutrasMlBooks4To8,
  ...vaisesikaSutrasMlBook8,
  ...vaisesikaSutrasMlBooks9And10,
];
