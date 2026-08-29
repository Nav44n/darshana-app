import React from 'react';
import Svg, { Rect, Text as SvgText, Line, Circle } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function AbhyasaVairagya() {
  return (
    <Svg viewBox="0 0 320 200" width="100%" height={200}>
      {/* Central Fulcrum */}
      <Line x1="160" y1="160" x2="160" y2="80" stroke={colors.inkDim} strokeWidth={2} />
      <Circle cx="160" cy="80" r="4" fill={colors.ink} />
      
      {/* Balance Beam */}
      <Line x1="80" y1="80" x2="240" y2="80" stroke={colors.ink} strokeWidth={2} />
      
      {/* Abhyasa Side */}
      <Line x1="80" y1="80" x2="80" y2="120" stroke={colors.inkDim} strokeWidth={1.5} />
      <Circle cx="80" cy="120" r="20" fill={colors.rajas} />
      <SvgText x="80" y="160" fontSize="12" fontWeight="600" fill={colors.ink} textAnchor="middle">ABHYĀSA</SvgText>
      <SvgText x="80" y="175" fontSize="10" fill={colors.inkDim} textAnchor="middle">Practice (Effort)</SvgText>

      {/* Vairagya Side */}
      <Line x1="240" y1="80" x2="240" y2="120" stroke={colors.inkDim} strokeWidth={1.5} />
      <Circle cx="240" cy="120" r="20" fill={colors.sattva} />
      <SvgText x="240" y="160" fontSize="12" fontWeight="600" fill={colors.ink} textAnchor="middle">VAIRĀGYA</SvgText>
      <SvgText x="240" y="175" fontSize="10" fill={colors.inkDim} textAnchor="middle">Dispassion (Letting go)</SvgText>

      <SvgText x="160" y="30" fontSize="11" fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        The two wings of Yoga
      </SvgText>
    </Svg>
  );
}
