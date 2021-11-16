import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      <OfflineNotice />
    </>
  );
}
