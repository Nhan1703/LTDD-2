import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Path, Circle, Rect, G, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

// Vector illustration for the Art / Profile card at the bottom of the map
const ArtProfileIllustration = () => (
  <Svg width="100%" height={80} viewBox="0 0 160 80" preserveAspectRatio="xMidYMid slice">
    <Defs>
      <SvgLinearGradient id="artBgGrad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#E9F7F7" />
        <Stop offset="0.5" stopColor="#E0F2FE" />
        <Stop offset="1" stopColor="#F5F3FF" />
      </SvgLinearGradient>
      <SvgLinearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#818CF8" />
        <Stop offset="0.5" stopColor="#A78BFA" />
        <Stop offset="1" stopColor="#C4B5FD" />
      </SvgLinearGradient>
    </Defs>

    {/* Soft background */}
    <Rect width="160" height="80" fill="url(#artBgGrad)" />

    {/* Botanical decorative leaves in background */}
    <Path
      d="M 20 80 Q 25 40 45 35 Q 35 60 40 80 Z"
      fill="#94A3B8"
      opacity={0.4}
    />
    <Path
      d="M 30 80 Q 40 30 65 25 Q 55 55 60 80 Z"
      fill="#64748B"
      opacity={0.35}
    />
    <Path
      d="M 12 75 Q 30 50 38 70 Z"
      fill="#CBD5E1"
      opacity={0.5}
    />
    <Path
      d="M 125 80 Q 140 45 155 50 Q 145 68 135 80 Z"
      fill="#94A3B8"
      opacity={0.35}
    />

    {/* Face Profile */}
    <G transform="translate(62, 10)">
      {/* Hair mass */}
      <Path
        d="M 5 60 C -10 35, 10 0, 30 5 C 45 10, 50 25, 45 40 C 40 55, 30 65, 15 70 Z"
        fill="url(#hairGrad)"
        opacity={0.85}
      />
      
      {/* Face contour */}
      <Path
        d="M 22 25 Q 35 22 36 30 Q 37 36 32 38 Q 36 43 32 48 Q 26 53 18 55 L 18 68 L 10 68"
        fill="#FFE4D6"
      />
      {/* Closed gentle eyelid & eyebrow */}
      <Path d="M 28 28 Q 32 26 34 29" stroke="#6D28D9" strokeWidth="1" fill="none" />
      {/* Soft Rosy cheek */}
      <Circle cx="26" cy="36" r="4" fill="#FCA5A5" opacity={0.55} />
      {/* Lips */}
      <Path d="M 33 42 Q 36 43 33 45" stroke="#F43F5E" strokeWidth="1.2" fill="none" />
      {/* Forehead botanical sprig */}
      <Path d="M 15 20 Q 25 15 30 20" stroke="#475569" strokeWidth="0.8" fill="none" />
      <Circle cx="20" cy="18" r="1.5" fill="#64748B" />
      <Circle cx="26" cy="17" r="1.5" fill="#64748B" />
    </G>
  </Svg>
);

// Map Background graphic using SVG
const MapBackground = () => (
  <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
    {/* Base map land color */}
    <Rect width="100%" height="100%" fill="#F6F7FB" />

    {/* Subtle city blocks / buildings */}
    <Rect x="20" y="70" width="60" height="40" rx="4" fill="#EEF0F8" />
    <Rect x="90" y="60" width="70" height="45" rx="4" fill="#EEF0F8" />
    <Rect x="170" y="65" width="80" height="50" rx="4" fill="#EEF0F8" />
    
    <Rect x="15" y="140" width="55" height="60" rx="4" fill="#EEF0F8" />
    <Rect x="80" y="130" width="65" height="55" rx="4" fill="#EEF0F8" />
    <Rect x="160" y="145" width="95" height="65" rx="4" fill="#EEF0F8" />

    <Rect x="25" y="230" width="70" height="50" rx="4" fill="#EEF0F8" />
    <Rect x="110" y="225" width="60" height="55" rx="4" fill="#EEF0F8" />
    <Rect x="185" y="235" width="75" height="60" rx="4" fill="#EEF0F8" />

    {/* Minor streets / roads */}
    <Path
      d="M -10 120 L 300 120"
      stroke="#FFFFFF"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <Path
      d="M -10 210 L 300 195"
      stroke="#FFFFFF"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <Path
      d="M 75 40 L 75 360"
      stroke="#FFFFFF"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <Path
      d="M 155 40 L 155 360"
      stroke="#FFFFFF"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <Path
      d="M 240 40 L 240 360"
      stroke="#FFFFFF"
      strokeWidth="9"
      strokeLinecap="round"
    />

    {/* Main Curving Avenues */}
    <Path
      d="M -10 90 Q 60 100 100 70 T 220 50 L 300 60"
      stroke="#FFFFFF"
      strokeWidth="14"
      fill="none"
    />
    <Path
      d="M 110 320 Q 150 240 210 200 T 300 170"
      stroke="#FFFFFF"
      strokeWidth="12"
      fill="none"
    />
    <Path
      d="M 20 290 Q 90 260 140 280 T 280 290"
      stroke="#FFFFFF"
      strokeWidth="10"
      fill="none"
    />

    {/* Thin inner road lines */}
    <Path
      d="M -10 120 L 300 120"
      stroke="#E2E6F0"
      strokeWidth="1.5"
    />
    <Path
      d="M -10 210 L 300 195"
      stroke="#E2E6F0"
      strokeWidth="1.5"
    />
    <Path
      d="M 75 40 L 75 360"
      stroke="#E2E6F0"
      strokeWidth="1.5"
    />
    <Path
      d="M 155 40 L 155 360"
      stroke="#E2E6F0"
      strokeWidth="1.5"
    />
  </Svg>
);

