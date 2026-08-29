import React from 'react';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { colors } from '../../theme/tokens';

const outer = [
  { x: 160, y: 20, label: 'asmitā', sub: 'ego' },
  { x: 250, y: 65, label: 'rāga', sub: 'attachment' },
  { x: 215, y: 155, label: 'dveṣa', sub: 'aversion' },
  { x: 105, y: 155, label: 'abhiniveśa', sub: 'fear of death' },
  { x: 70, y: 65, label: '', sub: '' },
];

export default function FiveKlesas() {
  return (
    <Svg viewBox="0 0 320 190" width="100%" height={180}>
      <Circle cx={160} cy={95} r={34} fill={colors.tamas} />
      <SvgText x={160} y={91} fontSize={10.5} fontWeight="600" fill={colors.ink} textAnchor="middle">
        avidyā
      </SvgText>
      <SvgText x={160} y={104} fontSize={8.5} fill={colors.ink} textAnchor="middle">
        ignorance
      </SvgText>
      {outer.slice(0, 4).map((o, i) => (
        <React.Fragment key={i}>
          <Line x1={160} y1={95} x2={o.x} y2={o.y} stroke={colors.hair} strokeWidth={1} />
          <Circle cx={o.x} cy={o.y} r={20} fill={colors.rajas} opacity={0.85} />
          <SvgText x={o.x} y={o.y - 2} fontSize={9} fill={colors.ink} textAnchor="middle">
            {o.label}
          </SvgText>
          <SvgText x={o.x} y={o.y + 9} fontSize={7.5} fill={colors.ink} textAnchor="middle">
            {o.sub}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
