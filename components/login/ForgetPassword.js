import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import LoginStyle from "./LoginStyle";
import InputField from "./InputField";

export default function ForgetPassword({navigation}) {
  return (
    <View style={LoginStyle.container}>
      <View>
        <Text style={LoginStyle.title}> Forget your password </Text>
        <Text style={LoginStyle.verificationText}>
          Please enter the verification code send to +91 0123456789
        </Text>
      </View>
      <View style={{marginVertical:40}}>
        <Text style={LoginStyle.lebelText}>Mobile no</Text>
        <InputField placeholder="Mobile no" style={LoginStyle.InputField} />
        <Text style={[LoginStyle.inputFieldBaseText,{paddingLeft:'53%'}]} onPress={() =>
        navigation.navigate('CreatePassword' )
      }>Create New Password</Text>
      </View>

      <View>
        <TouchableOpacity style={LoginStyle.loginBtn} onPress={() => navigation.navigate("Otp")} >
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
