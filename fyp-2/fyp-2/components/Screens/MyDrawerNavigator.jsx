import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { FaFacebook } from "react-icons/fa";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements';
import { MyTabs } from './MyTabNavigator';
import { WishListScreen } from './WishListScreen';
import { HelpScreen } from './HelpScreen';
import { SettingsScreen } from './SettingsScreen';
import { PolicyScreen } from './PolicyScreen';
import { MyfinalStack } from './MyFinalStack';



const image = { uri: "https://img.wallpapersafari.com/desktop/1920/1080/34/57/2JLQkE.jpg"}


const Drawer = createDrawerNavigator();

export function MyDrawer({ route, navigation }) {
  return (
    <Drawer.Navigator       
    
       screenOptions={{
    drawerStyle: {
      backgroundColor: '#a5dcba',
      width: 240,
    },
    drawerActiveBackgroundColor:'#c9ecd7',
    drawerActiveTintColor:'black'
  }}>
      <Drawer.Screen name="Home" component={MyTabs} options={{headerShown:false}} />
      <Drawer.Screen name="Orders" component={WishListScreen} options={{headerShown:false}} />
      <Drawer.Screen name="WishList" component={WishListScreen} options={{headerShown:false}} />
      <Drawer.Screen name="Help Center" component={HelpScreen} options={{headerShown:false}} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
      <Drawer.Screen name="Terms and Policies" component={PolicyScreen} options={{headerShown:false}} />
      <Drawer.Screen name="Logout" component={MyfinalStack} options={{headerShown:false}} />
      

    </Drawer.Navigator>
  );
}
