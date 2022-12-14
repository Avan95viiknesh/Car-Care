import { StyleSheet } from "react-native";

export default StyleSheet.create({

headerImage :{
    resizeMode:'contain', borderRadius:10 , marginVertical:10
},

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
 
    
  },
  lebelText: {
    paddingBottom: 10,
    color: "#F0CE1B",
  },

  accountHave: {
 //   marginLeft: 40,
    paddingVertical: 30,
    
  },
  loginBtn: {
    width: "40%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F0CE1B",
    marginLeft: "30%",
  },

  btnText: {
     color:'#000',
     fontSize:15,
  },

  horizontalSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  horizontalLine: { height: 1, width: "30%", backgroundColor: "black" },

  imageStyle: {
    width: 30,
    height: 15,
    alignSelf: "center",
    margin: 20,
    padding: 20,
  },

  TextInput: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    borderColor: "#F0CE1B",
    marginBottom: 10,
    padding: 10,
    backgroundColor:'#f0e68c'
    
  },

placeholder :{
  backgroundColor:'red',
    fontSize: 15,
     
  },

  inputFieldBaseText: {
    paddingLeft: "56%",
    color: "#F0CE1B",
    fontSize: 14,
    paddingTop:10
  },

 iconstyle:{ position: "absolute", right: 20, bottom: 20 },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
    
  },

  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F0CE1B",
    textAlign: "center",
  },

  otpText: {
    color: "#F0CE1B",
    fontSize: 14,
  },

  otpBoxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },

  otpTimer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },

  popCard: {
    position: "absolute",
    top: 220,
    left: 80,
    borderRadius: 20,
    width: 250,
    height: 250,
    alignItems: "center",
    backgroundColor: "#F0CE1B",
    justifyContent: "center",
    zIndex: 1000,
    color:'#000'
  },

  verificationText: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    color: "#232323",
  },
});
