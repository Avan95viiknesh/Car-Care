import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import LoginStyle from "../../login/LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-neat-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ServiceList } from "../../data/ServiceList";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/userDataSlice";

 

export default function CarService({ navigation, customer }) {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [showDatePickerSingle2, setShowDatePickerSingle2] = useState(false);
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([...ServiceList]);
  const [ownerName, setOwnerName] = useState();
  const [vehNo, setVehNo] = useState();
  const [contact, setContact] = useState();
  const [adress, setAdress] = useState();
  const [dateNow, setDateNow] = useState(new Date());
  const [mode, setMode] = useState("dateNow");
  const [show, setShow] = useState(false);
  const [textShow, setTextShow] = useState("...");
  const [addItem, setAddItem] = useState([]);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

const dispatch = useDispatch();


  const newObj = [{
    ownName: ownerName,
    vehno : vehNo,
    contact: contact,
    address: adress,
    bookingDate:date,
    expectedDate: data,
    expectedTime:dateNow,
    service: value
  }];

  const handleSubmit = () => {
   
    dispatch(addToCart(newObj))
    
   navigation.navigate("ScheduleApp");
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
 
 <ScrollView>
  
 <View style={styles.container}>
    
      
    <View style={{ width: "100%", height: "100%" }}>
      <View>
        <Text style={styles.headingText}>Car Service </Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Name</Text>
          <TextInput
            style={[LoginStyle.TextInput, { width: "100%" }]}
            placeholder="Enter your Name"
            onChangeText={(text) => setOwnerName(text)}
            value={ownerName}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.labelText}>Vehicle No</Text>
          <TextInput
            style={[LoginStyle.TextInput, { width: "90%" }]}
            placeholder="Enter your Veh No"
            onChangeText={(text) => setVehNo(text)}
            value={vehNo}
          />
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Contact</Text>
          <TextInput
            style={[LoginStyle.TextInput, { width: "100%" }]}
            placeholder=" Enter your number"
            onChangeText={(text) => setContact(text)}
            value={contact}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.labelText}>Address</Text>

          <TextInput
      multiline={true}
      textAlignVertical="top"
      style={[LoginStyle.TextInput, { padding: 10, height: 40 }]}
      onChangeText={(text) => setAdress(text)}
      value={adress}
    />
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Booking Date</Text>
          <Text style={[LoginStyle.TextInput, { width: "100%" }]}>
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
        <View style={{ width: "50%" }}>
          <Text style={styles.labelText}>Expected Delivery</Text>
          <Text style={[LoginStyle.TextInput, { width: "90%" }]}>
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
          <Text style={styles.labelText}>Expected Time</Text>
          <Text style={[LoginStyle.TextInput, { width: "100%",textAlign:'left',paddingTop:15 }]}>
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
              style={{ position: "absolute", left: 105, bottom: 20 }}
              onPress={() => showMode("time")}
            />
          </View>

         
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.labelText}>Service Type</Text>

          <DropDownPicker
          // mode="BADGE"
            style={[
              LoginStyle.TextInput,
              { width: "90%", height: 45, },
            ]}
          //  searchable={true}     
            showArrowIcon={true}
         //   listMode="FLATLIST"
            autoScroll={true}
            open={open}
            value={value}
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
        //  theme="DARK"
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
      <Text>{addItem} </Text>
    </View>
   
</View>
   
 </ScrollView>
 



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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginVertical: 50,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F0CE1B",
    borderRadius: 10,
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    minWidth: "100%",
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
