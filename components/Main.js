import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import About from "./About";

const Tab = createBottomTabNavigator();

// create a component
const Main = () => {
  return (
<>
<NavigationContainer style={styles.container} >
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="about" component={About} />
      </Tab.Navigator>
    </NavigationContainer></>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Main;
