import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Data } from "../../data/Datas";
import DeliverInvoice from "../Sidebar/components/DeliverInvoice";
import SibebarStyle from "../Sidebar/components/SibebarStyle";

export default function MyService({ navigation }) {
  const [show, setShow] = useState(false);

  const getInvoice = (item) => {
    setShow(true);
     
  };

 // const filterObj = Data.filter((e) => e.status == 'Confirmed');


  const alertPopup = () => {
    Alert.alert("Are you sure you want to delete..?", " ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const itemData = ({ item, index }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 30,height:40, backgroundColor: "#F0CE1B" }}>
          <Text>{item.id} </Text>
        </View>

        <View style={{ width: 80, backgroundColor: "#F0CE1B" }}>
          <Text>{item.name} </Text>
        </View>

        <View style={{ width: 90, backgroundColor: "#F0CE1B" }}>
          <Text>{item.vegNo} </Text>
        </View>

        <View style={{ width: 70, backgroundColor: "#F0CE1B" }}>
          <Text>{item.service} </Text>
        </View>

        <View style={{ width: 70, backgroundColor: "#F0CE1B" }}>
          <Text>{item.status} </Text>
        </View>
        <View
          style={{
            width: 70,
            backgroundColor: "#F0CE1B",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Ionicons
            name="eye-outline"
            color="#000"
            size={20}
            onPress={getInvoice}
          />
          <Ionicons name="trash" color="#000" size={20} onPress={alertPopup} />
        </View>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
         
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 30, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff", fontSize:16 }}>ID</Text>
          </View>

          <View style={{ width: 80, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff",  fontSize:16 }}>Name</Text>
          </View>

          <View style={{ width: 90, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff",  fontSize:16 }}>VehNo</Text>
          </View>

          <View style={{ width: 70, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff",  fontSize:16 }}>Service </Text>
          </View>

          <View style={{ width: 70, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff",  fontSize:16 }}> Status </Text>
          </View>

          <View style={{ width: 70, backgroundColor: "#000" }}>
            <Text style={{ color: "#fff",  fontSize:16 }}> Action </Text>
          </View>
        </View>
        <FlatList
          data={Data}
          renderItem={itemData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setShow(!show);
          }}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text onPress={() => setShow(!show)} style={{marginTop:15, textAlign:'center'}}>
                {" "}
                <Ionicons name="close-outline" color={'#7B0C0C'} size={35}  />
              </Text>
              <View>
              <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              
              }}
            >
              Abdul {"\n"}
              <Text style={{ fontWeight: "normal", fontSize: 16 }}>
                (RG nagar)
              </Text>
            </Text>
 
             {
                Data.filter((e) => e.status == 'Confirmed')  ?  <Text >
              Payed !
            </Text> :  <Text style={{color:'red'}} >
                Payed !
              </Text>
             }
           
          </View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginVertical: 20,
                  }}
                >
                  {" "}
                  Payment details
                </Text>

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ color: "#F0CE1B" }}> Booking fees</Text>

                    <Text>50Rs</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#F0CE1B" }}>Water wash</Text>
                    <Text></Text>

                    <Text>150Rs</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ color: "#F0CE1B" }}>Total service</Text>

                    <Text>500Rs</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Total
                  </Text>

                  <Text> 700 RS ! </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
   
  },
  modalView: {
    margin: 20,
    backgroundColor: "#9B9B9B",
    borderRadius: 20,
    padding: 25,
    height: 300,
    width: 300,
    
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
