import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent:'space-between',
    paddingTop: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  input: {
 
    color: "#000500",
    borderBottomWidth: 1,
    borderColor: "#545454",
    width: '70%',
  },
  button: {
    backgroundColor: "#2a2a72",
    height: 30,
    width: 65,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    lineHeight:30,
  },
});

export default styles;
