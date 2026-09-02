import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path, Circle, Rect, G, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

// Vector illustration for the Jazz Day event card
const JazzIllustration = () => (
  <Svg width="100%" height={110} viewBox="0 0 200 110" preserveAspectRatio="xMidYMid slice">
    <Defs>
      <SvgLinearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#3CD6C6" />
        <Stop offset="0.5" stopColor="#58D1B2" />
        <Stop offset="1" stopColor="#E9B958" />
      </SvgLinearGradient>
      <SvgLinearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#2ABBAA" />
        <Stop offset="1" stopColor="#1E9B8C" />
      </SvgLinearGradient>
      <SvgLinearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#FFC837" />
        <Stop offset="1" stopColor="#FF8008" />
      </SvgLinearGradient>
    </Defs>
    
    {/* Background */}
    <Rect width="200" height="110" fill="url(#bgGrad)" />

    {/* Swirling music waves */}
    <Path
      d="M -10 110 C 30 70, 40 30, 70 0 L 0 0 L 0 110 Z"
      fill="url(#wave1)"
      opacity={0.8}
    />
    <Path
      d="M 120 110 C 140 60, 160 40, 210 10 L 210 110 Z"
      fill="url(#goldGrad)"
      opacity={0.7}
    />
    <Path
      d="M 60 110 C 75 80, 95 60, 135 110 Z"
      fill="#1A7A6E"
      opacity={0.6}
    />

    {/* Stylized Musician / Figure */}
    <G transform="translate(90, 20)">
      {/* Hair / Head */}
      <Circle cx="25" cy="18" r="14" fill="#0D1B2A" />
      <Circle cx="27" cy="19" r="10" fill="#E28455" />
      
      {/* Face profile & glasses */}
      <Path d="M 23 15 Q 28 17 25 24" stroke="#0D1B2A" strokeWidth="2" fill="none" />
      <Circle cx="29" cy="19" r="3.5" fill="#0D1B2A" />
      <Path d="M 25 19 L 29 19" stroke="#0D1B2A" strokeWidth="2" />

      {/* Suit Jacket */}
      <Path
        d="M 10 40 L 18 28 L 32 28 L 40 40 L 38 75 L 12 75 Z"
        fill="#1B2838"
      />
      {/* Shirt & tie */}
      <Path d="M 20 28 L 25 42 L 30 28 Z" fill="#FFFFFF" />
      <Path d="M 24 32 L 26 32 L 25 40 Z" fill="#E28455" />

      {/* Hands / Performance gestures */}
      <Path
        d="M 5 50 C 0 45, 2 38, 8 40 C 12 42, 10 52, 5 50"
        fill="#E28455"
      />
      <Path
        d="M 45 48 C 50 43, 48 36, 42 38 C 38 40, 40 50, 45 48"
        fill="#E28455"
      />
    </G>
  </Svg>
);

