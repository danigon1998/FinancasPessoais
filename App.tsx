import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            backgroundColor={"#F0F4FF"}
            barStyle={"dark-content"}
          />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

