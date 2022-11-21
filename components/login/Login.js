import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function Login({navigation}) {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Log In</Text>
          <View>
            <Text style={styles.lebelText}>Mobile no</Text>
            <TextInput placeholder="Mobile no" style={styles.TextInput} />
          </View>
          <View>
            <Text style={styles.lebelText}>Password </Text>
            <TextInput placeholder="password" style={styles.TextInput} />
          </View>
          <Text style={{ paddingLeft: "63%", color: "#F0CE1B" }}>
            
            Forgot Password 
          </Text>
  
          <View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text>Get otp</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.accountHave}>
            <Text>
             
              Don't have an account?
              <Text style={{ color: "#F0CE1B" }} onPress={() =>
        navigation.navigate('SignUp' )
      } > Sign Up</Text> 
            </Text>
          </View>
          <View style={styles.horizontalSection}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <View style={{marginTop:20}} >
          <Text
            style={{
              color: "#F0CE1B",
              textAlign: "center",
              paddingHorizontal: 20,
            }}
          >
             Login with
          </Text>
  
          <Image
            source={require("../../assets/images/login/g-logo.png")}
            style={styles.imageStyle}
          />
        </View>
        </View>
       
       
      </>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 50,
    },
    lebelText: {
      paddingBottom: 10,
      color: "#F0CE1B",
    },
  
    accountHave: {
      marginLeft: 50,
      paddingVertical: 20,
    },
    loginBtn: {
      width: "50%",
      borderRadius: 8,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#F0CE1B",
      marginLeft: "25%",
    },
  
    horizontalSection: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  
    horizontalLine: { height: 1, width: "30%", backgroundColor: "black" },
  
    imageStyle: {
      width: 30,
      height: 15,
      alignSelf: "center",
      margin:20,
      padding:20
    },
  
    TextInput: {
      width: "100%",
      height: 45,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#F0CE1B",
      marginBottom: 10,
      padding: 10,
    },
  
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      padding: 20,
    },
  });
  