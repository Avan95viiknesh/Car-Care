import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";
import ScheduleApp from "./Sidebar/components/ScheduleApp";
import AppHome from "./AppHome";
import { useSelector } from "react-redux";
import React,{useState,useEffect} from "react";
import {  Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Tab = createBottomTabNavigator();

const Main = () => {
  const {theme} = useSelector((state) => state.themeReducer)
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

  console.log(userName);

  return (
    <>
     
     <Tab.Navigator
     style={{backgroundColor: theme == 'light' ? 'white' : 'black'}}
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

          tabBarActiveTintColor: "#F0CE1B",
        })}
      >
        <Tab.Screen
          style={{color: theme == 'light' ? 'black' : 'white'}}
          name= {userName}
          component={AppHome}   
        />
        <Tab.Screen name="Offers" component={Offer} />
        <Tab.Screen name="Schedule appoinment" component={ScheduleApp} />

        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
   
    </>
  );
};

export default Main;
