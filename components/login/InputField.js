import React, { useState, useEffect } from 'react';
import { View, TextInput,StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import LoginStyle from "./LoginStyle";

export default function InputField(props) {

//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);


//   useEffect(() => {
      
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((resJson) => {
//       setMasterDataSource(resJson);
//       setFilteredDataSource(resJson);
//     })
//   },[])

// const searchFilter = (text) => {
   
//   if(text){
// const data = masterDataSource.filter((item) => {

//   const datItem = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//   const dataText = text.toUpperCase();
//   return datItem.indexOf(dataText) > - 1;
// })

// setFilteredDataSource(data);
// setSearch(text);

//   }else {
     
//     setFilteredDataSource(masterDataSource);
//     setSearch(text);
//   }

// }

// const ItemView = ({ item }) => {
//   return (
//     // Flat List Item
//     <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//       {item.id}
//       {'.'}
//       {item.title.toUpperCase()}
//     </Text>
//   );
// };

// const ItemSeparatorView = () => {
//   return (
//     // Flat List Item Separator
//     <View
//       style={{
//         height: 0.5,
//         width: '100%',
//         backgroundColor: '#C8C8C8',
//       }}
//     />
//   );
// };


// const getItem = (item) => {
//   // Function for click on an item
//   alert('Id : ' + item.id + ' Title : ' + item.title);
// };


  return (
    <>
      <View>
      <TextInput placeholder={props.placeholder} style={LoginStyle.TextInput}   // onChangeText={(text) => searchFilter(text)}    
           />
        {/* <SafeAreaView >
      <View  >
      
       
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView> */}
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

 