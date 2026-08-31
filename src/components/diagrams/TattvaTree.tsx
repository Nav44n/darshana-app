import React from 'react';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';



const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
];

export default function TattvaTree() {
  const { colors } = useTheme();
  
  const nodes = [
  { x: 160, y: 16, r: 14, label: 'Puruṣa', c: colors.sattva },
  { x: 160, y: 60, r: 15, label: 'Mūla-prakṛti', c: colors.tamas },
  { x: 160, y: 104, r: 12, label: 'Mahat / Buddhi', c: colors.rajas },
  { x: 160, y: 140, r: 11, label: 'Ahaṃkāra', c: colors.rajas },
  { x: 70, y: 172, r: 11, label: '5 Tanmātras', c: colors.rajas },
  { x: 250, y: 172, r: 11, label: '11 (manas + senses)', c: '#c9986e' },
  { x: 70, y: 205, r: 10, label: '5 Mahābhūtas', c: '#c9986e' },
];
  return (
    <Svg viewBox="0 0 320 230" width="100%" height={220}>
      {links.map(([a, b], i) => (
        <Line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y + nodes[a].r}
          x2={nodes[b].x}
          y2={nodes[b].y - nodes[b].r}
          stroke={colors.hair}
          strokeWidth={1}
        />
      ))}
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          <Circle cx={n.x} cy={n.y} r={n.r} fill={n.c} opacity={0.9} />
          <SvgText x={n.x} y={n.y + n.r + 9} fontSize={8} fill={colors.ink} textAnchor="middle">
            {n.label}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
