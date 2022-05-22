import React, { useState, useEffect, useFocusEffect,useCallback } from 'react';
import {
  View,
  Text,
  Header,
  CartCard,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList
  
} from 'react-native';
var { width } = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import Seprator from './components/Separator';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function CartScreen({route,navigation}){

  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading,setLoading]=useState(true);
  let control=true;

  
  useEffect(() => {
   
    const unsubscribe = navigation.addListener('focus', () => {
      
      loadCart();
      console.log(cartProducts);}
    )
    return unsubscribe;

  },[loading]);

  const loadCart =async ()=>{let items = await AsyncStorage.getItem('cartItems');
  setCartProducts(JSON.parse(items));
setLoading(false);}
  

  
  // const fetchData =async ()=>{
  //   fetch('https://mubashir-garden-mart.herokuapp.com/api/products')
  //   .then(response => response.json())
  //   .then(json => setAllPlants(json))
    
  //     fetch('https://mubashir-garden-mart.herokuapp.com/api/seeds')
  //     .then(response => response.json())
  //     .then(json => setAllSeeds(json))
      
  //       fetch('https://mubashir-garden-mart.herokuapp.com/api/fertilizers')
  //       .then(response => response.json())
  //       .then(json => setAllFertilizers(json))

      
        
  //   }

    

    

    
    
    
    

  

  // //get data from local DB by ID
  // const getDataFromDB = async () => {

  //   let items = await AsyncStorage.getItem('cartItems');
    

  //   let prods =JSON.parse(items);

  //   // setCartProducts(JSON.parse(items));
  //   // prods.forEach((prod)=>products.push(prod.product));
  //   console.log(prods);
    
  //   if (prods) {
  //   //   prods.forEach((cartItem)=>{
        
  //   //     allSeeds.forEach((Seed)=>{
  //   //       if(Seed._id==cartItem.product._id){
  //   //         productData.push(cartItem);
  //   //         console.log("Seed Matched");
            
  //   //       }
  //   //     })
        
  //   //   });
      
  //   //   prods.forEach((cartItem)=>{
  //   //     allPlants.forEach((Plant)=>{
  //   //       if(Plant._id==cartItem.product._id){
  //   //         productData.push(cartItem);
  //   //         console.log("Plant Matched");
  //   //       }
  //   //     })
  //   //   })

  //   //   prods.forEach((cartItem)=>{
  //   //     allFertilizers.forEach((fertilizer)=>{
  //   //       if(fertilizer._id==cartItem.product._id){
  //   //         productData.push(cartItem);
  //   //         console.log("Fertilizer Matched");
  //   //       }
  //   //     })
  //   //   })
  //   //   console.log(productData);

  //     // setCartProducts(productData);
  //     // getTotal(productData);
  //   } else {
  //     // setCartProducts(false);
  //     // getTotal(false);
  //   }
  // };

  // const getTotal = productData => {
  //   let total = 0;
  //   for (let index = 0; index < productData.length; index++) {
  //     let productPrice = productData[index].price;
  //     total = total + productPrice;
  //   }
  //   setTotal(total);    
  // };


  // const renderProduct =(product)=>{
  //   return(
  //     <View>
  //     {/* <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} src={product.image} /> */}
          
         
  //         </View>
  //   )
  // }

 

    return (
         
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        {loading?(<View></View>):(
              <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>

      <View style={{height:20}} />
      <Text style={{fontSize:28, color:"#00B761", paddingTop:20}}>Cart </Text>
      <View style={{}} />

      <View style={{flex:1}}>

        <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10, paddingTop:20}}>
          <Text>Hello</Text>
          <FlatList
          data={cartProducts}
          keyExtractor={(Item,index)=>index+Item.product._id}
          renderItem={({Object})=>{
            return(
            
            <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
            <View>
              <Text style={{fontWeight:"bold", fontSize:20}}>{}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold',color:"black",fontSize:20}}>Rs.{}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity>
                  <Icon name="ios-remove-circle" size={30} color={"#00B761"} />
                </TouchableOpacity>
                <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>{}</Text>
                <TouchableOpacity>
                  <Icon name="ios-add-circle" size={30} color={"#00B761"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          )}}
          
          
          />
        </View>
      <View style={{alignItems: 'center',}}>
        <Text style={{fontSize:28, color:"#00B761", paddingTop:20}}>Review Your Bill</Text>
      </View>
      
      <View style={{ justifyContent:'space-between',flexDirection:'row'}}>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Total Price </Text>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}>Rs.{total} </Text>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row' , paddingTop:10}}>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Shipping </Text>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}> Rs.200 </Text>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row' , paddingTop:10}}>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Total </Text>
        <Text style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}> Rs.{total} </Text>
      </View>
      </View>

      <View style={{height:10}} />

    <TouchableOpacity style={{
        backgroundColor:"#00B761",
        width:width-30,
        alignItems:'center',
        padding:10,
        borderRadius:5
      }}  onPress={() => {
        navigation.navigate('ProductStack',{
          screen: 'CHECKOUT', params: {total}
        });
          }}>
      <Text style={{
          fontSize:24,
          fontWeight:"bold",
          color:'white'
        }}>
        CHECKOUT
      </Text>
    </TouchableOpacity>

    <View style={{height:20}} />


   </View>
        )
      } 
      </View>
      )
    

  }