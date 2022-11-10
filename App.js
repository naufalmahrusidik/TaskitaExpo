import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { onLoadFont } from './App/assets/fonts';
import store from './App/Store'
import { Provider } from 'react-redux'

export default App = () => {
  const loaded = onLoadFont()

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
