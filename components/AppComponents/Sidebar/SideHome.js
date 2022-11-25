import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
 

import Sidebar from '.././Sidebar/components/Sibebar'
import {UpcomingCars,OutgoingCars,ScheduleAppoinment} from './Sidebar'

const DrawerNavigator = createDrawerNavigator({
    UpcomingCars,OutgoingCars,ScheduleAppoinment
}, {
    contentComponent : props => <Sidebar {...props} />
})


export default createDrawerNavigator(DrawerNavigator)