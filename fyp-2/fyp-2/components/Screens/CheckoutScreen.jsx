import React, { useState } from 'react';
import {
  View,
  Text,
  Header,
  CartCard,
  Dimensions,
  Image,
  TouchableOpacity, Modal,Button
  
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { TextInput } from 'react-native-paper';
var { width } = Dimensions.get("window")
import {LiteCreditCardInput} from "react-native-credit-card-input"
import { exp, onChange } from "react-native-reanimated";
import { cardTokenRequest } from './components/checkout.service';




var { width } = Dimensions.get("window")

export function CheckoutScreen({route,navigation,name="mustafa"}){
  const onChange = async (formData) => {
    const {values,status} = formData;
    const isIncomplete = Object.values(status).includes("incomplete")
    console.log(isIncomplete);
    const expiry =values.expiry.split("/")
    console.log(expiry);
    const card = {
      number: values.number,
      exp_month: expiry[0] ,
      exp_year:expiry[1],
      cvc:values.cvc,
      name:name
    }
    const info = await cardTokenRequest(card);
    console.log(info)
  }
  const {totalprice} = route.params;
  const [modal, setModal]= useState(false)
  const [data, setdata] = useState('');
  const [province, setprovince] = useState('');
  const [city, setcity] = useState('');
  const [postal, setpostal] = useState('');
  const theme = {
    colors:{
      primary:"#00B761"
    }
  }

  const [print, setprint] = useState(false);


  const txtHandler = (enteredName) => {
    setdata(enteredName);
    setprint(false)
  };
  const txtHandle = (val) => {
    setprovince(val)
    setprint(false)
  };
  const cityhandler= (val) => {
    setcity(val)
    setprint(false)
  };
  const postalhandler= (val) => {
    setpostal(val)
    setprint(false)
  };
const handleSearchButtonPress  = () => {
  setModal(false)
   setprint(true);
 }
 console.log(data);
 console.log(print)
 console.log(province)
 
 const btnHandler = () => {
  // clear the text field
  setdata('');
  setprovince('')
  setcity('')
  setpostal('')
};

const [isSelected, setSelection] = useState(false);

  return(
      <View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:25,fontWeight:'700',paddingTop:10}}>Review Your Order </Text>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row' , paddingTop:20}}>
        <Text style={{fontSize:20,fontWeight:'600', color:"black", paddingTop:10,paddingLeft:15}}> Total Bill </Text>
        <Text style={{fontSize:20, fontWeight:'600',color:"black", paddingTop:10,paddingRight:15}}> {totalprice} </Text>
      </View>
      <View style={{alignItems:'center'}}>
          <Text style={{fontSize:25,fontWeight:'700',paddingTop:30}}>Add a Biling Address </Text>
         
        </View>
        <View style={{paddingBottom:20,paddingRight:20,paddingLeft:20}}>
        <Button color="#00B761" title="Add Address" onPress={()=>setModal(true)}></Button>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={()=>{setModal(false)}}>
          <View style={{position:"absolute", bottom:2,width:"100%", paddingBottom:20,backgroundColor:'#eeffe6'}}>
          <TextInput
          style={{margin:9}}
          label='Enter Address'
          mode="outlined"
          value={data}
          onChangeText={txtHandler}
          placeholderTextColor="#aaaaaa"
          placeholder="Street, House No "    
          theme={theme}                
        />
        <TextInput
          style={{margin:9}}
          label='Enter Province'
          mode="outlined"
          value={province}
          onChangeText={txtHandle}
          placeholderTextColor="#aaaaaa"
          placeholder="Province"  
          theme={theme} 
                            
        />
        <TextInput
        style={{margin:9}}
        label='Enter City'
        mode="outlined"
        value={city}
        onChangeText={cityhandler}
          placeholderTextColor="#aaaaaa"
          placeholder="City "   
          theme={theme}                  
        />
        <TextInput
        style={{margin:9}}
        label='Enter Postal Code'
        mode="outlined"
        value={postal}
        onChangeText={postalhandler}
          placeholderTextColor="#aaaaaa"
          placeholder="Postal Code " 
          keyboardType='numeric'
          theme={theme}   
                           
        />
        <Button color="#00B761" title="Save Address" onPress={handleSearchButtonPress }></Button>
        </View>
          
         
          
          </Modal> 
          <View style={{paddingLeft:20,paddingRight:20, paddingBottom:20}}>
        {
          print?
          <Text style={{ fontSize:25 , color: 'black' }}>{data}</Text> 
          
          :null
          
        }
        {
          print?
          <Text style={{ fontSize:25 , color: 'black' }}>{province}</Text> 
          
          :null
          
        }
        {
          print?
          <Text style={{ fontSize:25 , color: 'black' }}>{city}</Text> 
          
          :null
          
        }
        {
          print?
          <Text style={{ fontSize:25 , color: 'black' }}>{postal}</Text> 
          
          :null
          
        }
        <Button style={{paddingTop:30 }} color="#00B761" title="Discard Address" onPress={btnHandler} />
        </View>
        
        
        
       <LiteCreditCardInput onChange={onChange}></LiteCreditCardInput>




        <TouchableOpacity onPress={()=>{console.log("pay now")}} style={{paddingTop:20, width:80 , alignSelf:'center'}}>
        <Button style={{paddingTop:30 }} color="#00B761" title="Pay" onPress={btnHandler} />
        </TouchableOpacity>
        
      


        </View>
    )
}