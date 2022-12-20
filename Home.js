import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import ForgetPassword from "./components/login/ForgetPassword";
import CreatePassword from "./components/login/CreatePassword";
import Otp from "./components/login/Otp";
import Main from "./components/AppComponents/Main";
import AppHome from "./components/AppComponents/AppHome";
import DeliverInvoice from "./components/AppComponents/Sidebar/components/DeliverInvoice";
import DeliveryDetails from "./components/AppComponents/Sidebar/components/DeliveryDetails";
import Slide from "./components/intro slider/Slide";
import MyService from "./components/AppComponents/profileComponents/MyService";
import Upcoming from "./components/AppComponents/Sidebar/components/Upcoming";
import UpcomingInvoice from "./components/AppComponents/Sidebar/components/UpcomingInvoice";
import ContactUs from "./components/AppComponents/profileComponents/ContactUs";
import Settings from "./components/AppComponents/profileComponents/Settings";
import CarService from "./components/AppComponents/HomepageComponents/CarService";
import TyreWheel from "./components/AppComponents/HomepageComponents/TyreWheel";
import { SafeAreaView } from "react-native";
import ScheduleApp from "./components/AppComponents/Sidebar/components/ScheduleApp";
import Payment from "./components/AppComponents/Sidebar/components/Payment";

const Stack = createNativeStackNavigator();

export default function Home() {

  return (
   <>
    <NavigationContainer>
  
  <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Slider" component={Slide} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="SignUp" component={SignUp} />
  <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
  <Stack.Screen name="CreatePassword" component={CreatePassword} />
  <Stack.Screen name="Otp" component={Otp} />
  <Stack.Screen name="Main" component={Main} />
  <Stack.Screen name="AppHome" component={AppHome} />
  <Stack.Screen
    name="DeliveryDetails"
    component={DeliveryDetails}
    options={{ title: "Delivered ", headerShown: true }}
  />
  <Stack.Screen
    name="DeliverInvoice"
    component={DeliverInvoice}
    options={{ title: "Deliver Invoice", headerShown: true }}
  />

  <Stack.Screen
    name="MyService"
    component={MyService}
    options={{ title: "My Service ", headerShown: true }}
  />
   <Stack.Screen
    name="ScheduleApp"
    component={ScheduleApp}
    options={{ title: "ScheduleApp", headerShown: true }}
  />
  <Stack.Screen
    name="Upcoming"
    component={Upcoming}
    options={{ title: "Upcoming", headerShown: true }}
  />
  <Stack.Screen
    name="UpcomingInvoice"
    component={UpcomingInvoice}
    options={{ title: "Upcoming Invoice", headerShown: true }}
  />
  <Stack.Screen
    name="ContactUs"
    component={ContactUs}
    options={{ title: "Contact-us ", headerShown: true }}
  />
  <Stack.Screen
    name="Settings"
    component={Settings}
    options={{ title: "Settings ", headerShown: true }}
  />
  <Stack.Screen
    name="CarService"
    component={CarService}
    options={{ title: "Services ", headerShown: true }}
  />
  <Stack.Screen
    name="TyreWheel"
    component={TyreWheel}
    options={{ title: "Tyre & WheelCare", headerShown: true }}
  />
  <Stack.Screen
    name="Payment"
    component={Payment }
    options={{ title: "Payment", headerShown: true }}
    
  />
</Stack.Navigator>

</NavigationContainer>


</>
  );
}
