import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import LoginStyle from "./LoginStyle";


export default function Otp({navigation}) {
  return (
    <>
      <View style={LoginStyle.container}>
        <View style={LoginStyle.otpVerify}>
          <Text style={LoginStyle.title}>OTP verification</Text>
          <Text style={LoginStyle.verificationText}>
            Please enter the verification code send to +91 0123456789
          </Text>
        </View>

        <View>
          <View style={LoginStyle.otpBoxContainer}>
            <Text style={LoginStyle.otpBox}> </Text>
            <Text style={LoginStyle.otpBox}> </Text>
            <Text style={LoginStyle.otpBox}> </Text>
            <Text style={LoginStyle.otpBox}> </Text>
          </View>
          <View style={LoginStyle.otpTimer}>
            <Text style={LoginStyle.otpText}>00:56</Text>
            <Text style={LoginStyle.otpText}>Resend OTP</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={LoginStyle.loginBtn}>
            <Text  onPress={() => navigation.navigate("Main")} >Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
