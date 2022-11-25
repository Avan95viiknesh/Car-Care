import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#FFFFFF",
    padding: 20,
    height: "100%",
    
  },


  selectText: { padding: 20, fontSize: 20, fontWeight: "bold" },

  homeImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
 

  cardContainer: {
     
     justifyContent:'space-between',
      alignItems: "center",
  },

  cardSection: {
     borderRadius:10, margin:3, borderColor: '#F0CE1B', borderWidth: 1, height: 80, width: 76,
  },

cardDetails : {
   
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
  
},
cardTextstyle:{
  fontSize: 10,
  textAlign: "center",
  color: "#000",
  fontWeight: 'bold',
  lineHeight:10,
  color:'#474747',
  marginTop:1
}


});
