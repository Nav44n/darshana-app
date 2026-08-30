import React from 'react';
import DuhkhaTraya from './DuhkhaTraya';
import GunaLamp from './GunaLamp';
import TattvaTree from './TattvaTree';
import SatkaryavadaChain from './SatkaryavadaChain';
import PurushaPrakritiUnion from './PurushaPrakritiUnion';
import PramanasDiagram from './PramanasDiagram';
import Antahkarana from './Antahkarana';
import LingaSharira from './LingaSharira';
import FiftyDispositions from './FiftyDispositions';
import ThreeWorlds from './ThreeWorlds';
import CittaVritti from './CittaVritti';
import FiveKlesas from './FiveKlesas';
import Ashtanga from './Ashtanga';
import Samyama from './Samyama';
import AbhyasaVairagya from './AbhyasaVairagya';
import Antarayas from './Antarayas';
import Samprajnata from './Samprajnata';
import KarmaWheel from './KarmaWheel';
import Parinamas from './Parinamas';
import WholeVsParts from './WholeVsParts';
import NyayaLampAnalogy from './NyayaLampAnalogy';
import ThreeTimesParadox from './ThreeTimesParadox';
import PurvapakshaSiddhantaCycle from './PurvapakshaSiddhantaCycle';
import FiveFallacies from './FiveFallacies';
import ThreeKindsOfDebate from './ThreeKindsOfDebate';
import NyayaFiveMemberedSyllogism from './NyayaFiveMemberedSyllogism';
import SamsayaCauses from './SamsayaCauses';
import KarmaCycleNyaya from './KarmaCycleNyaya';
import BhutaIndriyaVishaya from './BhutaIndriyaVishaya';
import NyayaPramanasDiagram from './NyayaPramanasDiagram';
import NyayaBondageChain from './NyayaBondageChain';
import ShodashaPadarthaTree from './ShodashaPadarthaTree';

export const diagramRegistry: Record<string, React.FC> = {
  'duhkha-traya': DuhkhaTraya,
  'guna-lamp': GunaLamp,
  'tattva-tree': TattvaTree,
  'satkaryavada-chain': SatkaryavadaChain,
  'purusha-prakriti-union': PurushaPrakritiUnion,
  'pramanas-diagram': PramanasDiagram,
  antahkarana: Antahkarana,
  'linga-sharira': LingaSharira,
  'fifty-dispositions': FiftyDispositions,
  'three-worlds': ThreeWorlds,
  'citta-vritti': CittaVritti,
  'five-klesas': FiveKlesas,
  ashtanga: Ashtanga,
  samyama: Samyama,
  'abhyasa-vairagya': AbhyasaVairagya,
  antarayas: Antarayas,
  samprajnata: Samprajnata,
  'karma-wheel': KarmaWheel,
  parinamas: Parinamas,
  'shodasha-padartha-tree': ShodashaPadarthaTree,
  'nyaya-bondage-chain': NyayaBondageChain,
  'nyaya-pramanas-diagram': NyayaPramanasDiagram,
  'bhuta-indriya-vishaya': BhutaIndriyaVishaya,
  'karma-cycle-nyaya': KarmaCycleNyaya,
  'samsaya-causes': SamsayaCauses,
  'nyaya-five-membered-syllogism': NyayaFiveMemberedSyllogism,
  'three-kinds-of-debate': ThreeKindsOfDebate,
  'five-fallacies': FiveFallacies,
  'purvapaksha-siddhanta-cycle': PurvapakshaSiddhantaCycle,
  'three-times-paradox': ThreeTimesParadox,
  'lamp-self-illumination': NyayaLampAnalogy,
  'whole-vs-parts': WholeVsParts,
};

export function Diagram({ id }: { id?: string }) {
  if (!id || !diagramRegistry[id]) return null;
  const C = diagramRegistry[id];
  return <C />;
}

// One representative diagram per system, used as a hero preview on the
// Home and System screens. Keyed by System.id, not by diagramId.
export const systemHeroRegistry: Record<string, React.FC> = {
  samkhya: TattvaTree,
  yoga: CittaVritti,
  nyaya: ShodashaPadarthaTree,
};

export function SystemHero({ systemId }: { systemId: string }) {
  const C = systemHeroRegistry[systemId];
  return C ? <C /> : null;
}
