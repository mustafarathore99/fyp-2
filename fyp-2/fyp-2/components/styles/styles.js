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


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
    },
    image: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#e0ffff',
    },
  
    logo: {
      flex: 1,
      height: 120,
      width: 90,
      alignSelf: 'center',
      margin: 30,
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
      width:'81%'
    },
    button: {
      alignSelf: 'stretch',
      backgroundColor: 'green',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
    },
    button2: {
      alignSelf: 'center',
      backgroundColor: 'red',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
    },
    drawerbutton: {
      width: '81%',
      backgroundColor: 'green',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    startbutton: {
      width: '90%',
      backgroundColor: 'red',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTitle: {
      textAlign:'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footerView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
    },
    footerText: {
      fontSize: 16,
      color: '#2e2e2d',
    },
    footerLink: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 16,
    },
    links:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    head:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
    }
  });