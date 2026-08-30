import { System } from '../../types/content';
import { brahmaSutrasText } from './brahma-sutras';
import { brahmaSutrasThreadEn } from './brahma-sutras-thread-en';
import { ThreadStep } from '../../types/content';


const flattenedThread: ThreadStep[] = [];
brahmaSutrasThreadEn.modules.forEach(mod => {
  // Add a module introduction step
  flattenedThread.push({
    id: mod.id,
    textId: 'brahma-sutras',
    content: {
      en: {
        title: mod.title,
        narrative: mod.description
      }
    }
  });
  
  // Add items
  mod.items.forEach(item => {
    flattenedThread.push({
      id: item.id,
      textId: 'brahma-sutras',
      conceptId: item.type === 'concept' ? item.refId : undefined,
      verseIds: item.type === 'sutra' && item.refId ? [item.refId] : undefined,
      content: {
        en: {
          title: item.type === 'note' ? 'Guide Note' : undefined,
          narrative: item.type === 'note' ? item.text : undefined
        }
      }
    });
  });
});

export const vedantaSystem: System = {
  id: 'vedanta',
  title: 'Vedānta',
  subtitle: 'The End of the Vedas (Advaita)',
  texts: [brahmaSutrasText],
  thread: flattenedThread,
};
