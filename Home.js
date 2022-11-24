import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import ForgetPassword from "./components/login/ForgetPassword";
import CreatePassword from "./components/login/CreatePassword";
import Otp from "./components/login/Otp";
import Main from './components/AppComponents/Main'
import AppHome from './components/AppComponents/AppHome'

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AppHome" component={AppHome}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
