import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { FaFacebook } from "react-icons/fa";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements';
import { HomeScreen } from './HomeScreen';
import { CartScreen } from './CartScreen';
import { ChatScreen } from './ChatScreen';
import { ProfileScreen } from './ProfileScreen';
import { BlogScreen } from './BlogScreen';
import { BlogDetailScreen } from "./BlogDetailScreen";
import { AddBlogScreen } from "./AddBlogScreen";
import { ProductListScreen } from "./ProductListScreen";
import {VideosScreen} from "./VideosScreen"
import { ToolsScreen } from './ToolsScreen';
import {FertilizerScreen} from './FertilizerScreen';
import {SeedsScreen} from './SeedsScreen';
import { ProductDetailsScreen } from './ProductDetailsScreen';
import {CheckoutScreen} from './CheckoutScreen';
import { ForumsScreen } from './ForumsScreen';
import { RentingScreen } from './RentingScreen';
import { DesigningScreen } from './DesigningScreen';
import { AddForumQuestion } from './AddForumQuestion';
import { ForumDetails } from './ForumDetails';
import { RentingDetailScreen } from './RentingDetailScreen';



const image = { uri: "https://img.wallpapersafari.com/desktop/1920/1080/34/57/2JLQkE.jpg"}

const BlogStack=createStackNavigator();
export function MyBlogstack(){
  return(
    <BlogStack.Navigator>

    <MyStack2.Screen name="Blogs" component={BlogScreen}></MyStack2.Screen>
    <MyStack2.Screen name="BlogDetails" component={BlogDetailScreen}></MyStack2.Screen>
    <MyStack2.Screen name="AddBlogScreen" component={AddBlogScreen}></MyStack2.Screen>
    <MyStack2.Screen name="Forums" component={ForumsScreen}></MyStack2.Screen>
    <MyStack2.Screen name="AddForumQuestion" component={AddForumQuestion}></MyStack2.Screen>
    <MyStack2.Screen name="ForumDetails" component={ForumDetails}></MyStack2.Screen>
    <MyStack2.Screen name="Renting" component={RentingScreen}></MyStack2.Screen>
    <MyStack2.Screen name="RentingDetailScreen" component={RentingDetailScreen}></MyStack2.Screen>
    <MyStack2.Screen name="Designing" component={DesigningScreen}></MyStack2.Screen>
    </BlogStack.Navigator>
  )
}


 
const ProductStack = createStackNavigator();

export function MyProductstack(){
  return(
    <ProductStack.Navigator>
    <MyStack2.Screen name="Products" component={ProductListScreen}></MyStack2.Screen> 
    <MyStack2.Screen name="TOOLS" component={ToolsScreen}></MyStack2.Screen> 
    <MyStack2.Screen name="FERTILIZERS" component={FertilizerScreen}></MyStack2.Screen> 
    <MyStack2.Screen name="SEEDS" component={SeedsScreen}></MyStack2.Screen> 
    <MyStack2.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}></MyStack2.Screen>
    <MyStack2.Screen name="CHECKOUT" component={CheckoutScreen}></MyStack2.Screen> 
    
    </ProductStack.Navigator>
  )
}


const VideosStack = createStackNavigator();
export function MyVideosstack(){
  return(
    <VideosStack.Navigator>
     <MyStack2.Screen name="Videos" component={VideosScreen}></MyStack2.Screen>  
    </VideosStack.Navigator>
  )
}

const MyStack2 = createStackNavigator();

export function Mystack2(){
  return(
    <MyStack2.Navigator>

    <MyStack2.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} ></MyStack2.Screen>
    <MyStack2.Screen name="BlogStack" component={MyBlogstack} options={{ headerShown: false }}></MyStack2.Screen>
    <MyStack2.Screen name="ProductStack" component={MyProductstack} options={{ headerShown: false }}></MyStack2.Screen>
    <MyStack2.Screen name="VideosStack" component={MyVideosstack} options={{ headerShown: false }}></MyStack2.Screen>
    

    </MyStack2.Navigator>
  )
}



const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
   
    tabBarActiveTintColor:'Green',
     
  }}>
      <Tab.Screen name="Home" component={Mystack2} 
      options={{          
          tabBarIcon: () => (
            <Icon name="home" color={"green"} size={20} />
          ),headerShown:false
          
          
        }}/>
      <Tab.Screen name="Cart" component={CartScreen} 
      options={{          
          tabBarIcon: () => (
            <Icon name="shopping-cart" color={"green"} size={20} />
          ),    headerShown:false      
        }}/>
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{          
          tabBarIcon: () => (
            <Icon name="wechat" color={"green"} size={20} />
          ),headerShown:false
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{          
          tabBarIcon: () => (
            <Icon name="user" color={"green"} size={20} />
          ),headerShown:false
        }}/>
    </Tab.Navigator>
  );
}

