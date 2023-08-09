import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Panel from '../views/Panel';
import Recargas from '../views/Recargas';
import RechargePrueba from '../views/RechargePrueba';
import EstadoCuenta from '../views/EstadoCuenta';
import { Image, Platform, StyleSheet, Text, TurboModuleRegistry } from 'react-native';
import {globalStyle} from '../styles';
import Icon  from 'react-native-vector-icons/Ionicons';

const BottomTabIos = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const Logo = () =>{
  return(
    <Image source={require('../../assets/img/CEL-2.png')}/>
  );
}



const MyTabs = () =>{

  
  return Platform.OS === 'ios'
          ? <TabsIos/>
          : <TabsIndroid/>
}

const color = '#000';


const TabsIndroid= () => {
  return (
    <Tab.Navigator sceneAnimationEnabled={true} screenOptions={({route}) => ({
      tabBarIcon: ({}) =>{
        let iconName = ''
        switch (route.name) {
          case 'Panel':
            iconName = 'home-outline'         
            break;
          case 'Recargas':
            iconName = 'cash-outline'
            break;
          case 'EstadoCuenta':
            iconName = 'document-text-outline'
            break;
        }
      return <Icon color={color} name={iconName} size={20}  />
      },
      
    })} initialRouteName="Home"
      activeColor="#2D4C89"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tab.Screen  name="Panel"  component={Panel} />
      {/* <Tab.Screen name="Recargas" component={Recargas} /> */}
      <Tab.Screen name="RechargePrueba"  component={RechargePrueba} />
      <Tab.Screen name="EstadoCuenta" component={EstadoCuenta } />
    </Tab.Navigator>
  );
}



const TabsIos = () => {
  return (
        <BottomTabIos.Navigator  sceneAnimationEnabled={true} screenOptions={({route}) => ({ 
      tabBarIcon: ({}) =>{
        let iconName = ''
        switch (route.name) {
          case 'Panel':
            iconName = 'home-outline'         
            break;
          case 'Recargas':
            iconName = 'cash-outline'
            break;
          case 'EstadoCuenta':
            iconName = 'document-text-outline'
            break;
        }
      return <Icon color={color} name={iconName} size={20}  />
      },
      
    })}>
      <BottomTabIos.Screen  name="Panel" options={{headerShown:false}} component={Panel} />
      {/* <BottomTabIos.Screen name="Recargas" component={Recargas} /> */}
      <Tab.Screen name="Recargas" options={{headerShown:false}}  component={RechargePrueba} />
      <BottomTabIos.Screen name="EstadoCuenta" options={{headerShown:false}}  component={EstadoCuenta } />
    </BottomTabIos.Navigator>
  );
}

const styles = StyleSheet.create({
  color:{...globalStyle.colorPrimary}
})
export default MyTabs