// Map Pin Callout Bubble
const MapPin = ({ icon, iconBg, title, price = 'Ticket: $30' }) => (
  <View style={styles.pinWrapper}>
    <View style={styles.pinBubble}>
      <View style={[styles.pinIconBox, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={styles.pinTextBox}>
        <Text style={styles.pinPrice}>{price}</Text>
        <Text style={styles.pinTitle}>{title}</Text>
      </View>
    </View>
    {/* Small downward triangle pointer */}
    <View style={styles.pinPointer} />
  </View>
);

export default function Onboarding3Mockup() {
  return (
    <View style={styles.phoneFrame}>
      {/* Top Notch / Speaker bar */}
      <View style={styles.speakerBar} />

      {/* Screen Content Container */}
      <View style={styles.screenInner}>
        {/* Map Background with roads and labels */}
        <MapBackground />

        {/* Street Name Labels over map */}
        <Text style={[styles.streetLabel, { top: 105, left: 102 }]}>164th Ave NE</Text>
        <Text style={[styles.streetLabel, { top: 228, left: 95 }]}>164th Ave NE</Text>
        <Text style={[styles.streetLabel, { top: 195, right: 28, textAlign: 'center' }]}>
          NORTHEAST{'\n'}BELLEVUE
        </Text>
        <Text style={[styles.streetLabel, { top: 215, left: 90, transform: [{ rotate: '-25deg' }] }]}>
          Northup Way
        </Text>
        <Text style={[styles.streetLabel, { top: 235, right: 65, transform: [{ rotate: '25deg' }] }]}>
          Northup Way
        </Text>

        {/* Floating Map Pins */}
        {/* Pin 1: Music Concert (Top-Left) */}
        <View style={[styles.pinPosition, { top: 140, left: 24 }]}>
          <MapPin
            icon={<Ionicons name="musical-notes" size={13} color="#FFFFFF" />}
            iconBg="#5669FF"
            title="Music concert"
          />
        </View>

        {/* Pin 2: Football match (Mid-Right) */}
        <View style={[styles.pinPosition, { top: 175, right: 30 }]}>
          <MapPin
            icon={<Ionicons name="basketball" size={13} color="#FFFFFF" />}
            iconBg="#F0635A"
            title="Football match"
          />
        </View>

        {/* Pin 3: Food festival (Center-Left) */}
        <View style={[styles.pinPosition, { top: 220, left: 16 }]}>
          <MapPin
            icon={<Ionicons name="restaurant" size={12} color="#FFFFFF" />}
            iconBg="#29D697"
            title="Food festival"
          />
        </View>

        {/* Pin 4: Art show (Lower-Center) */}
        <View style={[styles.pinPosition, { top: 265, left: 82 }]}>
          <MapPin
            icon={<MaterialCommunityIcons name="palette" size={13} color="#FFFFFF" />}
            iconBg="#00C7E6"
            title="Art show"
          />
        </View>

        {/* GPS Locator Button */}
        <View style={styles.gpsButton}>
          <Ionicons name="locate-outline" size={18} color="#5669FF" />
        </View>

        {/* Top Floating Overlay: Status Bar + Search Bar + Category Pills */}
        <View style={styles.topOverlayArea}>
          {/* Status Bar */}
          <View style={styles.mockupStatusBar}>
            <Text style={styles.timeText}>9:41</Text>
            <View style={styles.statusIcons}>
              <Ionicons name="cellular" size={12} color="#120D26" style={styles.statusIcon} />
              <Ionicons name="wifi" size={12} color="#120D26" style={styles.statusIcon} />
              <Ionicons name="battery-full" size={14} color="#120D26" />
            </View>
          </View>

          {/* Search Bar Row with Back Button */}
          <View style={styles.searchRow}>
            {/* Back Button */}
            <View style={styles.backButton}>
              <Ionicons name="chevron-back" size={18} color="#120D26" />
            </View>

            {/* Search Input Box with Right Blue Filter Button */}
            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={14} color="#9D98A8" style={{ marginRight: 6 }} />
              <Text style={styles.searchPlaceholder} numberOfLines={1}>
                Search event, location ect.
              </Text>
              <View style={styles.filterCircle}>
                <Ionicons name="options" size={12} color="#FFFFFF" />
              </View>
            </View>
          </View>

          {/* Categories Pill Row */}
          <View style={styles.categoriesRow}>
            {/* Sports */}
            <View style={styles.categoryPill}>
              <View style={[styles.categoryIconCircle, { backgroundColor: '#FEECEB' }]}>
                <Ionicons name="basketball" size={12} color="#F0635A" />
              </View>
              <Text style={styles.categoryText}>Sports</Text>
            </View>

            {/* Music */}
            <View style={styles.categoryPill}>
              <View style={[styles.categoryIconCircle, { backgroundColor: '#EEF0FF' }]}>
                <Ionicons name="musical-notes" size={12} color="#5669FF" />
              </View>
              <Text style={styles.categoryText}>Music</Text>
            </View>

            {/* Food */}
            <View style={styles.categoryPill}>
              <View style={[styles.categoryIconCircle, { backgroundColor: '#E8FAF2' }]}>
                <Ionicons name="restaurant" size={11} color="#29D697" />
              </View>
              <Text style={styles.categoryText}>Food</Text>
            </View>
          </View>
        </View>

        {/* Bottom Preview Event Cards (Carousel peeking) */}
        <View style={styles.bottomCardsContainer}>
          {/* Peeking Left Card */}
          <View style={[styles.previewCard, styles.peekingLeftCard]}>
            <View style={styles.peekingInner} />
          </View>

          {/* Main Focused Event Card */}
          <View style={styles.mainPreviewCard}>
            <ArtProfileIllustration />
            {/* Bookmark button badge */}
            <View style={styles.bookmarkBadge}>
              <Ionicons name="bookmark" size={13} color="#F0635A" />
            </View>
          </View>

          {/* Peeking Right Card */}
          <View style={[styles.previewCard, styles.peekingRightCard]}>
            <View style={[styles.peekingInner, { backgroundColor: '#FEF3C7' }]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    width: 290,
    height: 485,
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    borderWidth: 6,
    borderColor: '#E8ECF4',
    overflow: 'hidden',
    alignSelf: 'center',
    shadowColor: '#303A70',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  speakerBar: {
    width: 44,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    position: 'absolute',
    top: 6,
    zIndex: 10,
  },
  screenInner: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    position: 'relative',
  },
  topOverlayArea: {
    paddingHorizontal: 10,
    paddingTop: 10,
    zIndex: 5,
  },
  mockupStatusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  timeText: {
    color: '#120D26',
    fontSize: 10,
    fontWeight: '700',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 4,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  searchBox: {
    flex: 1,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 4,
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 9.5,
    color: '#9D98A8',
  },
  filterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5669FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesRow: {
    flexDirection: 'row',
    gap: 6,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 3.5,
    paddingHorizontal: 7,
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1.5,
  },
  categoryIconCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  categoryText: {
    fontSize: 9.5,
    fontWeight: '600',
    color: '#747688',
  },
  streetLabel: {
    position: 'absolute',
    fontSize: 6.5,
    fontWeight: '700',
    color: '#B0B5C6',
    letterSpacing: 0.4,
    zIndex: 1,
  },
  pinPosition: {
    position: 'absolute',
    zIndex: 3,
  },
  pinWrapper: {
    alignItems: 'center',
  },
  pinBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
    shadowColor: '#2B3566',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  pinIconBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  pinTextBox: {
    justifyContent: 'center',
  },
  pinPrice: {
    fontSize: 6,
    fontWeight: '500',
    color: '#9D98A8',
    lineHeight: 7.5,
  },
  pinTitle: {
    fontSize: 7.5,
    fontWeight: '700',
    color: '#120D26',
    lineHeight: 9.5,
  },
  pinPointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  gpsButton: {
    position: 'absolute',
    bottom: 95,
    right: 18,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#303A70',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 4,
  },
  bottomCardsContainer: {
    position: 'absolute',
    bottom: 6,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },
  previewCard: {
    height: 70,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#303A70',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  peekingLeftCard: {
    marginRight: 6,
  },
  peekingRightCard: {
    marginLeft: 6,
  },
  peekingInner: {
    flex: 1,
    backgroundColor: '#BAE6FD',
    borderRadius: 12,
  },
  mainPreviewCard: {
    width: 175,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#303A70',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F2F8',
  },
  bookmarkBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
