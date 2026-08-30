import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function KarmaCycleNyaya() {
  const { mode } = useTheme();

  // Adapted for dark mode visibility
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { x: 240.0, y: 64.0, cX: 310.0, title: 'Doṣa', sub: 'fault' },
    { x: 415.945, y: 191.83, cX: 485.945, title: 'Pravṛtti', sub: 'activity' },
    { x: 348.74, y: 398.67, cX: 418.74, title: 'Pretyabhāva', sub: 'rebirth' },
    { x: 131.26, y: 398.67, cX: 201.26, title: 'Phala', sub: 'fruit' },
    { x: 64.05, y: 191.83, cX: 134.05, title: 'Duḥkha', sub: 'pain' },
  ];

  const paths = [
    "M322.1 121.6 Q 384.8 172.1 458.2 188.0",
    "M478.3 249.7 Q 431.0 314.3 420.2 392.7",
    "M369.2 400.4 Q 310.0 402.2 250.8 400.4",
    "M199.8 392.7 Q 189.0 314.3 141.7 249.7",
    "M161.8 188.0 Q 235.2 172.1 297.9 121.6"
  ];

  return (
    <Svg viewBox="0 0 620 540" width="100%" height={320} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="310" y="32" textAnchor="middle" fontSize="21" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Doṣa → Pravṛtti → Pretyabhāva → Phala → Duḥkha
      </SvgText>

      {/* Cyclic Paths */}
      {paths.map((d, idx) => (
        <Path 
          key={`path-${idx}`} 
          d={d} 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth="1.3" 
          markerEnd="url(#arrow)" 
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={node.y} width="140" height="52" rx="8" fill="#EBD7D6" stroke="#7A2E2E" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={node.y + 17} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#5C2222" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={node.y + 39} textAnchor="middle" alignmentBaseline="middle" fontSize="12.5" fill="#6B5F52" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
