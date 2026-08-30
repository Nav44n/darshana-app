import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function ThreeTimesParadox() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  const subTextColor = mode === 'dark' ? '#D6C8B8' : '#6B5F52';

  const topNodes = [
    { x: 35, cX: 130, title: 'Before', l1: 'object not yet', l2: 'there to contact' },
    { x: 245, cX: 340, title: 'After', l1: 'object already known;', l2: 'pramāṇa redundant' },
    { x: 455, cX: 550, title: 'Simultaneous', l1: "cognition isn't", l2: 'instantaneous' },
  ];

  return (
    <Svg viewBox="0 0 680 340" width="100%" height={240} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Title */}
      <SvgText x="340" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Traikālya — can a pramāṇa exist in time?
      </SvgText>

      {/* The 3 Horns of the Paradox */}
      {topNodes.map((node, idx) => (
        <React.Fragment key={`topnode-${idx}`}>
          <Rect x={node.x} y={80} width="190" height="70" rx="8" fill="#EBD7D6" stroke="#7A2E2E" strokeWidth="1.2"/>
          <SvgText x={node.cX} y={106} textAnchor="middle" fontSize="15" fontWeight="600" fill="#5C2222" fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={node.cX} y={126} textAnchor="middle" fontSize="13" fill="#5C2222" fontFamily={fonts.serif}>
            {node.l1}
          </SvgText>
          <SvgText x={node.cX} y={142} textAnchor="middle" fontSize="13" fill="#5C2222" fontFamily={fonts.serif}>
            {node.l2}
          </SvgText>
        </React.Fragment>
      ))}

      {/* Middle Text */}
      <SvgText x="340" y="190" textAnchor="middle" fontSize="14" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        Gautama: the denial itself must exist in one of these same three times
      </SvgText>

      {/* Arrow Down */}
      <Line x1="340" y1="210" x2="340" y2="245" stroke={strokeColor} strokeWidth="1.4" markerEnd="url(#arrow)"/>

      {/* Bottom Resolution Node */}
      <Rect x="180" y="250" width="320" height="56" rx="8" fill="#DEE6D6" stroke="#4A6741" strokeWidth="1.2"/>
      <SvgText x="340" y="271" textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#354D2E" fontFamily={fonts.display}>
        Self-refuting denial
      </SvgText>
      <SvgText x="340" y="293" textAnchor="middle" alignmentBaseline="middle" fontSize="13" fill={subTextColor} fontFamily={fonts.serif}>
        the skeptic's argument defeats itself
      </SvgText>

    </Svg>
  );
}
