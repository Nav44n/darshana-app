import React from 'react';
import Svg, { Line, Text as SvgText, Rect, Polygon } from 'react-native-svg';
import { colors } from '../../theme/tokens';
import { diagramVocab } from './vocabulary';
import { useReadingPrefs } from '../../state/ReadingPrefs';

export default function Antahkarana() {
  const { appLanguage } = useReadingPrefs();
  const label = (key: string) => diagramVocab[key]?.[appLanguage] || diagramVocab[key]?.en || '';

  return (
    <Svg viewBox="0 0 320 280" width="100%" height={260}>
      <Line x1="160" y1="230" x2="160" y2="180" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="170" x2="160" y2="120" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="110" x2="160" y2="60" stroke={colors.hair} strokeWidth={1.5} />
      
      <Line x1="160" y1="50" x2="160" y2="20" stroke={colors.rajas} strokeWidth={1.5} strokeDasharray="4,4" />

      <Rect x="100" y="230" width="120" height="30" rx="6" fill={colors.avyakta3} />
      <SvgText x="160" y="249" fontSize="10" fontWeight="600" fill={colors.ink} textAnchor="middle">
        {label('outerSenses')}
      </SvgText>

      <Rect x="120" y="170" width="80" height="30" rx="6" fill={colors.tamas} />
      <SvgText x="160" y="189" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">
        {label('manas')}
      </SvgText>
      <SvgText x="160" y="160" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        {label('manasSub')}
      </SvgText>

      <Rect x="120" y="110" width="80" height="30" rx="6" fill={colors.rajas} />
      <SvgText x="160" y="129" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">
        {label('ahamkara')}
      </SvgText>
      <SvgText x="160" y="100" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        {label('ahamkaraSub')}
      </SvgText>

      <Rect x="120" y="50" width="80" height="30" rx="6" fill={colors.sattva} />
      <SvgText x="160" y="69" fontSize="10" fontWeight="600" fill={colors.avyakta} textAnchor="middle">
        {label('buddhi')}
      </SvgText>
      <SvgText x="160" y="40" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        {label('buddhiSub')}
      </SvgText>

      <Polygon points="160,5 170,25 150,25" fill={colors.sattvaDim} />
      <SvgText x="180" y="18" fontSize="10" fontWeight="600" fontStyle="italic" fill={colors.ink} textAnchor="start">
        {label('purusha')}
      </SvgText>
    </Svg>
  );
}
