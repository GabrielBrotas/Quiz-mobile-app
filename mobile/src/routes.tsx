import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Questions from './pages/Questions';
import EndGame from './pages/EndGame';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#8257E5'}
        }}
    >
        <Screen name="Landing" component={Landing} />
        <Screen name="Questions" component={Questions} />
        <Screen name="EndGame" component={EndGame} />
    </Navigator>
  </NavigationContainer>
);

export default Routes
