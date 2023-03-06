/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppProvider} from 'hooks';
import {AppRoutes} from 'routes/app.routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
