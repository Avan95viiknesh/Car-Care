import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React,{useState,useEffect} from "react";
import InputField from "../../login/InputField";
import LoginStyle from "../../login/LoginStyle";
import { useSelector } from "react-redux";
import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ContactUs() {

  const [userName, setUserName] = useState("");


  useEffect(() => {
    getUserName();
  }, []);


  const getUserName = () => {
    try {
      AsyncStorage.getItem("userName").then((value) => {
        if (value != null) {
          setUserName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    
  };

 

  const showToast2 = () => {
    Toast.show({
      type: 'info',
      text1: `Hello ${userName} Thanks for contacting`,
      text2: 'We will get back to you soon!!👋',
      
    });
  }

  // const showToast = () => {
  //   ToastAndroid.showWithGravity(
  //     "Thanks for contacting us we will get back to you soon!!",
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER
  //   ),
  //     100,
  //     200;
  // };

  const { theme } = useSelector((state) => state.themeReducer);
  // const {message} = useSelector((state) => state.toastMessage)

  return (
    <>
      <View
        style={{
          flex: 1,
          padding: 15,
          justifyContent: "center",
          backgroundColor: theme == "light" ? "#FCF9BE" : "black",
        }}
      >
        <View>
          <Text
            style={[
              styles.headingText,
              { color: theme == "light" ? "black" : "white" },
            ]}
          >
            Get in touch{" "}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              { color: theme == "light" ? "black" : "white" },
            ]}
          >
            {" "}
            Your name
          </Text>
          <InputField />
        </View>

        <View>
          <Text
            style={[
              styles.text,
              { color: theme == "light" ? "black" : "white" },
            ]}
          >
            {" "}
            Your email address
          </Text>
          <InputField />
        </View>

        <View>
          <Text
            style={[
              styles.text,
              { color: theme == "light" ? "black" : "white" },
            ]}
          >
            Message
          </Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            style={[LoginStyle.TextInput, { padding: 10, height: 130 }]}
          />
        </View>

        <View>
          <TouchableOpacity
            style={LoginStyle.loginBtn}
            onPress={() => showToast2()}
          >
            <Text style={{ fontSize: 18 }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 10,
    fontSize: 16,
  },

  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
