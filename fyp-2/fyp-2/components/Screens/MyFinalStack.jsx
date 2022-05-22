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
import {LoginScreen  } from './LoginScreen';
import { RegScreen } from './RegScreen';
import { RecoverPasswordScreen } from './RecoverPasswordScreen';
import { MyDrawer } from './MyDrawerNavigator';


const image = { uri: "https://img.wallpapersafari.com/desktop/1920/1080/34/57/2JLQkE.jpg"}



const finalStack = createStackNavigator();
export function MyfinalStack() {
  return (
    <finalStack.Navigator>
      <finalStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <finalStack.Screen
        name="Registration"
        component={RegScreen}
        options={{ headerShown: false }}
      />
      <finalStack.Screen
        name="RecoverPassword"
        component={RecoverPasswordScreen}
        options={{ headerShown: false }}
      />
      <finalStack.Screen
        name="App"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </finalStack.Navigator>
  );
}

