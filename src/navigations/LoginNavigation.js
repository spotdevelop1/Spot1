import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import LoginPrueba from '../views/LoginPrueba';
import RegisterPrueba from '../views/RegisterPrueba';
import Register from '../views/Register';
import Splash from '../views/Splash';
import PreLoading from '../views/PreLoading'; 
const Stack = createStackNavigator();
const LoginNavigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="PreLoading" component={PreLoading}/>
      <Stack.Screen name="Login" component={LoginPrueba}/>
      {/* <Stack.Screen name="Login" component={Login}/> */}
      <Stack.Screen name="Registro" component={RegisterPrueba} />
      {/* <Stack.Screen name="Registro" component={Register} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigations;