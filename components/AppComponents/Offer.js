import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import AppStyle from "./AppStyle";
import LoginStyle from "../login/LoginStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Dimensions/Metrics";
//import counterAction from "../../redux/action/counterAction"; 

export default function Offer() {
  const { theme } = useSelector((state) => state.themeReducer);

  // const  counter  = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <>
   
      <View
        style={[
          LoginStyle.container,
          {
            backgroundColor: theme == "light" ? "#c4c070" : "black",
          },
        ]}
      >
        
        
        <View style={{ alignItems: "center", justifyContent: "space-around" }}>
          <View>
            <Text
              style={{
                fontSize: moderateScale(20),
                color: theme == "light" ? "black" : "white",
              }}
            >
              {" "}
              Special Offers Coming Soon !!!{" "}
            </Text>
          </View>
          <View style={{ marginTop:verticalScale(40)  }}>
           <TouchableOpacity >
           <Image
              source={require("../.././assets/images/App/Home/festive-main.png")}
              style={{
                height:verticalScale(300),
                width: horizontalScale(300),
                resizeMode: "stretch",
                borderRadius: moderateScale(20),
              }}
            />
           </TouchableOpacity>
          </View>
        </View>

      {/* <View>

        <Text> count : {counter}  </Text>

      <Button title="increment" onPress={() => dispatch(counterAction.increment())} />  
      <Button title="decrement" onPress={() => dispatch(counterAction.decrement())} />  
      </View>
  */}
      </View>
    
    </>
  );
}




 