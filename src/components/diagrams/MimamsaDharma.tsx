import React from 'react';
import Svg from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { LabeledNode, DirectedEdge } from './SharedElements';

export default function MimamsaDharma() {
  const { colors } = useTheme();

  return (
    <Svg viewBox="0 0 320 280" width="100%" height="100%">
      <LabeledNode
        x={100} y={20}
        label="Veda (Śruti)"
        sublabel="Authorless Injunction"
        fill={colors.avyakta2}
        stroke={colors.sattvaDim}
        textColor={colors.sattva}
      />
      
      <DirectedEdge x1={160} y1={60} x2={160} y2={100} stroke={colors.tamas} />
      
      <LabeledNode
        x={100} y={100}
        label="Dharma"
        sublabel="Duty / Action"
        fill={colors.avyakta3}
        stroke={colors.rajas}
        textColor={colors.ink}
      />

      <DirectedEdge x1={120} y1={140} x2={70} y2={180} stroke={colors.tamas} />
      <DirectedEdge x1={200} y1={140} x2={250} y2={180} stroke={colors.tamas} />

      <LabeledNode
        x={10} y={180}
        label="Apūrva"
        sublabel="Unseen Potency"
        fill={colors.avyakta2}
        stroke={colors.purushaDim}
        textColor={colors.ink}
      />

      <LabeledNode
        x={190} y={180}
        label="Phala"
        sublabel="Fruit / Result"
        fill={colors.avyakta2}
        stroke={colors.amberDim}
        textColor={colors.ink}
      />

      <DirectedEdge x1={70} y1={220} x2={160} y2={250} stroke={colors.tamas} dashed />
      <DirectedEdge x1={250} y1={220} x2={160} y2={250} stroke={colors.tamas} dashed />

      <LabeledNode
        x={100} y={240}
        label="Svarga"
        sublabel="Heaven"
        fill={colors.avyakta2}
        stroke={colors.sattva}
        textColor={colors.sattva}
      />
    </Svg>
  );
}
