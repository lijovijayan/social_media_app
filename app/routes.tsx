import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import React, { lazy } from 'react';
import { HomePage } from './views/home';
import { ProfilePage } from './views/profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchPage } from './views/search';
import { MainPage } from './views/main';
import { NotificationPage } from './views/notification';
import { theme } from './conf';
import { LoginPage } from './views/login';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
    >
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
      />
    </Stack.Navigator>
  );
}
export function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff00bb"
      inactiveColor={theme.primaryColor}
      barStyle={{
        backgroundColor: 'white',
        elevation: 12,
        borderTopWidth: 0,
      }}
    >
      <Tab.Screen name='Home' options={{
        tabBarLabel: 'Home',
        tabBarIcon: (props: { focused: boolean, color: string }) => (
          <MaterialCommunityIcons style={{ color: props.color }} size={28} name={'home'} />
        ),
      }} component={HomePage} />
      <Tab.Screen name='Search'
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <Icon name="search" size={23} color={props.color} />
          ),
        }} component={SearchPage} />
      <Tab.Screen name="Notification"
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <MaterialCommunityIcons style={{ color: props.color }} size={25} name={'bell'} />
          ),
        }}
        component={NotificationPage} />
      <Tab.Screen name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <Icon name="user-circle-o" size={23} color={props.color} />
          ),
        }}
        component={ProfilePage} />
    </Tab.Navigator>
  );
}