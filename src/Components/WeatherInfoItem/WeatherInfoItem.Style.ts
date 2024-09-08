import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,.2)",
    gap: 16,
    marginVertical: 4,
  },
  section: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: "CircularStd-Book",
    fontSize: 16,
    color: "white",
  },
  subtitle: {
    fontFamily: "CircularStd-Medium",
    fontSize: 18,
    color: "white",
  },
});
