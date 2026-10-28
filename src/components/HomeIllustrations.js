import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from 'react-native-svg';
import { COLORS } from '../constants/colors';

/**
 * Avatar người dùng Ashfak Sayem
 * Nạp từ thư mục riêng: assets/avatars/avatar_ashfak.png
 * Tự động chuyển sang vector dự phòng nếu ảnh chưa sẵn sàng
 */
export function UserAvatar({ size = 60 }) {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={[styles.avatarContainer, { width: size, height: size, borderRadius: size / 2 }]}>
      {!imageError ? (
        <Image
          source={require('../../assets/avatars/avatar_ashfak.png')}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Defs>
            <SvgLinearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#D9D9D9" />
              <Stop offset="1" stopColor="#A6A6A6" />
            </SvgLinearGradient>
            <SvgLinearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#2B2B2B" />
              <Stop offset="1" stopColor="#151515" />
            </SvgLinearGradient>
          </Defs>

          {/* Nền tròn */}
          <Circle cx="50" cy="50" r="50" fill="url(#avatarBg)" />

          {/* Áo sơ mi / cổ áo */}
          <Path d="M 15 100 Q 50 78 85 100 Z" fill="#3A3D40" />
          <Path d="M 40 82 L 50 95 L 60 82 Z" fill="#FFFFFF" />

          {/* Cổ */}
          <Rect x="42" y="60" width="16" height="22" rx="4" fill="#E0A988" />

          {/* Khuôn mặt */}
          <Circle cx="50" cy="48" r="24" fill="#F3BE9C" />

          {/* Tóc */}
          <Path
            d="M 26 44 C 26 26, 42 22, 50 22 C 58 22, 74 26, 74 44 C 74 33, 67 27, 50 27 C 33 27, 26 33, 26 44 Z"
            fill="url(#hairGrad)"
          />
          {/* Mắt */}
          <Circle cx="41" cy="48" r="2.5" fill="#2C2C2C" />
          <Circle cx="59" cy="48" r="2.5" fill="#2C2C2C" />
          {/* Miệng mỉm cười nhẹ */}
          <Path d="M 44 60 Q 50 63 56 60" stroke="#C47E5B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </Svg>
      )}
    </View>
  );
}

/**
 * Minh họa sự kiện 1: International Band Music (Đôi tay & hoa lá)
 * Nạp từ thư mục: assets/images/event1_hands.png
 */
export function EventIllustration1({ width = '100%', height = 130 }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <Image
        source={require('../../assets/images/event1_hands.png')}
        style={{ width: width, height: height }}
        resizeMode="cover"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <SvgLinearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#FFE8DF" />
          <Stop offset="1" stopColor="#FED7C7" />
        </SvgLinearGradient>
      </Defs>
      <Rect width="240" height="130" fill="url(#bgGrad1)" />
      <Circle cx="120" cy="65" r="50" fill="#FFF2EC" opacity="0.8" />
    </Svg>
  );
}

/**
 * Minh họa sự kiện 2: Jo Malone London (Giày thể thao xanh)
 * Nạp từ thư mục: assets/images/event2_shoes.png
 */
export function EventIllustration2({ width = '100%', height = 130 }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <Image
        source={require('../../assets/images/event2_shoes.png')}
        style={{ width: width, height: height }}
        resizeMode="cover"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <SvgLinearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#DDF1FE" />
          <Stop offset="1" stopColor="#BCE3FD" />
        </SvgLinearGradient>
      </Defs>
      <Rect width="240" height="130" fill="url(#bgGrad2)" />
    </Svg>
  );
}

/**
 * Minh họa sự kiện 3: Sự kiện gần bạn (Cô gái giữa rừng lá ngắm trăng)
 * Nạp từ thư mục: assets/images/event_nearby.png
 */
export function EventIllustration3({ width = '100%', height = 130 }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <Image
        source={require('../../assets/images/event_nearby.png')}
        style={{ width: width, height: height }}
        resizeMode="cover"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <SvgLinearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#E2F0FE" />
          <Stop offset="1" stopColor="#C9E4FD" />
        </SvgLinearGradient>
      </Defs>
      <Rect width="240" height="130" fill="url(#bgGrad3)" />
    </Svg>
  );
}

/**
 * Minh họa sự kiện 4: Bé gái và bóng bay xanh (Sự kiện từ thiện)
 * Nạp từ thư mục: assets/images/event_charity.png
 */
export function EventIllustration4({ width = '100%', height = 130 }) {
  return (
    <Image
      source={require('../../assets/images/event_charity.png')}
      style={{ width: width, height: height }}
      resizeMode="cover"
    />
  );
}

/**
 * Minh họa Hộp Quà Tặng cho Banner "Invite your friends"
 * Nạp từ thư mục: assets/images/invite_gift.png
 */
export function GiftIllustration({ width = 110, height = 90 }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <Image
        source={require('../../assets/images/invite_gift.png')}
        style={{ width: width, height: height }}
        resizeMode="contain"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 120 100">
      <Defs>
        <SvgLinearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#FFE066" />
          <Stop offset="1" stopColor="#F5B700" />
        </SvgLinearGradient>
      </Defs>
      <Rect x="35" y="45" width="45" height="42" rx="4" fill="url(#boxGrad)" />
      <Rect x="31" y="38" width="53" height="12" rx="3" fill="#FFC72C" />
      <Rect x="52" y="38" width="10" height="49" fill="#5669FF" />
    </Svg>
  );
}

/**
 * Avatar xếp chồng của người tham gia (+20 Going)
 * Nạp từ thư mục riêng: assets/avatars/
 */
export function AttendeeAvatars({ count = 20 }) {
  return (
    <View style={styles.attendeesContainer}>
      {/* Avatar người tham gia 1 (nam áo be) */}
      <View style={[styles.miniAvatar, { zIndex: 3 }]}>
        <Image
          source={require('../../assets/avatars/attendee1.png')}
          style={styles.miniAvatarImg}
          resizeMode="cover"
        />
      </View>
      {/* Avatar người tham gia 2 (nữ tóc vàng) */}
      <View style={[styles.miniAvatar, { marginLeft: -8, zIndex: 2 }]}>
        <Image
          source={require('../../assets/avatars/attendee2.png')}
          style={styles.miniAvatarImg}
          resizeMode="cover"
        />
      </View>
      {/* Avatar người tham gia 3 (Ashfak Sayem) */}
      <View style={[styles.miniAvatar, { marginLeft: -8, zIndex: 1 }]}>
        <Image
          source={require('../../assets/avatars/avatar_ashfak.png')}
          style={styles.miniAvatarImg}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    overflow: 'hidden',
    backgroundColor: '#EBEBEB',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniAvatarImg: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
