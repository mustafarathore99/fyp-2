import React,{useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Screens/components/colors';
import plants from '../Screens/components/plants';
import { cartScreen } from './CartScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function RentingDetailScreen  ({navigation, route})  {
  const plant = route.params;
  const [quantity, setQuantity] = useState(0);
  //const  [numValue, setnumValue] = useState({age:0})



  const  incrementValue = () => {
        setQuantity(quantity+1);
        AsyncStorage.clear();
        console.log("Storage clear")
    }
    const decrementValue = () => {
      if(quantity>0)
        setQuantity(quantity-1)
    }


    const AddtoCart =  async plant =>{
      let itemArray = await AsyncStorage.getItem('cartItems');
      let id=plant._id;
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      let product=plant;
      array.push({product,quantity});
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        Alert.alert(
          "",
          "Product Added To Cart",
          [
            
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      let product=plant;
      array.push({product,quantity});
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        Alert.alert(
          "",
          "Product Added To Cart",
          [
            
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
   
  }

  return (
    
    
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      
    <View style={style.header}>
      <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <Icon style={{alignSelf:'flex-end',paddingLeft:20}} name="shopping-cart" size={28} />
    </View>
    <View style={style.imageContainer}>
      <Image source={require('../../assets/plant.jpg')}style={{resizeMode: 'contain', flex: 1}} />
    </View>
    <View style={style.detailsContainer}>
    
      <View
        style={{
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
        <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
               
               
              }}>
              <Icon
                name="favorite"
                size={28}
                
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </TouchableOpacity>
        <View style={style.priceTag}>
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.white,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {plant.price}
          </Text>
          
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            lineHeight: 22,
            marginTop: 10,
          }}>
          {plant.tool}
        </Text>
        <View
          style={{
            marginTop: 40,
            
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent:'space-between'
              }}>
            <View style={{
              flexDirection: 'row',
              justifyContent:'space-between'
              }}>
            <TouchableOpacity style={style.borderBtn} onPress={decrementValue}>
              <Text style={style.borderBtnText}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 30,
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              {quantity}
            </Text>
            <TouchableOpacity style={style.borderBtn} onPress={incrementValue}>
              <Text style={style.borderBtnText}>+</Text>
            </TouchableOpacity>
            </View>
            
          </View>

          
        </View>
        <View style={{paddingTop:10 , flexDirection:'row'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Products in Stock: </Text>
            <Text style={{fontSize: 20}}>{plant.countinstock}</Text>
            </View>
        <View
          style={{
            marginTop: 20,
            
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            
          <TouchableOpacity style={style.buyBtn}  onPress={()=>{navigation.navigate('Cart',plant)}}>
            <Text
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buyBtn} onPress={()=>AddtoCart(plant)}>
            <Text  
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
            </View>
      </View>
    </View>
  </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});


