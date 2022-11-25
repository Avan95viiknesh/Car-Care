import { SafeAreaView, StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Screen({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:'red'}}>
     <SafeAreaView>
        <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate.openDrawer} >
        <Ionicons name="home" size={30} color="#F0CE1B" />
        </TouchableOpacity>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> screen</Text>
        </View>
     </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})