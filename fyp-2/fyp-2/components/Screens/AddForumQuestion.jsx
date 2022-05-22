import React, { useState, useEffect, useRef} from 'react';
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
  FlatList,
  Dimensions, Link 
  
} from 'react-native';
import { styles } from '../styles/styles';
import COLORS from '../Screens/components/colors';
import Seprator from './components/Separator'
import { Card } from 'react-native-elements'


export function AddForumQuestion({route,navigation}){
    return(
        
        <View style={{alignContent:'center',alignItems:'center',justifyContent:'center', }}>
            <View style={{ marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Ask Your </Text>
          <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
            Question
          </Text>
        </View>
      </View>
            <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Enter Your Name"                    
        />
        <TextInput
      style={{height: 300,
        borderRadius: 5,
        overflow:'scroll',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        paddingRight:16,
        width:'81%'}}
      underlineColorAndroid="transparent"
      placeholder="Ask Your Question"
      numberOfLines={1000}
      multiline={true}
      
    />

    <Button color="#00B761" title="Ask Question" onPress={()=>{navigation.navigate('BlogStack', {
              screen: 'Forums'
            })}}></Button>
        </View>
    )
}


