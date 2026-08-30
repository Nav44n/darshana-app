import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function NyayaPramanasDiagram() {
  const { colors, mode } = useTheme();
  
  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { x: 23, cX: 98, title: 'Pratyakṣa', sub: 'perception' },
    { x: 191, cX: 266, title: 'Anumāna', sub: 'inference' },
    { x: 359, cX: 434, title: 'Upamāna', sub: 'comparison' },
    { x: 527, cX: 602, title: 'Śabda', sub: 'testimony' },
  ];

  return (
    <Svg viewBox="0 0 700 300" width="100%" height={220} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="350" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Pramāṇa — four means of knowledge
      </SvgText>

      {/* Root Node */}
      <Rect x="270" y="60" width="160" height="48" rx="8" fill="#DCE3EE" stroke="#2F4B6E" strokeWidth="1.2"/>
      <SvgText x="350" y="84" textAnchor="middle" alignmentBaseline="middle" fontSize="16" fontWeight="600" fill="#1E3350" fontFamily={fonts.display}>
        Pramāṇa
      </SvgText>

      {/* Lines between nodes */}
      {nodes.map((node, idx) => (
        <Line 
          key={`line-${idx}`} 
          x1="350" y1="108" 
          x2={node.cX} y2="180" 
          stroke={strokeColor} 
          strokeWidth="1.4" 
          strokeDasharray="4 3"
          markerEnd="url(#arrow)"
        />
      ))}

      {/* The 4 Means of Knowledge */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={180} width="150" height="56" rx="8" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={199} textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#7A3E0D" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={221} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
