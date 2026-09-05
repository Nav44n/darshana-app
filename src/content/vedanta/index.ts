import { System, SystemId } from '../../types/content';
import { brahmaSutrasText } from './brahma-sutras';
import { brahmaSutrasThreadEn } from './brahma-sutras-thread-en';
import { buildSystemThread } from '../factory';

export const vedantaSystem: System = {
  id: 'vedanta' as SystemId,
  title: 'Vedānta',
  subtitle: 'The culmination of the Vedas (Advaita)',
  texts: [brahmaSutrasText],
  thread: buildSystemThread('brahma-sutras', {
    en: brahmaSutrasThreadEn
  })
};
