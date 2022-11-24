import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Button,
  Pressable,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import LoginStyle from "./LoginStyle";

export default function Otp({ navigation }) {
  const [otp, setOtp] = useState([]);
  const [seconds, setSeconds] = useState(30);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const inputRef = useRef([]);

  const focusNext = (value, index) => {
    console.log(index);

    if (index < 3 && value) {
      inputRef.current[index + 1].focus();
    }
    if (index === otp.length - 1) {
      inputRef.current[index].blur();
    }
    otp[index] = value;
    setOtp([...otp]);
  };

  const focusPrevious = (key, index) => {
    if (key === "Backspace" && index !== 0) inputRef.current[index - 1].focus();
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const showModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);

      navigation.navigate("Main");
    }, 1000);
  };

  const resendOTP = () => {
    setSeconds(30);
  };

  return (
    <>
      <View style={LoginStyle.container}>
        <View style={LoginStyle.otpVerify}>
          <Text style={LoginStyle.title}>OTP verification</Text>
          <Text style={LoginStyle.verificationText}>
            Please enter the verification code send to +91 0123456789
          </Text>
        </View>

        <View>
          <View style={LoginStyle.otpBoxContainer}>
            {Array(4)
              .fill("_")
              .map((i, index) => {
                return (
                  <TextInput
                    cursorColor="#F0CE1B"
                    onKeyPress={(e) => focusPrevious(e.nativeEvent.key, index)}
                    onChangeText={(value) => focusNext(value, index)}
                    ref={(el) => (inputRef.current[index] = el)}
                    maxLength={1}
                    keyboardType={"numeric"}
                    key={index}
                    style={LoginStyle.otpBox}
                  />
                );
              })}
          </View>
          <View style={LoginStyle.otpTimer}>
            <Text style={LoginStyle.otpText}>
              {seconds > 0 ? (
                <Text>
                  Time Remaining:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              ) : (
                <Text>Didn't recieve code?</Text>
              )}
            </Text>
            <Pressable>
              <Text
                title="Resend OTP"
                color="#F0CE1B"
                disabled={seconds > 0}
                style={[
                  LoginStyle.otpText,
                  { color: seconds > 0 ? "#DFE3E8" : "#F0CE1B" },
                ]}
                onPress={resendOTP}
              >
                Resend OTP
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              showModal();
            }}
            style={LoginStyle.loginBtn}
          >
            <Text>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={LoginStyle.popCard}>
          <Image source={require("../../assets/images/login/tick-t.png")} />

          <Text style={{ fontSize: 20, color: "#232323", fontWeight: "bold" }}>
            Successfully Verified !
          </Text>
        </View>
      </Modal>
    </>
  );
}
