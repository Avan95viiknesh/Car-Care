import { StyleSheet } from "react-native";

export default StyleSheet.create({


  container: {
    flex: 1,  
    padding: 20,
    height: "100%",
    width: "100%",
  },

  cardSection: {
    borderRadius: 10,
    margin: 3,
    borderColor: "grey",
    borderWidth: 2,
    height: 200,
     
     
  },

  cardlist: {
    flexDirection: "column",
    justifyContent:'space-between',
    padding: 10, 
    width: '100%', 
  },

  cardSectionDelivery: {
    borderRadius: 10,
    margin: 3,
    borderColor: "grey",
    borderWidth: 2,
    height: 150,
    
     
  },

 

  scheduleBtn: {
     
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0CE1B",
    width: '40%',
    height:40,
     
  },
  cancelBtn: {
     
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderColor:'#000',
    borderWidth: 1,
    width: '40%',
    height:40,
    
  },

  btnText: {
    color:'#000',
    fontSize:15,
 },

 horizontalLinePayment:{
  
 }
});
