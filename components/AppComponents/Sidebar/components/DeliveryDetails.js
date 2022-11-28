import { ScrollView, Text, View } from "react-native";
import React from "react";
import ScheduleApp from "./ScheduleApp";
import SidebarStyle from "./SibebarStyle";

export default function DeliveryDetails({navigation}) {
  return <ScheduleApp delivery='delivery'  deliveryInvoice={() => navigation.navigate("DeliverInvoice")} />;
}
