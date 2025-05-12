import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from '@utils/NavigationUtils';
import DrawerNavigator from './DrawerNavigation';
import SplashScreen from '@screens/SplashScreen';
import { StatusBar } from 'react-native';



const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar hidden={true}/>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'fade'}} >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
