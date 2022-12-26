import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  LogBox,
} from "react-native";
import InputField from "../../components/login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyle from "./AppStyle";
import LoginStyle from "../login/LoginStyle";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/action/action";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Dimensions/Metrics";
import { Dimensions } from "react-native";




const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const AppHome = ({ navigation }) => {
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
     <View style={{flex:1}}>
     <ScrollView>
        <View
          style={{
            padding:20,
            backgroundColor: theme == "light" ? "#FFFFFF" : "black",
            height:deviceHeight,
            width:deviceWidth,
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
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity   style={{
                  backgroundColor: "#F0CE1B",
                  borderRadius: moderateScale(15),
                  paddingHorizontal: horizontalScale(10),
                  paddingVertical: verticalScale(15),
                  marginVertical:verticalScale(15),
                  cursor: "pointer",
                  height:verticalScale(50),
                }} 
                onPress={() => navigation.navigate("NewCustomer")}
                >
              <Text
                style={[
                  AppStyle.selectText,
                  {
                    color: theme == "light" ? "black" : "white",
                   
                  },
                ]}
              >
                New Customer
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F0CE1B",
                  borderRadius: moderateScale(15),
                  paddingHorizontal: horizontalScale(10),
                  paddingVertical: verticalScale(15),
                  marginVertical:verticalScale(15),
                  cursor: "pointer",
                  height:verticalScale(50),
                }}
                onPress={() => navigation.navigate("CarService")}
              >
                <Text
                  style={[
                    AppStyle.selectText,
                    {
                      color: theme == "light" ? "black" : "white",
                     
                    },
                  ]}
                >
                  Book Service
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              data={DATA}
              numColumns={4}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: verticalScale(20),
                marginBottom: verticalScale(80),
              }}
              renderItem={({ item }) => (
                <TouchableOpacity style={AppStyle.cardSection} hoverStyle={AppStyle.cardHOver}>
                  <View style={AppStyle.cardDetails}>
                    <Text
                      style={{ color: theme == "light" ? "black" : "white",marginBottom: verticalScale(5) }}
                    >
                      {item.icon}{" "}
                    </Text>
                    <Text
                      style={[
                        AppStyle.cardTextstyle,
                        { color: theme == "light" ? "black" : "white",  },
                      ]}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
     </View>
    </>
  );
};

export default AppHome;
