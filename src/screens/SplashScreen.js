import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EventHubLogo from '../components/EventHubLogo';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Subtle decorative background gradients matching the Figma Splash screen */}
      <View style={styles.backgroundGradients}>
        {/* Soft top glow */}
        <LinearGradient
          colors={['rgba(255, 120, 150, 0.08)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0.6, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
          style={styles.topGlow}
        />

        {/* Soft bottom-right glow */}
        <LinearGradient
          colors={['rgba(86, 105, 255, 0.08)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.2, y: 0.5 }}
          style={styles.bottomGlow}
        />
      </View>

      {/* Center Logo */}
      <View style={styles.logoWrapper}>
        <EventHubLogo size={56} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradients: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 1.2,
    height: height * 0.45,
    borderRadius: 200,
  },
  bottomGlow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 1.1,
    height: height * 0.5,
    borderRadius: 250,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
