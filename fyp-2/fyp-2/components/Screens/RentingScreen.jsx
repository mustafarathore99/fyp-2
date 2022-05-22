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
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Screens/components/colors';
const width = Dimensions.get('window').width / 2 - 30;


export function RentingScreen ({route,navigation}){
  const [Blogs,setBlogs]=useState([]);

  useEffect(() => {
      
      fetch('https://mubashir-garden-mart.herokuapp.com/api/services')
      .then(response => response.json())
      .then(json => setBlogs(json))
  }, [])

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('RentingDetailScreen', plant)}>
        <View style={style.card}>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={{uri:plant.image}}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:20 ,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {plant.price}
            </Text>
            <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
               
              }}>
              
            </TouchableOpacity>
          </View>
          </View>

          
        </View>
      </TouchableOpacity>
    );
  };

    return(
      <SafeAreaView style={{flex: 1, paddingHorizontal:15 , backgroundColor: COLORS.white}}>
        <View style={styles.container}>
        <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Renting Services
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        
      </View>
        <Paragraph style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:10, paddingLeft:10,  paddingRight:10,fontWeight:'70', color:'black', fontSize:18 }}>
        Garden Mart maintenance division guarantee provision of immaculate gardens and their adjoining areas in the best possible way. 
        We place a strong emphasis on punctuality of our team and quality of service as per our best standards for clients’ satisfaction.
         Our field teams are extremely mobile and utilize modern tools and equipment
         to carry out their tasks effectively and swiftly.
        </Paragraph>
      
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={Blogs}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />

  
    
    </View>
   
    
    </SafeAreaView>
        )

        
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent:"flex-start"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    buyBtn: {
        width: 160,
        height: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      }
  });
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
      height: 225,
      backgroundColor: COLORS.light,
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
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