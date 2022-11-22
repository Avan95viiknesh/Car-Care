import React from "react";


import SignUp from "./SignUp";

export default function Login({navigation}) {
  return <SignUp name={"Log In"}  LogOtp={() => navigation.navigate("Otp")} forgot ={() => navigation.navigate("ForgetPassword")} />;
}
