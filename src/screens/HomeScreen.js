import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';
import {
  EventIllustration1,
  EventIllustration2,
  GiftIllustration,
  AttendeeAvatars,
} from '../components/HomeIllustrations';

const { width } = Dimensions.get('window');

/**
 * Màn hình Trang Chủ (Home Screen)
 * - Header màu xanh hoàng gia với vị trí, chuông thông báo, thanh tìm kiếm & nút lọc
 * - Danh sách danh mục sự kiện (Sports, Music, Food, Art...)
 * - Sự kiện sắp diễn ra (Upcoming Events) dạng thẻ lướt ngang (assets/images/)
 * - Banner ưu đãi "Invite your friends - Get $20 for ticket" (assets/images/)
 * - Sự kiện gần bạn (Nearby You) (assets/images/)
 * - Thanh điều hướng dưới cùng với 100% icon nạp từ thư mục chuyên biệt: assets/icons/
 */
export default function HomeScreen({
  onOpenDrawer,
  onNotificationPress,
  onEventPress,
  onSearchPress,
  onFilterPress,
  onInvitePress,
  onTabPress,
}) {
  // State quản lý danh mục được chọn
  const [selectedCategory, setSelectedCategory] = useState('sports');
  // State quản lý tab đang kích hoạt ở bottom bar
  const [activeTab, setActiveTab] = useState('explore');
  // State lưu từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState('');
  // State lưu danh sách sự kiện được đánh dấu yêu thích
  const [bookmarkedEvents, setBookmarkedEvents] = useState({ 1: true, 2: false, 3: false });

  // Hàm chuyển đổi trạng thái bookmark
  const toggleBookmark = (eventId) => {
    setBookmarkedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  // Dữ liệu danh mục sự kiện (Chỉ có đúng 3 danh mục theo Figma: Sports, Music, Food)
  const categories = [
    { id: 'sports', name: 'Sports', color: '#F0635A', icon: 'basketball-outline' },
    { id: 'music', name: 'Music', color: '#F59762', icon: 'musical-notes-outline' },
    { id: 'food', name: 'Food', color: '#29D697', icon: 'restaurant-outline' },
  ];

  // Dữ liệu sự kiện sắp diễn ra (Upcoming Events)
  const upcomingEvents = [
    {
      id: 1,
      title: "International Band Mu...",
      date: '10',
      month: 'JUNE',
      goingCount: '+20 Going',
      location: '36 Guild Street London, UK',
      component: EventIllustration1,
    },
    {
      id: 2,
      title: "Jo Malone London's...",
      date: '10',
      month: 'JUNE',
      goingCount: '+20 Going',
      location: 'Radius Gallery, NY',
      component: EventIllustration2,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Cấu hình thanh trạng thái chữ sáng trên nền xanh */}
      <ExpoStatusBar style="light" />

      {/* Phần cuộn nội dung chính */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ================= HEADER SECTION ================= */}
        <LinearGradient
          colors={['#4A5CE8', '#5669FF']}
          style={styles.headerContainer}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* Hàng 1: Nút Menu Drawer + Địa điểm + Chuông thông báo */}
            <View style={styles.topRow}>
              {/* Nút Menu 2 gạch (Drawer Toggle) chuẩn Figma 100% */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.twoLineMenuButton}
                onPress={onOpenDrawer}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              >
                <View style={styles.twoLineTop} />
                <View style={styles.twoLineBottom} />
              </TouchableOpacity>

              {/* Bộ chọn vị trí hiện tại */}
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.locationSelector}
                onPress={() => console.log('Location selected')}
              >
                <View style={styles.locationLabelRow}>
                  <Text style={styles.currentLocationLabel}>Current Location</Text>
                  <Ionicons name="chevron-down" size={13} color="rgba(255,255,255,0.8)" style={{ marginLeft: 3 }} />
                </View>
                <Text style={styles.locationText}>New York, USA</Text>
              </TouchableOpacity>

              {/* Nút Thông báo có chấm badge */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.notificationButton}
                onPress={onNotificationPress}
              >
                <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
                <View style={styles.notificationDot} />
              </TouchableOpacity>
            </View>

            {/* Hàng 2: Thanh tìm kiếm và nút Bộ lọc */}
            <View style={styles.searchRow}>
              <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
                <Text style={styles.searchSeparator}>|</Text>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="rgba(255, 255, 255, 0.65)"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>

              {/* Nút Filters với icon ảnh tròn tím nạp từ assets/icons/icon_filter.png */}
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.filterButton}
                onPress={onFilterPress}
              >
                <Image
                  source={require('../../assets/icons/icon_filter.png')}
                  style={styles.filterIconImg}
                  resizeMode="contain"
                />
                <Text style={styles.filterText}>Filters</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>

        {/* ================= CATEGORIES CHIPS ================= */}
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollList}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  activeOpacity={0.85}
                  style={[
                    styles.categoryChip,
                    { backgroundColor: cat.color },
                    isSelected && styles.categoryChipSelected,
                  ]}
                  onPress={() => setSelectedCategory(cat.id)}
                >
                  <Ionicons name={cat.icon} size={18} color="#FFFFFF" />
                  <Text style={styles.categoryText}>{cat.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* ================= UPCOMING EVENTS SECTION ================= */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.seeAllButton}
            onPress={() => console.log('See all upcoming events')}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={11} color="#747688" style={{ marginLeft: 3 }} />
          </TouchableOpacity>
        </View>

        {/* Danh sách cuộn ngang các thẻ sự kiện */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.eventsScrollList}
        >
          {upcomingEvents.map((event) => {
            const Illustration = event.component;
            const isBookmarked = bookmarkedEvents[event.id];

            return (
              <TouchableOpacity
                key={event.id}
                activeOpacity={0.9}
                style={styles.eventCard}
                onPress={() => onEventPress && onEventPress(event)}
              >
                {/* Phần hình ảnh minh họa */}
                <View style={styles.eventImageContainer}>
                  <Illustration width="100%" height={130} />

                  {/* Huy hiệu ngày tháng (Góc trên trái) */}
                  <View style={styles.dateBadge}>
                    <Text style={styles.dateBadgeDay}>{event.date}</Text>
                    <Text style={styles.dateBadgeMonth}>{event.month}</Text>
                  </View>

                  {/* Nút lưu bookmark (Góc trên phải) */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.bookmarkButton}
                    onPress={() => toggleBookmark(event.id)}
                  >
                    <Ionicons
                      name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                      size={15}
                      color="#F0635A"
                    />
                  </TouchableOpacity>
                </View>

                {/* Phần thông tin chi tiết sự kiện */}
                <View style={styles.eventInfoContainer}>
                  <Text style={styles.eventTitle} numberOfLines={1}>
                    {event.title}
                  </Text>

                  {/* Danh sách người tham gia (nạp từ assets/avatars/) */}
                  <View style={styles.attendeesRow}>
                    <AttendeeAvatars count={20} />
                    <Text style={styles.goingText}>{event.goingCount}</Text>
                  </View>

                  {/* Địa điểm tổ chức */}
                  <View style={styles.locationRow}>
                    <Ionicons name="location-sharp" size={14} color="#747688" />
                    <Text style={styles.locationDetailText} numberOfLines={1}>
                      {event.location}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ================= BANNER INVITE YOUR FRIENDS ================= */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextCol}>
            <Text style={styles.bannerTitle}>Invite your friends</Text>
            <Text style={styles.bannerSubtitle}>Get $20 for ticket</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.inviteButton}
              onPress={onInvitePress}
            >
              <Text style={styles.inviteButtonText}>INVITE</Text>
            </TouchableOpacity>
          </View>

          {/* Minh họa hộp quà & pháo hoa */}
          <View style={styles.bannerIllustrationCol}>
            <GiftIllustration width={110} height={90} />
          </View>
        </View>

        {/* ================= NEARBY YOU SECTION ================= */}
        {/* Theo đúng chuẩn bản vẽ Figma 375x812: Chỉ có hàng tiêu đề Nearby You và nút See All */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.seeAllButton}
            onPress={() => console.log('See all nearby events')}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={11} color="#747688" style={{ marginLeft: 3 }} />
          </TouchableOpacity>
        </View>

        {/* Khoảng đệm phía dưới để thanh Bottom Navigation không che lấp nội dung */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ================= FLOATING BOTTOM NAVIGATION BAR ================= */}
      <View style={styles.bottomBarContainer}>
        {/* Tab 1: Explore */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('explore');
            onTabPress && onTabPress('explore');
          }}
        >
          <Feather
            name="compass"
            size={22}
            color={activeTab === 'explore' ? COLORS.primary : '#747688'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'explore' && styles.tabLabelActive,
            ]}
          >
            Explore
          </Text>
        </TouchableOpacity>

        {/* Tab 2: Events */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('events');
            onTabPress && onTabPress('events');
          }}
        >
          <Feather
            name="calendar"
            size={22}
            color={activeTab === 'events' ? COLORS.primary : '#747688'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'events' && styles.tabLabelActive,
            ]}
          >
            Events
          </Text>
        </TouchableOpacity>

        {/* Tab Trung tâm Nổi (Floating Action Button +) */}
        <View style={styles.fabPlaceholder}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.fabButton}
            onPress={() => console.log('Add event pressed')}
          >
            <View style={styles.fabInnerCircle}>
              <Ionicons name="add" size={26} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Tab 3: Map */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('map');
            onTabPress && onTabPress('map');
          }}
        >
          <Feather
            name="map-pin"
            size={22}
            color={activeTab === 'map' ? COLORS.primary : '#747688'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'map' && styles.tabLabelActive,
            ]}
          >
            Map
          </Text>
        </TouchableOpacity>

        {/* Tab 4: Profile */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('profile');
            onTabPress && onTabPress('profile');
          }}
        >
          <Feather
            name="user"
            size={22}
            color={activeTab === 'profile' ? COLORS.primary : '#747688'}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'profile' && styles.tabLabelActive,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // Header Royal Blue
  headerContainer: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: Platform.OS === 'android' ? 30 : 10,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },
  safeArea: {
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 18,
  },
  // Nút menu 2 gạch (Drawer Toggle)
  twoLineMenuButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 2,
  },
  twoLineTop: {
    width: 20,
    height: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginBottom: 5,
  },
  twoLineBottom: {
    width: 13,
    height: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  locationSelector: {
    alignItems: 'center',
  },
  locationLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentLocationLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 2,
  },
  notificationButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#00F8FF',
  },
  // Thanh tìm kiếm
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchSeparator: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 18,
    marginRight: 8,
    fontWeight: '200',
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 6,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  filterIconImg: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  // Danh mục chips
  categoriesContainer: {
    marginTop: -16,
    marginBottom: 10,
  },
  categoriesScrollList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  categoryChipSelected: {
    transform: [{ scale: 1.02 }],
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  // Tiêu đề các mục
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 18,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#120D26',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 13,
    color: '#747688',
  },
  // Thẻ sự kiện
  eventsScrollList: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    gap: 16,
  },
  eventCard: {
    width: 235,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  eventImageContainer: {
    height: 130,
    backgroundColor: '#F3F4F6',
    position: 'relative',
    overflow: 'hidden',
  },
  dateBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  dateBadgeDay: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F0635A',
  },
  dateBadgeMonth: {
    fontSize: 10,
    fontWeight: '700',
    color: '#F0635A',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventInfoContainer: {
    padding: 12,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#120D26',
    marginBottom: 8,
  },
  attendeesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  goingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3F38DD',
    marginLeft: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDetailText: {
    fontSize: 12,
    color: '#747688',
    marginLeft: 4,
    flex: 1,
  },
  // Banner mời bạn bè
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D6F5F6',
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  bannerTextCol: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#120D26',
  },
  bannerSubtitle: {
    fontSize: 13,
    color: '#484D70',
    marginTop: 4,
  },
  inviteButton: {
    backgroundColor: '#00F8FF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#00D9E6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  bannerIllustrationCol: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  // Sự kiện gần bạn
  nearbyEventsWrapper: {
    paddingHorizontal: 20,
  },
  // Floating Bottom Tab Bar
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F2',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    flex: 1,
  },
  tabImageIcon: {
    width: 22,
    height: 22,
  },
  tabLabel: {
    fontSize: 11,
    color: '#747688',
    marginTop: 3,
  },
  tabLabelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  fabPlaceholder: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabButton: {
    position: 'absolute',
    top: -24,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5669FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabInnerCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
