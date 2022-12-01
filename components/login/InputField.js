import React, { useState, useEffect } from 'react';
import { View, TextInput,StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import LoginStyle from "./LoginStyle";

export default function InputField(props) {

 

  return (
    <>
      <View>
      <TextInput placeholder={props.placeholder} style={LoginStyle.TextInput}   
           />
      
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

 