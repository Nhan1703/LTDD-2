import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { UserAvatar } from '../components/HomeIllustrations';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

/**
 * Màn hình Menu Trắng (Menu White / Side Drawer)
 * - Khớp 100% bản vẽ Figma:
 *   + Avatar tròn và tên người dùng "Ashfak Sayem"
 *   + 8 mục menu với icon nét mảnh (outline) sắc nét chuẩn Feather Icons, KHÔNG BỊ Ô VUÔNG XÁM
 *   + Mục "Massage" có huy hiệu số 3 màu cam đặt ngay sát tên mục
 *   + Nút "Upgrade Pro" nền xanh ngọc dịu có biểu tượng vương miện ở chân menu
 *   + Chiều rộng menu giới hạn khoảng 60% màn hình để chừa 40% hiển thị màn hình Home co nhỏ bên phải
 */
export default function MenuWhiteScreen({
  onSelectMenuItem,
  onSignOut,
  onUpgradePro,
  onClose,
}) {
  // Danh sách đầy đủ 8 mục menu theo đúng icon Feather gốc từ Figma
  const menuItems = [
    {
      id: 'profile',
      label: 'My Profile',
      iconName: 'user',
    },
    {
      id: 'massage',
      label: 'Massage',
      iconName: 'message-square',
      badge: '3', // Huy hiệu thông báo đỏ cam
    },
    {
      id: 'calender',
      label: 'Calender',
      iconName: 'calendar',
    },
    {
      id: 'bookmark',
      label: 'Bookmark',
      iconName: 'bookmark',
    },
    {
      id: 'contact',
      label: 'Contact Us',
      iconName: 'mail',
    },
    {
      id: 'settings',
      label: 'Settings',
      iconName: 'settings',
    },
    {
      id: 'help',
      label: 'Helps & FAQs',
      iconName: 'help-circle',
    },
    {
      id: 'signout',
      label: 'Sign Out',
      iconName: 'log-out',
      isSignOut: true,
    },
  ];

  // Xử lý sự kiện khi người dùng bấm vào từng mục menu
  const handleItemPress = (item) => {
    if (item.isSignOut) {
      if (onSignOut) {
        onSignOut();
      }
    } else {
      if (onSelectMenuItem) {
        onSelectMenuItem(item.id);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ExpoStatusBar style="dark" />

      <View style={styles.contentContainer}>
        {/* ================= THÔNG TIN NGƯỜI DÙNG ================= */}
        <View style={styles.profileSection}>
          {/* Avatar chân dung tròn Ashfak Sayem */}
          <UserAvatar size={62} />

          {/* Tên người dùng */}
          <Text style={styles.userName}>Ashfak Sayem</Text>
        </View>

        {/* ================= DANH SÁCH MỤC MENU ================= */}
        <ScrollView
          style={styles.menuList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuListContent}
        >
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.65}
              style={styles.menuItemRow}
              onPress={() => handleItemPress(item)}
            >
              {/* Icon nét mảnh sắc nét, trong suốt không có nền xám */}
              <View style={styles.iconWrapper}>
                <Feather
                  name={item.iconName}
                  size={20}
                  color="#747688"
                />
              </View>

              {/* Tên mục menu */}
              <Text
                style={[
                  styles.menuItemLabel,
                  item.isSignOut && styles.signOutLabel,
                ]}
              >
                {item.label}
              </Text>

              {/* Huy hiệu thông báo đỏ cam số 3 nằm ngay cạnh chữ Massage */}
              {item.badge && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ================= NÚT UPGRADE PRO DƯỚI CÙNG ================= */}
        <View style={styles.footerSection}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.upgradeProButton}
            onPress={onUpgradePro}
          >
            {/* Biểu tượng vương miện xanh ngọc */}
            <MaterialCommunityIcons
              name="crown"
              size={18}
              color="#00D9E6"
              style={styles.crownIcon}
            />
            {/* Chữ Upgrade Pro */}
            <Text style={styles.upgradeProText}>Upgrade Pro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 10,
    paddingTop: 24,
    paddingBottom: 28,
    justifyContent: 'space-between',
    width: '100%',
  },
  // Phần Avatar và Tên người dùng
  profileSection: {
    marginBottom: 28,
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#120D26',
    marginTop: 12,
    letterSpacing: 0.2,
  },
  // Danh sách menu
  menuList: {
    flex: 1,
  },
  menuListContent: {
    paddingVertical: 2,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  iconWrapper: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  menuItemLabel: {
    fontSize: 15,
    color: '#120D26',
    fontWeight: '500',
  },
  signOutLabel: {
    color: '#120D26',
  },
  // Huy hiệu số 3 đỏ cam đặt cạnh chữ Massage
  badgeContainer: {
    backgroundColor: '#F59762',
    minWidth: 19,
    height: 19,
    borderRadius: 9.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    marginLeft: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  // Nút Upgrade Pro chân menu
  footerSection: {
    paddingTop: 16,
    alignItems: 'flex-start',
  },
  upgradeProButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6FAFA',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#D4F7F6',
  },
  crownIcon: {
    marginRight: 6,
  },
  upgradeProText: {
    color: '#00CCD6',
    fontSize: 13,
    fontWeight: '700',
  },
});
