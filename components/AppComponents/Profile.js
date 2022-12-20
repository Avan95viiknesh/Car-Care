import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React,{useState,useEffect} from "react";
import LoginStyle from "../login/LoginStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation, settings }) {
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = () => {
    try {
      AsyncStorage.getItem("userName").then((value) => {
        if (value != null) {
          setUserName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("mobile").then((value) => {
        if (value != null) {
          setUserNum(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };


  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  const NavigateService = () => {
    navigation.navigate("MyService");
  };
  const NavigateContact = () => {
    navigation.navigate("ContactUs");
  };
  const NavigateSettings = () => {
    navigation.navigate("Settings");
  };
  const ProfileList = [
    {
      id: 1,

      name: {
        profileName: (
          <Text
            onPress={NavigateService}
            style={{ color: theme == "light" ? "black" : "white" }}
          
          >
            My Service
          </Text>
        ),
        settingsName: (
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
            Account{" "}
          </Text>
        ),
      },
      icon: {
        profileIcon: (
          <Ionicons
            name="construct"
            color="#F0CE1B"
            size={24}
            onPress={NavigateService}
          />
        ),

        settingsIcon: (
          <Ionicons name="person-outline" color="#F0CE1B" size={24} />
        ),
      },
      Arrow: (
        <Ionicons
          name="chevron-forward-outline"
          color="#F0CE1B"
          size={24}
          onPress={NavigateService}
        />
      ),
    },
    {
      id: 2,
      name: {
        profileName: (
          <Text
            onPress={NavigateSettings}
            style={{ color: theme == "light" ? "black" : "white" }}
          >Settings{" "}    </Text>
        ),
        settingsName: (
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
            Notifications
          </Text>
        ),
      },
      icon: {
        profileIcon: (
          <Ionicons
            name="settings"
            color="#F0CE1B"
            size={24}
            onPress={NavigateSettings}
          />
        ),
        settingsIcon: (
          <Ionicons name="notifications-outline" color="#F0CE1B" size={24} />
        ),
      },
      Arrow: (
        <Ionicons
          name="chevron-forward-outline"
          color="#F0CE1B"
          size={24}
          onPress={NavigateSettings}
        />
      ),
    },
    {
      id: 3,
      name: {
        profileName: (
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
            Help center
          </Text>
        ),
        settingsName: (
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
            Appearance
          </Text>
        ),
      },
      icon: {
        profileIcon: <Ionicons name="help-circle" color="#F0CE1B" size={24} />,
        settingsIcon: <Ionicons name="eye-outline" color="#F0CE1B" size={24} />,
      },
      Arrow: (
        <Ionicons name="chevron-forward-outline" color="#F0CE1B" size={24} />
      ),
    },
    {
      id: 4,
      name: {
        profileName: (
          <Text
            onPress={NavigateContact}
            style={{ color: theme == "light" ? "black" : "white" }}
          >
            Contact Us
          </Text>
        ),
        settingsName: (
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
            Privacy & Security
          </Text>
        ),
      },
      icon: {
        profileIcon: (
          <Ionicons
            name="mail"
            color="#F0CE1B"
            size={24}
            onPress={NavigateContact}
          />
        ),
        settingsIcon: <Ionicons name="key-outline" color="#F0CE1B" size={24} />,
      },
      Arrow: (
        <Ionicons
          name="chevron-forward-outline"
          color="#F0CE1B"
          size={24}
          onPress={NavigateContact}
        />
      ),
    },
    {
      id: 5,
      name: {
        profileName: (
          <Text
            style={{ color: theme == "light" ? "black" : "white" }}
            onPress={() => changeTheme()}>Dark Mode{" "}     </Text>
        ),
      },
      icon: {
        profileIcon: (
          <Ionicons
            name="eye-outline"
            color="#F0CE1B"
            size={24}
            onPress={() => changeTheme()}
          />
        ),
      },
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: theme == "light" ? "white" : "black",
      }}
    >
      {settings ? (
        ""
      ) : (
        <View>
          <Text
            style={{
              color: "#F0CE1B",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
        { `Hi ${userName}`}
          </Text>
          <Text style={{ color: theme == "light" ? "black" : "white" }}>
          { ` ${userNum}`}
          </Text>
        </View>
      )}

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
              <Text>
                {settings ? item.icon.settingsIcon : item.icon.profileIcon}{" "}
              </Text>
              <Text style={{ marginHorizontal: 10 }}>
                {settings ? item.name.settingsName : item.name.profileName}
              </Text>
              <Text>{item.Arrow} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
{
  settings ? '' : (
    
    <TouchableOpacity
    style={[
      LoginStyle.loginBtn,
      {
        marginLeft: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width:100,
        height:40
      },
    ]}
    onPress={() => navigation.navigate("Login")}
  >
    <Text style={[LoginStyle.btnText, { fontSize: 14 }]}>Log out</Text>
    <Ionicons name="power-outline" color="black" size={20} />
  </TouchableOpacity>
  )
}
    </View>
  );
}
