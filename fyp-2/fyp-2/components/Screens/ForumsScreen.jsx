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
const width = Dimensions.get('window').width/2;

const avatarsize=65;
const spacing=20;
export function ForumsScreen ({route,navigation}){


    const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'RECENT', 'Featured'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({forumq}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.8}
       onPress={()=>{navigation.navigate('ForumDetails',{forumq})}} 

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

          
        </View>
      </TouchableOpacity>
    );
  };
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
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        
      </View>
      <CategoryList />

      <View>
      <Button color="#00B761" title="Ask  A Question" onPress={()=>{navigation.navigate('AddForumQuestion')}}></Button>
      </View>
      <FlatList
        
        showsVerticalScrollIndicator={false}
      
        
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 50,
        }}
        
        data={forumqs}
        renderItem={({item}) => {
          return <Card forumq={item}  />;
        }}
      />
    
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
      height: 225,
      backgroundColor: COLORS.light,
      width:370,
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