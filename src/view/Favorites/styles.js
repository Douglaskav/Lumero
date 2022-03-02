import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    margin: 30,
  },

  topicTitle: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 18,
    color: "#333",
    marginBottom: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pageHeaderTitle: {
    fontSize: 25,
    color: "#333",
    fontFamily: "NunitoSans_700Bold",
  },

  headerIcons: {
    flexDirection: "row",
  },
});

export default styles;
