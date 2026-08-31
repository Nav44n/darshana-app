import React from 'react';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

const nodes = [
  { x: 80, y: 165, top: 'ādhyātmika', bottom: 'body / mind' },
  { x: 160, y: 165, top: 'ādhibhautika', bottom: 'beings, world' },
  { x: 240, y: 165, top: 'ādhidaivika', bottom: 'unseen forces' },
];

export default function DuhkhaTraya() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 200" width="100%" height={190}>
      <Circle cx={160} cy={70} r={30} fill="none" stroke={colors.rajas} strokeWidth={1.5} />
      <SvgText x={160} y={75} fontSize={13} fill={colors.ink} textAnchor="middle">
        duḥkha
      </SvgText>
      {nodes.map((n) => (
        <Line key={n.top} x1={160} y1={100} x2={n.x} y2={150} stroke={colors.tamas} strokeWidth={1} />
      ))}
      {nodes.map((n) => (
        <React.Fragment key={n.top}>
          <Circle cx={n.x} cy={n.y} r={26} fill={colors.avyakta2} stroke={colors.sattva} />
          <SvgText x={n.x} y={n.y - 2} fontSize={9.5} fill={colors.inkDim} textAnchor="middle">
            {n.top}
          </SvgText>
          <SvgText x={n.x} y={n.y + 10} fontSize={9.5} fill={colors.inkDim} textAnchor="middle">
            {n.bottom}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
