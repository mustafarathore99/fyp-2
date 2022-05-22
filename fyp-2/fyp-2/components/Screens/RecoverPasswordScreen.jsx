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
import { styles } from '../styles/styles';

const image = { uri: "https://img.wallpapersafari.com/desktop/1920/1080/34/57/2JLQkE.jpg"}





export function RecoverPasswordScreen({ route, navigation }) {
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    
    const onFooterLinkPress = () => {
      navigation.navigate('Registration');
    };
  
    const onLoginPress = () => {
      navigation.navigate('App');
    };
  
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
       
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Image
            style={styles.logo}
            source={{uri:
              'https://www.pinclipart.com/picdir/big/554-5540530_growing-clipart.png'
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Recovery E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Mobile Number"
            onChangeText={(text) => setmobile(text)}
            value={mobile}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={onLoginPress}>
            <Text style={styles.buttonTitle}>Reset Password</Text>
          </TouchableOpacity>
           <View style={styles.footerView}>
           
              <Text
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={styles.footerLink}>
                Go back to Login Screen
              </Text>
           
          </View>
          
        </ScrollView>
        
      </View>
      </ImageBackground>
    );
  }
  