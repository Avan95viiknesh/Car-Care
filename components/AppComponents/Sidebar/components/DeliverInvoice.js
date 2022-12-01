import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SidebarStyle from "./SibebarStyle";
import { useSelector } from "react-redux";

export default function DeliverInvoice({upcoming}) {

  const {theme} = useSelector((state) => state.themeReducer)

  return (
    <View style={ {padding:20,  paddingTop:120, backgroundColor: theme == 'light' ? 'white' : 'black', justifyContent:'center',  }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          
          
        }}
      >
        <Text style={{fontSize:18, fontWeight:'bold',color: theme == 'light' ? 'black' : 'white'}}>
          Abdul {"\n"}
        <Text style={{fontWeight:'normal', fontSize:16}}>(RG nagar)</Text>
        </Text>

      {
         upcoming ? (<Text style={{color:'red'}} >Not Payed !</Text> ) : (   <Text style={{ color: theme == 'light' ? 'black' : 'white'}} >Payed !</Text> )
            
       
          
      }
      </View>
      <Text
        style={{
          height: 1,
          width: "90%",
          backgroundColor: "gray",
          marginLeft: 10,
          marginVertical: 20,
        }}
      ></Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#F0CE1B" }}>Owner name</Text>
          <Text style={{ color: theme == 'light' ? 'black' : 'white'}}>Akil(Anna nagar)</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#F0CE1B" }}>Car name</Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>Hundai</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#F0CE1B" }}>Car no</Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>TN0123</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#F0CE1B" }}>Payment</Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>Cash</Text>
        </View>
      </View>

      <Text  style={{  fontWeight:'bold', fontSize:18, marginVertical:20,color: theme == 'light' ? 'black' : 'white' }}> Payment details</Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#F0CE1B" }}> Booking fees</Text>  
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>50Rs</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#F0CE1B" }}>Water wash</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>150Rs</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#F0CE1B" }}>Total service</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>500Rs</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical:20, marginBottom: 160, }}>
          <Text style={{  fontWeight:'bold', fontSize:18,color: theme == 'light' ? 'black' : 'white' }}>Total</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
          <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>700Rs</Text>
        </View>
    </View>
  );
}
