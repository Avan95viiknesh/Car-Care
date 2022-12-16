import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import LoginStyle from "./LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import InputField from "./InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;


export default function SignUp({
  navigation,
  name,
  LogOtp,
  LogHome,
  forgot,
  signup,
}) {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const changeIcon = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  const setData = async () => {
    if (mobile.length <= 9) {
      Alert.alert("warning", "Please enter your number");
    } else if (password.length <= 5) {
      Alert.alert("warning", "Please enter valid Password");
    } else {
      try {
        await AsyncStorage.setItem("userName", userName);

        if (name == LogOtp) {
          navigation.navigate("Otp");
        } else {
          LogHome();
        }
      } catch (error) {
        console.log(error);
      }
    }
    setUserName("");
    setMobile("");
    setPassword("");
  };

  const setLogin = async () => {
    console.log(mobile, password);

    let bodyData =
      "userName=" +
      mobile +
      "&password=" +
      password +
      "&grant_type=password&Type=service";

    let result = await axios( {
      method: "POST",
      url: "https://fioritest.avaniko.com/login",
      data: bodyData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log(result)
    // result = await result.json();
    AsyncStorage.setItem("userName",result.data.UserName);
    AsyncStorage.setItem("mobile",result.data.PhoneNumber);
    LogHome();
  };

  return (
    <>
      <SafeAreaView style={LoginStyle.container}>
        <ScrollView>
          <Image
            source={require("../../../Car-Care/assets/car-care.jpg")}
            style={[LoginStyle.headerImage,{maxWidth: windowWidth,}]}
          />

          <View >
            <Text style={LoginStyle.title}> {name ? name : "SIGN UP"} </Text>
            {name ? (
              ""
            ) : (
              <View>
                <Text style={LoginStyle.lebelText}>Name </Text>

                <View>
                  <TextInput
                    placeholder="Name"
                    style={LoginStyle.TextInput}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                  />
                </View>
              </View>
            )}
            <View>
              <Text style={LoginStyle.lebelText}>Mobile no</Text>
              <TextInput
                placeholder="Mobile no"
               // secureTextEntry={isPasswordSecure}
                style={LoginStyle.TextInput}
                value={mobile}
                onChangeText={(val) => setMobile(val)}
              />
              {/* <Icon
                name={isPasswordSecure ? "eye-off-outline" : "eye-outline"}
                size={24}
                style={LoginStyle.iconstyle}
                onPress={changeIcon}
              /> */}
            </View>
            <View>
              <Text style={LoginStyle.lebelText}>Password </Text>

              <View>
                <TextInput
                  placeholder="password"
                  style={LoginStyle.TextInput}
                  secureTextEntry={isPasswordSecure}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <Icon
                  name={isPasswordSecure ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  style={LoginStyle.iconstyle}
                  onPress={changeIcon}
                />
              </View>
            </View>
            {name ? (
              <Text
                style={LoginStyle.inputFieldBaseText}
                onPress={
                  forgot
                    ? () => forgot()
                    : () => navigation.navigate("ForgetPassword")
                }
              >
                Forgot Password
              </Text>
            ) : (
              ""
            )}

            <View>
              {name ? (
                <TouchableOpacity
                  style={LoginStyle.loginBtn}
                  onPress={setLogin}
                >
                  <Text> {name ? "Login" : "Get otp"}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={LoginStyle.loginBtn} onPress={setData}>
                  <Text> {name ? "Login" : "Get otp"}</Text>
                </TouchableOpacity>
              )}
            </View>

              <View style={LoginStyle.accountHave}>
                <Text style={{ fontSize: 15,marginLeft:20 }}>
                 {name ? "Don't have an account?" : "Already have an account?"}
                  <Text
                    style={{ color: "#F0CE1B", fontSize: 14 }}
                    onPress={ name?  signup
                      ? () => signup()
                      : () => navigation.navigate("SignUp"):() => navigation.navigate("Login")}
                  >
                    {" "}
                   { name ? "  Signup" : " Login"}
                  </Text>
                </Text>
              </View>
            
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
      </SafeAreaView>
    </>
  );
}
