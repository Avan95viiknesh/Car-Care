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
import { useSelector,useDispatch } from "react-redux";
import DatePicker from "react-native-neat-date-picker";
import UpcomingInvoice from "./UpcomingInvoice";
import { Data } from "../../../data/Datas";
import SibebarStyle from "./SibebarStyle";
import Toast from 'react-native-toast-message';
import { removeSheduleCard,deleteSchedule } from "../../../../redux/userDataSlice";
 

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
  const  serviceDetails = useSelector((state) => state.userDataSlice.serviceDetails);
  console.log("chkkkkkkkkkkk",serviceDetails)

  const dispatch = useDispatch();
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
    // LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    if(serviceDetails){
      console.log(serviceDetails,"serviceDetailsshed")
    }

  }, [serviceDetails]);

 const remove =(item) => {
  dispatch(removeSheduleCard(item))
 }


  const alertPopup = (item) => {
    Alert.alert("Are you sure you want to cancel..?", " ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => remove(item) },
    ]);
  };


 
 
 

// const handleRemove = (id) => {
//   const newList = searchTerm.filter((item) => item.id!== id);
//   setSearchTerm(newList)
//   console.log(id)
//   Toast.show({
//     type: 'success',
//     position: 'top',
//     text1: 'user deleted successfully'    
//   });
// }

 

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
          { serviceDetails && 
          <FlatList
            data={serviceDetails}          
            Style={LoginStyle.container}
            keyExtractor={(item) => item.id}
            renderItem={({ item,index} ) => (
          
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
                      {item[0].ownName} 
             
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
                      {item[0].address}{" "} 

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
                      {item[0].vehno}
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
                      {item[0].bookingDate}{" "}
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
                      {item[0].expectedTime}
                    </Text>
                  </Text>
                  <Text>
                    <Icon name="ellipse" size={10} color="green" /> 
                    <Text
                      style={{ color: theme == "light" ? "black" : "white" }}
                    >
                      {okStatus ? item.status = 'Delivered' : statusNOtok ? item. status= 'Upcoming' : 'Confirmed'} 
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
                     onPress={() =>alertPopup(item)}
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
                  }
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
