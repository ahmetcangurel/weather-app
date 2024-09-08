import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    padding: 20,
    margin: 12,
    // height: 200,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerText: {
    color: "white",
    fontSize: 13,
    fontFamily: "CircularStd-Bold",
  },
  renderItemContainer: {
    alignItems: "center",
    gap: 2,
    marginVertical: 8,
  },
  icon: {},
  renderItemTitle: {
    color: "white",
    fontSize: 13,
    fontFamily: "CircularStd-Medium",
  },
  renderItemSubtitle: {
    color: "white",
    fontSize: 13,
    fontFamily: "CircularStd-Bold",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
