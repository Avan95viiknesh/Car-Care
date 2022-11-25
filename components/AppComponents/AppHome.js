import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import InputField from "../../components/login/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyle from "./AppStyle";

const DATA = [
  {
    id: 1,
    name: "Car Service",
    icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 2,
    name: " Tyres & Wheel Care",
    icon: <Icon name="aperture-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 3,
    name: "Denting & Painting",
    icon: <Icon name="color-palette-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 4,
    name: " ACService & Repair",
    icon: <Icon name="snow-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 5,
    name: "Car Spa & Cleaning",
    icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 6,
    name: "Batteries",
    icon: <Icon name="battery-charging-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 7,
    name: "Insurance Claims",
    icon: <Icon name="medkit-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 8,
    name: "Windshield & Lights",
    icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 9,
    name: " Clutch & Brakes  ",
    icon: <Icon name="construct-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 10,
    name: " Dryclean",
    icon: <Icon name="flower-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 11,
    name: "Car Wash",
    icon: <Icon name="car-sport-outline" color="#F0CE1B" size={24} />,
  },
  {
    id: 12,
    name: "Oiling",
    icon: <Icon name="build-outline" color="#F0CE1B" size={24} />,
  },
];

const AppHome = ({ navigation }) => {
  return (
 
      <View>
        <View style={{ margin: 20 }}>
          <InputField placeholder="Search" />
          <Icon
            name="search-outline"
            size={24}
            style={{ position: "absolute", right: 20, bottom: 20 }}
          />
        </View>
        <View>
          <Image
            source={require("../.././assets/images/App/Home/home-banner.png")}
            style={AppStyle.homeImage}
          />
        </View>
        <View>
          <Text style={AppStyle.selectText}>Select Service</Text>
        </View>

        <View>
          <FlatList
            data={DATA}
            numColumns={4}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            renderItem={({ item }) => (
           
                <TouchableOpacity style={AppStyle.cardSection}>
                  <View style={AppStyle.cardDetails}>
                    <Text>{item.icon} </Text>
                    <Text style={AppStyle.cardTextstyle}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              
            )}
          />
        </View>
      </View>
 
  );
};

export default AppHome;
