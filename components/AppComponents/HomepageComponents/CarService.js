import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import LoginStyle from "../../login/LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-neat-date-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimePicker } from 'react-native-simple-time-picker';
import DatePickerSet from "../datepicker/DatePickerSet";

export default function CarService() {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [showDatePickerSingle2, setShowDatePickerSingle2] = useState(false);
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Free Service", value: "Free" },
    { label: "Paid Service", value: "Paid" },
    { label: "Free Checkup", value: "Checkup" },
  ]);
const [ownerName, setOwnerName] = useState();
const [vehNo, setVehNo] = useState();
const [contact, setContact] = useState();
 


const [dateNow, setDateNow] = useState(new Date())
const [mode, setMode] = useState('dateNow');
const [show, setShow] = useState(false);
const [textShow, setTextShow] = useState('...')


const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode)
}

const onChangeTimeDate = (event, selectedDate) => {
const currentdate = selectedDate || dateNow;
setShow(Platform.OS === 'ios');
setDateNow(currentdate);

let tempDate = new Date(currentdate);
// let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
let fTime = 'Hrs :' + tempDate.getHours() + '| Min' + tempDate.getMinutes(); 
setTextShow(fTime)

console.log( '('+ fTime + ')' )
}

const onCancel = () => {
  setShow(false);
};

const onConfirm = (output) => {
  setShow(false);
  console.log(output);
  setDateNow(output.timeString);
};

  const handleChangeTime = (  { hours , minutes }) => {
    setHours(hours);
    setMinutes( minutes);
  };
  // const handleReset = () => {
  //   setHours(0);
  //   setMinutes(0);
  // };

  const openDatePickerSingle = () => setShowDatePickerSingle(true);
 

  const onCancelSingle = () => {
    setShowDatePickerSingle(false);
  };
  
  const onConfirmSingle = (output) => {
    setShowDatePickerSingle(false);
    console.log(output);
    setDate(output.dateString);
  };

   
  const handleSubmit =() => {
 
    console.log(ownerName,vehNo,contact,value,date,data,textShow);
   ('')
  }

  return (
    <ScrollView>
    
      <View style={styles.container}>
        <View>
          <Text style={styles.headingText}>Car Service </Text>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder="Enter your Name"
              onChangeText={(text) =>setOwnerName(text)}
              value={ownerName}
            />
          </View>
          <View>
            <Text style={styles.labelText}>Vehicle No</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder="Enter your Veh No"
              onChangeText={(text) => setVehNo (text)}
          
              value={vehNo}
            />
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Contact</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder=" Enter your number"
              onChangeText={(text) => setContact (text)}           
              value={contact}
            />
          </View>
          <View>
            <Text style={styles.labelText}>Service Type</Text>

            <DropDownPicker
              style={[
                LoginStyle.TextInput,
                { width: 150, height: 45, zIndex: -1 },
              ]}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              
            />
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Booking Date</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              value={date}
            />

            <Icon
              name="calendar-outline"
              size={18}
              style={{ position: "absolute", right: 10, bottom: 20 }}
              onPress={openDatePickerSingle}
            />
          </View>
          <View>
            <Text style={styles.labelText}>Expected Delivery</Text>
            
        <DatePickerSet />
          </View>
          
        </View>

        <View>
       
            <Text style={styles.labelText}>Expected Time</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              value={textShow}
            />
             
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <TimePicker
        value={{ hours, minutes }}
        onChange={handleChangeTime}    
        
      /> */}

 
       </View>

            <Icon
              name="time-outline"
              size={18}
              style={{ position: "absolute", left: 120, bottom: 20 }}
             onPress={() => showMode('time')} 
            />

           
           {
            show && (  <DateTimePicker testID = 'dateTimePicker' show={show} value ={dateNow} mode='time' is24Hour ={true} display ='default' onChange ={onChangeTimeDate}    onCancel={onCancel}
            onConfirm={onConfirm}  />)
           }  

 
          </View>


 

        <View>
          <TouchableOpacity
            style={[LoginStyle.loginBtn, { marginVertical: 10, }]}
            onPress={handleSubmit}
          >
            <Text>Book Service</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
