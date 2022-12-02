import React from "react";
import SignUp from "./SignUp";

export default function Login({navigation}) {
  return <SignUp name={"LOG IN"}  LogOtp={() => navigation.navigate("Otp")} forgot ={() => navigation.navigate("ForgetPassword")} LogHome={() => navigation.navigate("Main")}  />;
}
