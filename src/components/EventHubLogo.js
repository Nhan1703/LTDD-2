import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../constants/colors';

export default function EventHubLogo({ size = 56 }) {
  const iconSize = size;
  const fontSize = size * 0.7;

  return (
    <View style={styles.container}>
      {/* Stylized 'e' Logo Glyph */}
      <Svg width={iconSize} height={iconSize} viewBox="0 0 60 60" fill="none">
        {/* Outer Circular 'C' arc in Royal Blue */}
        <Path
          d="M44 20C41.5 13.5 35.5 9 28.5 9C18.3 9 10 17.3 10 27.5C10 37.7 18.3 46 28.5 46C36.2 46 42.8 41.3 45.3 34.5"
          stroke={COLORS.primary}
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Slanted Cyan accent bar inside */}
        <Path
          d="M20 31L40 22"
          stroke={COLORS.accent}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </Svg>

      {/* Brand Text */}
      <View style={styles.textContainer}>
        <Text style={[styles.textVent, { fontSize }]}>vent</Text>
        <Text style={[styles.textHub, { fontSize }]}>Hub</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
  textVent: {
    color: COLORS.primary,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  textHub: {
    color: COLORS.accent,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
});
