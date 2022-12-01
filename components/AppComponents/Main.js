import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";
import ScheduleApp from "./Sidebar/components/ScheduleApp";
import AppHome from "./AppHome";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/action";
import {  View } from "react-native";


const Tab = createBottomTabNavigator();

const Main = () => {
  const {theme} = useSelector((state) => state.themeReducer)

  return (
    <>
     
     <Tab.Navigator
     style={{backgroundColor: theme == 'light' ? 'white' : 'black'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Offers") {
              iconName = focused ? "ribbon" : "ribbon-outline";
            } else if (route.name === "Schedule appoinment") {
              iconName = focused ? "today" : "today-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={"#F0CE1B"} />;
          },

          tabBarActiveTintColor: "#F0CE1B",
        })}
      >
        <Tab.Screen
          style={{color: theme == 'light' ? 'black' : 'white'}}
          name="Home"
          component={AppHome}
          options={{
            title: "Hello User",
            //headerTitle:  ()=> <Image  source={require('../../assets/images/App/Home/tab-icon.png')}  /> ,
          }}
        />
        <Tab.Screen name="Offers" component={Offer} />
        <Tab.Screen name="Schedule appoinment" component={ScheduleApp} />

        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
   
    </>
  );
};

export default Main;
