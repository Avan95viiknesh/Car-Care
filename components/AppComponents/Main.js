import {
  createBottomTabNavigator,
  Drawer,
} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";
import ScheduleApp from "./Sidebar/components/ScheduleApp";
import AppHome from "./AppHome";
import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DrawerLayoutAndroid,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View
        style={{
          flexDirection: "column-reverse",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="home"
              size={20}
              color={"#2f2542"}
              style={{ padding: 5 }}
            />
            <Text style={{ fontSize: 20 }}> Upcoming </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginVertical: 20,
            }}
            onPress={() => navigation.navigate("DeliveryDetails")}
          >
            <Ionicons
              name="cart"
              size={20}
              color={"#2f2542"}
              style={{ padding: 5 }}
            />
            <Text style={{ fontSize: 20 }}> Outgoing </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("ScheduleApp")}
          >
            <Ionicons
              name="heart"
              size={20}
              color={"#2f2542"}
              style={{ padding: 5 }}
            />
            <Text style={{ fontSize: 20 }}> Shedule</Text>
          </TouchableOpacity>

          {/* <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator> */}
        </View>
        <Text style={[styles.horzontalLine, { marginBottom: 30 }]}></Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <View>
              <Ionicons name="people-circle-outline" size={50} color={"#000"} />
            </View>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 5,
              }}
            >
              {`${userName}`}
            </Text>
          </View>
          <Ionicons
            name="close-outline"
            size={30}
            onPress={() => drawer.current.closeDrawer()}
            style={{ marginVertical: 40 }}
          />
        </View>
      </View>
    </View>
  );

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
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        renderNavigationView={navigationView}
      >
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
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "#FFF" },
          })}
        >
          <Tab.Screen
            name="Home"
            component={AppHome}
            options={{
              headerLeft: () => (
                <Ionicons
                  name="menu-outline"
                  onPress={() => drawer.current.openDrawer()}
                  size={30}
                  color={"#F0CE1B"}
                  style={{ marginLeft: 10 }}
                />
              ),
              headerTitle: `Hi ${userName}`,
            }}
          />
          <Tab.Screen name="Offers" component={Offer} />
          <Tab.Screen name="Schedule appoinment" component={ScheduleApp} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </DrawerLayoutAndroid>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    marginHorizontal: 0,
    backgroundColor: "#fce651",
  },

  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  horzontalLine: {
    height: 1,
    backgroundColor: "#000",
    marginLeft: 10,
    marginTop: 10,
    minWidth: "100%",
  },
});
