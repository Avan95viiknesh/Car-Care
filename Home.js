import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/login/SignUp';
import Login from './components/login/Login';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})