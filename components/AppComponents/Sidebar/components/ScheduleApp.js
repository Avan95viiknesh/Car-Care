import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import React from "react";
import InputField from "../../../login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import SidebarStyle from "./SibebarStyle";
import LoginStyle from "../../../login/LoginStyle";

const sheduleDetails = [
  {
    id: "1",
    ownerName: "Akil (Anna nagar) ",
    carName: "Hyundai",
    carNo: "TN0123",
  },
  {
    id: "2",
    ownerName: "Suren (Saidapet)",
    carName: "Honda",
    carNo: "TN0456",
  },
  {
    id: "3",
    ownerName: "John (Tambaram)",
    carName: "Maruti",
    carNo: "TN0789",
  },
];

export default function ScheduleApp({ delivery, navigation,deliveryInvoice }) {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={SidebarStyle.container}>
          <View style={{ margin: 20 }}>
            <InputField placeholder="Search" />
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
              }}
            >
              Recent delivered cars{" "}
              <Text style={{ color: "green" }}> (10)</Text>{" "}
            </Text>
          ) : (
            ""
          )}

          <View>
            <FlatList
              data={sheduleDetails}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <View
                  style={
                    delivery
                      ? SidebarStyle.cardSectionDelivery
                      : SidebarStyle.cardSection
                  }
                >
                  <Pressable
                    style={SidebarStyle.cardlist}
                  
                    onPress={
                      deliveryInvoice
                        ? () => deliveryInvoice()
                        : () => navigation.navigate("DeliveryDetails")
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "blue", fontWeight: "bold" }}>
                        {" "}
                        Owner Name{" "}
                      </Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.ownerName}{" "}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 6,
                      }}
                    >
                      <Text style={{ color: "blue", fontWeight: "bold" }}>
                        {" "}
                        Car Name
                      </Text>
                      <Text>{item.carName} </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "blue", fontWeight: "bold" }}>
                        {" "}
                        Car No
                      </Text>

                      <Text>{item.carNo}</Text>
                    </View>
                  </Pressable>

                  <Text
                    style={{
                      height: 1,
                      width: "80%",
                      backgroundColor: "blue",
                      marginLeft: 30,
                    }}
                  ></Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    <Text>
                      <Icon name="calendar-outline" size={18} />{" "}
                      <Text> 12/03/21</Text>
                    </Text>
                    <Text style={{ marginHorizontal: 10 }}>
                      <Icon name="time" size={18} /> <Text>10.30am </Text>
                    </Text>
                    <Text>
                      <Icon name="ellipse" size={10} color="green" />{" "}
                      <Text>{delivery ? "Delivered" : "Confirmed"} </Text>
                    </Text>
                  </View>

                  {delivery ? (
                    ""
                  ) : (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginVertical: 10,
                      }}
                    >
                      <TouchableOpacity style={SidebarStyle.cancelBtn}>
                        <Text>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={SidebarStyle.scheduleBtn}>
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

const styles = StyleSheet.create({});
