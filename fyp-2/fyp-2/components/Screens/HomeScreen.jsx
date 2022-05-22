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








export function HomeScreen({ route, navigation }) {
    const [search,setSearch]=useState('');
    const categories=[{name:"PLANTS",icon:"leaf"},{name:"TOOLS",icon:"tools"},{name:"FERTILIZERS",icon:"leaf"},{name:"SEEDS",icon:"seed"}];
    const services=["BLOGS","FORUM","VIDEOS","RENTING","DESIGNING"];
    return (
       <View  resizeMode="cover" style={styles.image}>
      <View style={{display:'flex', flex: 0.5,flexDirection:'row',justifyContent:'space-evenly' }}>
       <View style={{display:'flex',flex:1,justifyContent:'center'}}>
       <TouchableOpacity style={{paddingTop:20, paddingLeft:7}} onPress={()=>navigation.toggleDrawer()}>
      <Icon2 name="menu" size={35} color="black" />
      </TouchableOpacity>
       </View>
  
       <View style={{display:'flex',flex:2,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'green', paddingTop:20}}>
       GARDEN MART
       </Text>
       </View>
  
       <View style={{display:'flex',flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center'}}>
       
       </Text>
       </View>
  
      </View>
      <View style={{display:'flex',flex:0.7,backgroundColor:'',borderWidth:0}}>
       <SearchBar
          placeholder="Type Here..." lightTheme='true' round='false'
           containerStyle={{display:'flex',flex:0.5,backgroundColor:'',borderWidth:0,}} 
          inputContainerStyle={{display:'flex',flex:0.1,}}
          onChangeText={setSearch}
          value={search}
          />
      </View>
      <View style={{display:'flex',flex:2,}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>
      Categories
      </Text>
      <View style={{display:'flex',flex:1,flexDirection:'row'}}>
      {categories.map((item)=>(
        
        <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => { 
          if(item.name=="PLANTS"){
          navigation.navigate('ProductStack');
          }
          if(item.name=="TOOLS"){
            navigation.navigate('ProductStack', {
              screen: 'TOOLS'
            });
          }
          if (item.name=="FERTILIZERS"){
            navigation.navigate('ProductStack', {
              screen: 'FERTILIZERS'
            });
          }
          if (item.name=="SEEDS"){
            navigation.navigate('ProductStack', {
              screen: 'SEEDS'
            });
          }
        }}>
        <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        
        <Icon3 name={item.icon} size={25}/>      
   
        <Text style={{textAlign:'center', fontSize:12}}>
        {item.name}
        </Text>
        </View>
        </TouchableOpacity>
  
        ))}
        </View>
      </View>
      
      <View style={{display:'flex',flex:3}}>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>
      Services
      </Text>
      <View style={{display:'flex',flex:1,justifyContent:'center'}}>
        <View style={{display:'flex',flex:1,flexDirection:'row'}}>

        <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {
                navigation.navigate('BlogStack');
              }}>
         
          
          <Icon3 name="blogger" size={25}/>
          
          <Text style={{textAlign:'center',fontSize:12}}> Blogs </Text>
          
          
          </TouchableOpacity>

          <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {
            navigation.navigate('BlogStack',{
              screen: 'Forums'
            });
              }}>
          <Icon3 name="forum" size={25}/>
          <Text style={{textAlign:'center',fontSize:12}}>
          Forums
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {
                navigation.navigate('VideosStack');
              }}>
         
          
         <Icon3 name="video" size={25}/> 
          
          <Text style={{textAlign:'center',fontSize:12}}> Videos </Text>
          
          
          </TouchableOpacity>
  
         
        </View>
      </View>
      <View style={{display:'flex',flex:1,justifyContent:'center'}}>
        <View style={{display:'flex',flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {
            navigation.navigate('BlogStack',{
              screen: 'Renting'
            });
              }}> 
          <Icon3 name="cash-usd" size={25}/>
          <Text style={{textAlign:'center',fontSize:12}}>
         Renting
          </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => {
            navigation.navigate('BlogStack',{
              screen: 'Designing'
            });
              }}>
          <Icon3 name="format-paint" size={25}/>
          <Text style={{textAlign:'center',fontSize:12}}>
         Designing
          </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
      
      </View>
      </View>
    );
  }
  