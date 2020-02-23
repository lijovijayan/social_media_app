import React from 'react';
import { HomePage } from './app/views/home';
import { ProfilePage } from './app/views/profile';
import { View, ScrollView } from 'react-native';
import { BottomNavBar } from './app/sections/bottom_nav_bar';
const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignSelf: "stretch"}}>
      <ScrollView>
        <ProfilePage username='myName' />
        <HomePage />
      </ScrollView>
        <BottomNavBar />
    </View>
  );
};
export default App;

const myName = "lijo";