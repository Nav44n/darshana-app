import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function ThreeKindsOfDebate() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  const nodes = [
    { y: 60, fill: '#DEE6D6', stroke: '#4A6741', text: '#354D2E', title: 'Vāda', l1: 'seeks truth; bound by honest', l2: 'five-step proof' },
    { y: 170, fill: '#F4DCC0', stroke: '#B5651D', text: '#7A3E0D', title: 'Jalpa', l1: 'seeks victory; permits quibbles', l2: '& futilities' },
    { y: 280, fill: '#EBD7D6', stroke: '#7A2E2E', text: '#5C2222', title: 'Vitaṇḍā', l1: 'pure attack; defends', l2: 'no thesis of its own' },
  ];

  return (
    <Svg viewBox="0 0 400 420" width="100%" height={260} preserveAspectRatio="xMidYMid meet">
      {/* Title */}
      <SvgText x="200" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Vāda, Jalpa, Vitaṇḍā
      </SvgText>

      {/* The 3 Kinds of Debate */}
      {nodes.map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={40} y={node.y} width="320" height="90" rx="8" fill={node.fill} stroke={node.stroke} strokeWidth="1.2"/>
          <SvgText x={200} y={node.y + 30} textAnchor="middle" alignmentBaseline="middle" fontSize="17" fontWeight="600" fill={node.text} fontFamily={fonts.display}>
            {node.title}
          </SvgText>
          <SvgText x={200} y={node.y + 52} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fill={node.text} fontFamily={fonts.serif}>
            {node.l1}
          </SvgText>
          <SvgText x={200} y={node.y + 68} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fill={node.text} fontFamily={fonts.serif}>
            {node.l2}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
