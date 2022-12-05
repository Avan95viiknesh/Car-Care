import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

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
            <DataTable.Title>Actions  </DataTable.Title>
          </DataTable.Header>
      
            <FlatList
              data={serviceList}
              renderItem={({ item }) => (
                <View>
                      <DataTable.Row style={styles.tableRow}> 
                  <DataTable.Cell  style={styles.tabelCell}>
                  {item.name} 
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.tabelCell}>
               {item.VehicleName} 
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.tabelCell}>
                 {item.RegNo} 
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.tabelCell}>
           {item.serviceType} 
                  </DataTable.Cell>
                  <DataTable.Cell style={[styles.tabelCell,{flexDirection:'row', justifyContent:'space-between'}]}>
                  <Icon name="eye-outline" size={20}   /> 
                   <Icon name="trash-outline" size={20} /> 
                </DataTable.Cell>
                </DataTable.Row>
                </View>
              )}
              
            />

        </DataTable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tableHeader: {
    backgroundColor: "#c0c0c0",
  },
  tableRow:{
 
    borderColor: "#c0c0c0",
  },
  tabelCell: {
    
    padding: 10,
    
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
