import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function VerificationScreen({
  email = 'abc@email.com',
  onBack,
  onContinue,
  onResend,
}) {
  // 4 ô mã OTP - Bỏ số 44 đi theo yêu cầu, khởi tạo rỗng
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Countdown timer cho phần Re-send code in 0:20
  const [secondsLeft, setSecondsLeft] = useState(20);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Đếm ngược 20 giây
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Tự động focus ô đầu tiên khi mở màn hình
  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      inputRefs[0].current?.focus();
    }, 300);
    return () => clearTimeout(focusTimeout);
  }, []);

  const handleChangeText = (text, index) => {
    // Xử lý dán mã 4 số
    if (text.length > 1) {
      const cleaned = text.replace(/[^0-9]/g, '').slice(0, 4);
      const newOtp = ['', '', '', ''];
      for (let i = 0; i < cleaned.length; i++) {
        newOtp[i] = cleaned[i];
      }
      setOtp(newOtp);
      const nextIndex = Math.min(cleaned.length, 3);
      inputRefs[nextIndex].current?.focus();
      return;
    }

    const digit = text.replace(/[^0-9]/g, '');
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Tự động chuyển focus sang ô tiếp theo khi nhập số
    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const handleContinue = () => {
    const otpCode = otp.join('');
    if (onContinue) {
      onContinue(otpCode);
    }
  };

  const handleResendPress = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(20);
      if (onResend) {
        onResend();
      } else {
        Alert.alert('Notification', 'Verification code resent!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="dark" />

      {/* Subtle Background Glows matching Figma design */}
      <View style={styles.backgroundGradients} pointerEvents="none">
        <LinearGradient
          colors={['rgba(255, 120, 150, 0.06)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0.8, y: 0 }}
          end={{ x: 0.3, y: 0.35 }}
          style={styles.topRightGlow}
        />
        <LinearGradient
          colors={['rgba(86, 105, 255, 0.08)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.2, y: 0.4 }}
          style={styles.bottomRightGlow}
        />
      </View>

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardAvoid}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Top Bar with Back Button */}
            <View style={styles.topBar}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.backButton}
                onPress={onBack}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              >
                <Feather name="arrow-left" size={24} color={COLORS.textDark} />
              </TouchableOpacity>
            </View>

            {/* Screen Heading */}
            <Text style={styles.heading}>Verification</Text>

            {/* Subtitle with Email from previous screen (thay thế số điện thoại) */}
            <Text style={styles.subtitle}>
              We’ve send you the verification code{'\n'}on {email}
            </Text>

            {/* 4 OTP Input Boxes (Đã bỏ số 44 đi, hiển thị gạch ngang — khi rỗng) */}
            <View style={styles.otpRow}>
              {otp.map((val, idx) => {
                const isFocused = focusedIndex === idx;
                return (
                  <View
                    key={idx}
                    style={[
                      styles.otpBox,
                      isFocused && styles.otpBoxActive,
                    ]}
                  >
                    <TextInput
                      ref={inputRefs[idx]}
                      style={styles.otpInput}
                      keyboardType="number-pad"
                      maxLength={1}
                      textAlign="center"
                      value={val}
                      placeholder="—"
                      placeholderTextColor="#C4C4C4"
                      onChangeText={(t) => handleChangeText(t, idx)}
                      onKeyPress={(e) => handleKeyPress(e, idx)}
                      onFocus={() => setFocusedIndex(idx)}
                      selectTextOnFocus
                    />
                  </View>
                );
              })}
            </View>

            {/* CONTINUE Primary Button */}
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>CONTINUE</Text>
              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </View>
            </TouchableOpacity>

            {/* Resend Code Section */}
            <View style={styles.resendContainer}>
              {secondsLeft > 0 ? (
                <Text style={styles.resendText}>
                  Re-send code in{' '}
                  <Text style={styles.timerText}>
                    0:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                  </Text>
                </Text>
              ) : (
                <TouchableOpacity activeOpacity={0.7} onPress={handleResendPress}>
                  <Text style={styles.resendClickableText}>
                    Re-send code
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: Platform.OS === 'android' ? 24 : 8,
    paddingBottom: 24,
  },
  backgroundGradients: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  topRightGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.9,
    height: height * 0.4,
    borderRadius: 200,
  },
  bottomRightGlow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.9,
    height: height * 0.4,
    borderRadius: 200,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 20,
  },
  backButton: {
    padding: 4,
    marginLeft: -4,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 12,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textDark,
    lineHeight: 24,
    marginBottom: 32,
    maxWidth: '85%',
  },
  // 4 OTP Boxes Container
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 40,
  },
  otpBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  otpBoxActive: {
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  otpInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    padding: 0,
  },
  // Continue Primary Button matching EventHub UI
  continueButton: {
    height: 58,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
    position: 'relative',
    marginHorizontal: 4,
    marginBottom: 24,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  arrowCircle: {
    position: 'absolute',
    right: 14,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3D56F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Resend Countdown
  resendContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  resendText: {
    fontSize: 15,
    color: COLORS.textDark,
  },
  timerText: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  resendClickableText: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
