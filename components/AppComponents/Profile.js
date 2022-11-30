import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import LoginStyle from "../login/LoginStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Profile({ navigation, settings }) {

  const NavigateService = () => {
    
      navigation.navigate("MyService")
     
  }
  const NavigateContact = () => {
    
    navigation.navigate("ContactUs")
   
}
const NavigateSettings = () => {
    
  navigation.navigate("Settings")
 
}
  const ProfileList = [
    {
      id: 1,
      
      name: {
        profileName:<Text onPress={NavigateService}>My Service</Text>,
        settingsName: <Text>Account</Text>
      },
      icon: {
        profileIcon: <Ionicons name="construct" color="#F0CE1B" size={24} onPress={NavigateService} />,

        settingsIcon : <Ionicons name="person-outline" color="#F0CE1B" size={24}   />
      },
      Arrow: (
        <Ionicons name="chevron-forward-outline" color="#F0CE1B" size={24}  onPress={NavigateService} />
      ),
    },
    {
      id: 2,
      name: {
        profileName:<Text onPress={NavigateSettings}>Settings   </Text>,
        settingsName: <Text>Notifications</Text>
      },
      icon: {
        profileIcon:  <Ionicons name="settings" color="#F0CE1B" size={24} onPress={NavigateSettings}/>,
        settingsIcon :<Ionicons name="notifications-outline" color="#F0CE1B" size={24} />
      },
      Arrow: (
        <Ionicons name="chevron-forward-outline" color="#F0CE1B" size={24} onPress={NavigateSettings} />
      ),
    },
    {
      id: 3,
      name: {
        profileName:<Text >Help center</Text>,
        settingsName: <Text>Appearance</Text>
      },
      icon: {
        profileIcon: <Ionicons name="help-circle" color="#F0CE1B" size={24} />,
        settingsIcon : <Ionicons name="eye-outline" color="#F0CE1B" size={24} />
      },
      Arrow: (
        <Ionicons name="chevron-forward-outline" color="#F0CE1B" size={24} />
      ),
    },
    {
      id: 4,
      name: {
        profileName:<Text onPress={NavigateContact}>Contact Us</Text>,
        settingsName: <Text>Privacy & Security</Text>
      },
      icon: {
        profileIcon: <Ionicons name="mail" color="#F0CE1B" size={24} onPress={NavigateContact}  />,
        settingsIcon :<Ionicons name="key-outline" color="#F0CE1B" size={24} />,
      },
      Arrow: (
        <Ionicons name="chevron-forward-outline" color="#F0CE1B" size={24} onPress={NavigateContact} />
      ),
    },
    {
      id: 5,
      name: {
        profileName:<Text>Dark Mode      </Text>,
      },
      icon : {
profileIcon: <Ionicons name="eye-outline" color="#F0CE1B" size={24} />
      }
    }
    
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text
          style={{
            color: "#1A30AC",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          Hello, User
        </Text>
        <Text>+91 0123456789</Text>
      </View>

      <View style={{ alignItems: "flex-start", marginTop: 20 }}>
        <FlatList
          data={ProfileList}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
                alignItems: "center",
                 
              }}
            >
              <Text>{ settings ? item.icon.settingsIcon : item.icon.profileIcon} </Text>
              <Text style={{ marginHorizontal: 20 }}>{ settings ? item.name.settingsName : item.name.profileName}</Text>
              <Text>{item.Arrow} </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity style={[LoginStyle.loginBtn,{marginLeft:0, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}]}   onPress={() => navigation.navigate("Login")}>
        <Text style={[LoginStyle.btnText,{fontSize:15, paddingHorizontal:0}]}>Log out</Text>
        <Ionicons name= "power-outline" color="black" size={22}  />
      </TouchableOpacity>
    </View>
  );
}
