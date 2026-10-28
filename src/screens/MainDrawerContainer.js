import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import MenuWhiteScreen from './MenuWhiteScreen';
import HomeScreen from './HomeScreen';

const { width, height } = Dimensions.get('window');

/**
 * MainDrawerContainer: Bộ điều hướng Drawer tương tác 3D chuẩn xác 100% bản vẽ Figma
 * - Lớp nền: MenuWhiteScreen (Menu bên trái chiếm khoảng 58% màn hình)
 * - Lớp trên: HomeScreen (Trang chủ)
 * - Khi nhấn nút Menu "2 gạch" (hoặc chạm để mở):
 *   + HomeScreen thu nhỏ tỉ lệ (scale: 0.82)
 *   + Trượt sang phải để lộ menu trắng bên trái (translateX: width * 0.50)
 *   + Bo tròn viền góc mềm mại (borderRadius: 36)
 *   + Đổ bóng đậm đà sang trái tạo chiều sâu 3D (shadow / elevation)
 * - Khi menu đang mở:
 *   + Chạm vào bất kỳ vị trí nào trên HomeScreen sẽ đóng menu và đưa HomeScreen trở lại toàn màn hình
 */
export default function MainDrawerContainer({ onSignOut }) {
  // Trạng thái mở hoặc đóng của side drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Animated Value nội suy từ 0 (đóng hoàn toàn) đến 1 (mở hoàn toàn)
  const animation = useRef(new Animated.Value(0)).current;

  // Hàm mở drawer mượt mà với spring animation
  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: false, // Dùng false để hỗ trợ bo góc borderRadius động
      friction: 8,
      tension: 45,
    }).start();
  };

  // Hàm đóng drawer và khôi phục trạng thái toàn màn hình
  const closeDrawer = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: false,
      friction: 8,
      tension: 45,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  // Hàm chuyển đổi bật/tắt drawer khi nhấn nút 2 gạch
  const toggleDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  // Nội suy tỉ lệ co nhỏ màn hình: từ 1 (toàn màn hình) về 0.82 (co nhỏ)
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.82],
  });

  // Nội suy dịch chuyển vị trí sang phải: từ 0 về 50% chiều rộng màn hình
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.50],
  });

  // Nội suy độ bo góc: từ 0 (thẳng góc) sang 36 (bo tròn mềm mại như Figma)
  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 36],
  });

  return (
    <View style={styles.container}>
      {/* Tự động đổi màu icon thanh trạng thái: sáng khi xem Home, tối khi mở Menu */}
      <ExpoStatusBar style={isDrawerOpen ? 'dark' : 'light'} />

      {/* ================= LỚP NỀN: MENU WHITE ================= */}
      <View style={styles.drawerBackgroundLayer}>
        <MenuWhiteScreen
          onSelectMenuItem={(itemId) => {
            console.log('Menu item clicked:', itemId);
            closeDrawer();
          }}
          onSignOut={() => {
            closeDrawer();
            if (onSignOut) {
              onSignOut();
            }
          }}
          onUpgradePro={() => {
            console.log('Upgrade Pro clicked');
            closeDrawer();
          }}
          onClose={closeDrawer}
        />
      </View>

      {/* ================= LỚP TRÊN: HOME SCREEN ================= */}
      {/* Khung ngoài tạo bóng đổ 3D không bị cắt bởi overflow */}
      <Animated.View
        style={[
          styles.homeShadowWrapper,
          {
            transform: [{ translateX }, { scale }],
          },
        ]}
      >
        {/* Khung trong bo góc và cắt gọn nội dung HomeScreen */}
        <Animated.View
          style={[
            styles.homeClippedWrapper,
            {
              borderRadius,
            },
          ]}
        >
          <HomeScreen
            onOpenDrawer={toggleDrawer}
            onNotificationPress={() => console.log('Notification pressed')}
            onEventPress={(event) => console.log('Event clicked:', event.title)}
            onSearchPress={() => console.log('Search focused')}
            onFilterPress={() => console.log('Filter button pressed')}
            onInvitePress={() => console.log('Invite friends pressed')}
            onTabPress={(tab) => console.log('Tab switched to:', tab)}
          />

          {/* Lớp phủ trong suốt khi menu mở: chặn bấm nhầm và bấm vào để đóng drawer */}
          {isDrawerOpen && (
            <TouchableWithoutFeedback onPress={closeDrawer}>
              <View style={styles.overlayMask} />
            </TouchableWithoutFeedback>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Lớp chứa MenuWhite nằm cố định ở phía bên trái
  drawerBackgroundLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: width * 0.60,
    backgroundColor: '#FFFFFF',
  },
  // Khung ngoài của HomeScreen: chịu trách nhiệm tạo bóng đổ 3D
  homeShadowWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 25,
  },
  // Khung trong của HomeScreen: chịu trách nhiệm bo tròn các góc và cắt nội dung
  homeClippedWrapper: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    overflow: 'hidden',
  },
  // Lớp mặt nạ trong suốt hỗ trợ chạm để đóng menu khi mở
  overlayMask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    zIndex: 999,
  },
});
