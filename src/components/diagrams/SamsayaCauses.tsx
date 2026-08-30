import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function SamsayaCauses() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { x: 9, cX: 89, l1: 'Common property', l2: 'shared by many' },
    { x: 183, cX: 263, l1: 'Property unique', l2: 'to nothing familiar' },
    { x: 357, cX: 437, l1: 'Conflicting', l2: 'testimony' },
    { x: 531, cX: 611, l1: 'Irregular perception', l2: '& non-perception' },
  ];

  return (
    <Svg viewBox="0 0 700 300" width="100%" height={240} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Title */}
      <SvgText x="350" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Saṃśaya — four causes of doubt
      </SvgText>

      {/* Root Node */}
      <Rect x="260" y="60" width="180" height="48" rx="8" fill="#DCE3EE" stroke="#2F4B6E" strokeWidth="1.2"/>
      <SvgText x="350" y="77" textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#1E3350" fontFamily={fonts.display}>
        Saṃśaya
      </SvgText>
      <SvgText x="350" y="97" textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
        doubt
      </SvgText>

      {/* Lines to Children */}
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

      {/* The 4 Causes */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={180} width="160" height="62" rx="8" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={204} textAnchor="middle" alignmentBaseline="middle" fontSize="13.5" fill="#7A3E0D" fontFamily={fonts.serif}>
            {node.l1}
          </SvgText>
          <SvgText x={node.cX} y={224} textAnchor="middle" alignmentBaseline="middle" fontSize="13.5" fill="#7A3E0D" fontFamily={fonts.serif}>
            {node.l2}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
