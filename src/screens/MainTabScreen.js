import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen"
import AboutScreen from "./AboutScreen"
import NotificationsScreen from "./NotificationsScreen"
import ProfileScreen from "./ProfileScreen"
import SettingsScreen from "./SettingsScreen"


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator()
const AboutStack = createStackNavigator()

const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: "#6046ff",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor: "#c90000",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: "#0071bc",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarColor: "#41135e",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MainTabScreen

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
            <Icon.Button 
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
            backgroundColor: "#6046ff"
          },
          headerTintColor: "#fff"
        }}
      >
          <AboutStack.Screen 
          name="About" 
          component={AboutScreen}
          options={{ title: "About Us", 
          headerLeft: () => (
            <Icon.Button 
              name="ios-menu" 
              size={20} 
              color="white"
              backgroundColor="#6046ff"
              style={{ marginLeft: 10 }} 
              onPress={() => navigation.openDrawer()} />
          )
        }}
          />
      </AboutStack.Navigator>
    )
  }
