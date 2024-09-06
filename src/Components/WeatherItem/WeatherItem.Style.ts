import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 100,
    gap: 8,
  },
  text: {
    fontFamily: "CircularStd-Book",
    fontSize: 16,
    color: "white",
  },
  activeIndicatorContainer: {
    width: 12,
    height: 12,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 8,
  }
});
