import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function FiveFallacies() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { x: 6, cX: 76, title: 'Savyabhicāra', sub: '(erratic)' },
    { x: 158, cX: 228, title: 'Viruddha', sub: '(contradictory)' },
    { x: 310, cX: 380, title: 'Prakaraṇasama', sub: '(question-begging)' },
    { x: 462, cX: 532, title: 'Sādhyasama', sub: '(unproved)' },
    { x: 614, cX: 684, title: 'Kālātīta', sub: '(mistimed)' },
  ];

  return (
    <Svg viewBox="0 0 760 300" width="100%" height={240} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Title */}
      <SvgText x="380" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Hetvābhāsa — five fallacies of reason
      </SvgText>

      {/* Root Node */}
      <Rect x="285" y="55" width="190" height="46" rx="8" fill="#EBD7D6" stroke="#7A2E2E" strokeWidth="1.2"/>
      <SvgText x="380" y="78" textAnchor="middle" alignmentBaseline="middle" fontSize="16" fontWeight="600" fill="#5C2222" fontFamily={fonts.display}>
        Hetvābhāsa
      </SvgText>

      {/* Lines between nodes */}
      {nodes.map((node, idx) => (
        <Line 
          key={`line-${idx}`} 
          x1="380" y1="101" 
          x2={node.cX} y2="180" 
          stroke={strokeColor} 
          strokeWidth="1.4" 
          strokeDasharray="4 3" 
          markerEnd="url(#arrow)"
        />
      ))}

      {/* The 5 Fallacies */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={180} width="140" height="58" rx="8" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={202} textAnchor="middle" alignmentBaseline="middle" fontSize="13.5" fontWeight="600" fill="#7A3E0D" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={222} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#7A3E0D" fontFamily={fonts.serif}>
            {node.sub}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
