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
import { GoogleIcon, FacebookIcon } from '../components/SocialIcons';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen({
  onBack,
  onSignUp,
  onSignIn,
  onGoogleSignUp,
  onFacebookSignUp,
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp({ fullName, email, password, confirmPassword });
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
                onPress={onBack || onSignIn}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              >
                <Feather name="arrow-left" size={24} color={COLORS.textDark} />
              </TouchableOpacity>
            </View>

            {/* Screen Heading */}
            <Text style={styles.heading}>Sign up</Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              {/* Full Name Input */}
              <View
                style={[
                  styles.inputWrapper,
                  nameFocused && styles.inputWrapperFocused,
                ]}
              >
                <Feather
                  name="user"
                  size={20}
                  color={nameFocused ? COLORS.primary : COLORS.iconGray}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Full name"
                  placeholderTextColor={COLORS.textGray}
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={fullName}
                  onChangeText={setFullName}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                />
              </View>

              {/* Email Input */}
              <View
                style={[
                  styles.inputWrapper,
                  styles.inputSpacing,
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
                  styles.inputSpacing,
                  passwordFocused && styles.inputWrapperFocused,
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

              {/* Confirm Password Input */}
              <View
                style={[
                  styles.inputWrapper,
                  styles.inputSpacing,
                  confirmPasswordFocused && styles.inputWrapperFocused,
                ]}
              >
                <Feather
                  name="lock"
                  size={20}
                  color={confirmPasswordFocused ? COLORS.primary : COLORS.iconGray}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Confirm password"
                  placeholderTextColor={COLORS.textGray}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onFocus={() => setConfirmPasswordFocused(true)}
                  onBlur={() => setConfirmPasswordFocused(false)}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.eyeButton}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Feather
                    name={showConfirmPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.iconGray}
                  />
                </TouchableOpacity>
              </View>

              {/* Sign Up Primary Button */}
              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.signUpButton}
                onPress={handleSignUp}
              >
                <Text style={styles.signUpButtonText}>SIGN UP</Text>
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
                onPress={onGoogleSignUp}
              >
                <GoogleIcon size={24} />
                <Text style={styles.socialButtonText}>Login with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.socialButton}
                onPress={onFacebookSignUp}
              >
                <FacebookIcon size={24} />
                <Text style={styles.socialButtonText}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Footer Link */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={onSignIn}>
                <Text style={styles.signInLink}>Signin</Text>
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 16,
  },
  backButton: {
    padding: 4,
    marginLeft: -4,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 22,
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
  inputSpacing: {
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
  // Primary Sign Up Button
  signUpButton: {
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
    marginTop: 26,
  },
  signUpButtonText: {
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
    marginTop: 8,
    paddingBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  signInLink: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
