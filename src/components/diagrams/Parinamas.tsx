import React from 'react';
import Svg, { Rect, Text as SvgText, Line } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function Parinamas() {
  return (
    <Svg viewBox="0 0 320 200" width="100%" height={200}>
      {/* Time axis */}
      <Line x1="20" y1="100" x2="300" y2="100" stroke={colors.hair} strokeWidth={2} />
      
      {/* 1. Nirodha */}
      <Rect x="20" y="75" width="80" height="50" rx="4" fill={colors.tamas} />
      <SvgText x="60" y="95" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">NIRODHA</SvgText>
      <SvgText x="60" y="113" fontSize="8" fill="#fff" opacity="0.8" textAnchor="middle">Restriction</SvgText>

      {/* 2. Samadhi */}
      <Rect x="120" y="75" width="80" height="50" rx="4" fill={colors.rajas} />
      <SvgText x="160" y="95" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">SAMĀDHI</SvgText>
      <SvgText x="160" y="113" fontSize="8" fill="#fff" opacity="0.8" textAnchor="middle">Focus Rise</SvgText>

      {/* 3. Ekagrata */}
      <Rect x="220" y="75" width="80" height="50" rx="4" fill={colors.sattva} />
      <SvgText x="260" y="95" fontSize="10" fontWeight="600" fill={colors.avyakta} textAnchor="middle">EKĀGRATĀ</SvgText>
      <SvgText x="260" y="113" fontSize="8" fill={colors.avyakta} opacity="0.8" textAnchor="middle">One-pointed</SvgText>

      <SvgText x="160" y="40" fontSize="11" fontWeight="600" fill={colors.ink} textAnchor="middle">
        PARIṆĀMA (Transformations of Time)
      </SvgText>
    </Svg>
  );
}
