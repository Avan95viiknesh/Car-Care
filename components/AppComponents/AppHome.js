import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  LogBox,
  Pressable,
} from "react-native";
import InputField from "../../components/login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyle from "./AppStyle";
import LoginStyle from "../login/LoginStyle";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/action/action";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Dimensions/Metrics";
import { Dimensions } from "react-native";
import { Card } from "@rneui/themed";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const AppHome = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const DATA = [
    {
      id: 1,
      name: "Car Service",
      icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 2,
      name: " Tyres & Wheel Care",
      icon: <Icon name="aperture-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 3,
      name: "Denting & Painting",
      icon: <Icon name="color-palette-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 4,
      name: " ACService & Repair",
      icon: <Icon name="snow-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 5,
      name: "Car Spa & Cleaning",
      icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 6,
      name: "Batteries",
      icon: <Icon name="battery-charging-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 7,
      name: "Insurance Claims",
      icon: <Icon name="medkit-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 8,
      name: "Windshield & Lights",
      icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 9,
      name: " Clutch & Brakes  ",
      icon: <Icon name="construct-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 10,
      name: " Dryclean",
      icon: <Icon name="flower-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 11,
      name: "Car Wash",
      icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
    },
    {
      id: 12,
      name: "Oiling",
      icon: <Icon name="build-outline" color="#F0CE1B" size={24} />,
    },
  ];

  const { theme } = useSelector((state) => state.themeReducer);
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              padding: 20,
              backgroundColor: theme == "light" ? "#FFFFFF" : "black",
              height: deviceHeight,
              width: deviceWidth,
            }}
          >
            <View>
              <InputField placeholder="Search" />
              <Icon
                name="search-outline"
                size={24}
                style={{
                  position: "absolute",
                  right: horizontalScale(20),
                  bottom: verticalScale(20),
                }}
              />
            </View>
            <View style={{}}>
              <Image
                source={require("../.././assets/images/App/Home/home-banner.png")}
                style={AppStyle.homeImage}
              />
            </View>

            <View
              
            >
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
             alignItems:'center',
           
              }}>
             
                <Text>ServiceLists...</Text>
           
                {/* <Text>View all</Text> */}
              </View>

              <FlatList
                data={DATA}
               // numColumns={4}
                horizontal={toggle ? false : true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginVertical: verticalScale(20),
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity style={AppStyle.cardSection}>
                    <View style={AppStyle.cardDetails}>
                      <Text
                        style={{
                          color: theme == "light" ? "black" : "white",
                          marginBottom: verticalScale(5),
                        }}
                      >
                        {item.icon}{" "}
                      </Text>
                      <Text
                        style={[
                          AppStyle.cardTextstyle,
                          { color: theme == "light" ? "black" : "white" },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />

              {/* <Text onPress={() => setToggle(!toggle)}>More...</Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("NewCustomer")}
                style={{ color: theme == "light" ? "black" : "white" }}
              >
                {/* <Text
                style={[
                  AppStyle.selectText,
                  {
                    color: theme == "light" ? "black" : "white",
                   
                  },
                ]}
              >
                New Customer
              </Text> */}

                <Card containerStyle={AppStyle.homeCard}>
                  {/* <Card.Title>NEW TO SERVICE</Card.Title>
                  <Card.Divider /> */}
                  <View style={{ position: "relative", alignItems: "center" }}>
                    <Image
                      style={{
                        width: 100,
                        height: 50,
                        marginBottom: 10,
                        padding: 0,
                      }}
                      resizeMode="contain"
                      source={require("../.././assets/images/App/Home/new-service.png")}
                    />
                    <Text>New to service </Text>
                  </View>
                </Card>
              </Pressable>

              <View>
                <Pressable onPress={() => navigation.navigate("CarService")}>
                  {/* <Text
                style={[
                  AppStyle.selectText,
                  {
                    color: theme == "light" ? "black" : "white",
                   
                  },
                ]}
              >
                New Customer
              </Text> */}

                  <Card containerStyle={AppStyle.homeCard}>
                    {/* <Card.Title>FOR BOOKING</Card.Title>
                  <Card.Divider /> */}
                    <View
                      style={{ position: "relative", alignItems: "center" }}
                    >
                      <Image
                        style={{ width: 100, height: 50, marginBottom: 10 }}
                        resizeMode="contain"
                        source={require("../.././assets/images/App/Home/book-service.png")}
                      />
                      <Text>Book services</Text>
                    </View>
                  </Card>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AppHome;
