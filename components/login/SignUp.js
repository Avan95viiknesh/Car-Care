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

export default function SignUp({ navigation, name, LogOtp, LogHome, forgot }) {
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

  
  console.log(userName);
  return (
    <>
      <SafeAreaView style={LoginStyle.container}>
        <ScrollView>
          <Image
            source={require("../../../Car-Care/assets/car-care.jpg")}
            style={LoginStyle.headerImage}
          />

          <View style={{ marginTop: 50, height: "100%" }}>
            <Text style={LoginStyle.title}> {name ? name : "SIGN UP"} </Text>
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
            <View>
              <Text style={LoginStyle.lebelText}>Mobile no</Text>
              <TextInput
                placeholder="Mobile no"
                secureTextEntry={isPasswordSecure}
                style={LoginStyle.TextInput}
                value={mobile}
                onChangeText={(val) => setMobile(val)}
              />
              <Icon
                name={isPasswordSecure ? "eye-off-outline" : "eye-outline"}
                size={24}
                style={LoginStyle.iconstyle}
                onPress={changeIcon}
              />
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
              <TouchableOpacity style={LoginStyle.loginBtn} onPress={setData}>
                <Text> {name ? "Login" : "Get otp"}</Text>
              </TouchableOpacity>
            </View>

            {name ? (
              <Text style={{ marginTop: 10 }}> </Text>
            ) : (
              <View style={LoginStyle.accountHave}>
                <Text style={{ fontSize: 15 }}>
                  Already have an account?
                  <Text
                    style={{ color: "#F0CE1B", fontSize: 14 }}
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
      </SafeAreaView>
    </>
  );
}
