import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomePage } from './views/home';
import { ProfilePage } from './views/profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchPage } from './views/search';
import { MainPage } from './views/main';
import { NotificationPage } from './views/notification';

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
          <MaterialCommunityIcons style={{color: props.focused ? props.color : 'blue'}} size={28} name={'home'} />
        ),
      }} component={HomePage} />
      <Tab.Screen name='Search'
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <Icon name="search" size={23} color={props.focused ? props.color : 'blue'} />
          ),
        }} component={SearchPage} />
      <Tab.Screen name="Notification"
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: (props: { focused: boolean, color: string }) => (
            <MaterialCommunityIcons style={{color: props.focused ? props.color : 'blue'}} size={25} name={'bell'} />
          ),
        }}
        component={NotificationPage} />
        <Tab.Screen name="Profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: (props: { focused: boolean, color: string }) => (
              <Icon name="user-circle-o" size={23} color={props.focused ? props.color : 'blue'} />
            ),
          }}
          component={ProfilePage} />
    </Tab.Navigator>
  );
}