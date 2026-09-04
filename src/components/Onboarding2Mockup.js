import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

// Avatar Illustration for Gala Music Festival
const MusicAvatar = () => (
  <Svg width={36} height={36} viewBox="0 0 36 36">
    <Circle cx="18" cy="18" r="18" fill="#38C2B3" />
    <Circle cx="18" cy="17" r="9" fill="#FFAF87" />
    <Path
      d="M 10 16 C 10 9, 26 9, 26 16 C 26 21, 23 25, 20 25 C 16 25, 10 21, 10 16 Z"
      fill="#FBBF24"
    />
    <Circle cx="15" cy="16" r="1.5" fill="#1F2937" />
    <Path d="M 12 18 Q 15 21 18 19" stroke="#E17055" strokeWidth="1.5" fill="none" />
    <Path d="M 9 16 A 9 9 0 0 1 27 16" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
    <Rect x="7" y="14" width="4" height="6" rx="2" fill="#FFFFFF" />
    <Rect x="25" y="14" width="4" height="6" rx="2" fill="#FFFFFF" />
  </Svg>
);

// Avatar Illustration for Women's Leadership
const LeadershipAvatar = () => (
  <Svg width={36} height={36} viewBox="0 0 36 36">
    <Circle cx="18" cy="18" r="18" fill="#E8EDF9" />
    <Path
      d="M 11 17 C 11 11, 25 11, 25 17 C 25 24, 21 27, 18 27 C 14 27, 11 24, 11 17 Z"
      fill="#D4B5FF"
    />
    <Circle cx="18" cy="16" r="7.5" fill="#FFDFC4" />
    <Path
      d="M 12 15 C 12 11, 24 10, 24 15 C 21 13, 15 13, 12 15 Z"
      fill="#7C5DFA"
    />
    <Circle cx="16" cy="15" r="1.2" fill="#1F2937" />
    <Circle cx="20" cy="15" r="1.2" fill="#1F2937" />
    <Path d="M 16 18 Q 18 20 20 18" stroke="#E57373" strokeWidth="1.2" fill="none" />
    <Path d="M 14 23 L 18 27 L 22 23 Z" fill="#FFFFFF" />
  </Svg>
);

