import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },

  cardSection: {
    borderRadius: 10,
    margin: 3,
    borderColor: "grey",
    borderWidth: 1,
 
    height: 180,
    width: 300,
  },

  cardlist: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  scheduleBtn: {
     
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0CE1B",
    width: 120,
    height:40,
    paddingHorizontal:10
  },
  cancelBtn: {
     
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderColor:'#0000',
    borderWidth: 1,
    width: 120,
    height:40,
    paddingHorizontal:10
  },

  btnText: {
    color:'#000',
    fontSize:15,
 },
});
