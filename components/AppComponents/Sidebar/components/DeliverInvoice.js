import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SidebarStyle from "./SibebarStyle";

export default function DeliverInvoice() {
  return (
    <View style={SidebarStyle.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <Text>
          Abdul {"\n"}
          (RG nagar)
        </Text>

        <Text>Payed!</Text>
      </View>
      <Text
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "gray",
          marginLeft: 30,
          marginVertical: 20,
        }}
      ></Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#1A30AC" }}>Owner name</Text>
          <Text>Akil(Anna nagar)</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "#1A30AC" }}>Car name</Text>
          <Text>Hundai</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#1A30AC" }}>Car no</Text>
          <Text>TN0123</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "#1A30AC" }}>Payment</Text>
          <Text>Cash</Text>
        </View>
      </View>

      <Text  style={{  fontWeight:'bold', fontSize:18, marginLeft:30, marginVertical:20 }}> Payment details</Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#1A30AC" }}> Booking fees</Text>  
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text>50Rs</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "#1A30AC" }}>Water wash</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text>150Rs</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#1A30AC" }}>Total service</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text>500Rs</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical:20 }}>
          <Text style={{  fontWeight:'bold', fontSize:18 }}>Total</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text>700Rs</Text>
        </View>
    </View>
  );
}
