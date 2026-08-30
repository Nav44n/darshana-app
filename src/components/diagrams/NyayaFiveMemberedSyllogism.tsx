import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function NyayaFiveMemberedSyllogism() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  const exampleColor = mode === 'dark' ? '#D6C8B8' : '#6B5F52';

  const nodes = [
    { x: 16, cX: 86, title: 'Pratijña', sub: 'proposition', example: 'The hill is on fire' },
    { x: 168, cX: 238, title: 'Hetu', sub: 'reason', example: 'Because it has smoke' },
    { x: 320, cX: 390, title: 'Udāharaṇa', sub: 'example', example: 'Smoke ⇒ fire, as in a kitchen' },
    { x: 472, cX: 542, title: 'Upanaya', sub: 'application', example: 'This hill is like the kitchen' },
    { x: 624, cX: 694, title: 'Nigamana', sub: 'conclusion', example: 'Therefore, the hill is on fire' },
  ];

  return (
    <Svg viewBox="0 0 780 240" width="100%" height={240} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Title */}
      <SvgText x="390" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Avayava — the five-membered syllogism
      </SvgText>

      {/* Lines between nodes */}
      {[
        { x1: 156, x2: 168 },
        { x1: 308, x2: 320 },
        { x1: 460, x2: 472 },
        { x1: 612, x2: 624 },
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

      {/* The 5 Members */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          {/* Node Box */}
          <Rect x={node.x} y={90} width="140" height="56" rx="8" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={111} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#7A3E0D" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={133} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>

          {/* Example Text Below Box */}
          <SvgText x={node.cX} y={180} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill={exampleColor} fontFamily={fonts.serif}>
            {node.example}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
