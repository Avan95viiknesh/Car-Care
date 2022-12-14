import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import LoginStyle from "../../../login/LoginStyle";

const paymentDetails = [
  {
    id: 1,
    wallet: "UPI / Wallet",
    image: require("../../../../assets/images/App/payment/pay.png"),
    icon: true,
  },

  {
    id: 2,
    wallet: "Credit / Debit Card",
    image: require("../../../../assets/images/App/payment/payment-mode.png"),
    icon: false,
  },

  {
    id: 3,
    wallet: "Net Banking",
    image: require("../../../../assets/images/App/payment/net-bank.jpg"),
    icon: true,
  },
  {
    id: 4,
    wallet: "Cash on delivery",
    image: require("../../../../assets/images/App/payment/cod-4.jpg"),
    icon: true,
  },
];

const Payment = ({addAmount }) => {
  const [checkbox, setCheckbox] = useState([...paymentDetails]);
  const [selectedID, setID] = React.useState('');

 

  const changeIcon = (id) => {
    checkbox[id].icon = !checkbox[id].icon;
    setCheckbox([...checkbox]);
  };

  const itemData = ({ item, index,id }) => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => changeIcon(index)}
          //  disabled={item.icon === true ? true : false}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "column", left: 10 }}>
                <Text style={styles.btnTxt}>{item.wallet} </Text>
                <Image
                  source={item.image}
                  style={{
                    height: 40,
                    width: "100%",
                    resizeMode: "stretch",
                    top: 15,
                    right: 1,
                  }}
                />
              </View>
              
              {/* <Text>
                <Icon
                  name={
                    item.icon === true
                      ? "checkmark-circle-outline"
                      : "checkmark-circle"
                  }
                  size={30}
                  style={styles.icon}
                  color="#3A7F0D"
                />
              </Text> */}
          
          <View style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: "#F0CE1B",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                
               
              >
           
                {item.icon === true ? (
                  <View 
                    style={{
                      height: 12,
                      width: 12,
                      borderRadius: 6,
                      backgroundColor: "green",
                    }}
                  checked={ item.id === selectedID}
                    onPress={() => {setID(item.id)}}
                  />
                ) : null}
              </View> 


            </View>



          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      <View>
        <FlatList
          data={checkbox}
          renderItem={itemData}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {/* {route.params.name} */}
          hi {addAmount }  
            </Text>

            <Text style={{ color: "#3A7F0D", padding: 5 }}>
              View Price Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2}  >
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Pay</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "60%",
            left: 70,
            borderColor: "gray",
            marginTop: 50,
            borderStyle: "dashed",
            borderRadius: 1,
            height: 10,
            borderWidth: 6,
          }}
        />
      </View>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  btn: {
    borderBottomWidth: 0.5,
    padding: 30,
  },

  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
    marginTop: 40,
  },

  btn1: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  btn2: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0CE1B",
    height: "90%",
    right: 10,
    borderRadius: 10,
  },

  icon: {
    alignSelf: "flex-end",
    marginTop: -30,
    bottom: 10,
  },
});
