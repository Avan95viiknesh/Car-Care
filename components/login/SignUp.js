import { View, Text, TextInput, TouchableOpacity, Image,ScrollView,  } from "react-native";
import React, { useState } from "react";
import LoginStyle from "./LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";

export default function SignUp({ navigation, name,LogOtp,forgot }) {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const changeIcon = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  

  return (
    <>
  <ScrollView automaticallyAdjustKeyboardInsets={true}  showsVerticalScrollIndicator={false}
        style={{
            flex: 1, 

        }}
        contentContainerStyle={{
            flexGrow: 1,
        }}>
      <View style={LoginStyle.container}>
     
        <Text style={LoginStyle.title}> {name ? name : "Sign Up"} </Text>
        <View>
          <Text style={LoginStyle.lebelText}>Mobile no</Text>
          <TextInput placeholder="Mobile no" style={LoginStyle.TextInput} />
        </View>
        <View>
          <Text style={LoginStyle.lebelText}>Password </Text>
          <Icon
            name={isPasswordSecure ? "eye-off-outline" : "eye-outline"}
            size={24}
            style={{ position: "absolute", right: 20, bottom: 20 }}
            onPress={changeIcon}
          />
          <TextInput
            placeholder="password"
            style={LoginStyle.TextInput}
            secureTextEntry={isPasswordSecure}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        {name ? (
          <Text
            style={LoginStyle.inputFieldBaseText}
            onPress={forgot ? () => forgot() : () => navigation.navigate("ForgetPassword")}
          >
             Forgot Password
          </Text>
        ) : (
          ""
        )}

        <View>
          <TouchableOpacity style={LoginStyle.loginBtn} onPress={LogOtp ? () => LogOtp() : () => navigation.navigate("Otp")}>
            <Text >Get otp</Text>
          </TouchableOpacity>
        </View>

        {name ? (
          <Text style={{ marginTop: 10 }}> </Text>
        ) : (
          <View style={LoginStyle.accountHave}>
            <Text>
              Already have an account?
              <Text
                style={{ color: "#F0CE1B" }}
                onPress={() => navigation.navigate("Login")}
              >
                {" "}
                Login
              </Text>
            </Text>
          </View>
        )}
        <View style={LoginStyle.horizontalSection}>
          <View style={LoginStyle.horizontalLine} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
          </View>
          <View style={LoginStyle.horizontalLine} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#F0CE1B",
              textAlign: "center",
              paddingHorizontal: 20,
            }}
          >
            {name ? "Login with" : "Sign up with"}
          </Text>

          <Image
            source={require("../../assets/images/login/g-logo.png")}
            style={LoginStyle.imageStyle}
          />
        </View>
    
      </View>
      </ScrollView>
    </>
  );
}
