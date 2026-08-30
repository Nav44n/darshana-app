import React from 'react';
import Svg, { Defs, Marker, Path, Circle, Ellipse, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function WholeVsParts() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  const subTextColor = mode === 'dark' ? '#D6C8B8' : '#6B5F52';
  const potStroke = mode === 'dark' ? '#C9772B' : '#B5651D';
  const potTitle = mode === 'dark' ? '#D69458' : '#7A3E0D';
  const atomColor = mode === 'dark' ? '#C2A381' : '#8A7A68';

  const atoms = [
    { cx: 102.8, cy: 186.2 }, { cx: 126.6, cy: 194.5 }, { cx: 172.6, cy: 119.2 },
    { cx: 62.4, cy: 227.2 }, { cx: 106.7, cy: 142.8 }, { cx: 239.2, cy: 175.8 },
    { cx: 210.6, cy: 176.7 }, { cx: 175.0, cy: 131.1 }, { cx: 174.3, cy: 231.5 },
    { cx: 154.2, cy: 213.8 }, { cx: 180.9, cy: 119.0 }, { cx: 196.5, cy: 192.8 },
    { cx: 114.2, cy: 114.3 }, { cx: 215.8, cy: 176.2 }, { cx: 189.4, cy: 233.0 },
    { cx: 188.5, cy: 239.0 }, { cx: 131.1, cy: 222.1 }, { cx: 140.0, cy: 241.0 },
    { cx: 218.2, cy: 123.6 }, { cx: 84.5, cy: 140.4 }, { cx: 233.8, cy: 171.1 },
    { cx: 172.8, cy: 152.1 }, { cx: 151.3, cy: 164.0 }, { cx: 123.2, cy: 191.9 },
    { cx: 165.2, cy: 236.6 }, { cx: 182.8, cy: 240.1 }, { cx: 214.2, cy: 248.7 },
    { cx: 180.8, cy: 132.8 }, { cx: 214.9, cy: 245.0 }, { cx: 222.8, cy: 189.7 }
  ];

  return (
    <Svg viewBox="0 0 560 380" width="100%" height={260} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Main Title */}
      <SvgText x="280" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Avayavin — is the Whole real?
      </SvgText>

      {/* Left Side: Atoms */}
      <SvgText x="150" y="80" textAnchor="middle" fontSize="14" fontWeight="600" fill={subTextColor} fontFamily={fonts.display}>
        Aggregate of atoms
      </SvgText>
      
      {atoms.map((pt, idx) => (
        <Circle key={`atom-${idx}`} cx={pt.cx} cy={pt.cy} r="2.2" fill={atomColor} opacity="0.35"/>
      ))}
      
      <SvgText x="150" y="280" textAnchor="middle" fontSize="12" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        imperceptible individually —
      </SvgText>
      <SvgText x="150" y="298" textAnchor="middle" fontSize="12" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        stays imperceptible in aggregate
      </SvgText>

      {/* Center Arrow */}
      <Line x1="240" y1="190" x2="330" y2="190" stroke={strokeColor} strokeWidth="1.4" markerEnd="url(#arrow)"/>

      {/* Right Side: The Pot / Whole */}
      <SvgText x="410" y="80" textAnchor="middle" fontSize="14" fontWeight="600" fill={potTitle} fontFamily={fonts.display}>
        The Whole (avayavin)
      </SvgText>

      <Path d="M355 120 Q350 190 375 230 Q410 245 445 230 Q470 190 465 120 Z" fill="#F4DCC0" stroke={potStroke} strokeWidth="1.4"/>
      <Ellipse cx="410" cy="120" rx="55" ry="10" fill="none" stroke={potStroke} strokeWidth="1.2"/>

      <SvgText x="410" y="280" textAnchor="middle" fontSize="12" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        perceptible, unified —
      </SvgText>
      <SvgText x="410" y="298" textAnchor="middle" fontSize="12" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        a new entity, not a pile
      </SvgText>

      {/* Footer Text */}
      <SvgText x="280" y="350" textAnchor="middle" fontSize="13" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        Pulling one edge moves the whole — proof of a genuine unity
      </SvgText>
    </Svg>
  );
}
