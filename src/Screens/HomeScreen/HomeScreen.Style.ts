import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    marginVertical: 20,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleContainer: {
    alignItems: "center",
  },
  cityText: {
    fontFamily: "CircularStd-Book",
    fontSize: 32,
    color: "white",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  currentLocationText: {
    fontFamily: "CircularStd-Book",
    fontSize: 12,
    color: "white",
  },
});
