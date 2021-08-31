import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screen/Homescreen'
import Detailscreen from '../screen/Detailscreen'

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, animationEnabled: false }} initialRouteName="Homescreen">
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Detailscreen" component={Detailscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
