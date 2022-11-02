import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
  SettingsScreen
} from './Pages';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color, size }) => (
            <Icon name="airplane" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }} />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Icon name="alert" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterErrorScreen" component={RegisterErrorScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};