export default function PhoneMockup() {
  return (
    <View style={styles.phoneFrame}>
      {/* Top Notch / Speaker */}
      <View style={styles.speakerBar} />

      {/* Phone Screen Mockup Header */}
      <View style={styles.phoneHeader}>
        {/* Status Bar inside phone */}
        <View style={styles.mockupStatusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={12} color="#FFFFFF" style={styles.statusIcon} />
            <Ionicons name="wifi" size={12} color="#FFFFFF" style={styles.statusIcon} />
            <Ionicons name="battery-full" size={14} color="#FFFFFF" />
          </View>
        </View>

        {/* Top App Bar */}
        <View style={styles.topAppBar}>
          <Feather name="menu" size={20} color="#FFFFFF" />
          
          <View style={styles.locationContainer}>
            <View style={styles.locationTitleRow}>
              <Text style={styles.locationLabel}>Current Location</Text>
              <Ionicons name="caret-down" size={10} color="#E0E0E0" style={{ marginLeft: 3 }} />
            </View>
            <Text style={styles.locationCity}>New York, USA</Text>
          </View>

          <View style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
            <View style={styles.notifDot} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarRow}>
          <View style={styles.searchInputArea}>
            <Ionicons name="search" size={16} color="#A8B0FF" />
            <Text style={styles.searchPlaceholder}>Search...</Text>
          </View>
          <View style={styles.searchDivider} />
          <View style={styles.filtersBtn}>
            <Ionicons name="options-outline" size={13} color="#FFFFFF" />
            <Text style={styles.filtersText}>Filters</Text>
          </View>
        </View>

        {/* Category Pills */}
        <View style={styles.categoriesRow}>
          <View style={[styles.categoryPill, { backgroundColor: COLORS.sports }]}>
            <Ionicons name="basketball-outline" size={13} color="#FFFFFF" />
            <Text style={styles.categoryText}>Sports</Text>
          </View>

          <View style={[styles.categoryPill, { backgroundColor: COLORS.music }]}>
            <Ionicons name="musical-notes" size={13} color="#FFFFFF" />
            <Text style={styles.categoryText}>Music</Text>
          </View>

          <View style={[styles.categoryPill, { backgroundColor: COLORS.food }]}>
            <Ionicons name="restaurant-outline" size={13} color="#FFFFFF" />
            <Text style={styles.categoryText}>Food</Text>
          </View>
        </View>
      </View>

      {/* Feed Body */}
      <View style={styles.feedBody}>
        {/* Upcoming Events Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.seeAllRow}>
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={10} color={COLORS.textGray} style={{ marginLeft: 2 }} />
          </View>
        </View>

        {/* Event Cards Row */}
        <View style={styles.cardsRow}>
          {/* Card 1 */}
          <View style={styles.eventCard}>
            {/* Image Container */}
            <View style={styles.cardImageContainer}>
              <JazzIllustration />

              {/* Date Badge */}
              <View style={styles.dateBadge}>
                <Text style={styles.dateDay}>10</Text>
                <Text style={styles.dateMonth}>JUNE</Text>
              </View>

              {/* Bookmark Badge */}
              <View style={styles.bookmarkBadge}>
                <Ionicons name="bookmark" size={13} color={COLORS.bookmarkOrange} />
              </View>
            </View>

            {/* Card Content */}
            <View style={styles.cardInfo}>
              <Text style={styles.eventCardTitle} numberOfLines={1}>
                International Jazz Day
              </Text>

              {/* Attendees */}
              <View style={styles.attendeesRow}>
                <View style={styles.avatarStack}>
                  <View style={[styles.avatarCircle, { backgroundColor: '#FF8A65', zIndex: 3 }]}>
                    <Text style={styles.avatarInitial}>👩</Text>
                  </View>
                  <View style={[styles.avatarCircle, { backgroundColor: '#4DB6AC', marginLeft: -8, zIndex: 2 }]}>
                    <Text style={styles.avatarInitial}>👨</Text>
                  </View>
                  <View style={[styles.avatarCircle, { backgroundColor: '#7986CB', marginLeft: -8, zIndex: 1 }]}>
                    <Text style={styles.avatarInitial}>👱</Text>
                  </View>
                </View>
                <Text style={styles.goingText}>+20 Going</Text>
              </View>

              {/* Location */}
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={11} color={COLORS.textGray} />
                <Text style={styles.locationAddress} numberOfLines={1}>
                  36 Guild Street London, UK
                </Text>
              </View>
            </View>
          </View>

          {/* Card 2 (partially visible preview) */}
          <View style={[styles.eventCard, styles.eventCardPeeking]}>
            <View style={styles.cardImageContainer}>
              <JazzIllustration />
              <View style={styles.dateBadge}>
                <Text style={styles.dateDay}>10</Text>
                <Text style={styles.dateMonth}>JUNE</Text>
              </View>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.eventCardTitle} numberOfLines={1}>
                Internatio...
              </Text>
            </View>
          </View>
        </View>

        {/* Nearby You Section */}
        <View style={[styles.sectionHeader, { marginTop: 10 }]}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <View style={styles.seeAllRow}>
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={10} color={COLORS.textGray} style={{ marginLeft: 2 }} />
          </View>
        </View>

        {/* Nearby Event Item */}
        <View style={styles.nearbyItem}>
          <View style={styles.nearbyThumb}>
            <Svg width="100%" height="100%" viewBox="0 0 60 60">
              <Rect width="60" height="60" rx="10" fill="#E2F4EE" />
              <Circle cx="30" cy="30" r="18" fill="#58D1B2" opacity={0.6} />
              <Circle cx="30" cy="24" r="8" fill="#E28455" />
            </Svg>
          </View>
          <View style={styles.nearbyContent}>
            <Text style={styles.nearbyDate}>10 June • 9:00 PM</Text>
            <Text style={styles.nearbyTitle} numberOfLines={1}>International Gala Music Festival</Text>
            <View style={styles.nearbyLocRow}>
              <Ionicons name="location-sharp" size={11} color={COLORS.textGray} />
              <Text style={styles.nearbyLocText} numberOfLines={1}>36 Guild Street London, UK</Text>
            </View>
          </View>
          <Ionicons name="bookmark" size={13} color={COLORS.bookmarkOrange} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    width: 290,
    height: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    borderWidth: 6,
    borderColor: '#E8ECF4',
    overflow: 'hidden',
    alignSelf: 'center',
    shadowColor: '#303A70',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
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
  phoneHeader: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 12,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  mockupStatusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    color: '#FFFFFF',
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
  topAppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 9,
  },
  locationCity: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  notificationBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#00F8FF',
    position: 'absolute',
    top: 6,
    right: 6,
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInputArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchPlaceholder: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    marginLeft: 6,
  },
  searchDivider: {
    width: 1,
    height: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    marginHorizontal: 6,
  },
  filtersBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D66F4',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  filtersText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 6,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  feedBody: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 10,
    color: COLORS.textGray,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  eventCard: {
    width: 175,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 7,
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F2F8',
  },
  eventCardPeeking: {
    width: 90,
    opacity: 0.85,
  },
  cardImageContainer: {
    height: 85,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  dateBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: 'center',
  },
  dateDay: {
    fontSize: 9,
    fontWeight: '800',
    color: '#EB5757',
    lineHeight: 11,
  },
  dateMonth: {
    fontSize: 6,
    fontWeight: '800',
    color: '#EB5757',
    lineHeight: 8,
  },
  bookmarkBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    paddingTop: 6,
  },
  eventCardTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  attendeesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  avatarCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 8,
  },
  goingText: {
    fontSize: 9,
    fontWeight: '600',
    color: COLORS.primary,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationAddress: {
    fontSize: 9,
    color: COLORS.textGray,
    flex: 1,
    marginLeft: 3,
  },
  nearbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 6,
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#F0F2F8',
  },
  nearbyThumb: {
    width: 38,
    height: 38,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 8,
  },
  nearbyContent: {
    flex: 1,
  },
  nearbyDate: {
    fontSize: 8,
    color: COLORS.primary,
    fontWeight: '600',
  },
  nearbyTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  nearbyLocRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  nearbyLocText: {
    fontSize: 8,
    color: COLORS.textGray,
    marginLeft: 3,
  },
});
