import React from "react";
import { ScrollView } from "react-native";
import DeliverInvoice from "./DeliverInvoice";

export default function UpcomingInvoice({ navigation }) {
  return (
    <>
      <ScrollView>
        <DeliverInvoice upcoming="upcoming" />
      </ScrollView>
    </>
  );
}
