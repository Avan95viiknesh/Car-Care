import React from "react";
import LoginStyle from "./LoginStyle";
import SignUp from "./SignUp";
import {
  View,
  
} from "react-native";

export default function Login({navigation}) {
  return(
    <>
    

      <SignUp name={"LOG IN"}  LogOtp={() => navigation.navigate("Otp")} forgot ={() => navigation.navigate("ForgetPassword")} LogHome={() => navigation.navigate("Main")} signup ={() => navigation.navigate("SignUp")}     />

     
    </>
  );
}
