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
import Icon from 'react-native-vector-icons/MaterialIcons';

import Seprator from './components/Separator'
import { Card } from 'react-native-elements'

const width= Dimensions.get('window').width -20 
let currentSlideIndex=0;
let intervalId;
export function BlogScreen({route,navigation}){
    const [Blogs,setBlogs]=useState([]);

    useEffect(() => {
        //https://jsonplaceholder.typicode.com/posts
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setBlogs(json))
    }, [])


    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['POPULAR', 'RECENT', 'FEATURED'];
  
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

    return(
        <View style={{alignSelf:"center",
        width,
        paddingTop:10, backgroundColor:'white'}}>
          <View style={style.header}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to </Text>
          <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
           Blogs
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
    <Button color="#00B761" title="Add New Blog" onPress={()=>{navigation.navigate('AddBlogScreen')}}></Button>

        
        
    
    <Seprator />
   
        <ScrollView style={{marginTop:10}} >            
            {Blogs.map(blog=>

            <TouchableOpacity key={blog.id} onPress={() => {navigation.navigate('BlogDetails',{blog})}}>
                {/* <Image source={require('../../assets/snack-icon.png')}/> */}
                {/* <Text>{blog.id}-{blog.title}</Text> */}
                <Card>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Image ><Image style={{width,height:width/2}}  source={require('../../assets/plant.jpg')} ></Image></Card.Image>

                </Card>
            </TouchableOpacity>
            
            )}
        </ScrollView>
        </View>
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