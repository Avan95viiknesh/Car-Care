import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React from "react";
import LoginStyle from "./LoginStyle";

export default function CreatePassword() {
  return (
    <View style={LoginStyle.container}>
      <View>
        <Text style={[LoginStyle.title,{marginBottom:10}]}> Create new password</Text>
         
      </View>
      <View style={{marginVertical:40}}>
        <Text style={LoginStyle.lebelText}>New  password</Text>
        <TextInput placeholder="Mobile no" style={[LoginStyle.TextInput,{marginBottom:0}]} />
      
      </View>
      <View>
          <Text style={LoginStyle.lebelText}>Confirm Password </Text>
          <TextInput placeholder="password" style={LoginStyle.TextInput} />
        </View>
      <View>
        <TouchableOpacity style={LoginStyle.loginBtn}>
          <Text>Continue  </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
