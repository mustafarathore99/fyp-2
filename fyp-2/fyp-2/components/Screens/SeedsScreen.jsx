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
import seeds from '../Screens/components/seeds';
import COLORS from '../Screens/components/colors';
const width = Dimensions.get('window').width / 2 - 30;

export function SeedsScreen({ route, navigation }) {
    const [search, setSearch] = useState('');
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const [Blogs,setBlogs]=useState([]);

  useEffect(() => {
      //https://jsonplaceholder.typicode.com/posts
      fetch('https://mubashir-garden-mart.herokuapp.com/api/seeds')
      .then(response => response.json())
      .then(json => setBlogs(json))
  }, [])


  const categories = ['POPULAR', 'ORGANIC', 'ON SALE'];

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

  const Card = ({seed}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetailsScreen', seed)}>
        <View style={style.card}>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={seed.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {seed.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${seed.price}
            </Text>
            <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: seed.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={seed.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 5,
            }}>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                -
              </Text>
            </View>
            
            <View>
            <Text
                style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
                1
              </Text>
            </View>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>

            
          </View>
        </View>
      </TouchableOpacity>
    );
  };
    return (

        <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Seed Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        
      </View>
      <CategoryList />
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
          return <Card seed={item} />;
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
      width,
      marginHorizontal:2 ,
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
