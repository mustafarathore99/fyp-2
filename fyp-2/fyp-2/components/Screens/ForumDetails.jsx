import React, { useState, useEffect, useRef } from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Screens/components/colors';
import forumqs from '../Screens/components/forumqs';
import { styles } from '../styles/styles';
const width = Dimensions.get('window').width/2;

const avatarsize=65;
const spacing=20;
export function ForumDetails ({navigation,route}){
    const {forumq} = route.params;

    

    return(
        <SafeAreaView
        style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
        <View style={style.header}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to </Text>
            <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
              Forums
            </Text>
          </View>
        </View>
        <View>
        <TouchableOpacity
            activeOpacity={0.8}
           >
            <View style={style.card}>
                <View style={{flexDirection:'row'}}>
                <Image
                  source={forumq.img}
                  style={{width:avatarsize,height:avatarsize,borderRadius:avatarsize,marginRight:spacing/2}}
                />
              
    
              <Text style={{fontWeight: 'bold', fontSize: 22, fontWeight:'700',marginTop: 10}}>
                {forumq.name}
              </Text>
              <Text style={{fontSize: 22, color: COLORS.green, fontWeight: 'bold',marginTop: 10 }}>
                Asked 
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
              </View>
              <View>
              <Text style={{fontSize: 19}}>
                  {forumq.about}
                </Text>
              </View>
            
             <View style={{flexDirection:'row'}}>
             <TextInput
          style={{ height: 48,
            borderRadius: 15,
            overflow: 'hidden',
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 1,
            marginRight: 30,
            paddingLeft: 16,
            width:'80%',
        borderWidth:1,
    borderColor:'#00B761'}}
          placeholderTextColor="#aaaaaa"
          placeholder="Leave a Reply "                    
        />

    <Icon style={{paddingTop:15 , color:'#00B761'}} name="send" size={30} />
            </View> 
            </View>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    )

}



const style = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
    categoryTextSelected: {
      color: COLORS.green,
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: COLORS.green,
    },
    card: {
      height: 275,
      backgroundColor: COLORS.light,
      width:370,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 30,
      padding: 15,
      marginTop:10
    },
    header: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      color: COLORS.dark,
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      borderRadius: 10,
      backgroundColor: COLORS.green,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });