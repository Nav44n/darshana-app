import { System } from '../../types/content';
import { brahmaSutrasText } from './brahma-sutras';
import { brahmaSutrasThreadEn } from './brahma-sutras-thread-en';

export const vedantaSystem: System = {
  id: 'vedanta',
  title: 'Vedanta',
  subtitle: 'The End of the Vedas (Advaita)',
  texts: [brahmaSutrasText],
  thread: brahmaSutrasThreadEn,
};
