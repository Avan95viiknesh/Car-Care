import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./AppHome";
import About from "./About";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offer}
          options={{
            tabBarIcon: () => <Ionicons name="cart" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <Ionicons name="heart" size={30} color="#900" />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={30} color="#900" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Main;
