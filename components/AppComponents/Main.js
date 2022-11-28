import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,Image} from "react-native";
import About from "./About";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";
import ScheduleApp from "./Sidebar/components/ScheduleApp";
import AppHome from "./AppHome";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <>
      <Tab.Navigator  >
        <Tab.Screen
          name='Home'
          component={AppHome}
          options={{
             
            headerTitle:  ()=> <Image  source={require('../../assets/images/App/Home/tab-icon.png')}  /> ,
            tabBarIcon: () => <Ionicons name="home-outline" size={30} color="#F0CE1B" />,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offer}
          options={{
            tabBarIcon: () => <Ionicons name="cart-outline" size={30} color="#F0CE1B" />,
          }}
        />
        <Tab.Screen
          name="Schedule appoinment"
          component={ScheduleApp}
          options={{
            tabBarIcon: () => <Ionicons name="heart-outline" size={30} color="#F0CE1B" />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Ionicons name="person-outline" size={30} color="#F0CE1B" />,
          }}
        />
        
      </Tab.Navigator>
    </>
  );
};

export default Main;