export default function Onboarding2Mockup() {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calendar dates matrix for March 2021
  const calendarRows = [
    [
      { day: 31, inactive: true },
      { day: 1 },
      { day: 2 },
      { day: 3 },
      { day: 4 },
      { day: 5 },
      { day: 6 },
    ],
    [
      { day: 7 },
      { day: 8 },
      { day: 9 },
      { day: 10, highlight: '#F0635A' }, // Coral Red
      { day: 11 },
      { day: 12 },
      { day: 13 },
    ],
    [
      { day: 14 },
      { day: 15, highlight: '#F5A623' }, // Orange
      { day: 16 },
      { day: 17 },
      { day: 18 },
      { day: 19 },
      { day: 20 },
    ],
    [
      { day: 21 },
      { day: 22 },
      { day: 23, highlight: '#29D697' }, // Emerald / Cyan
      { day: 24 },
      { day: 25, highlight: '#5669FF' }, // Royal Blue
      { day: 26 },
      { day: 27 },
    ],
    [
      { day: 28 },
      { day: 29 },
      { day: 30 },
      { day: 31 },
      { day: 1, inactive: true },
      { day: 2, inactive: true },
      { day: 3, inactive: true },
    ],
  ];

  return (
    <View style={styles.phoneFrame}>
      {/* Top Notch / Speaker bar */}
      <View style={styles.speakerBar} />

      {/* Screen Content Container */}
      <View style={styles.screenInner}>
        {/* Mockup Status Bar */}
        <View style={styles.mockupStatusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={12} color="#120D26" style={styles.statusIcon} />
            <Ionicons name="wifi" size={12} color="#120D26" style={styles.statusIcon} />
            <Ionicons name="battery-full" size={14} color="#120D26" />
          </View>
        </View>

        {/* Navigation Bar: Arrow Left, Calendar Title with Caret, Dots Menu */}
        <View style={styles.navBar}>
          <Ionicons name="arrow-back" size={20} color="#120D26" />
          
          <View style={styles.titleWithDropdown}>
            <Text style={styles.navTitle}>Calendar</Text>
            <Ionicons name="caret-up" size={11} color="#120D26" style={{ marginLeft: 5 }} />
          </View>

          <MaterialCommunityIcons name="dots-vertical" size={20} color="#120D26" />
        </View>

        {/* Month Selector Row */}
        <View style={styles.monthSelectorRow}>
          <Ionicons name="chevron-back" size={14} color="#747688" />
          <Text style={styles.monthTitle}>March 2021</Text>
          <Ionicons name="chevron-forward" size={14} color="#747688" />
        </View>

        {/* Calendar Grid Section */}
        <View style={styles.calendarContainer}>
          {/* Day Names Header */}
          <View style={styles.weekDaysRow}>
            {weekDays.map((day, idx) => (
              <Text key={idx} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>

          {/* Dates Matrix */}
          {calendarRows.map((row, rIdx) => (
            <View key={rIdx} style={styles.dateRow}>
              {row.map((item, cIdx) => (
                <View key={cIdx} style={styles.dateCell}>
                  {item.highlight ? (
                    <View style={[styles.highlightCircle, { backgroundColor: item.highlight }]}>
                      <Text style={styles.dateTextHighlight}>{item.day}</Text>
                    </View>
                  ) : (
                    <Text
                      style={[
                        styles.dateText,
                        item.inactive && styles.dateTextInactive,
                      ]}
                    >
                      {item.day}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Events Feed Section */}
        <View style={styles.eventsSection}>
          {/* Day 1: Mar 15 */}
          <View style={styles.dateHeaderRow}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeMonth}>Mar</Text>
              <Text style={styles.dateBadgeDay}>15</Text>
            </View>
            <Text style={styles.dateHeaderLabel}>MON, 15TH MARCH, 2021</Text>
          </View>

          {/* Event Card 1 - Gala Music Festival */}
          <LinearGradient
            colors={['#FF9F7C', '#FF775B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.eventCard}
          >
            <View style={styles.cardAvatarContainer}>
              <MusicAvatar />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTime}>10:00 am - 12:30 pm</Text>
              <Text style={styles.cardTitle}>Gala Music Festival.</Text>
            </View>
          </LinearGradient>

          {/* Event Card 2 - Women's Leadership */}
          <LinearGradient
            colors={['#C2B5FE', '#A38FFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.eventCard}
          >
            <View style={styles.cardAvatarContainer}>
              <LeadershipAvatar />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTime}>10:00 am - 12:30 pm</Text>
              <Text style={styles.cardTitle}>Women's Leadership.</Text>
            </View>
          </LinearGradient>

          {/* Day 2 (Peeking): Mar 16 */}
          <View style={[styles.dateHeaderRow, { marginTop: 8, opacity: 0.5 }]}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeMonth}>Mar</Text>
              <Text style={styles.dateBadgeDay}>16</Text>
            </View>
            <Text style={styles.dateHeaderLabel}>TUS, 16TH MARCH, 2021</Text>
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
    backgroundColor: '#FAFAFD',
    paddingHorizontal: 12,
    paddingTop: 10,
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
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  titleWithDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#120D26',
    letterSpacing: 0.2,
  },
  monthSelectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  monthTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#120D26',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 4,
    marginBottom: 10,
    shadowColor: '#535990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '600',
    color: '#747688',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1.5,
  },
  dateCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },
  dateText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#120D26',
  },
  dateTextInactive: {
    color: '#D0D2DC',
    fontWeight: '400',
  },
  highlightCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTextHighlight: {
    fontSize: 9,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  eventsSection: {
    flex: 1,
  },
  dateHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dateBadge: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#E8ECFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  dateBadgeMonth: {
    fontSize: 6,
    fontWeight: '700',
    color: '#5669FF',
    textTransform: 'uppercase',
    lineHeight: 7,
  },
  dateBadgeDay: {
    fontSize: 9,
    fontWeight: '800',
    color: '#5669FF',
    lineHeight: 11,
  },
  dateHeaderLabel: {
    fontSize: 8.5,
    fontWeight: '700',
    color: '#747688',
    letterSpacing: 0.4,
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  cardAvatarContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTime: {
    fontSize: 8.5,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
