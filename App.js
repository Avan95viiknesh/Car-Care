import { SafeAreaView, ScrollView, View } from "react-native";
import ContactUs from "./components/AppComponents/profileComponents/ContactUs";
import Upcoming from "./components/AppComponents/Sidebar/components/Upcoming";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}
