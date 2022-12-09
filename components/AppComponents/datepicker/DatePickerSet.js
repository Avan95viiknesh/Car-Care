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
    <View style={styles.boxContainer}>
 <View style={styles.inputContainer}>
        <TextInput
          style={[
            LoginStyle.TextInput,
            { width: 150, marginTop: 50, marginLeft: 50 },
          ]}
          value={date}
        />

        <Icon
          name="calendar-outline"
          size={18}
          style={{ position: "absolute", left: 150, bottom: 20 }}
          onPress={openDatePickerSingle}
        />

        <DatePicker
          placeholder="select date"
          dateStringFormat="dd-mm-yyyy"
          modalStyles={{
            height: 350,
            width: 50,
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          isVisible={showDatePickerSingle}
          mode={"single"}
          onCancel={onCancelSingle}
          onConfirm={onConfirmSingle}
          onChange = {(e) => {e.target.value;
          props.onChange(value)}}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
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
})