import { View, Text, ScrollView,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import React,{useState} from "react";
import CarService from "./CarService";
import LoginStyle from "../../login/LoginStyle";

export default function NewCustomer() {

const [formVal, setFormVal]  = useState({})

const handleChange = (value, fieldName) => {
    setFormVal((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };


  const handleSubmit = ( ) => {
     
    console.log(formVal)
  }


  return (
    <>
      <ScrollView>
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
                    handleChange(value, "customerName");
                  }}
               
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Mobile No</Text>
              <TextInput
                style={[LoginStyle.TextInput, { width: "90%" }]}
                placeholder="Enter your mobile No"
                onChangeText={(value) => {
                    handleChange(value, "customerNo");
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
                    handleChange(value, "customerAdress");
                  }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>city</Text>
              <TextInput
                style={[LoginStyle.TextInput, { width: "90%" }]}
                placeholder="Enter your City"
                onChangeText={(value) => {
                    handleChange(value, "customerCity");
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
                    handleChange(value, "customerCar");
                  }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Car Modal</Text>
              <TextInput
                style={[LoginStyle.TextInput, { width: "90%" }]}
                placeholder="Enter your Modal"
                onChangeText={(value) => {
                    handleChange(value, "customerModal");
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
                    handleChange(value, "aboutCustomer");
                  }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Vehicle No</Text>
              <TextInput
                style={[LoginStyle.TextInput, { width: "90%" }]}
                placeholder="Enter your Veh No"
                onChangeText={(value) => {
                    handleChange(value, "customerVehNo");
                  }}
              />
            </View>
          </View>


          <View>
        <TouchableOpacity
          style={[LoginStyle.loginBtn, { marginVertical: 10 }]}
         onPress={handleSubmit} 
        >
          <Text>Create</Text>
        </TouchableOpacity>
      </View>

        </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      marginVertical: 50,
      padding: 20,
      borderWidth: 1,
      borderColor: "#F0CE1B",
      borderRadius: 10,
    },
  
    boxContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
      minWidth: "100%",
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
  