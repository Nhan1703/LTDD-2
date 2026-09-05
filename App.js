import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Onboarding1Screen from './src/screens/Onboarding1Screen';
import Onboarding2Screen from './src/screens/Onboarding2Screen';
import Onboarding3Screen from './src/screens/Onboarding3Screen';

export default function App() {
  // Navigation State: 'splash' -> 'onboarding1' -> 'onboarding2' -> 'onboarding3'
  const [currentScreen, setCurrentScreen] = useState('splash');

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
        onSkip={() => setCurrentScreen('onboarding3')}
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
        onSkip={() => setCurrentScreen('onboarding3')}
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
        onNext={() => setCurrentScreen('onboarding1')}
        onSkip={() => setCurrentScreen('onboarding1')}
        onSelectStep={(step) => {
          if (step === 1) setCurrentScreen('onboarding1');
          if (step === 2) setCurrentScreen('onboarding2');
        }}
      />
    );
  }

  return <SplashScreen />;
}
