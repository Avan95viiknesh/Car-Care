import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";
import ScheduleApp from "./Sidebar/components/ScheduleApp";
import AppHome from "./AppHome";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View } from "react-native";

const Tab = createBottomTabNavigator();

const Main = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = () => {
    try {
      AsyncStorage.getItem("userName").then((value) => {
        if (value != null) {
          setUserName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Offers") {
              iconName = focused ? "ribbon" : "ribbon-outline";
            } else if (route.name === "Schedule appoinment") {
              iconName = focused ? "today" : "today-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={"#F0CE1B"} />;
          },

          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          tabBarShowLabel:false,
          tabBarStyle: { backgroundColor: "#FFF" },
        })}
      >
        <Tab.Screen
          name="Home"
          component={AppHome}
          options={{ headerTitle: `Hi ${userName}` }}
        />
        <Tab.Screen name="Offers" component={Offer} />
        <Tab.Screen name="Schedule appoinment" component={ScheduleApp} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default Main;
