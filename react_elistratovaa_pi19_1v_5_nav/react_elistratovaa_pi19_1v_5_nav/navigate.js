import React from 'react';
import Start from './components/Start';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Start' }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: 'SecondScreen' }}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{ title: 'ThirdScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
