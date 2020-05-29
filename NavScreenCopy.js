import React from "react"
import Icons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const HomeStack = createStackNavigator()
const AboutStack = createStackNavigator()

const Drawer = createDrawerNavigator()
const Tab = createMaterialBottomTabNavigator()

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{ 
        headerStyle: {
          backgroundColor: "#6046ff"
        },
        headerTintColor: "#fff"
      }}
    >
        <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: "Home", headerLeft: () => (
          <Icons.Button 
            name="ios-menu" 
            size={25} 
            color="white"
            backgroundColor="#6046ff"
            style={{ marginLeft: 10 }} 
            onPress={() => navigation.openDrawer()} />
        )}}

        />
    </HomeStack.Navigator>
  )
}

const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      screenOptions={{ 
        headerStyle: {
          backgroundColor: "#43a047"
        },
        headerTintColor: "#fff"
      }}
    >
        <AboutStack.Screen 
        name="About" 
        component={AboutScreen}
        options={{ title: "About Us", 
        headerLeft: () => (
          <Icons.Button 
            name="ios-menu" 
            size={20} 
            color="white"
            backgroundColor="#43a047"
            style={{ marginLeft: 10 }} 
            onPress={() => navigation.openDrawer()} />
        )
      }}
        />
    </AboutStack.Navigator>
  )
}

export default function RootStack() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStackScreen}/>
            <Drawer.Screen name="About" component={AboutStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
  )
}