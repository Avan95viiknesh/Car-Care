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

export default function ContactUs() {
  return (
    <>
      <ScrollView>
        <View style={LoginStyle.container}>
          <View>
            <Text style={styles.headingText}>Get in touch </Text>
          </View>
          <View>
            <Text style={styles.text}> Your name</Text>
            <InputField />
          </View>

          <View>
            <Text style={styles.text}> Your email address</Text>
            <InputField />
          </View>

          <View>
            <Text style={styles.text}>Message</Text>
            <TextInput
              style={[
                LoginStyle.TextInput,
                { height: 150, justifyContent: "flex-start" },
              ]}
            />
          </View>

          <View>
            <TouchableOpacity style={LoginStyle.loginBtn}>
              <Text style={{fontSize:18}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
