import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import InputField from "../../../login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import SidebarStyle from "./SibebarStyle";
import LoginStyle from "../../../login/LoginStyle";

const sheduleDetails = [
  {
    id: "1",
    ownerName: "Akil",
    carName: "Hyundai",
    carNo: "TN0123",
  },
  {
    id: "2",
    ownerName: "Suren",
    carName: "Honda",
    carNo: "TN0456",
  },
  {
    id: "3",
    ownerName: "John",
    carName: "Maruti",
    carNo: "TN0789",
  },
];

export default function ScheduleApp() {
  return (
    <View style={SidebarStyle.container}>
      <View style={{ margin: 20 }}>
        <InputField placeholder="Search" />
        <Icon
          name="search-outline"
          size={24}
          style={{ position: "absolute", right: 20, bottom: 20 }}
        />
      </View>

      <View>
        <FlatList
          data={sheduleDetails}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity style={SidebarStyle.cardSection}>
              <View style={SidebarStyle.cardlist}>
                <Text>Owner Name {item.ownerName} </Text>
                <Text> Car Name{item.carName} </Text>
                <Text> Car No{item.carNo}</Text>
              </View>
              <Text
                style={{
                  height: 1,
                  width: "80%",
                  backgroundColor: "blue",
                  marginLeft: 30,
                }}
              >
           
              </Text>
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:10, marginHorizontal:5  }} >
                <Text   > <Icon name="calendar-outline" size={24} /> 12/03/21</Text>
                <Text> <Icon name="time" size={24} /> 10.30am</Text>
                <Text> Confirmed </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent:'space-around', marginVertical:10}} >
                <TouchableOpacity style={ SidebarStyle.cancelBtn}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ SidebarStyle.scheduleBtn} >
                    <Text style={SidebarStyle.btnText} >Reschedule</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
