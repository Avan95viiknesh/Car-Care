import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SidebarStyle from "./SibebarStyle";

export default function DeliverInvoice() {
  return (
    <View style={SidebarStyle.container}>
      <View style={{flexDirection:'row', justifyContent:'space-around', marginVertical:20}} >
        <Text>Abdul {"\n"}
            (RG nagar)</Text>

        <Text>Payed!</Text>
      </View>
      <Text
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "blue",
          marginLeft: 30,
        }}
      ></Text>
    </View>
  );
}
 
