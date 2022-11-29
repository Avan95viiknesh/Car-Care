import { View, Text } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'
import LoginStyle from '../login/LoginStyle'

export default function Offer() {
  return (
    <View style={[LoginStyle.container,{backgroundColor:'#F0CE1B'}]}>
      <Text style={{fontSize:30}}> Special Offers Coming Soon !!! </Text>
    </View>
  )
}