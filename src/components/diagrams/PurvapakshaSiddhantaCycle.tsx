import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function PurvapakshaSiddhantaCycle() {
  const { mode } = useTheme();

  // Adapted for dark mode visibility
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { x: 195, cX: 280, y: 60, title: 'Pūrvapakṣa', sub: "skeptic's objection" },
    { x: 324.9, cX: 409.9, y: 285, title: 'Siddhānta', sub: "Gautama's reply" },
    { x: 65.1, cX: 150.1, y: 285, title: 'Nirṇaya', sub: "ascertainment" },
  ];

  const paths = [
    "M286.2 125.9 Q 332.0 210.0 399.4 279.2",
    "M336.7 293.6 Q 280.0 300.0 223.3 293.6",
    "M160.6 279.2 Q 228.0 210.0 273.8 125.9"
  ];

  return (
    <Svg viewBox="0 0 560 460" width="100%" height={260} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="280" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Parīkṣā — the method of Book Two
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
          <Rect x={node.x} y={node.y} width="170" height="60" rx="8" fill="#DCE3EE" stroke="#2F4B6E" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={node.y + 21} textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#1E3350" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={node.y + 43} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
