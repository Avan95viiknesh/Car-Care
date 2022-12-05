import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LoginStyle from "../../login/LoginStyle";
import Icon from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-neat-date-picker";
import { Formik } from 'formik';

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
    console.log(output);
    setDate(output.dateString);
  };

  const onConfirmSingle2 = (output) => {
    setShowDatePickerSingle2(false);
    console.log(output);
    setData(output.dateString);
  };

  return (
    <ScrollView>
        <Formik
     initialValues={{ name:'', number: '', mobile:'' }}
     onSubmit={values => console.log(values)}
   >  
     {({ handleChange, handleBlur, handleSubmit, values }) => (
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
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </View>
          <View>
            <Text style={styles.labelText}>Vehicle No</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder="Enter your Veh No"
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              value={values.number}
            />
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Contact</Text>
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder=" Enter your number"
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
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
              placeholder={date}
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
            <TextInput
              style={[LoginStyle.TextInput, { width: 150 }]}
              placeholder={data}
            />
            <Icon
              name="calendar-outline"
              size={18}
              style={{ position: "absolute", right: 10, bottom: 20 }}
              onPress={openDatePickerSingle2}
            />
          </View>
        </View>

        <DatePicker
          placeholder="select date"
          dateStringFormat="dd-mm-yyyy"
          modalStyles={{
            height: 400,
            width: 50,
            position: "absolute",
            top: 50,
            right: 150,
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
            height: 400,
            width: 50,
            position: "absolute",
            top: 50,
            right: 150,
            zIndex: 1,
          }}
          isVisible={showDatePickerSingle2}
          mode={"single"}
          onCancel={onCancelSingle2}
          onConfirm={onConfirmSingle2}
        />

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
           )}
      </Formik>
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
