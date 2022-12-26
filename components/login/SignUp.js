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
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import LoginStyle from "./LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import InputField from "./InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import signupAction from "../../redux/action/signupAction";
import { loginUser, signUpUser } from "../../redux/authsliceReducer";
import Toast from "react-native-toast-message";
import { Card } from "@rneui/themed";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

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

  const logError = useSelector((state) => state.authsliceReducer.loginErr);
  const signError = useSelector((state) => state.authsliceReducer);
  const dispatch = useDispatch();

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
        console.log(userName, mobile, password);
        let obj =
          "phNum=" +
          mobile +
          "&name=" +
          userName +
          "&password=" +
          password +
          "&type=service";

        const resData = await axios(
          "https://fioritest.avaniko.com/User/AddUser ",
          {
            method: "POST",
            data: obj,
            // headers: {

            //   "Content-Type": "application/x-www-form-urlencoded",

            // },
          }
        )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error.response.data.error));

        // if(resData.success===true){
        //   var userName=resData.message;
        //   AsyncStorage.setItem("userName", userName);
        //   AsyncStorage.setItem("mobile", mobile);
        //   LogHome();
        //   alert("Login success");
        // } else{
        //   alert("Invalid Credentials");
        // }

        console.log(resData);
        // if (name == LogOtp) {
        //   navigation.navigate("Otp");
        // } else {
        //   LogHome();
        // }
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

    try {
      let bodyData =
        "userName=" +
        mobile +
        "&password=" +
        password +
        "&grant_type=password&Type=service";

      let result = await axios({
        method: "POST",
        url: "https://fioritest.avaniko.com/login",
        data: bodyData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(result);
      // result = await result.json();
      AsyncStorage.setItem("userName", result.data.UserName);
      AsyncStorage.setItem("mobile", result.data.PhoneNumber);

      LogHome();
      return result;
    } catch (error) {
      return error.response.data;
    }
  };

  const loginOperation = async () => {
    let bodyData =
      "userName=" +
      mobile +
      "&password=" +
      password +
      "&grant_type=password&Type=service";
    dispatch(loginUser(bodyData))
      .unwrap()
      .then(() => LogHome());
  };

  // console.log(logError, "errorerrorerrorerror");

  const signOperation = async () => {
    let obj =
      "phNum=" +
      mobile +
      "&name=" +
      userName +
      "&password=" +
      password +
      "&type=service";
    dispatch(signUpUser(obj));
    navigation.navigate("Login");
  };

  const alertCheck = () => {
    Toast.show({
      type: "error",
      position: "top",
      text1: `${logError}`,
    });
  };

  return (
    <>
      <View
        style={{
          flex: 1,   
          backgroundColor: "#F0CE1B",
          
        }}
      >
        <ScrollView>
          <View
            style={{
              height: deviceHeight,
              width: deviceWidth,          
            }}
          >
            <Card
              containerStyle={{
                borderRadius: 20,     
                backgroundColor: "#f0ffff",  
                flex:1,
                alignItems:'center',
                justifyContent:'center',   
                marginTop:50    
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={require("../../../Car-Care/assets/car-care.jpg")}
                  style={[LoginStyle.headerImage, { width: 80, height: 80 }]}
                />
              </View>

              <View>
                <Text style={LoginStyle.title}>
                  {" "}
                  {name ? name : "SIGN UP"}{" "}
                </Text>
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
                      name={
                        isPasswordSecure ? "eye-off-outline" : "eye-outline"
                      }
                      size={24}
                      style={LoginStyle.iconstyle}
                      onPress={changeIcon}
                    />
                  </View>
                </View>

                {name
                  ? logError && (
                      <Text style={{ color: "red" }}> {logError} </Text>
                    )
                  : ""}

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
                      style={[LoginStyle.loginBtn, { marginTop: 10 }]}
                      onPress={loginOperation}
                    >
                      <Text> {name ? "Login" : "Get otp"}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={[LoginStyle.loginBtn, { marginTop: 10 }]}
                      onPress={signOperation}
                    >
                      <Text> {name ? "Login" : "Get otp"}</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={LoginStyle.accountHave}>
                  <Text style={{ fontSize: 15, textAlign: "center" }}>
                    {name
                      ? "Don't have an account?"
                      : "Already have an account?"}
                    <Text
                      style={{ color: "#F0CE1B", fontSize: 14 }}
                      onPress={
                        name
                          ? signup
                            ? () => signup()
                            : () => navigation.navigate("SignUp")
                          : () => navigation.navigate("Login")
                      }
                    >
                      {" "}
                      {name ? "  Signup" : " Login"}
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
            </Card>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
