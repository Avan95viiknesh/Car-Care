import React from "react";
import { View, TextInput } from "react-native";
import LoginStyle from "./LoginStyle";

export default function InputField(props) {
  return (
    <>
      <View>
        <TextInput placeholder={props.placeholder} style={LoginStyle.TextInput} />
      </View>
    </>
  );
}
