import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import LoginStyle from "./LoginStyle";
import InputField from "./InputField";

export default function CreatePassword() {
  return (
    <View style={LoginStyle.container}>
      <View>
        <Text style={[LoginStyle.title,{marginBottom:10}]}> Create new password</Text>
         
      </View>
      <View style={{marginVertical:40}}>
        <Text style={LoginStyle.lebelText}>New  password</Text>
        <InputField placeholder="Mobile no" style={[LoginStyle.InputField,{marginBottom:0}]} />
      
      </View>
      <View>
          <Text style={LoginStyle.lebelText}>Confirm Password </Text>
          <InputField placeholder="password" style={LoginStyle.InputField} />
        </View>
      <View>
        <TouchableOpacity style={LoginStyle.loginBtn}>
          <Text>Continue  </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
