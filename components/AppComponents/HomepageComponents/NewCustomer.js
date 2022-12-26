import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import CarService from "./CarService";
import LoginStyle from "../../login/LoginStyle";
import { useSelector, useDispatch } from "react-redux";
import { customerData, getServiceData } from "../../../redux/customerDataSlice";
import { Card } from "@rneui/themed";
import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function NewCustomer({ navigation }) {
  const [formVal, setFormVal] = useState({});

  const handleChange = (value, fieldName) => {
    setFormVal((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const dispatch = useDispatch();
  const error = useSelector((state) => state.customerDataSlice.cusErr);

  //   const handleSubmit = () => {
  //     console.log(formVal)
  //     dispatch(addToCustomer(formVal))

  //   };

  const addCusData = async () => {
    console.log(formVal,"check ob value");
    let obj = formVal;
    dispatch(customerData(obj))
      .unwrap()
      .then(() => {   dispatch(getServiceData());  navigation.navigate("CarService")});
  };

  return (
    <>
      <View style={{flex:1}}>
        <SafeAreaView>
          <ScrollView enableOnAndroid={false}>
            <View style={styles.container}>
              <Card
                containerStyle={{
                  borderRadius: 20,
                  padding: 10,
                  marginTop: StatusBar.currentHeight,
                  backgroundColor: "#faf0e6",
                  margin:20
                }}
              >
                <View>
                  <View>
                    <Text style={styles.headingText}> Customer Details </Text>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Name</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your Name"
                        onChangeText={(value) => {
                          handleChange(value, "CustomerName");
                        }}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Mobile No</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "90%" }]}
                        placeholder="Enter your mobile No"
                        onChangeText={(value) => {
                          handleChange(value, "MobileNumber");
                        }}
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Adress</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your  Address"
                        onChangeText={(value) => {
                          handleChange(value, "Address");
                        }}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>city</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your City"
                        onChangeText={(value) => {
                          handleChange(value, "City");
                        }}
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Car Brand</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your CarBrand"
                        onChangeText={(value) => {
                          handleChange(value, "CarBrand");
                        }}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Car Modal</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your Modal"
                        onChangeText={(value) => {
                          handleChange(value, "CarModel");
                        }}
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Discription</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="About "
                        onChangeText={(value) => {
                          handleChange(value, "Dscription");
                        }}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>  Vehicle No</Text>
                      <TextInput
                        style={[LoginStyle.TextInput, { width: "100%" }]}
                        placeholder="Enter your Veh No"
                        onChangeText={(value) => {
                          handleChange(value, "RegNumber");
                        }}
                      />
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity
                      style={[LoginStyle.loginBtn, { marginVertical: 10 }]}
                      onPress={addCusData}
                    >
                      <Text>Create</Text>
                    </TouchableOpacity>
                  </View>
                  <Text>{error} </Text>
                </View>
              </Card>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0CE1B",
    height:deviceHeight,
    width:deviceWidth,
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 10,
    minWidth: "50%",
  },

  labelText: {
    fontSize: 15,
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});
