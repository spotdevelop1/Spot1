import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Stack from './Stack';
// import {Settings} from '../views/Settings';
import Profile from "../views/Profile";
import MyTabs from "./BottomNavigation";


const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="MyTabs" options={{title: 'SpotMobile', headerStyle:{backgroundColor:'red'}}} component={MyTabs} />
      <Drawer.Screen name="Profile" options={{title: 'SpotMobile'}} component={Profile} />
    </Drawer.Navigator>
  );
}