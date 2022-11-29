import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  SafeAreaView,
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
    date:' 12 / 03 / 21',
    time: '10.3',
    status: "confirmed",
  },
  {
    id: "2",
    ownerName: "Suren (Saidapet)",
    carName: "Honda",
    carNo: "TN0456",
    date: '1 / 08 / 22',
    time:' 11.0',
    status: "confirmed",
  },
  {
    id: "3",
    ownerName: "John (Tambaram)",
    carName: "Maruti",
    carNo: "TN0789",
    date: '11 / 05 / 21',
    time:' 4.0',
    status: "upcoming",
  },
];

export default function ScheduleApp({
  delivery,
  navigation,
  deliveryInvoice,
  upcoming,
  upcomingInvoice,
}) {



  return (
    <>
      <ScrollView>
        <View>
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
          ) : upcoming ? (
            <></>
          ) : (
            ""
          )}

          <View style={[LoginStyle.container, { backgroundColor: "#F9F9F9" }]}>
            <FlatList
              data={sheduleDetails}
              Style={LoginStyle.container}
              renderItem={({ item }) => (
                <View
                  style={
                    delivery || upcoming
                      ? SidebarStyle.cardSectionDelivery
                      : SidebarStyle.cardSection
                  }
                >
                  <Pressable
                    style={SidebarStyle.cardlist}
                    onPress={
                      delivery || item.status === "confirmed"
                      ?  () => navigation.navigate("DeliveryDetails") : '' 
                    }
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.textStyle}>Owner Name</Text>
                      <Text style={{ fontWeight: "bold", width: "50%" }}>
                        {item.ownerName}
                      </Text>
                    </View>

                    <View
                      style={[styles.textContainer, { paddingVertical: 6 }]}
                    >
                      <Text style={styles.textStyle}>Car Name</Text>
                      <Text style={{ width: "50%" }}>{item.carName} </Text>
                    </View>

                    <View style={styles.textContainer}>
                      <Text style={styles.textStyle}>Car No</Text>

                      <Text style={{ width: "50%" }}>{item.carNo}</Text>
                    </View>
                  </Pressable>

                  <Text style={styles.horzontalLine}></Text>
                  <View style={styles.dateAtime}>
                    <Text>
                      <Icon name="calendar-outline" size={18} />{" "}
                      <Text> {item.date} </Text>
                    </Text>
                    <Text>
                      <Icon name="time" size={18} /> <Text>{item.time}</Text>
                    </Text>
                    <Text>
                      <Icon name="ellipse" size={10} color="green" />{" "}
                      <Text>{item.status} </Text>
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

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textStyle: {
    color: "blue",
    fontWeight: "bold",
    width: "50%",
  },

  horzontalLine: {
    height: 1,
    width: "80%",
    backgroundColor: "blue",
    marginLeft: 30,
  },

  dateAtime: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
  },
});
