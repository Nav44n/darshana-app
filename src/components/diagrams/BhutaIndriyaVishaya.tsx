import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function BhutaIndriyaVishaya() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  
  const headerFill = mode === 'dark' ? '#3B3530' : '#E7E3DC';
  const headerStroke = mode === 'dark' ? '#8A7A68' : '#8A7A68';
  const headerText = mode === 'dark' ? '#D6C8B8' : '#4A4038';

  const rows = [
    { y: 106, c1: 'Earth', c2: 'Nose', c3: 'Smell' },
    { y: 152, c1: 'Water', c2: 'Tongue', c3: 'Taste' },
    { y: 198, c1: 'Fire', c2: 'Eye', c3: 'Color' },
    { y: 244, c1: 'Air', c2: 'Skin', c3: 'Touch' },
    { y: 290, c1: 'Ether', c2: 'Ear', c3: 'Sound' },
  ];

  return (
    <Svg viewBox="0 0 620 340" width="100%" height={260} preserveAspectRatio="xMidYMid meet">
      <SvgText x="310" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Bhūta → Indriya → Viṣaya
      </SvgText>

      {/* Header Row */}
      {[
        { x: 40, cX: 127, label: 'Element (Bhūta)' },
        { x: 220, cX: 307, label: 'Sense (Indriya)' },
        { x: 400, cX: 487, label: 'Quality (Viṣaya)' },
      ].map((h, i) => (
        <React.Fragment key={`header-${i}`}>
          <Rect x={h.x} y={60} width="174" height="40" rx="4" fill={headerFill} stroke={headerStroke} strokeWidth="1.2"/>
          <SvgText x={h.cX} y={80} textAnchor="middle" alignmentBaseline="middle" fontSize="13.5" fontWeight="600" fill={headerText} fontFamily={fonts.display}>
            {h.label}
          </SvgText>
        </React.Fragment>
      ))}

      {/* Data Rows */}
      {rows.map((row, i) => (
        <React.Fragment key={`row-${i}`}>
          {/* Col 1: Element */}
          <Rect x={40} y={row.y} width="174" height="40" rx="4" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={127} y={row.y + 20} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#7A3E0D" fontFamily={fonts.display}>
            {row.c1}
          </SvgText>

          {/* Col 2: Sense */}
          <Rect x={220} y={row.y} width="174" height="40" rx="4" fill="#DCE3EE" stroke="#2F4B6E" strokeWidth="1.2"/>
          <SvgText x={307} y={row.y + 20} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#1E3350" fontFamily={fonts.display}>
            {row.c2}
          </SvgText>

          {/* Col 3: Quality */}
          <Rect x={400} y={row.y} width="174" height="40" rx="4" fill="#DEE6D6" stroke="#4A6741" strokeWidth="1.2"/>
          <SvgText x={487} y={row.y + 20} textAnchor="middle" alignmentBaseline="middle" fontSize="14" fontWeight="600" fill="#354D2E" fontFamily={fonts.display}>
            {row.c3}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
