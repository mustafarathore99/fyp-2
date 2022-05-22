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
import Seprator from './components/Separator'
import { Card } from 'react-native-elements'

const width= Dimensions.get('window').width -20 

export function BlogDetailScreen({route,navigation}){

    const {blog}=route.params;

    return(
        <Card style={{}}>
            <Card.Title>{blog.id}-{blog.title}</Card.Title>
            <Card.Image><Image style={{width,height:width/2}} source={require('../../assets/plant.jpg')}></Image></Card.Image>
        <Text>{blog.body}</Text>
        </Card>
    )

}