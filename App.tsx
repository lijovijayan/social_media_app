import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './app/routes';
const App = () => {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  );
};
export default App;
