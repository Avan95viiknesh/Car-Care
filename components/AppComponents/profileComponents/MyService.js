import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

export default function MyService() {
  return (
    <>
      <View>
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Vehicle Name</DataTable.Title>
            <DataTable.Title>Reg No</DataTable.Title>
            <DataTable.Title>Service Type</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={styles.tableRow}>
            <FlatList
              data={serviceList}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <DataTable.Cell>
                    <Text style={styles.tabelCell}>{item.name}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tabelCell}>{item.VehicleName}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tabelCell}>{item.RegNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tabelCell}>{item.serviceType}</Text>
                  </DataTable.Cell>
                </View>
              )}
            />
          </DataTable.Row>
        </DataTable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "#c0c0c0",
  },
  tableRow: {
    height: 130,

    backgroundColor: "#F0CE1B",
  },
  tabelCell: {
    borderBottomWidth: 1,
    borderColor: "#F0CE1B",
  },
});

const serviceList = [
  {
    id: 1,
    name: "John David",
    VehicleName: "Hyundai",
    RegNo: "TN0123",
    serviceType: "First Service",
  },
  {
    id: 2,
    name: "Rahim",
    VehicleName: "Maruti",
    RegNo: "TN0348",
    serviceType: "Third Service",
  },
  {
    id: 3,
    name: "Vignesh Murugan",
    VehicleName: "Jaguar",
    RegNo: "TN1208",
    serviceType: "Paid Service",
  },
  {
    id: 4,
    name: "John Abdul Praba",
    VehicleName: "BMW",
    RegNo: "TN2574",
    serviceType: "Second Service",
  },
];
