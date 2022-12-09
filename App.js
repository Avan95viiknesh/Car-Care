import { SafeAreaView, ScrollView, View } from "react-native";
import ContactUs from "./components/AppComponents/profileComponents/ContactUs";
import Upcoming from "./components/AppComponents/Sidebar/components/Upcoming";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ScheduleApp from "./components/AppComponents/Sidebar/components/ScheduleApp";
import CarService from "./components/AppComponents/HomepageComponents/CarService";
import SignUp from "./components/login/SignUp";
import MyService from "./components/AppComponents/profileComponents/MyService";
import Main from "./components/AppComponents/Main";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <CarService />
      </Provider>
    </>
  );
}
