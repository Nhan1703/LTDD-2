import React, { useState } from 'react';
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
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function ResetPasswordScreen({
  onBack,
  onSend,
  title = 'Resset Password', // Giữ đúng chữ 'Resset Password' theo Figma, có thể đổi 'Reset Password'
  initialEmail = '',
}) {
  const [email, setEmail] = useState(initialEmail);
  const [emailFocused, setEmailFocused] = useState(false);

  const handleSend = () => {
    const targetEmail = email.trim() || 'abc@email.com';
    if (onSend) {
      onSend(targetEmail);
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
            <Text style={styles.heading}>{title}</Text>

            {/* Subtitle Description */}
            <Text style={styles.subtitle}>
              Please enter your email address to request a password reset
            </Text>

            {/* Email Input Field */}
            <View style={styles.formContainer}>
              <View
                style={[
                  styles.inputWrapper,
                  emailFocused && styles.inputWrapperFocused,
                ]}
              >
                <Feather
                  name="mail"
                  size={20}
                  color={emailFocused ? COLORS.primary : COLORS.iconGray}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="abc@email.com"
                  placeholderTextColor={COLORS.textGray}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
              </View>

              {/* SEND Primary Button */}
              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.sendButton}
                onPress={handleSend}
              >
                <Text style={styles.sendButtonText}>SEND</Text>
                <View style={styles.arrowCircle}>
                  <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
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
    lineHeight: 23,
    marginBottom: 26,
    maxWidth: '85%',
  },
  formContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  inputWrapperFocused: {
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    paddingVertical: 0,
  },
  // Send Button matching EventHub Primary Button
  sendButton: {
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
    marginTop: 36,
  },
  sendButtonText: {
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
});
