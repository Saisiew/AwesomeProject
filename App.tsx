/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './domains/Home';
import NetStatus from './domains/NetStatus';
import Location from './domains/Location';
import Orientation from './domains/Orientation';
import SWAPIPlay from './domains/SWAPIPlay';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NetStatus" component={NetStatus} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Orientation" component={Orientation} />
        <Stack.Screen name="SWAPIPlay" component={SWAPIPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
