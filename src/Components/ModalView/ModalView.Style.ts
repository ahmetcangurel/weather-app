import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: Dimensions.get("window").width / 7,
    height: Dimensions.get("window").width / 7,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -12,
  },
  arrowContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  arrow: {
    fontSize: 24,
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20, 
  },
});
