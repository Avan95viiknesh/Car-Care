import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  LogBox,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputField from "../../../login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import SidebarStyle from "./SibebarStyle";
import LoginStyle from "../../../login/LoginStyle";
import { useSelector } from "react-redux";
import DatePicker from "react-native-neat-date-picker";
import UpcomingInvoice from "./UpcomingInvoice";
import { Data } from "../../../data/Datas";
import SibebarStyle from "./SibebarStyle";
import Toast from 'react-native-toast-message';

export default function ScheduleApp({
  delivery,
  navigation,
  deliveryInvoice,
  upcoming,
  upcomingInvoice,
  okStatus,
  statusNOtok,
  addText
}) {
  const { theme } = useSelector((state) => state.themeReducer);
  const  val = useSelector((state) => state.userDataSlice);
  console.log("chkkkkkkkkkkk",val.cartItems)
//  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [date, setDate] = useState("");
  const [searchTerm, setSearchTerm] = useState([...Data]);
  const [mastersearchTerm, setmasterSearchTerm] = useState([...Data]);
  const [datas, setDatas] = useState([...Data]);

  const searchFilterFunction = (text) => {
    if (text.length >= 1) {
      const filteredData = Data.filter((data) => {
        if (data.name.toUpperCase().includes(text.toUpperCase())) {
          return data;
        }
      });

      setSearchTerm(filteredData);
    } else {
      setSearchTerm(mastersearchTerm);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const alertPopup = (id) => {
    Alert.alert("Are you sure you want to cancel..?", " ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () =>handleRemove(id)},
    ]);
  };


 
 
 

const handleRemove = (id) => {
  const newList = searchTerm.filter((item) => item.id!== id);
  setSearchTerm(newList)
  console.log(id)
  Toast.show({
    type: 'success',
    position: 'top',
    text1: 'user deleted successfully'    
  });
}

 

  return (
    <>
      <ScrollView>
        <View style={[SibebarStyle.container,{ backgroundColor: theme == "light" ? "white" : "black" }]}>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              placeholder="Search"
              style={LoginStyle.TextInput}
              onChangeText={(e) => searchFilterFunction(e)}
            />
            <Icon
              name="search-outline"
              size={24}
              style={{ position: "absolute", right: 20, bottom: 20 }}
            />
          </View>

          {delivery ? (
            <Text
              style={{
                paddingHorizontal: 20,
                marginBottom: 20,
                fontWeight: "bold",
                fontSize: 20,
                color: theme == "light" ? "black" : "white",
              }}
            >
              Recent delivered cars{" "}
              <Text style={{ color: "green" }}> (10)</Text>{" "}
            </Text>
          ) : upcoming ? (
            <></>
          ) : (
            ""
          )}

          <View
            style={[
              LoginStyle.container,
              { backgroundColor: theme == "light" ? "white" : "black" },
            ]}
          >
            <FlatList
              data={val.cartItems}
              Style={LoginStyle.container}
              renderItem={({ item,id}) => (
                <View
                  style={
                   [ delivery || upcoming
                      ? SidebarStyle.cardSectionDelivery
                      : SidebarStyle.cardSection]
                  }
                >
                  <Pressable
                    style={SidebarStyle.cardlist}
                    // onPress={
                    //   item.status === "Confirmed"
                    //     ? deliveryInvoice 
                    //       ? () => deliveryInvoice()
                    //       : () => navigation.navigate("DeliveryDetails")
                    //     : upcomingInvoice
                    //     ? () => upcomingInvoice()
                    //     : () => navigation.navigate("Upcoming")
                    // }
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.textStyle}>Owner Name</Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          width: "50%",
                          color: theme == "light" ? "black" : "white",
                        }}
                      >
                        {item.ownName}
                      </Text>
                    </View>

                    <View
                      style={[styles.textContainer, { paddingVertical: 6 }]}
                    >
                      <Text style={styles.textStyle}>Car Name</Text>
                      <Text
                        style={{
                          width: "50%",
                          color: theme == "light" ? "black" : "white",
                        }}
                      >
                        {item.vehName}{" "} 

                      </Text>
                    </View>

                    <View style={styles.textContainer}>
                      <Text style={styles.textStyle}>Car No</Text>

                      <Text
                        style={{
                          width: "50%",
                          color: theme == "light" ? "black" : "white",
                        }}
                      >
                        {item.vehno}
                      </Text>
                    </View>
                  </Pressable>

                  <Text style={styles.horzontalLine}></Text>
                  <View style={styles.dateAtime}>
                    <Text>
                      <Icon name="calendar-outline" size={18} />{" "}
                      <Text
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        {" "}
                        {item.date}{" "}
                      </Text>
                    </Text>
                    <Text>
                      <Icon
                        name="time"
                        size={18}
                        style={{ color: theme == "light" ? "black" : "white" }}
                      />{" "}
                      <Text
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        {item.time}
                      </Text>
                    </Text>
                    <Text>
                      <Icon name="ellipse" size={10} color="green" /> 
                      <Text
                        style={{ color: theme == "light" ? "black" : "white" }}
                      >
                        {okStatus ? item.status = 'Delivered' : statusNOtok ? item. status= 'Upcoming' : item.status} 
                      </Text>
                      
                    </Text>
                  </View>

                  {delivery || upcoming ? (
                    ""
                  ) : (
                    <View
                      style={[
                        styles.textContainer,
                        { marginHorizontal: 25, marginBottom: 10 },
                      ]}
                    >
                      <TouchableOpacity
                        style={SidebarStyle.cancelBtn}
                      //  onPress={() =>handleDelete(item.id)}
                       onPress={() =>alertPopup(item.id)}
                      >
                        <Text>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={SidebarStyle.scheduleBtn}
                        onPress={() => navigation.navigate("CarService")}
                      >
                        <Text style={SidebarStyle.btnText}>Reschedule</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textStyle: {
    color: "#F0CE1B",
    fontWeight: "bold",
    width: "50%",
  },

  horzontalLine: {
    height: 1,
    width: "80%",
    backgroundColor: "white",
    marginLeft: 30,
  },

  dateAtime: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    width: "100%",
  },
});
