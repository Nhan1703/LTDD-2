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
  Animated,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import EventHubLogo from '../components/EventHubLogo';
import { GoogleIcon, FacebookIcon } from '../components/SocialIcons';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

// Custom Toggle Switch Component
function CustomSwitch({ value, onValueChange }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onValueChange(!value)}
      style={[
        styles.switchContainer,
        value ? styles.switchActive : styles.switchInactive,
      ]}
    >
      <View
        style={[
          styles.switchThumb,
          value ? styles.switchThumbActive : styles.switchThumbInactive,
        ]}
      />
    </TouchableOpacity>
  );
}

export default function SignInScreen({
  onSignIn,
  onSignUp,
  onForgotPassword,
  onGoogleSignIn,
  onFacebookSignIn,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

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
            {/* Top Logo Section */}
            <View style={styles.logoSection}>
              <EventHubLogo vertical={true} size={58} />
            </View>

            {/* Screen Heading */}
            <Text style={styles.heading}>Sign in</Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              {/* Email Input */}
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

              {/* Password Input */}
              <View
                style={[
                  styles.inputWrapper,
                  passwordFocused && styles.inputWrapperFocused,
                  styles.passwordMargin,
                ]}
              >
                <Feather
                  name="lock"
                  size={20}
                  color={passwordFocused ? COLORS.primary : COLORS.iconGray}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Your password"
                  placeholderTextColor={COLORS.textGray}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.iconGray}
                  />
                </TouchableOpacity>
              </View>

              {/* Remember Me & Forgot Password Row */}
              <View style={styles.optionsRow}>
                <View style={styles.rememberMeContainer}>
                  <CustomSwitch
                    value={rememberMe}
                    onValueChange={setRememberMe}
                  />
                  <Text style={styles.rememberMeText}>Remember Me</Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onForgotPassword}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Primary Button */}
              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.signInButton}
                onPress={() => onSignIn && onSignIn({ email, password, rememberMe })}
              >
                <Text style={styles.signInButtonText}>SIGN IN</Text>
                <View style={styles.arrowCircle}>
                  <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                </View>
              </TouchableOpacity>

              {/* OR Divider */}
              <View style={styles.orContainer}>
                <Text style={styles.orText}>OR</Text>
              </View>

              {/* Social Login Buttons */}
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.socialButton}
                onPress={onGoogleSignIn}
              >
                <GoogleIcon size={24} />
                <Text style={styles.socialButtonText}>Login with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.socialButton}
                onPress={onFacebookSignIn}
              >
                <FacebookIcon size={24} />
                <Text style={styles.socialButtonText}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Footer Link */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Don’t have an account? </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={onSignUp}>
                <Text style={styles.signUpLink}>Sign up</Text>
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
    paddingTop: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
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
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 20,
    textAlign: 'left',
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
  passwordMargin: {
    marginTop: 18,
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
  eyeButton: {
    padding: 6,
    marginLeft: 6,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 28,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 14,
    color: COLORS.textDark,
    marginLeft: 9,
    fontWeight: '400',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '400',
  },
  // Custom Switch Styles
  switchContainer: {
    width: 34,
    height: 20,
    borderRadius: 10,
    padding: 2,
    justifyContent: 'center',
  },
  switchActive: {
    backgroundColor: COLORS.primary,
  },
  switchInactive: {
    backgroundColor: '#D9D9D9',
  },
  switchThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  switchThumbInactive: {
    alignSelf: 'flex-start',
  },
  // Primary Button
  signInButton: {
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
  },
  signInButtonText: {
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
  orContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textLight,
  },
  // Social Buttons
  socialButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 4,
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
    elevation: 3,
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.textDark,
    marginLeft: 14,
  },
  // Footer
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
