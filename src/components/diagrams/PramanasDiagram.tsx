import React from 'react';
import Svg, { Circle, Line, Text as SvgText, Rect } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function PramanasDiagram() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 220" width="100%" height={220}>
      <Line x1="160" y1="40" x2="60" y2="100" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="40" x2="160" y2="100" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="40" x2="260" y2="100" stroke={colors.hair} strokeWidth={1.5} />
      
      <Line x1="160" y1="130" x2="120" y2="180" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="130" x2="160" y2="180" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="130" x2="200" y2="180" stroke={colors.hair} strokeWidth={1.5} />

      <Rect x="100" y="20" width="120" height="30" rx="15" fill={colors.avyakta3} />
      <SvgText x="160" y="39" fontSize="11" fontWeight="600" fill={colors.ink} textAnchor="middle">
        VALID KNOWLEDGE
      </SvgText>

      <Rect x="20" y="90" width="80" height="30" rx="6" fill={colors.sattva} />
      <SvgText x="60" y="109" fontSize="10" fontWeight="600" fill={colors.avyakta} textAnchor="middle">
        PERCEPTION
      </SvgText>
      <SvgText x="60" y="135" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        (Dṛṣṭa)
      </SvgText>

      <Rect x="120" y="90" width="80" height="30" rx="6" fill={colors.rajas} />
      <SvgText x="160" y="109" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">
        INFERENCE
      </SvgText>
      <SvgText x="160" y="135" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        (Anumāna)
      </SvgText>

      <Rect x="220" y="90" width="80" height="30" rx="6" fill={colors.tamas} />
      <SvgText x="260" y="109" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">
        TESTIMONY
      </SvgText>
      <SvgText x="260" y="135" fontSize="9" fill={colors.inkDim} textAnchor="middle">
        (Āptavacana)
      </SvgText>

      <Circle cx="120" cy="180" r="16" fill={colors.avyakta3} />
      <SvgText x="120" y="183" fontSize="9" fill={colors.ink} textAnchor="middle">
        Cause
      </SvgText>
      
      <Circle cx="160" cy="180" r="16" fill={colors.avyakta3} />
      <SvgText x="160" y="183" fontSize="9" fill={colors.ink} textAnchor="middle">
        Effect
      </SvgText>
      
      <Circle cx="200" cy="180" r="16" fill={colors.avyakta3} />
      <SvgText x="200" y="183" fontSize="9" fill={colors.ink} textAnchor="middle">
        Analogy
      </SvgText>
    </Svg>
  );
}
