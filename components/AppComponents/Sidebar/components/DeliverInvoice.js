import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import SidebarStyle from "./SibebarStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoginStyle from "../../../login/LoginStyle";

export default function DeliverInvoice({upcoming}) {

  const {theme} = useSelector((state) => state.themeReducer)
  const[bookingFees, setBookingFees] =useState(50)
  const[washPrice, setWashPrice] =useState(100)
  const[total, setTotal] =useState(0)

const handleIncrement = () => {
  console.log( setTotal(parseInt(bookingFees)  +  parseInt(washPrice) ));
}

  return (
   <SafeAreaView>
     <View style={ {padding:20,  paddingTop:60, backgroundColor: theme == 'light' ? 'white' : 'black', justifyContent:'center',  }}>
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
         {upcoming ? ( <TextInput placeholder=" price" value={bookingFees} onChangeText={(text) => setBookingFees(text)}  style={{ color: theme == 'light' ? 'black' : 'white'}}/> ): <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>50Rs</Text> }
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#F0CE1B" }}>Water wash</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
        {upcoming ?   <TextInput placeholder="price" value={washPrice} onChangeText={(text) => setWashPrice(text)}  style={{ color: theme == 'light' ? 'black' : 'white'}}/> :  <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>150Rs</Text>}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
         {upcoming ? '' :  <Text style={{ color: "#F0CE1B" }}>Total service</Text>}
        
         {upcoming ?  <Text placeholder="Total amount"  style={{ color: theme == 'light' ? 'black' : 'white'}}>  </Text> :  <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}>500Rs</Text>}
        </View>
      </View>
      {
          upcoming ? (<TouchableOpacity style={[LoginStyle.loginBtn,{marginTop:0}]} onPress={handleIncrement}>
            <Text> Conform</Text>
           </TouchableOpacity>) : ''
        }
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical:20, marginBottom: 160, }}>
          <Text style={{  fontWeight:'bold', fontSize:18,color: theme == 'light' ? 'black' : 'white' }}>Total</Text>
          <Text style={SidebarStyle.horizontalLinePayment}></Text>
         {
          upcoming ?  <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}> {total} RS ! </Text> :  <Text  style={{ color: theme == 'light' ? 'black' : 'white'}}> 700 RS ! </Text>
         }
        </View>

       
    </View>
   </SafeAreaView>
  );
}
