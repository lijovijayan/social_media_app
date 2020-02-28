import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomePage } from './views/home';
import { ProfilePage } from './views/profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchPage } from './views/search';
import { MainPage } from './views/main';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
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
      activeColor="red"
      barStyle={{
        backgroundColor: 'white',
        elevation: 12,
        borderTopWidth: 0,
      }}
    >
      <Tab.Screen name='Home' options={{
        tabBarLabel: 'Home',
        tabBarIcon: (props: { focused: boolean, color: string }) => (
          <Icon name="rocket" size={25} color={props.focused ? props.color : 'blue'} />
        ),
      }} component={HomePage} />
      <Tab.Screen name='Search'
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <Icon name="search" size={25} color={props.focused ? props.color : 'blue'} />
          ),
        }} component={SearchPage} />
      <Tab.Screen name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <Icon name="users" size={25} color={props.focused ? props.color : 'blue'} />
          ),
        }}
        component={ProfilePage} />
    </Tab.Navigator>
  );
}