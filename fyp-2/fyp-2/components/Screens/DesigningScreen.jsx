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
import COLORS from '../Screens/components/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../Screens/components/plants';
const width = Dimensions.get('window').width - 20
import { SearchBar } from 'react-native-elements';
import { DataTable } from 'react-native-paper';




export function DesigningScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [show,setshow]= useState(false);

  const [garden,setGarden] = useState({});
  const[row,setRow]=useState(0);
  const[col,setCol]=useState(0);
  const[plant,setPlant]=useState();

  const createGarden=()=>{
    setshow(true);
    let obj={};
    if(col>0&&row>0){
      for(let i=0;i<row;i++){
        obj[i]=makeCols(col);
      }
      setGarden(obj)
    }
    else{
      alert("value must be greater than 0");
    }
  }

  const makeCols=(col)=>{
    let arr=[];
    for(let i=0;i<col;i++){
      arr.push({
        url:undefined,
        color:"green",
        isSelected:false,
        title:'img'+i
      })

    }
    return arr;
  }

  const handleClick=(row,colIndex)=>{
    if(plant&&plant.image){
      let obj={...garden};
      let target=obj[row];
      let col=target[colIndex];
      col["color"]="yellow";
      col["url"]=plant.image;
      col["title"]=plant.name;
      target.splice(colIndex,1,col);
      obj[row]=target;
      setGarden(obj);
    }
    else{
      alert("please select plant");
    }
  }


  let fetchData = async () => {
    let resp = await fetch(
      "https://mubashir-garden-mart.herokuapp.com/api/products"
    );
    let data = await resp.json();
    setData(data);
    setFilteredData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [search, setSearch] = useState("");

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = data.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredData(data);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text
        style={style.itemStyle}
        onPress={() => getItem(item)}>
        {/* {item._id}
          {'.'} */}
        {item.name.toUpperCase()}
      </Text>
    );
  };

  

  const getItem = (item) => {
    // Function for click on an item
    // alert('Id : ' + item._id + ' Title : ' + item.name);
    setPlant(item);
    searchFilterFunction('');
    setSearch('');
  };

  const renderItem = ({ item }) => {
    <Text>{item.name}</Text>
  }


  let rows=Object.keys(garden);

  return (
    <View style={{
      alignSelf: "center",
      width,
      paddingTop: 10, backgroundColor: 'white'
    }}>
      <View style={style.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome to </Text>
          <Text style={{ fontSize: 30, color: COLORS.green, fontWeight: 'bold' }}>
            Virtual Garden
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>

        <SearchBar
          placeholder="Seacrh Plants..."
          onChangeText={(text) => { searchFilterFunction(text), setSearch(text) }}
          onClear={(text) => { searchFilterFunction(''), setSearch('') }}
          value={search}
          containerStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{ backgroundColor: 'white', color: 'black' }}
        />
        {search ?
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item._id}
            renderItem={
              ItemView
            }


          />

          :
          <View></View>
        }
      </View>
      <View style={{flexDirection:'row'}}>
      <TextInput
          style={style.input2}
          placeholderTextColor="#aaaaaa"
          placeholder="Enter Rows"   
          keyboardType="numeric" 
          value={row}     
          onChangeText={(text)=>setRow(text)}           
        />
        <TextInput
          style={style.input2}
          placeholderTextColor="#aaaaaa"
          placeholder="Enter Columns"
          keyboardType="numeric"
          value={col}
          onChangeText={(text)=>setCol(text)}
        />
</View>
<Button color="#00B761" title="Create Garden" onPress={()=>{createGarden()}}></Button>
   
 
<DataTable>
  {rows.map((row)=>{
  return(
    <DataTable.Row>
    {garden[row].map((col,index)=>{
      return(
        <DataTable.Cell key={index} style={{backgroundColor:col.color, padding:5,margin:2}} onPress={()=>{handleClick(row,index)}}>{col.title}</DataTable.Cell>
        // <Col></Col>
      )
    })}
    </DataTable.Row>
  )
})}

</DataTable>
  
        
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
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width: 370,
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
  itemStyle: {
    padding: 10,
  },
  input2: {
    height: 50,
    backgroundColor: 'white',
   margin:10,
    paddingLeft: 16,
    width:'50%',
    borderColor:'#00B761',
    color:'black'
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});