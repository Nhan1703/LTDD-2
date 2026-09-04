import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Onboarding2Mockup from '../components/Onboarding2Mockup';
import { COLORS } from '../constants/colors';

export default function Onboarding2Screen({ onNext, onPrev, onSkip, onSelectStep }) {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        {/* Mockup Showcase Section */}
        <View style={styles.mockupSection}>
          <Onboarding2Mockup />
        </View>

        {/* Bottom Curved Sheet Card */}
        <View style={styles.bottomCard}>
          {/* Main Title */}
          <Text style={styles.title}>
            Web Have Modern Events{'\n'}Calendar Feature
          </Text>

          {/* Description Subtitle */}
          <Text style={styles.description}>
            In publishing and graphic design, Lorem is{'\n'}a placeholder text commonly
          </Text>

          {/* Bottom Actions Row: Skip, Dots, Next */}
          <View style={styles.bottomActionsRow}>
            {/* Skip Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.navButton}
              onPress={onSkip}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            {/* Pagination Indicators (3 Dots - Dot 2 Active) */}
            <View style={styles.paginationContainer}>
              <TouchableOpacity
                onPress={() => onSelectStep && onSelectStep(1)}
                activeOpacity={0.8}
              >
                <View style={[styles.dot, styles.inactiveDot]} />
              </TouchableOpacity>
              <View style={[styles.dot, styles.activeDot]} />
              <TouchableOpacity
                onPress={() => onSelectStep && onSelectStep(3)}
                activeOpacity={0.8}
              >
                <View style={[styles.dot, styles.inactiveDot]} />
              </TouchableOpacity>
            </View>

            {/* Next Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.navButton}
              onPress={onNext}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mockupSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    overflow: 'hidden',
  },
  bottomCard: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 36,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 14,
    paddingHorizontal: 10,
  },
  bottomActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 36,
    paddingHorizontal: 4,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.65)',
  },
  nextText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  },
});
