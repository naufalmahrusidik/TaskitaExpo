import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen, 
  SplashScreen, 
  LoginScreen,
  RegisterScreen,
  RegisterSuccessScreen,
  RegisterErrorScreen,
  TaskScreen,
  ReportScreen,
  SettingsScreen} from './Pages';

const Tab = createBottomTabNavigator();  
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Task" component={TaskScreen} />
          <Tab.Screen name="Report" component={ReportScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  )
}

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterErrorScreen" component={RegisterErrorScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
