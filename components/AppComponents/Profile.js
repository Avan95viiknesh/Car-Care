import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import LoginStyle from "../login/LoginStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileList = [
  {
    id: 1,
    name: "My Service",
    icon: <Ionicons name="construct" color="#F0CE1B" size={24} />,
    Arrow: <Ionicons name="arrow-forward-outline" color="#F0CE1B" size={24} />
  },
  {
    id: 2,
    name: "Settings",
    icon: <Ionicons name="settings" color="#F0CE1B" size={24} />,
  },
  {
    id: 3,
    name: "Help Center",
    icon: <Ionicons name="help-circle" color="#F0CE1B" size={24} />,
  },
  {
    id: 4,
    name: "Contact us",
    icon: <Ionicons name="mail" color="#F0CE1B" size={24} />,
  },
  {
    id: 5,
    name: "Logout",
    icon: <Ionicons name="log-out" color="#F0CE1B" size={24} />,
  },
];

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text
          style={{
            color: "#1A30AC",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          Hello, User
        </Text>
        <Text>+91 0123456789</Text>
      </View>

      <View style={{ alignItems: "flex-start", marginTop: 20 }}>
        <FlatList
          data={ProfileList}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <Text>{item.icon} </Text>
              <Text style={{ paddingLeft: 30 }}>{item.name}</Text>
              <Text>{item.Arrow} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
