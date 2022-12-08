import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import InputField from "../../login/InputField";
import LoginStyle from "../../login/LoginStyle";
import { useSelector } from "react-redux";

export default function ContactUs() {

  const {theme} = useSelector((state) => state.themeReducer)

  return (
    <>
    
        <View style={[LoginStyle.container,{backgroundColor: theme == 'light' ? 'white' : 'black' }]}>
          <View>
            <Text style={[styles.headingText,{color: theme == 'light' ? 'black' : 'white'}]}>Get in touch </Text>
          </View>
          <View>
            <Text style={[styles.text,{color: theme == 'light' ? 'black' : 'white'}]}> Your name</Text>
            <InputField />
          </View>

          <View>
            <Text style={[styles.text,{color: theme == 'light' ? 'black' : 'white'}]}> Your email address</Text>
            <InputField />
          </View>

          <View>
            <Text style={[styles.text,{color: theme == 'light' ? 'black' : 'white'}]}>Message</Text>
            <TextInput
            multiline={true}
            textAlignVertical="top"
              style={[
                LoginStyle.TextInput,
                { padding: 10, height: 130,  },
              ]}
            />
          </View>

          <View>
            <TouchableOpacity style={LoginStyle.loginBtn}>
              <Text style={{fontSize:18,}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 10,
    fontSize: 16
  },

  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
