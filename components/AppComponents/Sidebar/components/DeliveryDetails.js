import { ScrollView, Text, View } from "react-native";
import React from "react";
import ScheduleApp from "./ScheduleApp";
 

export default function DeliveryDetails({ navigation }) {
  return (
    <>
      <View>
        <ScrollView>
          <ScheduleApp
            delivery="delivery"
            deliveryInvoice={() => navigation.navigate("DeliverInvoice")}
          />
        </ScrollView>
      </View>
    </>
  );
}
