import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function NyayaBondageChain() {
  const { colors, mode } = useTheme();
  
  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  const textColor = mode === 'dark' ? '#D6C8B8' : '#6B5F52';
  const reverseColor = mode === 'dark' ? '#7CA970' : '#354D2E';

  const nodes = [
    { x: 26, y: 90, cX: 90, title: 'Mithyā-jñāna', sub: 'misapprehension' },
    { x: 176, y: 90, cX: 240, title: 'Doṣa', sub: 'fault' },
    { x: 326, y: 90, cX: 390, title: 'Pravṛtti', sub: 'activity' },
    { x: 476, y: 90, cX: 540, title: 'Janma', sub: 'rebirth' },
    { x: 626, y: 90, cX: 690, title: 'Duḥkha', sub: 'pain' },
  ];

  return (
    <Svg viewBox="0 0 780 300" width="100%" height={240} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="390" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        The chain of bondage — and its reversal
      </SvgText>

      {/* Lines between nodes */}
      {[
        { x1: 154, x2: 176 },
        { x1: 304, x2: 326 },
        { x1: 454, x2: 476 },
        { x1: 604, x2: 626 },
      ].map((line, idx) => (
        <Line 
          key={`line-${idx}`} 
          x1={line.x1} y1="118" 
          x2={line.x2} y2="118" 
          stroke={strokeColor} 
          strokeWidth="1.4" 
          markerEnd="url(#arrow)"
        />
      ))}

      {/* The 5 Nodes */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={node.y} width="128" height="56" rx="8" fill="#EBD7D6" stroke="#7A2E2E" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={node.y + 19} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#5C2222" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={node.y + 41} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>
        </React.Fragment>
      ))}

      {/* Footer text and reverse arrow */}
      <SvgText x="390" y="185" textAnchor="middle" fontSize="13.5" fontWeight="400" fill={textColor} fontFamily={fonts.serif}>
        Apavarga (release) breaks this chain in reverse, starting from right knowledge
      </SvgText>

      <Line x1="744" y1="240" x2="36" y2="240" stroke={strokeColor} strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arrow)"/>
      
      <SvgText x="390" y="230" textAnchor="middle" fontSize="12.5" fontWeight="400" fill={reverseColor} fontFamily={fonts.serif}>
        reverse order of elimination
      </SvgText>
    </Svg>
  );
}
