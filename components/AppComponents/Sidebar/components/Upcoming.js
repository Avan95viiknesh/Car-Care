import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScheduleApp from "./ScheduleApp";

export default function Upcoming({ navigation }) {
  return (
    <>
      <ScrollView>
        <ScheduleApp
          upcoming="upcoming"
          upcomingInvoice={() => navigation.navigate("UpcomingInvoice")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
