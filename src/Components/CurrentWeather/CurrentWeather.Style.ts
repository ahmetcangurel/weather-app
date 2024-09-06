import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    fontSize: 122,
    fontFamily: "CircularStd-Light",
    color: "white",
  },
  degree: {
    fontSize: 72,
    fontFamily: "CircularStd-Light",
    color: "white",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  footerText: {
    fontFamily: "CircularStd-Book",
    fontSize: 18,
    color: "white",
  },
});
