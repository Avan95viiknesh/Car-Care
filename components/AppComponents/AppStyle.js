import { StyleSheet } from "react-native";
import { horizontalScale,
  verticalScale,
  moderateScale, } from "../../Dimensions/Metrics";

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#FFFFFF",
    padding: moderateScale(20),
    height: "100%",
    
  },


  selectText: { padding: moderateScale(0), fontSize: moderateScale(12), fontWeight: "bold", },

  homeImage: {
    marginVertical: verticalScale(10),
    width: "100%",
    resizeMode: "stretch",
    height : verticalScale(150)
  },
 

  cardContainer: {
      
     justifyContent:'space-between',
      alignItems: "center",
  },

  cardSection: {
     borderRadius:moderateScale(10), margin:moderateScale(5), borderColor: '#F0CE1B', borderWidth: 1, height: verticalScale(90), width: horizontalScale(75),   cursor:'pointer',
  },
 
cardDetails : {
   
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center',
  padding:moderateScale(5),
  
},
cardTextstyle:{
  fontSize: moderateScale(10),
  textAlign: "center",
  color: "#000",
  fontWeight: 'bold',
  color:'#474747',
 
}


});
