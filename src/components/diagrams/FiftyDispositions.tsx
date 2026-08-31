import React from 'react';
import Svg, { Rect, Text as SvgText, Line, Circle } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function FiftyDispositions() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 180" width="100%" height={180}>
      <Rect x="80" y="10" width="160" height="30" rx="15" fill={colors.sattva} />
      <SvgText x="160" y="29" fontSize="11" fontWeight="600" fill={colors.avyakta} textAnchor="middle">
        50 DISPOSITIONS (Bhāvas)
      </SvgText>

      {/* Lines to 4 categories */}
      <Line x1="160" y1="40" x2="40" y2="80" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="40" x2="120" y2="80" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="40" x2="200" y2="80" stroke={colors.hair} strokeWidth={1.5} />
      <Line x1="160" y1="40" x2="280" y2="80" stroke={colors.hair} strokeWidth={1.5} />

      {/* 4 Categories */}
      <Circle cx="40" cy="100" r="24" fill={colors.tamas} />
      <SvgText x="40" y="98" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">5</SvgText>
      <SvgText x="40" y="140" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Ignorance</SvgText>
      <SvgText x="40" y="154" fontSize="8" fill={colors.inkDim} textAnchor="middle">(Viparyaya)</SvgText>

      <Circle cx="120" cy="100" r="24" fill={colors.rajasDim} />
      <SvgText x="120" y="98" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">28</SvgText>
      <SvgText x="120" y="140" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Incapacity</SvgText>
      <SvgText x="120" y="154" fontSize="8" fill={colors.inkDim} textAnchor="middle">(Aśakti)</SvgText>

      <Circle cx="200" cy="100" r="24" fill={colors.sattvaDim} />
      <SvgText x="200" y="98" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">9</SvgText>
      <SvgText x="200" y="140" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Complacency</SvgText>
      <SvgText x="200" y="154" fontSize="8" fill={colors.inkDim} textAnchor="middle">(Tuṣṭi)</SvgText>

      <Circle cx="280" cy="100" r="24" fill={colors.sattva} />
      <SvgText x="280" y="98" fontSize="14" fontWeight="bold" fill={colors.avyakta} textAnchor="middle">8</SvgText>
      <SvgText x="280" y="140" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Perfection</SvgText>
      <SvgText x="280" y="154" fontSize="8" fill={colors.inkDim} textAnchor="middle">(Siddhi)</SvgText>
    </Svg>
  );
}
