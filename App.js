import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Onboarding1Screen from './src/screens/Onboarding1Screen';
import Onboarding2Screen from './src/screens/Onboarding2Screen';
import Onboarding3Screen from './src/screens/Onboarding3Screen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import VerificationScreen from './src/screens/VerificationScreen';

export default function App() {
  // Navigation State: 'splash' -> 'onboarding1' -> 'onboarding2' -> 'onboarding3' -> 'signin' -> 'signup' -> 'resetPassword' -> 'verification'
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [resetEmail, setResetEmail] = useState('abc@email.com');

  useEffect(() => {
    // Tự động chuyển từ Màn Splash sang Màn Onboarding 1 sau 2.5 giây
    const timer = setTimeout(() => {
      setCurrentScreen('onboarding1');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Màn Splash Screen (Logo EventHub)
  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  // Màn Onboarding 1: Explore Upcoming and Nearby Events
  if (currentScreen === 'onboarding1') {
    return (
      <Onboarding1Screen
        onNext={() => setCurrentScreen('onboarding2')}
        onSkip={() => setCurrentScreen('signin')}
        onSelectStep={(step) => {
          if (step === 2) setCurrentScreen('onboarding2');
          if (step === 3) setCurrentScreen('onboarding3');
        }}
      />
    );
  }

  // Màn Onboarding 2: Web Have Modern Events Calendar Feature
  if (currentScreen === 'onboarding2') {
    return (
      <Onboarding2Screen
        onPrev={() => setCurrentScreen('onboarding1')}
        onNext={() => setCurrentScreen('onboarding3')}
        onSkip={() => setCurrentScreen('signin')}
        onSelectStep={(step) => {
          if (step === 1) setCurrentScreen('onboarding1');
          if (step === 3) setCurrentScreen('onboarding3');
        }}
      />
    );
  }

  // Màn Onboarding 3: To Look Up More Events or Activities Nearby By Map
  if (currentScreen === 'onboarding3') {
    return (
      <Onboarding3Screen
        onPrev={() => setCurrentScreen('onboarding2')}
        onNext={() => setCurrentScreen('signin')}
        onSkip={() => setCurrentScreen('signin')}
        onSelectStep={(step) => {
          if (step === 1) setCurrentScreen('onboarding1');
          if (step === 2) setCurrentScreen('onboarding2');
        }}
      />
    );
  }

  // Màn Sign In (Đăng nhập)
  if (currentScreen === 'signin') {
    return (
      <SignInScreen
        onSignIn={(data) => {
          console.log('Sign in pressed:', data);
        }}
        onSignUp={() => {
          setCurrentScreen('signup');
        }}
        onForgotPassword={() => {
          setCurrentScreen('resetPassword');
        }}
        onGoogleSignIn={() => {
          console.log('Google login pressed');
        }}
        onFacebookSignIn={() => {
          console.log('Facebook login pressed');
        }}
      />
    );
  }

  // Màn Sign Up (Đăng ký)
  if (currentScreen === 'signup') {
    return (
      <SignUpScreen
        onBack={() => setCurrentScreen('signin')}
        onSignIn={() => setCurrentScreen('signin')}
        onSignUp={(data) => {
          console.log('Sign up pressed:', data);
        }}
        onGoogleSignUp={() => {
          console.log('Google signup pressed');
        }}
        onFacebookSignUp={() => {
          console.log('Facebook signup pressed');
        }}
      />
    );
  }

  // Màn Reset Password (Quên mật khẩu)
  if (currentScreen === 'resetPassword') {
    return (
      <ResetPasswordScreen
        initialEmail={resetEmail}
        onBack={() => setCurrentScreen('signin')}
        onSend={(email) => {
          setResetEmail(email);
          setCurrentScreen('verification');
        }}
      />
    );
  }

  // Màn Verification (Xác thực mã OTP)
  if (currentScreen === 'verification') {
    return (
      <VerificationScreen
        email={resetEmail}
        onBack={() => setCurrentScreen('resetPassword')}
        onContinue={(otp) => {
          console.log('OTP confirmed:', otp);
        }}
        onResend={() => {
          console.log('Resend OTP code');
        }}
      />
    );
  }

  return <SplashScreen />;
}

