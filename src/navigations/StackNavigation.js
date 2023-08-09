import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../views/Splash';
const Stack = createStackNavigator();
const SplashNavigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default SplashNavigations;