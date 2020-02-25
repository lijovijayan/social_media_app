import 'react-native-gesture-handler';
import React from 'react';
import { MainPage } from './app/views/main';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <MainPage></MainPage>
    </NavigationContainer>);
};
export default App;