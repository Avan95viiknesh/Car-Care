import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from "react";
import LoginStyle from '../../login/LoginStyle';
import Icon from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-neat-date-picker";

export default function DatePickerSet({props}) {

    const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
 
    const [date, setDate] = useState("");


    const openDatePickerSingle = () => setShowDatePickerSingle(true);

  const onCancelSingle = () => {
    setShowDatePickerSingle(false);
  };

  const onConfirmSingle = (output) => {
    setShowDatePickerSingle(false);
    console.log(output);
    setDate(output.dateString);
  };


  return (
   <>
    <View >
 <View >
        <TextInput
          style={[
            LoginStyle.TextInput,
            { width: 150,},
          ]}
          value={date}
        />

        <Icon
          name="calendar-outline"
          size={18}
          style={{ position: "absolute", left: 120, bottom: 20 }}
          onPress={openDatePickerSingle}
        />

       
      </View>
     
    </View>
    <DatePicker
          placeholder="select date"
          dateStringFormat="dd-mm-yyyy"
          
          isVisible={showDatePickerSingle}
          mode={"single"}
          onCancel={onCancelSingle}
          onConfirm={onConfirmSingle}
          // onChange = {(e) => {e.target.value;
          // props.onChange(value)}}
        />
    </>

    
  )
}

 