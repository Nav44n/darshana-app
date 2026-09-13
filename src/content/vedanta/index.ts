import { System, SystemId } from '../../types/content';
import { brahmaSutrasText, brahmaSutrasThread } from './brahma-sutras';
import { adhyatmaRamayanaText, adhyatmaThread } from './adhyatma-ramayana/adhyatma-ramayana';
import { vishnuSahasranamaText, vishnuSahasranamaThread } from '../vishnu-sahasranama';
import { bhagavadGitaText, bhagavadGitaThread } from './bhagavad-gita/bhagavad-gita';

export const vedantaSystem: System = {
  id: 'vedanta' as SystemId,
  title: 'Vedanta',
  subtitle: 'The End of the Vedas (Advaita)',
  texts: [brahmaSutrasText, adhyatmaRamayanaText, vishnuSahasranamaText, bhagavadGitaText],
  thread: [...brahmaSutrasThread, ...adhyatmaThread, ...vishnuSahasranamaThread, ...bhagavadGitaThread],
};
