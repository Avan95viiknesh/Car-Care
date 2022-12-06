import {
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    Text,
    Modal,
    Pressable
  } from "react-native";
  import React,{useState} from "react";
  import { DataTable, TextInput } from "react-native-paper";
 
 
  
  export default function EditService({updateData}) {
  
    const [name, setName] = useState();
    const [vehName, setVehName] = useState();
    const [regNo, setRegNo] = useState();
    const [serviceType, setServiceType] = useState();
  
    return (
      <>
        <View>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.tableTitle}>Name</DataTable.Title>
              <DataTable.Title style={styles.tableTitle}>Vehicle Name</DataTable.Title>
              <DataTable.Title style={styles.tableTitle}>Reg No</DataTable.Title>
              <DataTable.Title style={styles.tableTitle}>Service Type</DataTable.Title>
         
             
            </DataTable.Header>
  
            <FlatList
              data={serviceList}
              renderItem={({ item }) => (
                <View>
                  <DataTable.Row style={styles.tableRow}>
                    <DataTable.Cell style={styles.tabelCell}>
                     <TextInput  style={{backgroundColor:'#edcf8e'}} value={name} onChangeText={(text) => setName(text)} /> 
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.tabelCell}>
                   <TextInput style={{backgroundColor:'#edcf8e'}} value={vehName} onChangeText={(text) => setVehName(text)}/> 
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.tabelCell}>  
                     <TextInput style={{backgroundColor:'#edcf8e'}} value={regNo} onChangeText={(text) => setRegNo(text)}/> 
                     
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.tabelCell}>
                   
                      <TextInput style={{backgroundColor:'#edcf8e'}} value={serviceType} onChangeText={(text) => setServiceType(text)}/>  
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
    tableTitle:{
      borderRightWidth:1,
      borderRightColor: 'gray',
    },
    tableHeader: {
      backgroundColor:'#F0CE1B',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    tableRow: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      backgroundColor:'#edcf8e',
    },
  
    tabelCell: {
      borderRightWidth:1,
      borderRightColor: 'gray',
       
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
    
  ];
  