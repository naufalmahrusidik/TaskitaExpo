import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { onLoadFont } from './App/assets/fonts';

export default App = () => {
  const loaded = onLoadFont()

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
