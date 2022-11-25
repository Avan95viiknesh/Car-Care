import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,Image} from "react-native";
import Home from "./AppHome";
import About from "./About";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import Offer from "./Offer";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <>
      <Tab.Navigator  >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            
            headerTitle:  ()=> <Image  source={require('../../assets/images/App/Home/tab-icon.png')} />,
            tabBarIcon: () => <Ionicons name="home" size={30} color="#F0CE1B" />,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offer}
          options={{
            tabBarIcon: () => <Ionicons name="cart" size={30} color="#F0CE1B" />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <Ionicons name="heart" size={30} color="#F0CE1B" />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={30} color="#F0CE1B" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Main;
