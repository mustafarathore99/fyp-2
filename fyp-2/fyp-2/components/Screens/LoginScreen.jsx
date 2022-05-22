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



export function LoginScreen({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          placeholder="E-mail"
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
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('Registration');
              }}
              style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
         <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Forgot Password?{' '}
            <Text
              onPress={() => {
                navigation.navigate('RecoverPassword');
              }}
              style={styles.footerLink}>
              Reset Here
            </Text>
          </Text>
        </View>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
           Sign In with: {'\n\n'}
           <View style={styles.links}>
            <Icon name="facebook-official" size={25} color="blue" /><Text>&emsp;&emsp;&emsp;</Text>
            <Icon name="google" size={25} color="red" />
           </View>
          </Text>
        </View>
      </ScrollView>
      
    </View>
    </ImageBackground>
  );
}


