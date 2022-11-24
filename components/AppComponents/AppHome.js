import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ListItem,
  List,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from "react-native";
import InputField from "../../components/login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyle from "./AppStyle";
import LoginStyle from "../login/LoginStyle";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    id: 1,
    name: "Car Service",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 2,
    name: " Tyres & Wheel Care",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 3,
    name: "Denting & Painting",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 4,
    name: " ACService & Repair",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 5,
    name: "Car Spa & Cleaning",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 6,
    name: "Batteries",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 7,
    name: "Insurance Claims",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 8,
    name: "Windshield & Lights",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 9,
    name: " Clutch & Brakes  ",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 10,
    name: " Dryclean",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 11,
    name: "Car Service",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
  {
    id: 12,
    name: "Oiling",
    avatar: require("../.././assets/images/App/Home/car-service.png"),
  },
];

const AppHome = ({ navigation }) => {
  return (
    
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity
              style={LoginStyle.loginBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={LoginStyle.btnText}>LogOut</Text>
            </TouchableOpacity>
          </View>

          <View style={{ margin: 20 }}>
            <InputField placeholder="Search" />
            <Icon
              name="search-outline"
              size={24}
              style={{ position: "absolute", right: 20, bottom: 20 }}
            />
          </View>
          <View>
            <Image
              source={require("../.././assets/images/App/Home/home-banner.png")}
              style={AppStyle.homeImage}
            />
          </View>
          <View>
            <Text style={AppStyle.selectText}>Select Service</Text>
          </View>

          <View style={{ margin: 20 }}>
            <FlatList
              data={DATA}
              numColumns={4}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity style={AppStyle.cardSection}>
                    <View style={AppStyle.cardDetails}>
                      <Image
                        source={item.avatar}
                        style={{ height: 20, width: 20 }}
                      />

                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: "center",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}{" "}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </View>
      </ScrollView>
   
  );
};

export default AppHome;
