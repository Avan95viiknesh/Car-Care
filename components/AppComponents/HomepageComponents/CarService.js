import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState,useEffect } from "react";
import LoginStyle from "../../login/LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-neat-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ServiceList } from "../../data/ServiceList";
import { useSelector, useDispatch } from "react-redux";
import { addToShedule } from "../../../redux/userDataSlice";
import { serviceData,customerData,getServiceData } from "../../../redux/customerDataSlice";
import { Card } from "@rneui/themed";
import { Dimensions } from "react-native";
 

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function CarService({ navigation, customer }) {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [showDatePickerSingle2, setShowDatePickerSingle2] = useState(false);
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([...ServiceList]);
  // const [ownerName, setOwnerName] = useState();
  // const [vehNo, setVehNo] = useState();
  // const [contact, setContact] = useState();
  //const [adress, setAdress] = useState();
  const [dateNow, setDateNow] = useState(new Date());
  const [mode, setMode] = useState("dateNow");
  const [show, setShow] = useState(false);
  const [textShow, setTextShow] = useState("...");

  const [addItem, setAddItem] = useState();

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const customerInfo = useSelector((state) => state.customerDataSlice.customerInfo);
  const dispatch = useDispatch();
  // dispatch(getServiceData());
//   useEffect(() => {
  
//     dispatch(getServiceData());
// console.log("effect call")

//   },[dispatch])



  // const addItemAction = (item) => {
  //   setAddItem(item)}
 

  // useEffect(() => {
  //   setAddItem(customerInfo[customerInfo.length - 1]);
  // }, [customerInfo]);
  
 // console.log(customerInfo,"check vicky check 3uyb")
  const handleChange = (value, fieldName) => {
    setAddItem((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // console.log(textShow, "dateNow check");

  // const handleSubmit = () => {
  //   // dispatch(addToShedule(newObj))
  //   navigation.navigate("ScheduleApp");
  // };

  // const handleSubmit = () => {
  //   let data = addItem;
  //   // const obj = {
  //   //   Dscription:addItem.Dscription,
  //   // }

  //   // dispatch(addToShedule(newObj))
  //   dispatch(serviceData(addItem)).unwrap()
  //   .then(() => navigation.navigate("ScheduleApp"));

  //   //console.log(addItem);
  // };
 


  const handleSubmit = async () => {
    let data = addItem;
    dispatch(serviceData(data))
      .unwrap()
      .then(() => {
      
        navigation.navigate("ScheduleApp");
        
      })
      .catch(() => {
        error(true);
      });
    console.log(data, "payload data");
  };

  // console.log(newObj);

  const onChangeTimeDate = (event, selectedDate) => {
    const currentdate = selectedDate || dateNow;
    setShow(Platform.OS === "ios");
    setDateNow(currentdate);

    let tempDate = new Date(currentdate);
    // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = "Hrs:" + tempDate.getHours() + " | Min" + tempDate.getMinutes();
    setTextShow(fTime);

    // console.log("(" + fTime + ")");
  };

  const onCancel = () => {
    setShow(false);
  };

  const onConfirm = (output) => {
    setShow(false);
    // console.log(output);
    setDateNow(output.timeString);
  };

  const openDatePickerSingle = () => setShowDatePickerSingle(true);
  const openDatePickerSingle2 = () => setShowDatePickerSingle2(true);

  const onCancelSingle = () => {
    setShowDatePickerSingle(false);
  };

  const onCancelSingle2 = () => {
    setShowDatePickerSingle2(false);
  };

  const onConfirmSingle = (output) => {
    setShowDatePickerSingle(false);
    // console.log(output);
    setDate(output.dateString);
  };

  const onConfirmSingle2 = (output) => {
    setShowDatePickerSingle2(false);
    // console.log(output);
    setData(output.dateString);
  };



  return (
    <>
      <View style={{flex:1}}>
        <SafeAreaView>
          <ScrollView enableOnAndroid={false}>
            <View style={styles.container}>
              <Card
                containerStyle={{
                  borderRadius: 20,
                  padding: 20,
                  marginBottom: 50,
                  marginTop: StatusBar.currentHeight,
                  backgroundColor: "#faf0e6",
                }}
              >
                <View>
                  <View>
                    <Text style={styles.headingText}>Car Service </Text>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Name</Text>
                      <TextInput
                        style={[
                          LoginStyle.TextInput,
                          { width: "100%", borderWidth: 0 },
                        ]}
                      //  value={  addItem.CustomerName }
                        placeholder="Enter your Name"
                        onChangeText={(value) => {
                          handleChange(value, "CustomerName");
                        }}

                    
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Vehicle No</Text>
                      <TextInput
                        style={[
                          LoginStyle.TextInput,
                          { width: "90%", borderWidth: 0 },
                        ]}
                      
                        placeholder="Enter your Veh No"
                        onChangeText={(value) => {
                          handleChange(value, "RegNumber");
                        }}
 
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Contact</Text>
                      <TextInput
                        style={[
                          LoginStyle.TextInput,
                          { width: "100%", borderWidth: 0 },
                        ]}
                        placeholderStyle={LoginStyle.placeholder}
                        placeholder=" Enter your number"
                    
                     //   value={addItem.length -1 ? addItem.MobileNumber : ''}
                        onChangeText={(value) => {
                          handleChange(value, "MobileNum");
                        }}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Model</Text>

                      <TextInput
                        multiline={true}
                        textAlignVertical="top"
                        style={[
                          LoginStyle.TextInput,
                          {
                            width: "90%",
                            padding: 10,
                            height: 40,
                            borderWidth: 0,
                          },
                        ]}
                        onChangeText={(value) => {
                          handleChange(value, "Model");
                        }}
                        placeholder=" Enter your model name"
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Booking Date</Text>
                      <Text
                        style={[
                          LoginStyle.TextInput,
                          { width: "100%", borderWidth: 0 },
                        ]}
                      >
                        {" "}
                        {date}{" "}
                      </Text>

                      <Icon
                        name="calendar-outline"
                        size={18}
                        style={{ position: "absolute", right: 30, bottom: 20 }}
                        onPress={openDatePickerSingle}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Expected Delivery</Text>
                      <Text
                        style={[
                          LoginStyle.TextInput,
                          { width: "90%", borderWidth: 0 },
                        ]}
                      >
                        {data}{" "}
                      </Text>

                      <Icon
                        name="calendar-outline"
                        size={18}
                        style={{ position: "absolute", right: 30, bottom: 20 }}
                        onPress={openDatePickerSingle2}
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Description</Text>
                      <TextInput
                        style={[
                          LoginStyle.TextInput,
                          { width: "100%", borderWidth: 0 },
                        ]}
                        onChangeText={(value) => {
                          handleChange(value, "Dscription");
                        }}
                      />
                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Service Code</Text>
                      <TextInput
                        style={[
                          LoginStyle.TextInput,
                          { width: "90%", borderWidth: 0 },
                        ]}
                        onChangeText={(value) => {
                          handleChange(parseInt(value), "ServiceCode");
                        }}
                      />
                    </View>
                  </View>

                  <View style={styles.boxContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Expected Time</Text>
                      <Text
                        style={[
                          LoginStyle.TextInput,
                          {
                            width: "100%",
                            textAlign: "left",
                            paddingTop: 15,
                            borderWidth: 0,
                          },
                        ]}
                      >
                        {textShow}{" "}
                      </Text>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {/* <TimePicker
  value={{ hours, minutes }}
  onChange={handleChangeTime}    
  
/> */}

                        <Icon
                          name="time-outline"
                          size={18}
                          style={{
                            position: "absolute",
                            left: 105,
                            bottom: 20,
                          }}
                          onPress={() => showMode("time")}
                        />
                      </View>
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.labelText}>Service Type</Text>
    
     <DropDownPicker
    // mode="BADGE"
    showTickIcon={true}
  //  hideSelectedItemIcon={true}
  dropDownContainerStyle={{
    backgroundColor: "#faf0e6"
  }}
  itemSeparator={true}
    style={[LoginStyle.TextInput, { width: "90%", height: 45,borderWidth:0  }]}
    //  searchable={true}
    showArrowIcon={true}
      listMode="SCROLLVIEW"
    autoScroll={true}
    open={open}
    value={value}
    onChangeText={(value) => {
      handleChange(value, "ServiceCode");
    }}
    selectedItemContainerStyle={{
      backgroundColor: "#F0CE1B"
    }}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    //  autoScroll={true}
    multiple={true}
    closeAfterSelecting={true}
    min={0}
    max={3}
    textStyle={{
      fontSize: 15,
    }}
    disabledItemLabelStyle={{
      opacity: 0.5
    }}
    
    
  /> 
    
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity
                      style={[LoginStyle.loginBtn, { marginVertical: 10 }]}
                      onPress={handleSubmit}
                    >
                      <Text>Book Service</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <Text>{addItem} </Text> */}
                </View>
              </Card>
            </View>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                show={show}
                value={dateNow}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onChangeTimeDate}
                onCancel={onCancel}
                onConfirm={onConfirm}
              />
            )}
            <DatePicker
              placeholder="select date"
              dateStringFormat="dd-mm-yyyy"
              modalStyles={{
                height: 400,
                width: 50,
                position: "absolute",
                top: 80,
                left: 170,
                zIndex: 1,
              }}
              isVisible={showDatePickerSingle}
              mode={"single"}
              onCancel={onCancelSingle}
              onConfirm={onConfirmSingle}
            />

            <DatePicker
              placeholder="select date"
              dateStringFormat="dd-mm-yyyy"
              modalStyles={{
                position: "absolute",
                top: 0,
                left: 30,
                zIndex: 1,
              }}
              isVisible={showDatePickerSingle2}
              mode={"single"}
              onCancel={onCancelSingle2}
              onConfirm={onConfirmSingle2}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0CE1B",
    height:deviceHeight,
    width:deviceWidth,
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 10,
    width: "50%",
  },

  labelText: {
    fontSize: 15,
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});
