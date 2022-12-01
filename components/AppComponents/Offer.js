import { View, Text } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'
import LoginStyle from '../login/LoginStyle'
import { useSelector } from "react-redux";

export default function Offer() {
   

const {theme} = useSelector((state) => state.themeReducer)
  return (
    <View style={[LoginStyle.container,{backgroundColor: theme == 'light' ? 'white' : 'black',alignItems:'center'}]}>
      <Text style={{fontSize:20,color: theme == 'light' ? 'black' : 'white'}}> Special Offers Coming  Soon !!! </Text>
    </View>
  )
}