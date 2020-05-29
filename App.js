import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackScreen from './src/screens/RootStackScreen'

import MainTabScreen from "./src/screens/MainTabScreen"
import DrawerContent from "./src/components/DrawerContent"
import BookmarkScreen from "./src/screens/BookmarkScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import SupportScreen from "./src/screens/SupportScreen"

const Drawer = createDrawerNavigator()

export default function RootStack() {
  return (
      <NavigationContainer>
        <RootStackScreen/>
      {/*
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Home" component={MainTabScreen}/>
            <Drawer.Screen name="Bookmarks" component={BookmarkScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
            <Drawer.Screen name="Support" component={SupportScreen}/>
        </Drawer.Navigator>
      */}
      </NavigationContainer>  
  )
}