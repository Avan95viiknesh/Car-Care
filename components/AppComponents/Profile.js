import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginStyle from '../login/LoginStyle'

export default function Profile({navigation}) {
  return (
    <View>
      <View>
            <TouchableOpacity
              style={LoginStyle.loginBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={LoginStyle.btnText}>LogOut</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}