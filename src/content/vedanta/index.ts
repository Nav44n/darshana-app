import { System, SystemId } from '../../types/content';
import { brahmaSutrasText, brahmaSutrasThread } from './brahma-sutras';

export const vedantaSystem: System = {
  id: 'vedanta' as SystemId,
  title: 'Vedanta',
  subtitle: 'The End of the Vedas (Advaita)',
  texts: [brahmaSutrasText],
  thread: brahmaSutrasThread,
};
