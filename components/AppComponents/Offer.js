import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppStyle from "./AppStyle";
import LoginStyle from "../login/LoginStyle";
import { useSelector } from "react-redux";
 

export default function Offer() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <>
   
      <View
        style={[
          LoginStyle.container,
          {
            backgroundColor: theme == "light" ? "white" : "black",
          },
        ]}
      >
        
        
        <View style={{ alignItems: "center", justifyContent: "space-around" }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: theme == "light" ? "black" : "white",
              }}
            >
              {" "}
              Special Offers Coming Soon !!!{" "}
            </Text>
          </View>
          <View style={{ marginTop: 40, backgroundColor:'red' }}>
            <Image
              source={require("../.././assets/images/App/Home/festive-main.png")}
              style={{
                height: 300,
                width: 400,
                resizeMode: "cover",
                borderRadius: 20,
              }}
            />
          </View>
        </View>
 
      </View>
    
    </>
  );
}






const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});