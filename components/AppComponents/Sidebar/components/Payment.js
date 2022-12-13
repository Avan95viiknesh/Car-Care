import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import LoginStyle from "../../../login/LoginStyle";

const paymentDetails = [
  {
    id: 1,
    wallet: "UPI / Wallet",
    icon: true,
  },

  {
    id: 2,
    wallet: "Credit / Debit Card",
    icon: false,
  },

  {
    id: 3,
    wallet: "Net Banking",
    icon: true,
  },
];

const Payment = ({ navigation, route }) => {
  const [checkbox, setCheckbox] = useState([...paymentDetails]);
  const [check, setCheck] = useState(false);

  const changeIcon = (id) => {
    checkbox[id].icon = !checkbox[id].icon;
    setCheckbox([...checkbox]);
  };

  //   const delShedule = (id) => {
  //     const dltList = [...searchTerm];
  //     dltList.splice(id,1)
  //     setSearchTerm(dltList)
  //    }

  const itemData = ({ item, index }) => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => changeIcon(index)}
            //    disabled={item.icon? true : false}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.btnTxt}>{item.wallet} </Text>
              <Text>
                {" "}
                <Icon
                  name={
                    item.icon === true
                      ? "checkmark-circle-outline"
                      : "checkmark-circle"
                  }
                  size={30}
                  style={styles.icon}
                  color="#3A7F0D"
                />{" "}
              </Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Credit / Debit Card</Text>

            <Image
              style={{
                height: 20,

                width: 150,

                top: 5,
              }}
              source={require("../../../../assets/images/App/payment/payment-mode.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { height: 100 }]}>
            <Text style={styles.btnTxt}>Net Banking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { height: 100 }]}>
            <Text style={styles.btnTxt}>Cash On Delivery</Text>
          </TouchableOpacity> */}
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
            </Text>

            <Text style={{ color: "#3A7F0D", padding: 5 }}>
              View Price Details
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.btn2}>
      <Text style={{ fontSize: 17, color: "#ffffff", fontWeight: "600" }}>
        Place Order
      </Text>
    </TouchableOpacity> */}

          <TouchableOpacity style={styles.btn2}>
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
