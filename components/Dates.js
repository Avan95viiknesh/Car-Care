import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const Dates = () => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false)
  const [showDatePickerRange, setShowDatePickerRange] = useState(false);

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const openDatePickerSingle = () => setShowDatePickerSingle(true)
  const openDatePickerRange = () => setShowDatePickerRange(true)

  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false)
  }

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false)

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output)
    setDate(output.dateString)
  }

  const onCancelRange = () => {
    setShowDatePickerRange(false)
  }

  const onConfirmRange = (output) => {
    setShowDatePickerRange(false)
    setStartDate(output.startDateString)
    setEndDate(output.endDateString)
  }

  return (
    <View style={styles.container}>
      {/* Single Date */}
      <Button title={'single'} onPress={openDatePickerSingle} />
      <DatePicker
        isVisible={showDatePickerSingle}
        mode={'single'}
        onCancel={onCancelSingle}
        onConfirm={onConfirmSingle}
      />
      <Text>{date}</Text>

      {/* Date Range */}
      <Button title={'range'} onPress={openDatePickerRange} />
      <DatePicker
        isVisible={showDatePickerRange}
        mode={'range'}
        onCancel={onCancelRange}
        onConfirm={onConfirmRange}
      />
      <Text>{startDate && `${startDate} ~ ${endDate}`}</Text>
    </View>
  )
}

export default Dates

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})