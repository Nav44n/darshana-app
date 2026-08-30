import { System } from '../../types/content';
import { vaisesikaSutrasText } from './vaisesika-sutras';
import { vaisesikaThreadEn } from './vaisesika-sutras-thread-en';

export const vaisesikaSystem: System = {
  id: 'vaisesika',
  title: 'Vaiśeṣika',
  subtitle: 'The school of atomism and ontological categorization. It explains the universe through fundamental categories (Padārthas) and proposes that all physical reality is composed of indestructible atoms (Paramāṇu).',
  texts: [vaisesikaSutrasText],
  thread: vaisesikaThreadEn,
};
