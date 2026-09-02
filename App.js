import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  useEffect(() => {
    // Tự động chuyển từ Màn 1 (Splash) sang Màn 2 (Onboarding) sau 2.5 giây
    const timer = setTimeout(() => {
      setCurrentScreen('onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  return <OnboardingScreen />;
}
