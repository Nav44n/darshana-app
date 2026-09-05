import { System, SystemId } from '../../types/content';
import { vaisesikaSutrasText, vaisesikaSutrasThread } from './vaisesika-sutras';

export const vaisesikaSystem: System = {
  id: 'vaisesika' as SystemId,
  title: 'Vaiśeṣika',
  subtitle: 'The categorization of reality and atomism',
  texts: [vaisesikaSutrasText],
  thread: vaisesikaSutrasThread,
};
